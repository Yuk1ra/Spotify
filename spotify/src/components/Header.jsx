import NavButtons from "./NavButtons"
import '../style/Header.css';

export default function Header(){
    return(
        <header class = "header">
            <h1 data-text = "MusicTime">MusicTime </h1>
            <NavButtons/>
        </header>
    )
}