function calculatebill() {
    var device = document.getElementById("device");
    var deviceid = device.options[device.selectedIndex].id;
    var devicename = device.options[device.selectedIndex].text;
    var devicevalue = device.options[device.selectedIndex].value;
    var billamount = document.getElementById("billamount");
    var billamountid = billamount.options[billamount.selectedIndex].id;
    var billamountname = billamount.options[billamount.selectedIndex].text;
    var billamountvalue = billamount.options[billamount.selectedIndex].value;
    var dividemonth = document.getElementById("dividemonth").value;
    var gongsi;

    if(deviceid==="sam501"){
      if(billamountid==="skt501"){
        gongsi=100000;
      }
      else if(billamountid==="skt502"){
        gongsi=123000;
      }
      else if(billamountid==="skt503"){
        gongsi=150000;
      }
      else if(billamountid==="skt504"){
        gongsi=170000;
      }
      else if(billamountid==="kt501"){
        gongsi=227000;
      }
      else if(billamountid==="kt502"){
        gongsi=340000;
      }
      else if(billamountid==="kt503"){
        gongsi=400000;
      }
      else if(billamountid==="kt504"){
        gongsi=450000;
      }
      else if(billamountid==="lgt501"){
        gongsi=300000;
      }
      else if(billamountid==="lgt502"){
        gongsi=400000;
      }
      else if(billamountid==="lgt503"){
        gongsi=450000;
      }
      else if(billamountid==="lgt504"){
        gongsi=450000;
      }
      else if(billamountid==="lgt505"){
        gongsi=450000;
      }
    }
    else if(deviceid==="sam502"){
      if(billamountid==="skt501"){
        gongsi=345000;
      }
      else if(billamountid==="skt502"){
        gongsi=440000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=250000;
      }
      else if(billamountid==="kt502"){
        gongsi=420000;
      }
      else if(billamountid==="kt503"){
        gongsi=480000;
      }
      else if(billamountid==="kt504"){
        gongsi=480000;
      }
      else if(billamountid==="lgt501"){
        gongsi=421000;
      }
      else if(billamountid==="lgt502"){
        gongsi=574000;
      }
      else if(billamountid==="lgt503"){
        gongsi=650000;
      }
      else if(billamountid==="lgt504"){
        gongsi=650000;
      }
      else if(billamountid==="lgt505"){
        gongsi=650000;
      }
    }
    else if(deviceid==="sam503"){
      if(billamountid==="skt501"){
        gongsi=369000;
      }
      else if(billamountid==="skt502"){
        gongsi=422000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=400000;
      }
      else if(billamountid==="kt502"){
        gongsi=550000;
      }
      else if(billamountid==="kt503"){
        gongsi=600000;
      }
      else if(billamountid==="kt504"){
        gongsi=600000;
      }
      else if(billamountid==="lgt501"){
        gongsi=421000;
      }
      else if(billamountid==="lgt502"){
        gongsi=574000;
      }
      else if(billamountid==="lgt503"){
        gongsi=650000;
      }
      else if(billamountid==="lgt504"){
        gongsi=700000;
      }
      else if(billamountid==="lgt505"){
        gongsi=700000;
      }
    }
    else if(deviceid==="sam504"){
      if(billamountid==="skt501"){
        gongsi=345000;
      }
      else if(billamountid==="skt502"){
        gongsi=440000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=400000;
      }
      else if(billamountid==="kt502"){
        gongsi=600000;
      }
      else if(billamountid==="kt503"){
        gongsi=700000;
      }
      else if(billamountid==="kt504"){
        gongsi=700000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam505"){
      if(billamountid==="skt501"){
        gongsi=345000;
      }
      else if(billamountid==="skt502"){
        gongsi=440000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=250000;
      }
      else if(billamountid==="kt502"){
        gongsi=420000;
      }
      else if(billamountid==="kt503"){
        gongsi=480000;
      }
      else if(billamountid==="kt504"){
        gongsi=480000;
      }
      else if(billamountid==="lgt501"){
        gongsi=313000;
      }
      else if(billamountid==="lgt502"){
        gongsi=424000;
      }
      else if(billamountid==="lgt503"){
        gongsi=480000;
      }
      else if(billamountid==="lgt504"){
        gongsi=480000;
      }
      else if(billamountid==="lgt505"){
        gongsi=480000;
      }
    }
    else if(deviceid==="sam506"){
      if(billamountid==="skt501"){
        gongsi=270000;
      }
      else if(billamountid==="skt502"){
        gongsi=356000;
      }
      else if(billamountid==="skt503"){
        gongsi=450000;
      }
      else if(billamountid==="skt504"){
        gongsi=500000;
      }
      else if(billamountid==="kt501"){
        gongsi=262000;
      }
      else if(billamountid==="kt502"){
        gongsi=400000;
      }
      else if(billamountid==="kt503"){
        gongsi=450000;
      }
      else if(billamountid==="kt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam507"){
      if(billamountid==="skt501"){
        gongsi=270000;
      }
      else if(billamountid==="skt502"){
        gongsi=356000;
      }
      else if(billamountid==="skt503"){
        gongsi=450000;
      }
      else if(billamountid==="skt504"){
        gongsi=500000;
      }
      else if(billamountid==="kt501"){
        gongsi=304000;
      }
      else if(billamountid==="kt502"){
        gongsi=480000;
      }
      else if(billamountid==="kt503"){
        gongsi=540000;
      }
      else if(billamountid==="kt504"){
        gongsi=600000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam508"){
      if(billamountid==="skt501"){
        gongsi=270000;
      }
      else if(billamountid==="skt502"){
        gongsi=356000;
      }
      else if(billamountid==="skt503"){
        gongsi=450000;
      }
      else if(billamountid==="skt504"){
        gongsi=500000;
      }
      else if(billamountid==="kt501"){
        gongsi=262000;
      }
      else if(billamountid==="kt502"){
        gongsi=400000;
      }
      else if(billamountid==="kt503"){
        gongsi=450000;
      }
      else if(billamountid==="kt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam509"){
      if(billamountid==="skt501"){
        gongsi=369000;
      }
      else if(billamountid==="skt502"){
        gongsi=422000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=250000;
      }
      else if(billamountid==="kt502"){
        gongsi=420000;
      }
      else if(billamountid==="kt503"){
        gongsi=480000;
      }
      else if(billamountid==="kt504"){
        gongsi=480000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam510"){
      if(billamountid==="skt501"){
        gongsi=345000;
      }
      else if(billamountid==="skt502"){
        gongsi=440000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=300000;
      }
      else if(billamountid==="kt502"){
        gongsi=450000;
      }
      else if(billamountid==="kt503"){
        gongsi=500000;
      }
      else if(billamountid==="kt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam511"){
      if(billamountid==="skt501"){
        gongsi=345000;
      }
      else if(billamountid==="skt502"){
        gongsi=440000;
      }
      else if(billamountid==="skt503"){
        gongsi=480000;
      }
      else if(billamountid==="skt504"){
        gongsi=480000;
      }
      else if(billamountid==="kt501"){
        gongsi=300000;
      }
      else if(billamountid==="kt502"){
        gongsi=450000;
      }
      else if(billamountid==="kt503"){
        gongsi=500000;
      }
      else if(billamountid==="kt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt501"){
        gongsi=421000;
      }
      else if(billamountid==="lgt502"){
        gongsi=574000;
      }
      else if(billamountid==="lgt503"){
        gongsi=650000;
      }
      else if(billamountid==="lgt504"){
        gongsi=650000;
      }
      else if(billamountid==="lgt505"){
        gongsi=650000;
      }
    }
    else if(deviceid==="sam512"){
      if(billamountid==="skt501"){
        gongsi=300000;
      }
      else if(billamountid==="skt502"){
        gongsi=395000;
      }
      else if(billamountid==="skt503"){
        gongsi=500000;
      }
      else if(billamountid==="skt504"){
        gongsi=550000;
      }
      else if(billamountid==="kt501"){
        gongsi=400000;
      }
      else if(billamountid==="kt502"){
        gongsi=600000;
      }
      else if(billamountid==="kt503"){
        gongsi=700000;
      }
      else if(billamountid==="kt504"){
        gongsi=700000;
      }
      else if(billamountid==="lgt501"){
        gongsi=518000;
      }
      else if(billamountid==="lgt502"){
        gongsi=706000;
      }
      else if(billamountid==="lgt503"){
        gongsi=800000;
      }
      else if(billamountid==="lgt504"){
        gongsi=800000;
      }
      else if(billamountid==="lgt505"){
        gongsi=800000;
      }
    }
    else if(deviceid==="app501"){
      if(billamountid==="skt501"){
        gongsi=65000;
      }
      else if(billamountid==="skt502"){
        gongsi=86000;
      }
      else if(billamountid==="skt503"){
        gongsi=110000;
      }
      else if(billamountid==="skt504"){
        gongsi=138000;
      }
      else if(billamountid==="kt501"){
        gongsi=100000;
      }
      else if(billamountid==="kt502"){
        gongsi=147000;
      }
      else if(billamountid==="kt503"){
        gongsi=183000;
      }
      else if(billamountid==="kt504"){
        gongsi=240000;
      }
      else if(billamountid==="lgt501"){
        gongsi=259000;
      }
      else if(billamountid==="lgt502"){
        gongsi=353000;
      }
      else if(billamountid==="lgt503"){
        gongsi=400000;
      }
      else if(billamountid==="lgt504"){
        gongsi=430000;
      }
      else if(billamountid==="lgt505"){
        gongsi=430000;
      }
    }
    else if(deviceid==="app502"){
      if(billamountid==="skt501"){
        gongsi=65000;
      }
      else if(billamountid==="skt502"){
        gongsi=86000;
      }
      else if(billamountid==="skt503"){
        gongsi=110000;
      }
      else if(billamountid==="skt504"){
        gongsi=138000;
      }
      else if(billamountid==="kt501"){
        gongsi=100000;
      }
      else if(billamountid==="kt502"){
        gongsi=147000;
      }
      else if(billamountid==="kt503"){
        gongsi=183000;
      }
      else if(billamountid==="kt504"){
        gongsi=240000;
      }
      else if(billamountid==="lgt501"){
        gongsi=259000;
      }
      else if(billamountid==="lgt502"){
        gongsi=353000;
      }
      else if(billamountid==="lgt503"){
        gongsi=400000;
      }
      else if(billamountid==="lgt504"){
        gongsi=430000;
      }
      else if(billamountid==="lgt505"){
        gongsi=430000;
      }
    }
    else if(deviceid==="app503"){
      if(billamountid==="skt501"){
        gongsi=65000;
      }
      else if(billamountid==="skt502"){
        gongsi=86000;
      }
      else if(billamountid==="skt503"){
        gongsi=110000;
      }
      else if(billamountid==="skt504"){
        gongsi=138000;
      }
      else if(billamountid==="kt501"){
        gongsi=100000;
      }
      else if(billamountid==="kt502"){
        gongsi=147000;
      }
      else if(billamountid==="kt503"){
        gongsi=183000;
      }
      else if(billamountid==="kt504"){
        gongsi=240000;
      }
      else if(billamountid==="lgt501"){
        gongsi=259000;
      }
      else if(billamountid==="lgt502"){
        gongsi=353000;
      }
      else if(billamountid==="lgt503"){
        gongsi=400000;
      }
      else if(billamountid==="lgt504"){
        gongsi=430000;
      }
      else if(billamountid==="lgt505"){
        gongsi=430000;
      }
    }
    else if(deviceid==="app504"){
      if(billamountid==="skt501"){
        gongsi=244000;
      }
      else if(billamountid==="skt502"){
        gongsi=290000;
      }
      else if(billamountid==="skt503"){
        gongsi=340000;
      }
      else if(billamountid==="skt504"){
        gongsi=370000;
      }
      else if(billamountid==="kt501"){
        gongsi=250000;
      }
      else if(billamountid==="kt502"){
        gongsi=370000;
      }
      else if(billamountid==="kt503"){
        gongsi=390000;
      }
      else if(billamountid==="kt504"){
        gongsi=420000;
      }
      else if(billamountid==="lgt501"){
        gongsi=259000;
      }
      else if(billamountid==="lgt502"){
        gongsi=353000;
      }
      else if(billamountid==="lgt503"){
        gongsi=400000;
      }
      else if(billamountid==="lgt504"){
        gongsi=430000;
      }
      else if(billamountid==="lgt505"){
        gongsi=430000;
      }
    }
    else if(deviceid==="lge501"){
      if(billamountid==="skt501"){
        gongsi=100000;
      }
      else if(billamountid==="skt502"){
        gongsi=123000;
      }
      else if(billamountid==="skt503"){
        gongsi=150000;
      }
      else if(billamountid==="skt504"){
        gongsi=170000;
      }
      else if(billamountid==="kt501"){
        gongsi=330000;
      }
      else if(billamountid==="kt502"){
        gongsi=450000;
      }
      else if(billamountid==="kt503"){
        gongsi=450000;
      }
      else if(billamountid==="kt504"){
        gongsi=450000;
      }
      else if(billamountid==="lgt501"){
        gongsi=276000;
      }
      else if(billamountid==="lgt502"){
        gongsi=372000;
      }
      else if(billamountid==="lgt503"){
        gongsi=420000;
      }
      else if(billamountid==="lgt504"){
        gongsi=420000;
      }
      else if(billamountid==="lgt505"){
        gongsi=420000;
      }
    }
    else if(deviceid==="lge502"){
      if(billamountid==="skt501"){
        gongsi=580000;
      }
      else if(billamountid==="skt502"){
        gongsi=678000;
      }
      else if(billamountid==="skt503"){
        gongsi=700000;
      }
      else if(billamountid==="skt504"){
        gongsi=700000;
      }
      else if(billamountid==="kt501"){
        gongsi=100000;
      }
      else if(billamountid==="kt502"){
        gongsi=147000;
      }
      else if(billamountid==="kt503"){
        gongsi=183000;
      }
      else if(billamountid==="kt504"){
        gongsi=240000;
      }
      else if(billamountid==="lgt501"){
        gongsi=390000;
      }
      else if(billamountid==="lgt502"){
        gongsi=530000;
      }
      else if(billamountid==="lgt503"){
        gongsi=600000;
      }
      else if(billamountid==="lgt504"){
        gongsi=600000;
      }
      else if(billamountid==="lgt505"){
        gongsi=600000;
      }
    }
    else if(deviceid==="lge503"){
      if(billamountid==="skt501"){
        gongsi=423000;
      }
      else if(billamountid==="skt502"){
        gongsi=460000;
      }
      else if(billamountid==="skt503"){
        gongsi=500000;
      }
      else if(billamountid==="skt504"){
        gongsi=500000;
      }
      else if(billamountid==="kt501"){
        gongsi=400000;
      }
      else if(billamountid==="kt502"){
        gongsi=600000;
      }
      else if(billamountid==="kt503"){
        gongsi=700000;
      }
      else if(billamountid==="kt504"){
        gongsi=700000;
      }
      else if(billamountid==="lgt501"){
        gongsi=326000;
      }
      else if(billamountid==="lgt502"){
        gongsi=442000;
      }
      else if(billamountid==="lgt503"){
        gongsi=500000;
      }
      else if(billamountid==="lgt504"){
        gongsi=500000;
      }
      else if(billamountid==="lgt505"){
        gongsi=500000;
      }
    }
    else if(deviceid==="sam401"){
      if(billamountid==="skt401"){
        gongsi=170000;
      }
      else if(billamountid==="skt402"){
        gongsi=186000;
      }
      else if(billamountid==="skt403"){
        gongsi=201000;
      }
      else if(billamountid==="skt404"){
        gongsi=220000;
      }
      else if(billamountid==="skt405"){
        gongsi=220000;
      }
      else if(billamountid==="skt406"){
        gongsi=220000;
      }
      else if(billamountid==="kt401"){
        gongsi=198000;
      }
      else if(billamountid==="kt402"){
        gongsi=198000;
      }
      else if(billamountid==="kt403"){
        gongsi=198000;
      }
      else if(billamountid==="kt404"){
        gongsi=198000;
      }
      else if(billamountid==="lgt401"){
        gongsi=197000;
      }
      else if(billamountid==="lgt402"){
        gongsi=210000;
      }
      else if(billamountid==="lgt403"){
        gongsi=228000;
      }
      else if(billamountid==="lgt404"){
        gongsi=239000;
      }
      else if(billamountid==="lgt405"){
        gongsi=239000;
      }
      else if(billamountid==="lgt406"){
        gongsi=239000;
      }
      else if(billamountid==="lgt407"){
        gongsi=239000;
      }
    }
    else if(deviceid==="sam402"){
      if(billamountid==="skt401"){
        gongsi=190000;
      }
      else if(billamountid==="skt402"){
        gongsi=206000;
      }
      else if(billamountid==="skt403"){
        gongsi=221000;
      }
      else if(billamountid==="skt404"){
        gongsi=240000;
      }
      else if(billamountid==="skt405"){
        gongsi=240000;
      }
      else if(billamountid==="skt406"){
        gongsi=240000;
      }
      else if(billamountid==="kt401"){
        gongsi=198000;
      }
      else if(billamountid==="kt402"){
        gongsi=221000;
      }
      else if(billamountid==="kt403"){
        gongsi=250000;
      }
      else if(billamountid==="kt404"){
        gongsi=259000;
      }
      else if(billamountid==="lgt401"){
        gongsi=208000;
      }
      else if(billamountid==="lgt402"){
        gongsi=235000;
      }
      else if(billamountid==="lgt403"){
        gongsi=273000;
      }
      else if(billamountid==="lgt404"){
        gongsi=297000;
      }
      else if(billamountid==="lgt405"){
        gongsi=297000;
      }
      else if(billamountid==="lgt406"){
        gongsi=297000;
      }
      else if(billamountid==="lgt407"){
        gongsi=297000;
      }
    }
    else if(deviceid==="sam403"){
      if(billamountid==="skt401"){
        gongsi=90000;
      }
      else if(billamountid==="skt402"){
        gongsi=106000;
      }
      else if(billamountid==="skt403"){
        gongsi=121000;
      }
      else if(billamountid==="skt404"){
        gongsi=140000;
      }
      else if(billamountid==="skt405"){
        gongsi=140000;
      }
      else if(billamountid==="skt406"){
        gongsi=140000;
      }
      else if(billamountid==="kt401"){
        gongsi=185000;
      }
      else if(billamountid==="kt402"){
        gongsi=256000;
      }
      else if(billamountid==="kt403"){
        gongsi=345000;
      }
      else if(billamountid==="kt404"){
        gongsi=374000;
      }
      else if(billamountid==="lgt401"){
        gongsi=254000;
      }
      else if(billamountid==="lgt402"){
        gongsi=291000;
      }
      else if(billamountid==="lgt403"){
        gongsi=341000;
      }
      else if(billamountid==="lgt404"){
        gongsi=374000;
      }
      else if(billamountid==="lgt405"){
        gongsi=374000;
      }
      else if(billamountid==="lgt406"){
        gongsi=374000;
      }
      else if(billamountid==="lgt407"){
        gongsi=374000;
      }
    }
    else if(deviceid==="sam404"){
      if(billamountid==="skt401"){
        gongsi=90000;
      }
      else if(billamountid==="skt402"){
        gongsi=106000;
      }
      else if(billamountid==="skt403"){
        gongsi=121000;
      }
      else if(billamountid==="skt404"){
        gongsi=140000;
      }
      else if(billamountid==="skt405"){
        gongsi=140000;
      }
      else if(billamountid==="skt406"){
        gongsi=140000;
      }
      else if(billamountid==="kt401"){
        gongsi=70000;
      }
      else if(billamountid==="kt402"){
        gongsi=101000;
      }
      else if(billamountid==="kt403"){
        gongsi=140000;
      }
      else if(billamountid==="kt404"){
        gongsi=153000;
      }
      else if(billamountid==="lgt401"){
        gongsi=197000;
      }
      else if(billamountid==="lgt402"){
        gongsi=236000;
      }
      else if(billamountid==="lgt403"){
        gongsi=290000;
      }
      else if(billamountid==="lgt404"){
        gongsi=325000;
      }
      else if(billamountid==="lgt405"){
        gongsi=325000;
      }
      else if(billamountid==="lgt406"){
        gongsi=325000;
      }
      else if(billamountid==="lgt407"){
        gongsi=325000;
      }
    }
    else if(deviceid==="app401"){
      if(billamountid==="skt401"){
        gongsi=300000;
      }
      else if(billamountid==="skt402"){
        gongsi=350000;
      }
      else if(billamountid==="skt403"){
        gongsi=393000;
      }
      else if(billamountid==="skt404"){
        gongsi=450000;
      }
      else if(billamountid==="skt405"){
        gongsi=450000;
      }
      else if(billamountid==="skt406"){
        gongsi=450000;
      }
      else if(billamountid==="kt401"){
        gongsi=35000;
      }
      else if(billamountid==="kt402"){
        gongsi=50000;
      }
      else if(billamountid==="kt403"){
        gongsi=70000;
      }
      else if(billamountid==="kt404"){
        gongsi=82000;
      }
      else if(billamountid==="lgt401"){
        gongsi=300000;
      }
      else if(billamountid==="lgt402"){
        gongsi=330000;
      }
      else if(billamountid==="lgt403"){
        gongsi=372000;
      }
      else if(billamountid==="lgt404"){
        gongsi=400000;
      }
      else if(billamountid==="lgt405"){
        gongsi=400000;
      }
      else if(billamountid==="lgt406"){
        gongsi=400000;
      }
      else if(billamountid==="lgt407"){
        gongsi=400000;
      }
    }
    else if(deviceid==="app402"){
      if(billamountid==="skt401"){
        gongsi=250000;
      }
      else if(billamountid==="skt402"){
        gongsi=261000;
      }
      else if(billamountid==="skt403"){
        gongsi=271000;
      }
      else if(billamountid==="skt404"){
        gongsi=285000;
      }
      else if(billamountid==="skt405"){
        gongsi=285000;
      }
      else if(billamountid==="skt406"){
        gongsi=285000;
      }
      else if(billamountid==="kt401"){
        gongsi=198000;
      }
      else if(billamountid==="kt402"){
        gongsi=247000;
      }
      else if(billamountid==="kt403"){
        gongsi=310000;
      }
      else if(billamountid==="kt404"){
        gongsi=330000;
      }
      else if(billamountid==="lgt401"){
        gongsi=196000;
      }
      else if(billamountid==="lgt402"){
        gongsi=231000;
      }
      else if(billamountid==="lgt403"){
        gongsi=278000;
      }
      else if(billamountid==="lgt404"){
        gongsi=300000;
      }
      else if(billamountid==="lgt405"){
        gongsi=300000;
      }
      else if(billamountid==="lgt406"){
        gongsi=300000;
      }
      else if(billamountid==="lgt407"){
        gongsi=300000;
      }
    }

   
    var total_devicediscount = (devicevalue-gongsi)/dividemonth + billamountvalue*1 ;
    
    
    var total_billdiscount = devicevalue/dividemonth + billamountvalue*0.75;
    
    
    total_devicediscount = Math.round(total_devicediscount * 100) / 100;
    total_devicediscount = total_devicediscount.toFixed(0);
    total_billdiscount = Math.round(total_billdiscount * 100) / 100;
    total_billdiscount = total_billdiscount.toFixed(0);
    
    document.write('<table  bgcolor="#666666"  width= "60%" height= "30%" border = "2" align = "center"  cellpadding ="0" style="font-size:16px;color:white;">');
    document.write('<tr align = "center">');
    document.write('<td>');
    document.write("기기 이름")
    document.write('</td>');
    document.write('<td>');
    document.write("기기 출고가")
    document.write('</td>');
    document.write('<td>');
    document.write("통신사");
    document.write('</td>');
    document.write('<td>');
    document.write("통신망");
    document.write('</td>');
    document.write('<td>');
    document.write("요금제 이름");
    document.write('</td>');
    document.write('<td>');
    document.write("요금제 가격");
    document.write('</td>');
    document.write('<td>');
    document.write("공시지원금 / 선택약정");
    document.write('</td>');
    document.write('<td>');
    document.write("약정 개월 수");
    document.write('</td>');
    document.write('<td>');
    document.write("한달 평균 요금");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td>');
    document.write(devicename);
    document.write('</td>');
    document.write('<td>');
    document.write(devicevalue+" 원 ");
    document.write('</td>');
    document.write('<td>');
    if(billamountid.substring(0,3)==="skt"){
      document.write("SKT");
    }
    else if(billamountid.substring(0,2)==="kt"){
      document.write("KT");
    }
    else if(billamountid.substring(0,3)==="lgt"){
      document.write("LG U+");
    }
    document.write('</td>');
    document.write('<td>');
    if(billamountid.substring(billamountid.length-3,billamountid.length-2)==="5"){
      document.write("5G");
    }
    else if(billamountid.substring(billamountid.length-3,billamountid.length-2)==="4"){
      document.write("4G");
    }
    document.write('</td>');
    document.write('<td>');
    document.write(billamountname);
    document.write('</td>');
    document.write('<td>');
    document.write(billamountvalue+" 원 ");
    document.write('</td>');
    document.write('<td>');
    document.write("<b>공시지원금 ( "+gongsi+" 원 )</b>");
    document.write('</td>');
    document.write('<td>');
    document.write(dividemonth+" 개월 ");
    document.write('</td>');
    document.write('<td>');
    document.write("<b>"+total_devicediscount+" 원</b>");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td colspan = "9">');
    document.write(" 한달 평균 요금 = ( ( 기기 출고가 - 공시지원금 ) / 약정 개월 수 )  + 요금제 가격 ");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td colspan = "9">');
    document.write("= ( ( "+devicevalue+" - "+gongsi+" )  / "+dividemonth+" ) + "+billamountvalue+" = "+"<b>"+total_devicediscount+"</b>");
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write('<table bgcolor="#666666" width= "60%" height= "30%" border = "2" align = "center"  cellpadding ="0" style="font-size:16px; color:white;">');
    document.write('<tr align = "center">');
    document.write('<td>');
    document.write("기기 이름")
    document.write('</td>');
    document.write('<td>');
    document.write("기기 출고가")
    document.write('</td>');
    document.write('<td>');
    document.write("통신사");
    document.write('</td>');
    document.write('<td>');
    document.write("통신망");
    document.write('</td>');
    document.write('<td>');
    document.write("요금제 이름");
    document.write('</td>');
    document.write('<td>');
    document.write("요금제 가격");
    document.write('</td>');
    document.write('<td>');
    document.write("공시지원금 / 선택약정");
    document.write('</td>');
    document.write('<td>');
    document.write("약정 개월 수");
    document.write('</td>');
    document.write('<td>');
    document.write("한달 평균 요금");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td>');
    document.write(devicename);
    document.write('</td>');
    document.write('<td>');
    document.write(devicevalue+" 원 ");
    document.write('</td>');
    document.write('<td>');
    if(billamountid.substring(0,3)==="skt"){
      document.write("SKT");
    }
    else if(billamountid.substring(0,2)==="kt"){
      document.write("KT");
    }
    else if(billamountid.substring(0,3)==="lgt"){
      document.write("LG U+");
    }
    document.write('</td>');
    document.write('<td>');
    if(billamountid.substring(billamountid.length-3,billamountid.length-2)==="5"){
      document.write("5G");
    }
    else if(billamountid.substring(billamountid.length-3,billamountid.length-2)==="4"){
      document.write("4G");
    }
    document.write('</td>');
    document.write('<td>');
    document.write(billamountname);
    document.write('</td>');
    document.write('<td>');
    document.write(billamountvalue+" 원 ");
    document.write('</td>');
    document.write('<td>');
    document.write("<b>선택약정</b>");
    document.write('</td>');
    document.write('<td>');
    document.write(dividemonth+" 개월 ");
    document.write('</td>');
    document.write('<td>');
    document.write("<b>"+total_billdiscount+" 원</b>");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td colspan = "9">');
    document.write(" 한달 평균 요금 = ( 기기 출고가 / 약정 개월 수 ) + ( 요금제 가격 * 0.75 ) ");
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr align = "center">');
    document.write('<td colspan = "9">');
    document.write("= ( "+devicevalue+" / "+dividemonth+" ) + ( "+billamountvalue+" * 0.75 ) = "+"<b>"+total_billdiscount+"</b>");
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
    
 
    document.write("<br>");
    document.write("<br>");
    if(total_devicediscount*1>total_billdiscount*1){
      var subtract = total_devicediscount*1-total_billdiscount*1
      var subtract_str=String(subtract);
      document.write("<center>"+"<b>선택약정</b>으로 선택하는 것이 월 <b>".fontsize(6)+subtract_str.fontsize(6)+" 원</b> 저렴합니다.".fontsize(6)+"</center>");
    }
    else if(total_devicediscount*1<total_billdiscount*1){
      var subtract = total_billdiscount*1-total_devicediscount*1;
      var subtract_str=String(subtract);
      document.write("<center>"+"<b>공시지원금</b>으로 선택하는 것이 월 <b> ".fontsize(6)+subtract_str.fontsize(6)+" 원</b> 저렴합니다.".fontsize(6)+"</center>");
    }
    else{
      document.write("<center>"+"공시지원금, 선택약정 선택 상관없이 동일합니다.".fontsize(6)+"</center>")
    }
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    
    

    document.write("<center>"+"다시 계산 하시려면 새로고침(F5)를 눌러주세요.".fontsize(6)+"</center>")
}  
  document.getElementById("result").onclick = function() {
    calculatebill();
  };
