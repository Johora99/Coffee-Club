import { useEffect, useState } from "react"
import Coffee from "./Coffee"


export default function Coffees() {
    const [coffees,setCoffees] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
  return (
    <div className="container w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {
            coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
        }
        </div>
    </div>
  )
}
