import NavButtons from "./NavButtons"
import '../style/Header.css';

export default function Header(){
    return(
        <header class = "header">
            <h1 data-text = "Music⾕">Music⾕ </h1>
            <NavButtons/>
        </header>
    )
}