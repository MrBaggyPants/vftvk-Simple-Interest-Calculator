function compute()
{
    var amount = document.getElementById("Amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amount * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var result =document.getElementById("result");
    result.innerHTML=`If you deposit <mark>${amount}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${year}</mark>`;

    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function notposi()
{
    var amount = document.getElementById("Amount").value;
    if (amount<=0){
        alert("Please enter a positive number!");
        document.getElementById("Amount").focus();   
    }
}
