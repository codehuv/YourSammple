const cron = require('node-cron');

const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

const ax = async (url) => {
  try{
      return await axios.get(url, {responseEncoding : 'binary', responseType : 'arraybuffer'});
  } catch (error) {
      console.log(error);
  }
}

cron.schedule('*/10 * * * * *', () => {
  const url = `https://news.naver.com/main/list.nhn?mode=LS2D&mid=shm&sid1=105&sid2=731`;

    ax(url)
        .then(htmlDoc => {
           let html = iconv.decode(htmlDoc.data, 'EUC-KR');
            let result = [];
            const $ = cheerio.load(html);
            let col = $("ul.type06_headline").children("li");
            col.each(function(i, element) {
                result[i] = $(this).find('dl dt:nth-child(2)').text().trim();
                if(result[i] === '') {
                    result[i] = $(this).find('dl dt:nth-child(1)').text().trim();
                }
            });
            console.log(result);
            exports.result = result;
        })
});