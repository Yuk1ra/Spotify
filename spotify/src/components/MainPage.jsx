import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import '../style/MainPage.css';
import '../style/Footer.css';
import Sidebar from "./Sidebar";

export default function MainPage(){
    return(
    <body>
      <div class="container">
        <Header/> 
        <Main/>
        <Sidebar/>
        <Footer/>
      </div>
    </body>  
    )
}