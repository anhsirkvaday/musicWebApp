const songs = [
    {
        img: 'https://i0.wp.com/gchord.in/wp-content/uploads/2022/07/x1080.jpg',
        artistName: 'Arijit Singh',
        songName: 'Phir Bhi Tumko Chaahunga',
        filePath: 'songs/Phir Bhi Tumko Chaahunga - Arijit Singh.mp3',
      },
      {
        img: 'https://e1.pxfuel.com/desktop-wallpaper/967/19/desktop-wallpaper-aashiqui-2-movie-hq-aashiqui-2-tum-hi-ho-thumbnail.jpg',
        artistName: 'Arijit Singh',
        songName: 'Tum HI Ho',
        filePath: 'songs/Tum Hi Ho.mp3',
      },
      {
        img: 'https://www.billboard.com/wp-content/uploads/2023/01/rema-selena-gomez-cr-courtesy-of-rema-2022-billboard-1548.jpg',
        artistName: 'Rema, Selena Gomez',
        songName: 'Calm Down',
        filePath: 'songs/Rema, Selena Gomez - Calm Down.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/BC19kwABFwc/maxresdefault.jpg',
        artistName: 'Dua Lipa',
        songName: 'Love Again',
        filePath: 'songs/Dua Lipa - Love Again.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/ixdov26hzr4/maxresdefault.jpg',
        artistName: 'Arijit Singh',
        songName: 'Baaton Ko Teri',
        filePath: 'songs/Baaton Ko Teri_Arijit Singh.mp3',
      },
      {
        img: 'https://imgix.bustle.com/nylon/18431512/origin.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg',
        artistName: 'Dua Lipa',
        songName: 'New Rules',
        filePath: 'songs/Dua Lipa - New Rules.mp3',
      },
      {
        img: 'https://www.filmibeat.com/img/2014/06/11-1402507557-television-02.jpg',
        artistName: 'Rahat Fateh Ali Khan',
        songName: 'Zaroori Tha',
        filePath: 'songs/Rahat Fateh Ali Khan - Zaroori Tha.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/H7_yY3yr-jE/maxresdefault.jpg',
        artistName: 'GARRY SANDHU -JASMINE SANDLAS',
        songName: 'ILLEGAL WEAPON',
        filePath: 'songs/ILLEGAL WEAPON _ GARRY SANDHU -JASMINE SANDLAS.mp3',
      },
      {
        img: 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2019/11/26/461973-lead.jpg',
        artistName: 'Jubin N',
        songName: 'Tum Hi Aana',
        filePath: 'songs/Tum Hi Aana.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/WfJhvXSxDHs/maxresdefault.jpg',
        artistName: 'Stebin Ben',
        songName: 'Thoda Thoda Pyaar',
        filePath: 'songs/Thoda Thoda Pyaar Stebin Ben 128 Kbps.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/vBikdxWaaqU/maxresdefault.jpg',
        artistName: 'Meet Bros',
        songName: 'Aawara Shaam Hai',
        filePath: 'songs/Aawara Shaam Hai Meet Bros 128 Kbps.mp3',
      },
      {
        img: 'https://m.media-amazon.com/images/M/MV5BMmZkNGZkOWYtNmU4Ni00NGZkLTgzNDQtNjI0MzlhOTk3ZTQwXkEyXkFqcGdeQXVyMTE2MTc3MzU1._V1_.jpg',
        artistName: 'Jubin Nautiyal',
        songName: 'Meri Aashiqui',
        filePath: 'songs/Meri Aashiqui Jubin Nautiyal 128 Kbps.mp3',
      },
      {
        img: 'https://static.india.com/wp-content/uploads/2015/11/hrithik-and-sonam-in-dheere-dheere.jpg?impolicy=Medium_Resize&w=1200&h=800',
        artistName: 'Yo Yo Honey Singh',
        songName: 'Dheere Dheere',
        filePath: 'songs/Dheere Dheere Yo Yo Honey Singh 128 Kbps.mp3',
      },
      {
        img: 'https://i.ytimg.com/vi/EgQTDaASO2I/maxresdefault.jpg',
        artistName: 'Ramaiya Vastavaiya',
        songName: 'Jeene Laga Hoon',
        filePath: 'songs/Jeene Laga Hoon Ramaiya Vastavaiya 128 Kbps.mp3',
      },
];



let songProgressBar=document.getElementById('songProgressBar');
let playSong=document.getElementById('playSong');
let audioElement = new Audio('songs/Phir Bhi Tumko Chaahunga - Arijit Singh.mp3');
let playingGif=document.getElementById('playingGif');
let printCurrentTime=document.getElementById('currTime');
let printRemainsTime=document.getElementById('remainsTime');
let songsList=document.getElementById('songsList');
let songPoster=document.getElementById('songPoster');
let songName=document.getElementById('songName');
let artistName=document.getElementById('artistName');
let searchSongs=document.getElementById('searchSongs');
let songIndex=0;
window.addEventListener('load',()=>{
    // console.log('Window loaded');
    songs.forEach((song) => {
        let listEle=document.createElement('li');
        listEle.id='songNum'+songIndex;
        for(let songDetails in song){
            if(songDetails==='img'){
                let imgEle=document.createElement('img');
                imgEle.src=song[songDetails]; 
                listEle.appendChild(imgEle);
            }
            else if(songDetails==='songName'){
                let spanEle=document.createElement('span');
                spanEle.innerText=song[songDetails];
                listEle.appendChild(spanEle);
            }
            else if(songDetails==='filePath'){
                let iEle=document.createElement('i');
                iEle.className="play fa-regular fa-circle-play";
                iEle.id="song"+songIndex;
                let gifImg=document.createElement('img');
                gifImg.className='smallPlayingGif';
                gifImg.src='Rainbow_Soundwave.wecp';
                listEle.appendChild(gifImg);
                iEle.addEventListener('click',()=>{
                    playPauseSong(iEle.id);
                    iEle.classList.remove('fa-circle-play');
                    iEle.classList.add('fa-circle-pause');
                    playSong.classList.remove('fa-circle-play');
                    playSong.classList.add('fa-circle-pause');
                    playingGif.style.opacity=1;
                    
                })
                listEle.appendChild(iEle);
            }
        }
        songsList.appendChild(listEle);
        songIndex++;
    });
});





const playPauseSong = (id)=>{
    songIndex=parseInt(id.slice(4,id.length))
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    Array.from(document.querySelectorAll('.songsList ul li')).forEach((element)=>{
        element.style.boxShadow='0px 1px 1px 0px rgb(96, 96, 96)';
    })
    songPoster.src=songs[parseInt(id.slice(4,id.length))].img;
    songName.innerText=songs[parseInt(id.slice(4,id.length))].songName;
    artistName.innerText=songs[parseInt(id.slice(4,id.length))].artistName;
    audioElement.src=songs[parseInt(id.slice(4,id.length))].filePath;
    console.log(songIndex);
    audioElement.play();
    console.log('Song Number: '+songIndex);
    document.getElementById('songNum'+songIndex).style.boxShadow='0px 2px 2px 0px rgb(44, 44, 44)';
    
};

document.getElementById('forward').addEventListener('click',()=>{
    if(songs.length==songIndex || songIndex>songs.length){
        songIndex=0;
        audioElement.src=songs[songIndex].filePath;
    }
    else if(songIndex<=songs.length){
        songIndex++;
        audioElement.src=songs[songIndex].filePath;
    }
    else{
        songIndex=0;
    }
    audioElement.play();
    playSong.classList.remove('fa-circle-play');
    playSong.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
    document.getElementById("song"+songIndex).classList.add('fa-circle-pause');
    songPoster.src=songs[songIndex].img;
    songName.innerText=songs[songIndex].songName;
    artistName.innerText=songs[songIndex].artistName;
    Array.from(document.querySelectorAll('.songsList ul li')).forEach((element)=>{
        element.style.boxShadow='0px 1px 1px 0px rgb(96, 96, 96)';
    })
    document.getElementById('songNum'+songIndex).style.boxShadow='0px 2px 2px 0px rgb(44, 44, 44)';
    console.log('Song Number: '+songIndex);
});

document.getElementById('backward').addEventListener('click',()=>{
    if(songIndex==songs.length){
        audioElement.src=songs[songIndex-1].filePath;
        songIndex--;
    }
    else if(songIndex>0){
        songIndex--;
        audioElement.src=songs[songIndex].filePath;
    }
    else{
        songIndex=songs.length;
    }
    audioElement.play();
    playSong.classList.remove('fa-circle-play');
    playSong.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
    document.getElementById("song"+songIndex).classList.add('fa-circle-pause');
    songPoster.src=songs[songIndex].img;
    songName.innerText=songs[songIndex].songName;
    artistName.innerText=songs[songIndex].artistName;
    Array.from(document.querySelectorAll('.songsList ul li')).forEach((element)=>{
        element.style.boxShadow='0px 1px 1px 0px rgb(96, 96, 96)';
    })
    document.getElementById('songNum'+songIndex).style.boxShadow='0px 2px 2px 0px rgb(44, 44, 44)';
    console.log('Song Number: '+songIndex);
});

playSong.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        playSong.classList.remove('fa-circle-play');
        playSong.classList.add('fa-circle-pause');
        playingGif.style.opacity=1;
    }
    else{
        audioElement.pause();
        playSong.classList.remove('fa-circle-pause');
        playSong.classList.add('fa-circle-play');
        playingGif.style.opacity=0;
    }
});

let timeCounter=0;
let secondsCounter=(time)=>{
    if(time<=60){
        timeCounter= parseInt(time);
    }
    else{
        timeCounter= parseInt(time-(60*parseInt(audioElement.currentTime/60)));
    }
};

audioElement.addEventListener('timeupdate',()=>{
    let updateProgress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    songProgressBar.value=updateProgress;
    printRemainsTime.innerText=`${parseInt(audioElement.duration/60)}:${parseFloat((audioElement.duration/60)*10).toFixed(0)}`;

    secondsCounter(audioElement.currentTime);
        if(timeCounter<10){
            printCurrentTime.innerText=`${parseInt(audioElement.currentTime/60)}:0${timeCounter}`;
        }
        else if(timeCounter>9){
            printCurrentTime.innerText=`${parseInt(audioElement.currentTime/60)}:${timeCounter}`;
        }
    
    if(audioElement.currentTime==audioElement.duration){
        if(songs.length==songIndex || songIndex>songs.length){
            songIndex=0;
            audioElement.src=songs[songIndex].filePath;
        }
        else if(songIndex<=songs.length){
            songIndex++;
            audioElement.src=songs[songIndex].filePath;
        }
        else{
            songIndex=0;
        }
        audioElement.play();
        playSong.classList.remove('fa-circle-play');
        playSong.classList.add('fa-circle-pause');
        Array.from(document.getElementsByClassName('play')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        });
        document.getElementById("song"+songIndex).classList.add('fa-circle-pause');
        songPoster.src=songs[songIndex].img;
        songName.innerText=songs[songIndex].songName;
        artistName.innerText=songs[songIndex].artistName;
        Array.from(document.querySelectorAll('.songsList ul li')).forEach((element)=>{
            element.style.boxShadow='0px 1px 1px 0px rgb(96, 96, 96)';
        })
        document.getElementById('songNum'+songIndex).style.boxShadow='0px 2px 2px 0px rgb(44, 44, 44)';
    }
});

songProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=songProgressBar.value*audioElement.duration/100;
});











