let songs = [
    {
        title: "Ammayi Ammayi",
        movie: "Animal",
        audio: "songs/e.mp3",
        image: "pho/animal.jpg"
    },
    {
    title: "Sooreede",
        movie: "Salar",
        audio: "songs/s.mp3",
        image: "pho/salar.jpg"
    },
    
];


let currentsongindex=0;
let songimg=document.getElementById("img-song")
let movie=document.getElementById("song-title")
let name1=document.getElementById("name1")
let progress=document.getElementById("progress")
    let song=document.getElementById("song")
    let rl=document.getElementById("icon")

    function loadsong(index){
        let currentsong=songs[index];
        song.src=currentsong.audio;
        songimg.src=currentsong.image;
        movie.innerText=currentsong.title;
        name1.innerText=currentsong.movie;
        progress.value=0
        song.play()
    }

    // song.onloadedmetadata=function(){
    //     progress.max=song.duration;
    //     progress.value=song.currentTime

    // }

     function playpause(){
        if(rl.classList.contains("fa-pause")){
            song.pause();
            rl.classList.remove("fa-pause")
            rl.classList.add("fa-play")
            
        }else{
            song.play()
            rl.classList.add("fa-pause")
            rl.classList.remove("fa-play")
        }
     }
    //  if (song.play()){
    //     setInterval(() => {
    //         progress.value=song.currentTime;
    //     },500);

    //  }
//  progress.onchange=function(){
//     song.play();
//     song.currentTime=progress.value;
//     rl.classList.add("fa-pause")
//     rl.classList.remove("fa-play")

//  }
function playnext(){
    currentsongindex=(currentsongindex+1)%songs.length
    loadsong(currentsongindex)
}

function playPrevious(){
    currentsongindex=(currentsongindex-1)%songs.length
    loadsong(currentsongindex);
}

song.addEventListener("timeupdate",function(){
    progress.value=song.currentTime
})
progress.addEventListener("change", function() {
    song.currentTime = progress.value;
});

song.addEventListener("ended", function() {
    playNext();
});

