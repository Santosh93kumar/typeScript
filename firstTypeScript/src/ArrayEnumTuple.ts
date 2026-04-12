const chaiFlavoue:string[] =['masalaChai', 'ginger']
const chaiPrice: number[] =[ 1,2]

const rating :Array<number> = [2.3, 3.3];

//array of an object
type Chai={
    name:string,
    price:number
}
const menu:Chai[]=[
    {
        name:'masalaChai',
        price:23
    }
]


// readtype just allow only to read once assign we can't chnage it
let cities:readonly string[]=['hazaribagh', 'ranchi']
// console.log(cities.push('dehradun'));


//tupple

let chaiTuple:[string, number];
chaiTuple=['santosh', 34]
//tuplle strictly follow the seq of data type 
// so below is inccorect
// chaiTuple=[ 56,'hey'] 



//making optional insdide the array sting?
let userInfo:[string , number, boolean?];

userInfo=['santosh', 100, true ]
userInfo=['santosh', 100]

// read only tuple
let location :readonly [number, number] = [23.22, 34.2]

//named tuple
const chaiItem :[name:string, age:number]=['santosh', 34]


// enum apko dot ki facility deta hai
enum cupSize{
    SMALL,
    LARGE,
    MIDIUM
}

const size = cupSize.LARGE;


// auto asign 
enum status{
    pending=100,
    served,
    cancelled

}
console.log('status : ', status);


enum chaiType{
    'MASALA' = 'masala',
    'GINGER'= 'ginger'
}

function makechai(chai:chaiType){
    console.log(`making : ${chai}`)
}

makechai(chaiType.GINGER)


enum RandomEnum {
    ID=1,
    NAME='HEY'
}



let t:[string , number]= ['chai', 10]
t.push('etxra')
console.log(t)
