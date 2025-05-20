let categeories=["fruits","vegetables","leafy vegetables","Dairy products","vegan products","Juices","Baked Goods"];
let str="";
categeories.forEach((value)={
    str+=`<option>${value}</option`
});
list.innerHTML=str;