import { useEffect } from 'react';
import Img1 from '../assets/icons/1.png'
import Img2 from '../assets/icons/2.png'
import Img3 from '../assets/icons/3.png'
import Img4 from '../assets/icons/4.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function AboutUs() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',

    });

  },[])
  return (
    <div className="w-full bg-Ivory py-14">
    <div className="container w-11/12 mx-auto">
       <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 text-center lg:text-left">
          <div data-aos="fade-up-right" data-aos-delay="100">
            <img src={Img1} alt="" className='mx-auto lg:mx-0'/>
            <h4 className='rancho text-Mahogany text-3xl lg:text-4xl font-normal my-3'>Awesome Aroma</h4>
            <p className='text-Ebony text-base font-normal raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          <div data-aos="fade-up-right" data-aos-delay="150">
            <img src={Img2} alt="" className='mx-auto lg:mx-0'/>
            <h4 className='rancho text-Mahogany text-3xl lg:text-4xl  font-normal my-3'>High Quality</h4>
            <p className='text-Ebony text-base font-normal raleway'>We served the coffee to you maintaining the best quality</p>
          </div>
          <div data-aos="fade-up-right" data-aos-delay="200">
            <img src={Img3} alt="" className='mx-auto lg:mx-0'/>
            <h4 className='rancho text-Mahogany text-3xl lg:text-4xl  font-normal my-3'>Pure Grades</h4>
            <p className='text-Ebony text-base font-normal raleway'>The coffee is made of the green coffee beans which you will love</p>
          </div>
          <div data-aos="fade-up-right" data-aos-delay="250">
            <img src={Img4} alt="" className='mx-auto lg:mx-0'/>
            <h4 className='rancho text-Mahogany text-3xl lg:text-4xl  font-normal my-3'>Proper Roasting</h4>
            <p className='text-Ebony text-base font-normal raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
       </div>
    </div>
    </div>
  )
}
