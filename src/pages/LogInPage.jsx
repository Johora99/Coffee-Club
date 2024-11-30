import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import bgImg from '../assets/more/11.png'
import googleImg from '../assets/icons8-google-48.png'
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function LogInPage() {
  const {signInUser,signInwithGoogle,resetPassword} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  };
  const handleLogIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email,password)
    .then(res =>{
      navigate('/');
    }).catch(err=>{
      setError(err)
    })
    e.target.reset()
  }
  const handleSignInWithGoogle = ()=>{
    signInwithGoogle()
     .then(res =>{
      navigate('/');
   }).catch( err =>{

   })
  }
  const emailRef = useRef()
  const handleResetPassword = ()=>{
    const resetEmail = emailRef.current.value;
    resetPassword(resetEmail)
    .then(res =>{
       window.location.href = "https://mail.google.com";
    }).catch(err =>{
      console.log(err)
      toast.error("Failed to send password reset email. Please try again.");
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
         <div className="w-full" style={backgroundStyle}>
      <div className='container w-11/12 mx-auto'>
           <Link to="/" className='text-2xl lg:text-3xl text-Gunmetal font-normal rancho flex items-center gap-2 py-10'><FaArrowLeft /> Back to home</Link>
         </div>
         <div className=' container w-11/12 mx-auto bg-Eggshell rounded-md p-10 mb-20'>
            <div className='text-center' data-aos="zoom-in">
              <h3 className='text-Gunmetal text-4xl lg:text-5xl font-normal rancho'>Welcome back !</h3>
              <p className='text-Ebony text-opacity-[0.7] text-base lg:text-lg font-normal raleway my-6'>Enter your Credentials to access your account</p>
            </div>
            <div className='raleway'>
                <form onSubmit={handleLogIn}>
                       
                      <div className="mb-5 lg:mb-10">
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Email</label>
                         <input type="email" name="email" id="" ref={emailRef} placeholder='Enter your email' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                      <div className="mb-2">
                         <label className='text-Ebony text-opacity-[0.8] text-base lg:text-xl font-normal'>Password</label>
                         <input type="password" name="password" id="" placeholder='Enter your password' className='w-full mt-2 p-3 rounded-md' required/>
                       </div>
                       <div className="mb-5 lg:mb-10">
                        <span onClick={handleResetPassword} className="hover:underline hover:decoration-Tan cursor-pointer hover:underline-offset-2 text-Ebony text-opacity-[0.8] text-base lg:text-xl">forgot password</span>
                       </div>
                       
                    <div>
                        <button className='rancho p-3 rounded-md mt-5 bg-Tan border-[2px] border-Mahogany w-full text-xl lg:text-2xl'>Log In</button>
                    </div>
                </form>
                <div className="mb-5 lg:mb-10">
                    <Link onClick={handleSignInWithGoogle} className='rancho p-3 rounded-md mt-5 bg-Tan border-[2px] border-Mahogany w-full text-xl lg:text-2xl flex items-center gap-3 justify-center'><img src={googleImg} alt="" className="w-6 lg:w-8"/>Log In with google</Link>
                    </div>
                    <div className="text-red-500">
                      {
                        error && 'Error : Please try again.'
                      }
                    </div>
                <div>
                   <p className="text-center mt-10 text-Ebony text-opacity-[0.8] text-base lg:text-xl">Don't have an account? <Link to="/signUp" className="text-DesertSand hover:underline hover:decoration-Tan ">Sign Up</Link></p>
                </div>
            </div>
              <ToastContainer />
         </div>
    </div>
    </div>
  )
}
