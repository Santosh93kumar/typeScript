type Chaiorder={
    type:string,
    sugar:number,
    strong:boolean
}

function makeChai(order:Chaiorder){
    console.log(order)
}

function serverChai(order:Chaiorder){
    console.log(order)
}


type chaiRecipe ={
    water:number,
    milk:number
}

// class masalaChai implements chaiRecipe{
//     water= 100;
//     milk=80;
// }

interface cupSize {
    size :'small'|'medium'
} 
class chai implements cupSize{
    size: "small" | "medium"= 'small'
} 


interface response {
   ok:false|true
} ;

class myRes implements response{
    ok: boolean=true
}

type baseChai = {masalaChai:string}
type Extra = { masala:number}

type MasalaChai = baseChai & Extra ;

const cup:MasalaChai={
masala:2,
masalaChai:'chai'
}


// optional

type User ={
    username : string;
    bio?: string
}

const u1:User ={username:'santosh'};
const u2:User={
    username:'hey',
    bio:'I am developer'
}

type config ={
    readonly appName:string,
    version:number
}

const cfg :config={
appName:'IndiaTuve',
version:1
}
// cfg.appName='test'