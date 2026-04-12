//partial , required keyWord, pick , omit


type Tea={
    name:string,
    price:number,
    ingredients: string[]
}

const adrakChai:Tea={
    name:'AdrakChai',
    price:23,
    ingredients:['ginger', 'milk']
}


type Cup = { size:string}
let smallCup:Cup ={ size:'30ml'}

let bigCup ={
    size:'40ml',
    material:'steel'

}

//then
//bare mini prop are statisficed

smallCup== bigCup


type Item = { name:string, quantity:number}
type Address= { street:string, pin :number}
type Order={
    id:number,
    item:Item[],
    address:Address
}
const order:Order={
    id:1,
    item:[
        {
            name:'santosh',
            quantity:1
        },{
            name:'chai',
            quantity:1
        }
    ],
    address:{
        street:'hsdkj',
        pin:123
    }
}


type Chai={
    name:string,
    price:number,
    isHot:boolean
} 

const updateChai =(update:Partial<Chai>)=>{
    console.log('Updating CHai with : ',update)
}

updateChai({
    name:'testChai'
})
updateChai({price:35});
updateChai({
    name:'masalaChai',
    isHot:true
})


type chaiOrder ={
    name?:string,
    quantity?:number
}

const placeOrder =(order:Required<chaiOrder>)=>{
    console.log('order of placeOrder :', order);
}

placeOrder({
    name:'test chai',
    quantity:23
})


type chai={
    name:string,
    price:number,
    address:string,
    quanity:number
}

type BasicChaiInfo = Pick<chai, 'name'|'price'>
const chaiInfo: BasicChaiInfo={
    name:'test',
    price:3
}

type ChaiNew ={
    name:string,
    pricc:number,
    isHot:boolean,
    secretIngredient:string
}

type publicChai = Omit<ChaiNew, 'secretIngredient'>
// so further we dont need to write the secretIngredient as it is ommitted