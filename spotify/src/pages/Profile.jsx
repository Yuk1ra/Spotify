import '../style/Profile.css';
import React from 'react';

export default function Profile() {
    return (
        <>
            <header className="profileheader">
                <h2 className="headertext">Welcome, IhorPista</h2>
                <img src="/images/backgrounds/back-headphones.png" className="backhead" alt="headphones" />
                <img src="/images/backgrounds/back-nota.png" className="backnota" alt="nota" />
            </header>

            <main>
                <h1 className="maintext">YOUR PLAYLISTS</h1>    
                <div className="proflists">
                    <button className="profaudio">
                        <img src="/images/img1.png" alt="list1" />
                        <h2>Top 50 - India</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img2.png" alt="list2" />
                        <h2>Nija pearls</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img3.png" alt="list3" />
                        <h2>Today Top Hits</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img4.png" alt="list4" />
                        <h2>Today Top Hits</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img5.png" alt="list5" />
                        <h2>Today Top Hits</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img6.png" alt="list6" />
                        <h2>Today Top Hits</h2>
                    </button>
                </div>
            </main>
        </>
    );
}
