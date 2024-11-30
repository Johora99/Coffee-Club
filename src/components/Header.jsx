
import { Link } from 'react-router-dom';
import bgImg from '../assets/more/15.jpg';
import logo from '../assets/more/logo1.png';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
export default function Header() {
  const {user,signOutUser} = useContext(AuthContext);
   const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
  };
  const handleSignOut = ()=>{
    signOutUser();
  }
  return (
    <div className='w-full'>
    
        <nav className="rancho py-3" style={backgroundStyle}>
          <div className='container w-11/12 mx-auto flex items-center justify-between'>
          <div className='hidden lg:block'></div>
          <div className='flex items-center justify-center'>
            <img src={logo} alt="" className='w-10 lg:w-20' />
            <h2 className='text-white text-3xl lg:text-6xl font-normal'>Espresso Emporium</h2>
          </div>
          <div>
            {
              user ?    <Link onClick={handleSignOut} className='text-Charcoal text-xl lg:text-2xl font-normal rancho bg-DesertSand py-2 px-5 lg:px-10' to="/">Log Out</Link> :   <Link className='text-Charcoal text-xl lg:text-2xlfont-normal rancho bg-DesertSand py-2 px-5 lg:px-10' to="/logIn">Log In</Link>

            }
        
          
          
          
          </div>
          </div>
        </nav>
      
    </div>
  )
}
