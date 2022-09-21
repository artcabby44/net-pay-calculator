function calculate()

{  
    basicpay = document.getElementById("basicpay").value;

   if (basicpay == "") {
    alert("Aruy, wala sweldo? haha you must fill out your basic pay");
   
  }
  else
  {
    sss = basicpay * 0.045;
    phil = basicpay * 0.02;
    if (basicpay >= 5000)
    {
        pagibig = 100
    }
    else
    {
        pagibig = basicpay * 0.02;
    }
    deduct = sss + phil + pagibig;
    mnetpay = basicpay - deduct;
    netpay = mnetpay / 2;

    mnet = mnetpay.toLocaleString("en-US");
    npay = netpay.toLocaleString("en-US");
    ded = deduct.toLocaleString("en-US");
    ss = sss.toLocaleString("en-US")
    phi = phil.toLocaleString("en-US")
    love = pagibig.toLocaleString("en-US")

    document.getElementById("sss-result").value = ss;
    document.getElementById("phil-result").value = phi;
    document.getElementById("pagibig-result").value = love;
    document.getElementById("mnetpay").value = mnet;
    document.getElementById("netpay").value = npay;
    document.getElementById("deduct").value = ded;
   
  }
    
}

