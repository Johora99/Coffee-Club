
import footerBg from '../assets/more/13.jpg'
import logo from '../assets/more/logo1.png'
import copyImg from '../assets/more/24.jpg'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Footer() {
  const backgroundStyle = {
    backgroundImage: `url(${footerBg})`,
    backgroundSize: 'cover', 
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundCopy = {
    backgroundImage: `url(${copyImg})`,
    backgroundSize: 'cover', 
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
  };
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });

  },[])
  return (
    <div className='w-full' style={backgroundStyle}>
     <div className='container w-11/12 mx-auto py-20 raleway'>
       <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
       <div  data-aos="fade-right">
          <img src={logo} alt="" className='w-20'/>
           <h3 className='text-Mahogany text-4xl lg:text-5xl font-normal rancho my-6'>Espresso Emporium</h3>
           <p className='text-Ebony text-base lg:text-xl font-normal'>Always ready to be your friend. Come & Contact with us to share your <br className='hidden lg:block'/> memorable moments, to share with your best companion.</p>
           <ul className='flex items-center gap-3 my-6'>
            <li><Link href=""><FaFacebook  className='text-Mahogany text-2xl lg:text-4xl'/></Link></li>
            <li><Link href=""><FaTwitter  className='text-Mahogany text-2xl lg:text-4xl'/></Link></li>
            <li><Link href=""><FaInstagram  className='text-Mahogany text-2xl lg:text-4xl'/></Link></li>
            <li><Link href=""><FaLinkedin  className='text-Mahogany text-2xl lg:text-4xl'/></Link></li>
           </ul>
           <h3 className='text-Mahogany text-3xl lg:text-5xl font-normal rancho mb-6'>Get in Touch</h3>
           <div>
            <Link href="" className='text-Ebony text-base lg:text-xl font-normal flex items-center gap-3'><IoCall className='text-Mahogany'/>+88 01533 333 333</Link>
            <Link href="" className='text-Ebony text-base lg:text-xl font-normal flex items-center gap-3  my-6'><FaEnvelope className='text-Mahogany'/>info@gmail.com</Link>
            <p className='text-Ebony text-base lg:text-xl font-normal flex items-center gap-3'><FaLocationDot className='text-Mahogany'/>72, Wall street, King Road, Dhaka</p>
           </div>
       </div>
       <div data-aos="fade-left">
        <h3 className='text-Mahogany text-3xl lg:text-5xl font-normal rancho mb-6'>Connect with Us</h3>
        <div>
          <form>
            <input type="text" name="" id="" placeholder='Name'  className='w-full mb-3 p-3 rounded-md'/><br />
            <input type="email" name="" id="" placeholder='Email' className='w-full mb-3 p-3 rounded-md'/><br />
            <textarea name="" id="" rows={5} placeholder='Message' className='w-full mb-3 p-3 rounded-md'></textarea><br />
            <button className='text-Mahogany text-2xl font-normal rancho border-[2px] border-Mahogany rounded-full py-2 px-5'>Send Message</button>
          </form>
        </div>
       </div>
       </div>
     </div>
     <div style={backgroundCopy}>
       <h4 className='rancho text-white text-lg font-normal py-2 text-center'>Copyright Espresso Emporium ! All Rights Reserved</h4>
     </div>
    </div>
  )
}
