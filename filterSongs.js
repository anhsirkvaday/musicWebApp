
let filteredData = [];
let filterSongNames = '';
searchSongs.addEventListener('input', () => {
    filteredData.splice(0, filteredData.length);
    let fetchData = songs.filter((songInfo) => songInfo.songName.toLowerCase().includes(searchSongs.value.toLowerCase()));
    filteredData.push(fetchData);
    document.getElementById('songsList').innerHTML = '';
    songIndex = 0;
    printFilteredData();
})

const printFilteredData = () => {
    filteredData.forEach((songCount) => {
        songCount.forEach((song) => {
            let listEle = document.createElement('li');
            listEle.id = 'songNum' + songIndex;
            for (let songDetails in song) {
                if (songDetails === 'img') {
                    let imgEle = document.createElement('img');
                    imgEle.src = song[songDetails];
                    listEle.appendChild(imgEle);
                }
                else if (songDetails === 'songName') {
                    let spanEle = document.createElement('span');
                    spanEle.innerText = song[songDetails];
                    listEle.appendChild(spanEle);
                }
                else if (songDetails === 'filePath') {
                    let iEle = document.createElement('i');
                    iEle.className = "play fa-regular fa-circle-play";
                    iEle.id = "song" + songIndex;
                    let gifImg = document.createElement('img');
                    gifImg.className = 'smallPlayingGif';
                    gifImg.src = 'Rainbow_Soundwave.wecp';
                    listEle.appendChild(gifImg);
                    iEle.addEventListener('click', () => {
                        filteredPlayPauseSong(iEle.id,song);
                        iEle.classList.remove('fa-circle-play');
                        iEle.classList.add('fa-circle-pause');
                        playSong.classList.remove('fa-circle-play');
                        playSong.classList.add('fa-circle-pause');
                        playingGif.style.opacity = 1;

                    })
                    listEle.appendChild(iEle);
                }
            }
            songsList.appendChild(listEle);
            songIndex++;
        });
    });
    console.log(songIndex);
}
const filteredPlayPauseSong = (id,song)=>{
    songIndex=parseInt(id.slice(4,id.length))
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    Array.from(document.querySelectorAll('.songsList ul li')).forEach((element)=>{
        element.style.boxShadow='0px 1px 1px 0px rgb(96, 96, 96)';
    })
    songPoster.src=song.img;
    songName.innerText=song.songName;
    artistName.innerText=song.artistName;
    audioElement.src=song.filePath;
    console.log(songIndex);
    audioElement.play();
    console.log('Song Number: '+songIndex);
    document.getElementById('songNum'+songIndex).style.boxShadow='0px 2px 2px 0px rgb(44, 44, 44)';
};