import Aside from "./Aside"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import '../style/MainPage.css';

export default function MainPage(){
    return(
    <body>
      <Header/> 
      <Main/>
      <Aside/>
      <Footer/>
    </body>  
    )
}