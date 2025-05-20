function add(){
    var a=parseFloat(document.getElementById('n1').value);
    var b=parseFloat(document.getElementById('n2').value);
    var add=a+b;
    document.getElementById('display').innerHTML="addition is "+add;
}
function sub(){
    var a=parseFloat(document.getElementById('n1').value);
    var b=parseFloat(document.getElementById('n2').value);
    var add=a-b;
    document.getElementById('display').innerHTML="subtraction is "+add;
}
function mul(){
    var a=parseFloat(document.getElementById('n1').value);
    var b=parseFloat(document.getElementById('n2').value);
    var add=a*b;
    document.getElementById('display').innerHTML="multiplication is "+add;
}
function div(){
    var a=parseFloat(document.getElementById('n1').value);
    var b=parseFloat(document.getElementById('n2').value);
    var add=a/b;
    document.getElementById('display').innerHTML="division is "+add;
}