import NavButtons from "./NavButtons"
import '../style/Header.css';
import React, { useEffect } from 'react';

export default function Header(){
    useEffect(() => {
        const notes = ['♪', '♫', '♩'];
        const colors = ["#fd79ff", "#7fcaff"];
        const text = document.getElementById("header_text");

        const createNotes = () => {
            for (let i = 0; i < 4 + Math.floor(Math.random() * 3); i++) {
                setTimeout(() => {
                    const note = document.createElement('p');
                    note.className = 'music-note';
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];

                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    note.style.color = randomColor;
                    note.style.textShadow = `0 0 5px #fff, 0 0 10px #fff, 0 0 15px ${randomColor}, 0 0 20px ${randomColor}, 0 0 25px ${randomColor}, 0 0 30px ${randomColor}, 0 0 35px ${randomColor}`;
        
                    const rect = text.getBoundingClientRect();
                    note.style.left = `${rect.right + Math.random() * 20}px`;
                    note.style.top = `${rect.top + window.scrollY + Math.random() * 5}px`;
        
                    document.body.appendChild(note);
        
                    setTimeout(() => {
                        note.remove();
                    }, 1000);
                }, i * 300);
            }
        };

        const interval = setInterval(() => {
            createNotes();
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return(
        <header class = "header">
            <h1 id="header_text" data-text = "Music⾕">Music⾕</h1>
        </header>
    )
}