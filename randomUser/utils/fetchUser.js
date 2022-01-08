import {URL} from './../app.js'
export const getUser = async ()=>{
    const result = await fetch(URL);
    const data = await result.json();

     const person = data.results[0]
    
     const {phone,email}=person;
     const {large:image}=person.picture;
     const {password} = person.login;
     const {first:firstName,last:lastName} = person.name;
     const {dob:{age}} = person;
     const{location:{street:{number,name}}} = person;  //const {number,name} = person.location.street;
     
     return {
        phone,
        email,
        image,
        password,
        age,
        name : `${firstName} ${lastName}`,
        street : `${number} ${name}`


     }
    
}