import '../style/Sidebar.css'
import React, { useEffect } from 'react';

export default function Sidebar() {
    useEffect(() => {
        var button = document.getElementById('sidebarbutton');
        var playlists = document.getElementsByClassName('playlists');
        var arrow = document.getElementById('sidebarbuttonarrow');
        button.addEventListener("mouseover", () => {
                sidebarOpen();
                rotateArrow(arrow,"180deg");
        });
        button.addEventListener("mouseleave",() =>{
            rotateArrow(arrow,"0deg");
        });

        function sidebarOpen() {
            
        }
        function rotateArrow(arrow, degree) {
            if (arrow) {
                arrow.style.transform = `rotate(${degree})`;
                arrow.style.transition = "all 1s ease";
            }
        }
    }, []);

    return (
        <div className="sidebar">
            <button className="sidebarbutton" id="sidebarbutton">
                <p className="sidebarbuttonarrow" id="sidebarbuttonarrow">➣</p>
            </button>
            <div className="playlists">
                <button className="listbutton">Playlist1</button>
                <button className="listbutton">Playlist2</button>
                <button className="listbutton">Playlist3</button>
            </div>
        </div>
    );
}
