import Aos from 'aos';
import 'aos/dist/aos.css';
import bannerImg from '../assets/more/3.png';
import { useEffect } from 'react';
export default function Banner() {
      const backgroundStyle = {
    backgroundImage: `url(${bannerImg})`,
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

    <div className='w-full'>
        <header style={backgroundStyle} className='py-20 lg:py-72'>
            <div className='container w-11/12 mx-auto'> 
           <div className='rancho w-fit ml-auto'>
            <h2  data-aos="fade-right"  data-aos-delay="100" className='text-white text-4xl lg:text-6xl font-normal'>Would you like a Cup of Delicious Coffee?</h2>
            <p  data-aos="fade-right"  data-aos-delay="200" className='text-white font-normal text-base raleway my-10'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br className='hidden lg:block' /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button  data-aos="fade-right"  data-aos-delay="300" className='text-Charcoal text-xl lg:text-2xl font-normal rancho bg-DesertSand py-2 px-5'>Learn More</button>
           </div>
            </div>
        </header>
    </div>
  )
}
