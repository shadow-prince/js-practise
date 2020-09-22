function add()
{
    let sum =0;
    a = Number(document.getElementById('first').value);
    b = Number(document.getElementById("second").value);
    sum = a+b;
    c = a+' + '+b+' = '+ sum;

    document.getElementById("answer").innerText = c;
}
function multiplicationTable()
{
    a = Number(document.getElementById("mulA").value);
    let new1;
    newl=document.getElementById("product");
    newl.innerHTML =" ";
    for(let i =1; i<=10;i++)
    {if(i==1)
        {
           newl.innerHTML+="<tr>" + "<h4>Table of "+a +"</h4></tr>";
        }
        newl.innerHTML += "<tr><td>"+a+" x " + i + " = " + a*i +"</td></tr>"; 
    }
}
function subtract()
{
    let diff =0;
    a =Number(document.getElementById("ele1").value);
    b=Number(document.getElementById("ele2").value);
    diff=a-b;
    c = a+ " - " + b +" = "+ diff;

    document.getElementById("difference").innerHTML = c;

}

var click = 0;
function clickCounter()
{
    click+=1;
    document.getElementById("CLICKS").innerHTML= "CLICKS : "+click;


}