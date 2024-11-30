import { Link } from 'react-router-dom';
import Img1 from '../assets/more/1.png'
import Icon from '../assets/more/Vector.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function OurProducts() {
     const backgroundStyle = {
    backgroundImage: `url(${Img1})`,
    backgroundSize: 'cover', 
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
    <div className="w-full my-20" style={backgroundStyle}>
        <div className='container w-11/12 mx-auto '>
        <div className='text-center rancho' data-aos="zoom-in-up">
            <h2 className='text-Mahogany text-4xl lg:text-6xl font-normal '>Our Popular Products</h2>
             <Link to="/addCoffee" className='flex items-center gap-2 bg-DesertSand py-2 px-5 border-[2px] border-Mahogany rounded-md w-fit mx-auto my-6 text-white text-xl lg:text-2xl font-normal'>Add Coffee <img src={Icon} alt="" /></Link>
        </div>
        </div>
    </div>
  )
}
