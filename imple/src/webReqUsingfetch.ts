
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
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`HTTP error${response.status}`);
        }

        let data:User[] = await response.json();
        
    } catch (error:any) {
        
        
    }
}
