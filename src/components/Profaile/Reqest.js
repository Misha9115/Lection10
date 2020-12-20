import * as axios from 'axios';
const axiosInc = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users?id=1'
})



export default async function getQery (){
    const response = await axiosInc.get();
    return response;
}
