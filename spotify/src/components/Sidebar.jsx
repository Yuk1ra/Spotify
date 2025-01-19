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
                <h1 className="sidebarbuttonarrow" id="sidebarbuttonarrow">▷</h1>
            </button>
            <div className="playlists" id="playlists">
                <button className="listbutton"><img src="./images/playlist1.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist2.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist3.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist4.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist5.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist6.jpg" class ='sideimgs'/></button>
                <button className="listbutton"><img src="./images/playlist7.jpg" class ='sideimgs'/></button>
            </div>
        </div>
    );
}
