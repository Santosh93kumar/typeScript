import axios from "axios";
import type { AxiosResponse } from "axios";


interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}



// axiosResponse is a good way to handle  since it give the suggestion
const fecthData = async ()=>{
    try {
        let response:AxiosResponse<User[]>= await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('console : ', response.data)
        
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Errior : ", error.message)
            if(error.response){
                console.log(error.response.status)
            }
        }
        
    }
}

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
// console.log(response.data)
// })



//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },