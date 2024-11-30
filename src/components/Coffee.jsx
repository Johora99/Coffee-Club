
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Coffee({coffee,coffees,setCoffees}) {
   const {_id,name,chef,supplier,taste,category,details,photo} = coffee;
   const handleDeleteItem = (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`http://localhost:5000/coffee/${id}`,{
        method:"DELETE",
     })
     .then(res=> res.json())
     .then(data => 
     {
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingCoffee = coffees.filter(coffee => coffee._id !== _id);
    setCoffees(remainingCoffee);
     }
     )
   
  }
});
    
   }
   useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });

  },[])
  return (
    <div className="flex items-center justify-around bg-Alabaster py-10 pr-10 lg:pr-0 rounded-xl raleway shadow-md" data-aos="zoom-in">
        <figure>
            <img src={photo} alt="" className="w-[185px] h-[239px]"/>
        </figure>
        <div>
            <p className="text-Graphite font-normal"><span className=" text-xl text-Mahogany font-medium">Name :</span> {name}</p>
            <p className="text-Graphite font-normal"><span className="inline-block my-3 text-xl text-Mahogany font-medium">Chef :</span> {chef}</p>
            <p className="text-Graphite font-normal"><span className=" text-xl text-Mahogany font-medium">Taste :</span> {taste}</p>
        </div>
        <div className="flex flex-col">
            <Link to={`/coffee/${_id}`} className="bg-TanTwo p-3 rounded-md cursor-pointer"><FaEye className="text-white"/></Link>
            <Link to={`/update/${_id}`} className="bg-AshGray p-3 rounded-md my-3 cursor-pointer"><HiPencil className="text-white"/></Link>
            <Link onClick={()=>handleDeleteItem(_id)} className="bg-CoralRed p-3 rounded-md cursor-pointer"><MdDelete className="text-white"/></Link>
        </div>
    </div>
  )
}
