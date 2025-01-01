import "../style/Main.css";
import React, { useEffect, useRef } from 'react';

export default function Main() {
    const mainRef = useRef(null);

    useEffect(() => {
        const playlist = document.getElementsByClassName('audio');
        const infobar = document.createElement('div');
        infobar.className = 'infobar';
        infobar.style.right = '0';
        infobar.style.position = 'absolute';
        infobar.style.top = '0';
        infobar.style.width = '0';
        infobar.style.height = '100%';
        infobar.style.backgroundColor = 'white'; // Можна налаштувати потрібний колір і стилі

        const infobarbutton = document.createElement('button');
        infobarbutton.className = 'infobarbutton';
        infobarbutton.style.right = '0';
        infobarbutton.style.height = '0';
        infobarbutton.style.width = '140px';
        infobarbutton.style.display = 'flex';
        infobarbutton.style.alignItems = 'center';
        infobarbutton.style.justifyContent = 'center';

        const musicsymbol = document.createElement('p');
        musicsymbol.className = 'musicsymbol';
        musicsymbol.textContent = '𝄞'; // Встановлюємо текстовий вміст

        infobarbutton.appendChild(musicsymbol);

        if (mainRef.current) {
            mainRef.current.appendChild(infobar); // Додаємо infobar всередину main
            mainRef.current.appendChild(infobarbutton);
        }

        function infobarbuttonOpen(){
            infobarbutton.style.height = '45px';
            infobarbutton.style.transition = 'all 1s ease';
        }

        function infobarOpen() {
            // Логіка для відкриття infobar
        }

        for (let i = 0; i < playlist.length; i++) {
            playlist[i].addEventListener('click', infobarbuttonOpen);
        }

        return () => {
            for (let i = 0; i < playlist.length; i++) {
                playlist[i].removeEventListener('click', infobarbuttonOpen);
            }
            if (mainRef.current) {
                mainRef.current.removeChild(infobar); // Прибираємо infobar при демонтажі компонента
                mainRef.current.removeChild(infobarbutton); // Прибираємо infobarbutton при демонтажі компонента
            }
        };
    }, []);

    return (
        <main ref={mainRef}>
            <nav>
                <button className="buttonsMain">Music</button>
                <button className="buttonsMain">Podcasts</button>
                <button className="buttonsMain">Artists</button>
            </nav>

            <div className="pllists">
                <button className="audio">
                    <img src="./images/img1.png" alt="list1" />
                    <h2>Top 50 - India</h2>
                    <p>Your daily update of the most played tracks right now - India.</p>
                </button>
                <button className="audio">
                    <img src="images/img2.png" alt="list2" />
                    <h2>Nija pearls</h2>
                    <p>The finest set of Telugu music from the past 5 years. Cover: Pushpa</p>
                </button>
                <button className="audio">
                    <img src="images/img3.png" alt="list3" />
                    <h2>Today Top Hits</h2>
                    <p>'Chaand Baaliyan' and other popular Indie hits! Cover - Akanksha Sethi</p>
                </button>
                <button className="audio">
                    <img src="images/img4.png" alt="list4" />
                    <h2>Pop Favourites</h2>
                    <p>Keep calm and focus with ambient and post-rock music.</p>
                </button>
                <button className="audio dark">
                    <img src="images/img5.png" alt="list5" />
                    <h2>Top 50 - India</h2>
                    <p>Your daily update of the most played tracks right now - India.</p>
                </button>
                <button className="audio audio1 dark">
                    <img src="images/img6.png" alt="list6" />
                    <h2>Top 50 - India</h2>
                    <p>Your daily update of the most played tracks right now - India.</p>
                </button>
            </div>
        </main>
    );
}
