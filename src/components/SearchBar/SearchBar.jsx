import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [search, setSearch] = useState("")
   function handle(event){
      setSearch(event.target.value);
   }
   return (
      <div>
         <input type='search' onChange={handle} value={search}/>
      <button onClick={()=>onSearch(search)}>Agregar</button>
      </div>
   );
}
