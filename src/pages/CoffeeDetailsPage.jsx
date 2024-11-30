import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function CoffeeDetailsPage() {
 const data = useLoaderData();
  const {_id,name,chef,supplier,taste,category,details,photo} = data;
  return (
    <div>
         <div className='container w-11/12 mx-auto'>
           <Link to="/" className='text-3xl text-Gunmetal font-normal rancho flex items-center gap-2 my-10'><FaArrowLeft /> Back to home</Link>
         </div>
         <div className="container w-11/12 mx-auto">
           <div className="flex items-center justify-around bg-Eggshell mb-20 py-20 rounded-md shadow-md">
             <figure>
                <img src={photo} alt="" className="w-[350px]"/>
             </figure>
             <div>
                 <h4 className="text-4xl text-Mahogany font-normal rancho mb-5">Niceties</h4>
                 <div className="raleway">
                    <p className="text-Graphite font-normal"><span className=" text-xl text-Mahogany font-medium">Name : </span>{name}</p>
                    <p className="text-Graphite font-normal my-2"><span className=" text-xl text-Mahogany font-medium">Chef : </span>{chef}</p>
                    <p className="text-Graphite font-normal"><span className=" text-xl text-Mahogany font-medium">Supplier : </span>{supplier}</p>
                    <p className="text-Graphite font-normal my-2"><span className=" text-xl text-Mahogany font-medium">Taste : </span>{taste}</p>
                    <p className="text-Graphite font-normal"><span className=" text-xl text-Mahogany font-medium">Category : </span>{category}</p>
                    <p className="text-Graphite font-normal my-2"><span className=" text-xl text-Mahogany font-medium"> Details : </span>{details}</p>
                 </div>
             </div>
           </div>
            
         </div>
    </div>
  )
}
