import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import '../style/MainPage.css';
import Sidebar from "./Sidebar";

export default function MainPage(){
    return(
    <body>
      <Header/> 
      <Main/>
      <Sidebar/>
      <Footer/>
    </body>  
    )
}