import NavButtons from "./NavButtons"
import '../style/Header.css';

export default function Header(){
    return(
        <header>
            <h1 class = "header"> MusicTime </h1>
            <NavButtons/>
        </header>
    )
}