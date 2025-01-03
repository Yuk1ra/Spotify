import "../style/NavButtons.css";

export default function NavButtons(){
    return(
        <nav>
            <button className="buttonsMain">Music</button>
            <button className="buttonsMain">Podcasts</button>
            <button className="buttonsMain">Artists</button>
            <button className="buttonsMain">Albums</button>
            <button class="profbutton" id="profileButton">
                <img src="/images/profile/profile1.jpg" class="profimg" alt="Profile" />
                <span class="tooltip">IhorPishta</span>
                </button>
        </nav>
    )
}