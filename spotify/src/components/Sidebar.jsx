import '../style/Sidebar.css'
import React, { useEffect } from 'react';

export default function Sidebar() {
    useEffect(() => {
        var button = document.getElementById('sidebarbutton');
        var playlists = document.getElementById('playlists');
        var sidebar = document.getElementById('sidebar');
        var arrow = document.getElementById('sidebarbuttonarrow');
        button.addEventListener("mouseover", () => {
                sidebarOpen();
                rotateArrow(arrow,"180deg");
        });
        sidebar.addEventListener("mouseleave",() =>{
            sidebarClose();
            rotateArrow(arrow,"0deg");
        });

        function sidebarOpen() {
            sidebar.style.left = "0";
            sidebar.style.transition = "all 1s ease";
        }
        function sidebarClose(){
            sidebar.style.left = "-110px";
            sidebar.style.transition = "all 1s ease";
        }
        function rotateArrow(arrow, degree) {
            if (arrow) {
                arrow.style.transform = `rotate(${degree})`;
                arrow.style.transition = "all 1s ease";
            }
        }
    }, []);

    return (
        <div className="sidebar" id="sidebar">
            <button className="sidebarbutton" id="sidebarbutton">
                <p className="sidebarbuttonarrow" id="sidebarbuttonarrow">➣</p>
            </button>
            <div className="playlists" id="playlists">
                <button className="listbutton">Playlist1</button>
                <button className="listbutton">Playlist2</button>
                <button className="listbutton">Playlist3</button>
            </div>
        </div>
    );
}
