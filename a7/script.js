
function add(){
    var a=parseFloat(document.getElementById('num1').value)
    var b=parseFloat(document.getElementById('num2').value)
    let add=a+b;
    let sub=a-b;
    let mul=a*b;
    let div=a/b;
    document.getElementById('display').innerHTML="addition is "+add+"<br>subtraction is "+sub+" <br>Multiplication is "+mul+" <br>Division is "+div;
}