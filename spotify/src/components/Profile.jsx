import '../style/Profile.css';
import React from 'react';

export default function Profile() {
    return (
        <>
            <header className='profheader'>
                <h2 className="headertext">Welcome, IhorPista</h2>
                <img src="/images/backgrounds/back-headphones.png" className="backhead" alt="headphones" />
                <img src="/images/backgrounds/back-nota.png" className="backnota" alt="nota" />
            </header>

            <main className='profmain'>
                <h1 className="maintext">YOUR PLAYLISTS🎶</h1>    
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

                    <button className="profaudio">
                        <img src="/images/img5.png" alt="list6" />
                        <h2>Today Top Hits</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img4.png" alt="list6" />
                        <h2>Today Top Hits</h2>
                    </button>

                    <button className="profaudio">
                        <img src="/images/img3.png" alt="list6" />
                        <h2>Today Top Hits</h2>
                    </button>
                </div>

                <h1 className="artnames">YOUR FAVORITE SINGERS🎸</h1>
                <div className="proflists">
                    <button className="profaudio">
                        <img src="./images/playlist1.jpg" />
                        <h2>Juice WRLD</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist2.jpg" />
                        <h2>Xxtentacion</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist3.jpg" />
                        <h2>PhonkMaster</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist4.jpg" />
                        <h2>Justin Biber</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist5.jpg" />
                        <h2>Catty</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist6.jpg" />
                        <h2>LiL Peep</h2>
                    </button>

                    <button className="profaudio">
                        <img src="./images/playlist7.jpg" />
                        <h2>Coldplay</h2>
                    </button>
                    <button className="profaudio">
                        <img src="./images/playlist8.jpg" />
                        <h2>Coldplay</h2>
                    </button>
                </div>
            </main>
        </>
    );
}
