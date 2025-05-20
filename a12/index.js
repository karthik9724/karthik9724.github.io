const objects=[
    {id:1, name:"product1",price:20,status:"pending"},
    {id:2, name: "product2",price:30,status:"pending"},
    {id:3, name: "product3",price:40,status:"pending"},
]
// objects.forEach((value)=>{
//     // console.log(value.name)
//     value.price=value.price+5;
//     console.log(value.name+" "+value.price);
// })
// const updatedobjects=objects.map(item=>({
//     name:item.name,
//     price:item.price+5
// }));
// updatedobjects.forEach(item=>{
//     console.log(`Name:${item.name},Price:${item.price}`)
// });
// const updatedobjects=objects.map((item)=>({...item,price:item.price+5,status:"completed"}));
// updatedobjects.forEach(item=>{
//     console.log(`Name:${item.name},Price:${item.price},status:${item.status}`)
// });
// console.log(updatedobjects);
 
const newobject={id:4, name:"product4", price:20};
objects.push(newobject);
console.log(objects);