import axios from "axios"
const BASE = "https://jsonplaceholder.typicode.com"

export async function getPosts(){
    const response = await axios.get(`${BASE}/posts`)
    return response.data
}

export async function getPostById(id: string){
    const response = await axios.get(`${BASE}/posts/${id}`)
    return response.data
}

export async function pagination(page:number=1,limit:number=4) {
    const response = await axios.get(`${BASE}/posts?_limit=${limit}&_page=${page}`)
    return response.data
}