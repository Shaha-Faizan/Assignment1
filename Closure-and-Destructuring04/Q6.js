// Task 1: Create a function that initializes a playlist
function createPlaylist(playlistName) {
    
    let songs = [];

    
    return {
        
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },

        
        listSongs: function() {
            return songs;
        }
    };
}


let playlists = {};

// Task 2: Function to add a song to a specified playlist
function addSong(playlistName, songName, artist) {
    if (playlists[playlistName]) {
        playlists[playlistName].addSong(songName, artist);
    } else {
        console.log('Playlist not found.');
    }
}

// Task 3: Function to list all songs in a specified playlist
function listSongs(playlistName) {
    if (playlists[playlistName]) {
        return playlists[playlistName].listSongs();
    } else {
        console.log('Playlist not found.');
        return [];
    }
}



// Create a playlist
playlists['Rock Classics'] = createPlaylist('Rock Classics');
playlists['Hip hop'] = createPlaylist('Hip hop')

// Add songs to the playlist
addSong('Rock Classics', 'Bohemian Rhapsody', 'Queen');
addSong('Rock Classics', 'Stairway to Heaven', 'Led Zeppelin');
addSong('Hip hop', 'Unstopeble', ' Dino James');

// List songs in the playlist
console.log(listSongs('Rock Classics'));
console.log(listSongs('Hip hop'));

