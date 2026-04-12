interface Chai{
    name:string,
    price:number,
    milk?: boolean
}

let masala:Chai={
    name:'heyChai',
    price:34
}
console.log('masala : ', masala);


//readonly property
interface Shop{
    readonly id:number,
    name:string
}

const s:Shop={
    id:1,
    name:'hye'
}
// s.id=2


interface DiscountCalculator {
    (price:number):number
}

let apply50 : DiscountCalculator=(p)=> p*0.5

console.log(apply50(40))


interface teaMachine {
    start():void,
    stop():void
}

let machine:teaMachine={
    start(){
        console.log('starting .....');
        return 
        
    },
    stop(){
        console.log('stoping ...')
    }
}
console.log(machine.start());


// index signature


interface chaiRating {
    [flavour:string]:number // signature
}

const rating:chaiRating={
    'masachai':3.4,
    'gingerChai':3.4,
    
}


//interface have merging property
interface user{
    name:string
}

interface user{
    age:number
}

let u:user={
    name:'santosh',
    age:3
}


interface A{
    a:string
}

interface B{
    b:string
}

interface c extends A,B {
    c:string
}

let userinfo:c={
    a:'get',
    b:'jhb',
    c:'jbkjb'

}