// union


let subs: number | string = 10;

subs = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = "success"


let orders = ['12', '23'];
let currentValue 


for(let order of orders ){
    if(order == '12'){
        currentValue = order;
        break;
    }
}
console.log(currentValue);

