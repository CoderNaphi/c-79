ns=[];
function submit()
{
    var n1=document.getElementById("nameOfTheStudent1").value;
    var n2=document.getElementById("nameOfTheStudent2").value;
    var n3=document.getElementById("nameOfTheStudent3").value;
    var n4=document.getElementById("nameOfTheStudent4").value;
    ns.push(n1);
    ns.push(n2);
    ns.push(n3);
    ns.push(n4);
console.log(ns);
document.getElementById("displayName").innerHTML=ns;
document.getElementById("submitButton").style.display="none";
document.getElementById("sortButton").style.display="inlime-block";

}

function sort() 
{
    ns.sort();
    console.log(ns);
    document.getElementById("displayName").innerHTML=ns;
}

    
