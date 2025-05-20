// for(let i=1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


var fruits=["apple","banana","orange","melon"];
fruits.map((value)=>{
    list.innerHTML+=`<li>${value}</li>`
})
let str=""
function disp(){
    str=document.getElementById('ip').value.toLowerCase();
    const filtered=fruits.find((value)=>{
        value.toLoweCase()==str;
    })
    if(filtered){
        di.innerHTML=`Found:${filtered}`
    }
    else
      di.innerHTML=`Not found`
}