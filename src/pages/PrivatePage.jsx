import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Navigate } from "react-router-dom";

export default function PrivatePage({children}) {
  const {user,loading,setLoading} = useContext(AuthContext);
  if(loading){
    return <div className="w-full h-screen flex items-center justify-center">
                       <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>                        
                        </div>
  }
  if(user){
    return children;
  }else{
    return (
      <div>
        <Navigate to="/logIn"></Navigate>
      </div>
    )
  }
  
}
