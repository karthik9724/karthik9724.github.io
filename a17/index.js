
function add(...values){
    // let x=values.reduce((a,b)=> a+b,0);
    console.log(values)
}
// add(5,6,7,8,9,5)

const products=[
    {id:1, name:"p1", price:34},
    {id:2, name:"p2", price:40},
    {id:3, name:"p3", price:29}
];
const cart={1:4,3:5}

const order=products.filter(product=>cart(product.id)
    
)