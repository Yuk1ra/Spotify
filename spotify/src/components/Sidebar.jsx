import '../style/Sidebar.css'

export default function Sidebar(){
    return(
        <div class ="sidebar">
            <button class="sidebarbutton">
                <p class="sidebarbuttonarrow">➣</p>
            </button>
            <div class="playlists">
                <button class = "listbutton">Playlist1</button>
                <button class = "listbutton">Playlist2</button>
                <button class = "listbutton">Playlist3</button>
            </div>
        </div>
    )
}