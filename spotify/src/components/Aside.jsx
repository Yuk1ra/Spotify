let playlists = [1, 2, 3, 4, 5];

function Playlist({ number }) {
    return (
        <div>
            <a>This is Playlist № {number}</a>
        </div>
    );
}

export default function Aside() {
    return (
        <aside>
            {playlists.map((playlistNumber, index) => (
                <div id="playlistdiv" key={index}>
                    <Playlist number={playlistNumber} />
                </div>
            ))}
        </aside>
    );
}
