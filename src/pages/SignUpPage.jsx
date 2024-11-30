
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import bgImg from '../assets/more/11.png'
import googleImg from '../assets/icons8-google-48.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function SignUpPage() {
  const {creatUser,signInwithGoogle} = useContext(AuthContext)
  const [error,setError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const navigate = useNavigate();
    const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  };
  const rules = {
        lowercase: /(?=.*[a-z])/, 
        uppercase: /(?=.*[A-Z])/,
        digit: /(?=.*\d)/,        
        specialChar: /(?=.*[@$!%*?&])/, 
        minLength: /.{8,}/    
    };
  const handleCreatUser = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    setPasswordError('');
    setError('');
    if (!rules.lowercase.test(password)) {
        setPasswordError("Password must include at least one lowercase letter.");
        return;
     }
     if (!rules.uppercase.test(password)) {
        setPasswordError("Password must include at least one uppercase letter.");
        return;
     }
     if (!rules.digit.test(password)) {
       setPasswordError("Password must include at least one digit.");
       return;
     }
     if (!rules.specialChar.test(password)) {
         setPasswordError("Password must include at least one special character (e.g., @$!%*?&).");
         return;
     }
     if (!rules.minLength.test(password)) {
         setPasswordError("Password must be at least 8 characters long.");
         return;
     }
       creatUser(email,password)
    .then(res =>{
      const creationTime = res.user.metadata.creationTime;
      const userData = {name,email,creationTime}
    fetch('http://localhost:5000/users',{
       method:'POST',
       headers:{
          'content-type':'application/json',
       },
       body:JSON.stringify(userData),
    }).then(res => res.json())
      .then(data => {
       Swal.fire({
     title: "Success",
     text: "Your account has been created successfully!",
     icon: "success"
    });
      });
      
       navigate('/');
    }).catch(err =>{
      setError(err)
    })
  }
  const handleSignInWithGoogle = ()=>{
    signInwithGoogle()
     .then(res =>{
      navigate('/');
   }).catch( err =>{

   })
  }
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });

  },[])
  return (
    <div>
      <div>
         <div className="w-full" style={backgroundStyle}>
      <div className='container w-11/12 mx-auto'>
           <Link to="/" className='text-2xl lg:text-3xl text-Gunmetal font-normal rancho flex items-center gap-2 py-10'><FaArrowLeft /> Back to home</Link>
         </div>
         <div className=' container w-11/12 mx-auto bg-Eggshell rounded-md p-10 mb-20'>
            <div className='text-center' data-aos="zoom-in">
              <h3 className='text-Gunmetal text-4xl lg:text-5xl font-normal rancho'>Get Started Now</h3>
              <p className='text-Ebony text-opacity-[0.7] text-base lg:text-lg font-normal raleway my-6'>Enter your Credentials to access your account</p>
            </div>
            <div className='raleway'>
                <form onSubmit={handleCreatUser}>
                       
                      <div className="mb-5 lg:mb-10">
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Name</label>
                         <input type="text" name="name" id="" placeholder='Enter your name' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                      <div className="mb-5 lg:mb-10">
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Email</label>
                         <input type="email" name="email" id="" placeholder='Enter your email' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                      <div className="mb-5 lg:mb-10">
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Password</label>
                         <input type="password" name="password" id="" placeholder='Enter your password' className='w-full my-2 p-3 rounded-md' required/>
                         <div className="text-red-500">
                          {
                            passwordError
                          }
                         </div>
                       </div>
                    <div>
                        <button className='rancho p-3 rounded-md mt-5 bg-Tan border-[2px] border-Mahogany w-full text-xl lg:text-2xl'>Sign Up</button>
                    </div>
                </form>
                <div className="mb-10">
                    <Link onClick={handleSignInWithGoogle} className='rancho p-3 rounded-md mt-5 bg-Tan border-[2px] border-Mahogany w-full text-xl lg:text-2xl flex items-center gap-3 justify-center'><img src={googleImg} alt="" className="w-6 lg:w-8"/>Sign Up with google</Link>
                    </div>
                    <div className="text-red-500">
                      {
                        error && 'Error: You already have an account.'
                      }
                    </div>
                <div>
                   <p className="text-center mt-10 text-Ebony text-opacity-[0.8] text-base lg:text-xl">have an account? <Link to="/logIn" className="text-DesertSand hover:underline hover:decoration-Tan ">Log In</Link></p>
                </div>
            </div>
            
         </div>
    </div>
    </div>
    </div>
  )
}
