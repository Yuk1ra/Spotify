import "../style/Main.css";
import NavButtons from "../components/NavButtons";
import React from "react";
import ProfileButton from "../components/ProfileButton";

export default function Main() {
  return (
    <main>
      <NavButtons />
      <ProfileButton/>
      <div className="pllists">
        <button className="audio">
          <img src="/images/img1.png" alt="list1" />
          <h2>Top 50 - India</h2>
          <p>Your daily update of the most played tracks right now - India.</p>
        </button>
        <button className="audio">
          <img src="/images/img2.png" alt="list2" />
          <h2>Nija pearls</h2>
          <p>The finest set of Telugu music from the past 5 years. Cover: Pushpa</p>
        </button>
        <button className="audio">
          <img src="/images/img3.png" alt="list3" />
          <h2>Today Top Hits</h2>
          <p>Chaand Baaliyan' and other popular Indie hits! Cover - Akanksha Sethi</p>
        </button>
        <button className="audio">
          <img src="/images/img4.png" alt="list4" />
          <h2>Pop Favourites</h2>
          <p>Keep calm and focus with ambient and post-rock music.</p>
        </button>
        <button className="audio dark">
          <img src="/images/img5.png" alt="list5" />
          <h2>Top 50 - India</h2>
          <p>Your daily update of the most played tracks right now - India.</p>
        </button>
        <button className="audio audio1 dark">
          <img src="/images/img6.png" alt="list6" />
          <h2>Top 50 - India</h2>
          <p>Your daily update of the most played tracks right now - India.</p>
        </button>
      </div>
    </main>
  );
}