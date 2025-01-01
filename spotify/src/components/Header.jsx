import NavButtons from "./NavButtons"
import '../style/Header.css';
import React, { useEffect } from 'react';

export default function Header(){
    useEffect(() => {
        const notes = ['♪', '♫', '♩'];
        const text = document.getElementById("header_text");

        const createNotes = () => {
            for (let i = 0; i < 4 + Math.floor(Math.random() * 3); i++) { // Виліт 4-6 елементів
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.className = 'music-note';
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];

                    const rect = text.getBoundingClientRect();
                    note.style.left = `${rect.right + Math.random()*20}px`;
                    note.style.top = `${rect.top + window.scrollY + Math.random()*5}px`;

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
            <NavButtons/>
        </header>
    )
}