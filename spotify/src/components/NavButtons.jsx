import '../style/NavButtons.css'
import { Link} from "react-router-dom";
export default function NavButtons(){
    return(
        <nav>
            <Link to="/music">
                <button className="buttonsMain">Music</button>
            </Link>
            <Link to="/podcasts">
                <button className="buttonsMain">Podcasts</button>
            </Link>
            <Link to="/artists">
                <button className="buttonsMain">Artists</button>
            </Link>
            <Link to="/albums">
                <button className="buttonsMain">Albums</button>
            </Link>
        </nav>
    )
}