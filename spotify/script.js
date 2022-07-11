console.log("Hello songs world");
let songIndex=0;
let audioElement = new Audio('songs/2.mp3');

//audioElement.play();
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:"songs/10.jpg"},
   {songName: "subhanallah", filePath: "songs/3.mp3", coverPath:"songs/2.jpg"},
   {songName: "spiderman", filePath: "songs/4.mp3", coverPath:"songs/3.jpg"},
    {songName: "ishq-me-marjava", filePath: "songs/4.mp3", coverPath:"songs/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath:"songs/5.jpg"},
    {songName: "spiderman", filePath: "songs/6.mp3", coverPath:"songs/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/7.mp3", coverPath:"songs/7.jpg"},
    {songName: "subhanallah", filePath: "songs/8.mp3", coverPath:"songs/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/9.mp3", coverPath:"songs/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/10.mp3", coverPath:"songs/4.jpg"},
]
/*masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime==0){
       audioElement.play();
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})*/

//audioElement.play()//
songItems.forEach((element, i)=>{ 
   //console.log(element, i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//handel play/pauseclick//
 masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;  //on clicking gif gets disappear//
    }
    else{
       audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity =0;
}
})
//Listen to events*/
audioElement.addEventListener('timeupdate',()=>{
 //update seekbar
    //console.log('timeupdate');
   progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    //console.log(e.target);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})