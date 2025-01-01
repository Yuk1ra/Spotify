var buttons = document.getElementsByClassName('sidebarbutton');
var playlists = document.getElementsByClassName('playlists')[0];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", sidebarOpen);
}

function sidebarOpen() {
    playlists.style.display = "flex";
}
