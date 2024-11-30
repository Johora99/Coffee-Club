
import { Link } from 'react-router-dom';
import bgImg from '../assets/more/11.png'
import { FaArrowLeft } from "react-icons/fa6";
import Swal from 'sweetalert2'
export default function AddCoffeePage() {
     const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  };
  const handleAddCoffee = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const allValue = {name,chef,supplier,taste,category,details,photo}
    console.log(allValue)
    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(allValue)
    })
    .then(res => res.json())
    .then(data => {
       Swal.fire({
     position: "center",
     icon: "success",
     title: "Coffee is successfully added",
     showConfirmButton: false,
     timer: 1500
});
e.target.reset();
       
    })
  }
  return (
    <div className="w-full" style={backgroundStyle}>
         <div className='container w-11/12 mx-auto'>
           <Link to="/" className='text-2xl lg:text-3xl text-Gunmetal font-normal rancho flex items-center gap-2 py-10'><FaArrowLeft /> Back to home</Link>
         </div>
         <div className=' container w-11/12 mx-auto bg-Eggshell rounded-md p-10 mb-20'>
            <div className='text-center'>
              <h3 className='text-Gunmetal text-4xl lg:text-5xl font-normal rancho'>Add New Coffee</h3>
              <p className='text-Ebony text-opacity-[0.7] text-base lg:text-lg font-normal raleway my-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br className='hidden lg:block'/> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br className='hidden lg:block'/> to using Content here.</p>
            </div>
            <div className='raleway'>
                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Name</label>
                         <input type="text" name="name" id="" placeholder='Enter coffee name' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Chef</label>
                         <input type="text" name="chef" id="" placeholder='Enter coffee chef' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Supplier</label>
                         <input type="text" name="supplier" id="" placeholder='Enter coffee supplier' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Taste</label>
                         <input type="text" name="taste" id="" placeholder='Enter coffee taste' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Category</label>
                         <input type="text" name="category" id="" placeholder='Enter coffee category' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                       <div>
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Details</label>
                         <input type="text" name="details" id="" placeholder='Enter coffee details' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>

                    </div>
                    <div className='mt-5'>
                        <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Photo</label>
                        <input type="url" name="photo" id="" placeholder='Enter photo URL' className='w-full mt-2 p-3 rounded-md' required/>
                    </div>
                    <div>
                        <button className='rancho p-3 rounded-md mt-5 bg-Tan border-[2px] border-Mahogany w-full text-xl lg:text-2xl'>Add Coffee</button>
                    </div>
                </form>
            </div>
            
         </div>
    </div>
  )
}
