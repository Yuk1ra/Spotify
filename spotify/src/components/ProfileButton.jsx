import { Link } from 'react-router-dom';

export default function ProfileButton() {
    return (
        <Link to="/profile" className="profbutton-link">
            <button className="profbutton" id="profileButton">
                <img src="/images/profile/profile1.jpg" className="profimg" alt="Profile" />
                <span className="profilename">IhorPishta</span>
            </button>
        </Link>
    );
}
