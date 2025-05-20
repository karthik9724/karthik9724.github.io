// const objects=[
//     {id:1, name:"product1",price:20,qty:2,status:"pending"},
//     {id:2, name: "product2",price:30,qty:5,status:"pending"},
//     {id:3, name: "product3",price:40,qty:3,status:"pending"},
// ];

// const updatedobjects=objects.map((item)=>({
//     ...item,
//     price:item.price+5,
//     status:"completed"}));

// console.log(updatedobjects);

// const updatedobjects=objects.map((item)=>({
//     ...item,
//     total:item.price*item.qty,
//     status:"completed"
// }));

// console.log(updatedobjects);
//qty>2
const objects=[
    {id:1, name:"product1",price:20},
    {id:2, name: "product2",price:30},
    {id:3, name: "product3",price:40},
];
const cart={1:7,3:5}
objects.map(value=>{
    if(cart[value.id]){
        const total=objects.price*cart[value.id]
        console.log(objects.id,objects.name,objects.price,total);
    }
})