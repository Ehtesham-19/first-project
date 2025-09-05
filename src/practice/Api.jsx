import React, { useEffect,  } from 'react'

export default function Api() {
    useEffect(() => {
        GetData();
    }, []);
      async function GetData() {
            let url="https://pokeapi.co/api/v2/pokemon?limit=200";
          let response=await fetch(url);
          response=await response.json();
          console.log(response);
          
         } 
  return (
    <div>
       <h2>Get Data from Api</h2>
    </div>
  )
}
