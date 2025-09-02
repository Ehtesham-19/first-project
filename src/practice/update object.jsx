import { useState } from "react"

function User() {
    const [data, setData] = useState({
        name: "ehtesham",
        age: "22",
        address: {
            city: "bwp",
            country:"pak"
        }
    });
    const updatename = () => {
        setData("shami") // change name on button click
    }
    const handlename = (val) => {
        data.name = val;
        setData({...data}) // update name in objcet
    }
    const handlecity = (city) => {
        data.address.city = city;
        console.log(data);
        setData({ ...data, address: { ...data.address, city } }); // update city inside nested object
     }
    return (
        <div>
            <input type="text" placeholder="update name" onChange={(event)=>handlename(event.target.value)} />
            <input type="text" placeholder="update city" onChange={(event)=>handlecity(event.target.value)} />
            <h2>{data.age}</h2>
            <h2>{data.name}</h2>
            <h2>{data.address.city}</h2>
            <button onClick={ updatename}>update name</button>
       </div>
   ) 
}
export default User;