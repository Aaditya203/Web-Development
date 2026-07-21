import axios from "axios";
async  function fetchdata(){
    
    const response = await axios.get("http://127.0.0.1:8787/user")
    return response.data;
}
export default async function User(){
    
    const data = await fetchdata();
    return(
        <>
            <div>{data.name}</div>
            <div>{data.email}</div>
        </>
    )
}