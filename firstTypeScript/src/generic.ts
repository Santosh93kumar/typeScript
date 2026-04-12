
//generic fucntion

function wrapInArray<T>(item:T): T[]{
    return [item]
}


console.log(wrapInArray('santosh'))
console.log(wrapInArray(12))
console.log(wrapInArray({
    name:'hry'
}))


function pair<A,B> (a:A, b:B):[A ,B]{
    return [a,b]
}
console.log(pair(10,"hey"));


// generic interface



interface Box<T>{
    content:T
}

const numberBox : Box<number> = { content:10}
const numberBox2 : Box<boolean> = { content:true}
const numberBox1 : Box<string> = { content:'hey how are you'}


interface apiCall<T> {
    status:number,
    date:T
}

const res:apiCall<{flavour:string}>={
    status:300,
    date:{
        flavour:'gh'
    }
}