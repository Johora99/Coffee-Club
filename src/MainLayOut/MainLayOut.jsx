import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";


export default function MainLayOut() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
