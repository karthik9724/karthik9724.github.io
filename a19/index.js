const products=[
    {id:1, name:"p1", price:34},
    {id:2, name:"p2", price:50},
    {id:3, name:"p3", price:75}

];
// const cart={1:4,3:5}

// const total=products.reduce((sum,value)=>{
//     return sum+(cart[value.id]?value.price*cart[value.id]:0)
// },0)

const cart={1:4,3:5}

const total=products.reduce((sum,value)=>{
    const qty=cart[value.id] ?? 0;
    return sum+value.price*qty;
},0)




console.log(total)