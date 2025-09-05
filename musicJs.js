
// variable declaration...
let songlist=document.querySelectorAll(".songlist");
console.log(songlist.length);
let currentSong=new Audio("staticFiles/03 Shanivaar Raati - Main Tera Hero - 320Kbps.mp3");
console.log(currentSong);
let icons=document.querySelectorAll(".icons");
console.log(icons);
let rangeBar=document.querySelector(".range");
console.log(rangeBar);
let playIcon=document.querySelector("#playicon");
console.log(playIcon);

let previous=document.querySelector("#previous")
console.log(previous);

let forward=document.querySelector("#forward")
console.log(forward);

let sonListIcons=document.querySelectorAll(".songList-icon");
console.log(sonListIcons);

let songDuration=document.querySelectorAll(".songDuration");
console.log(songDuration);

let currentSongName=document.querySelector(".currentSongName");
console.log("hii",currentSongName)
console.log(songlist[0].children[0].innerText)

let searchBox=document.querySelector(".search-box").children[0];
searchBoxContainer=document.querySelector(".search-box");
let search=document.querySelector(".search-box").children[1];

console.log(search);

let settingMenu=document.querySelector(".setting-menu");

let settingMenu_1=document.querySelector(".setting-menu-1");
console.log(settingMenu_1.innerText)

let hams=document.querySelector(".ham");

let settings=document.querySelector(".settings");
console.log("abcd",settings)

let autoChange=document.querySelector(".auto-change");
console.log(autoChange.innerText)

let logo=document.querySelector(".logo")

let songlist1=document.querySelector(".songlist1");
let goBack=document.querySelector("#back");

let gif=document.querySelector(".gif")

let index=0;
let pindex=0;





window.addEventListener("load",(e)=>{
    rangeBar.value=0;  //this make rage bar to zero when page get loaded.
    searchBox.value="";

    songlist.forEach((song)=>{
        console.log(song.children[1])
        console.log(song.children[3].duration)
        let time=Number(song.children[3].duration)/60;
        let intTime=String(parseInt(time));
        let floatTime=String(Math.round((time-intTime)*60));

        console.log(time);
        console.log(intTime);
        console.log(floatTime);
        song.children[1].innerText=`${intTime}:${floatTime}`;
    });
});



const mediaQuery = window.matchMedia("(max-width: 603px)");

// Add click event listener
search.addEventListener("click", () => {
    if (mediaQuery.matches) {
        if (search.children[0].classList.contains("fa-magnifying-glass")) {
            logo.classList.add("disable1");
            settings.classList.add("disable2")
            searchBoxContainer.classList.remove("search-box");
            searchBoxContainer.classList.add("openSearch");
            search.children[0].classList.remove("fa-magnifying-glass");
            search.children[0].classList.add("fa-xmark");
        } else if (search.children[0].classList.contains("fa-xmark")) {
            searchBoxContainer.classList.remove("openSearch");
            searchBoxContainer.classList.add("search-box");
            logo.classList.remove("disable1")
            settings.classList.remove("disable2");
            search.children[0].classList.remove("fa-xmark");
            search.children[0].classList.add("fa-magnifying-glass");
            searchBox.value="";
        }
    }
});


hams.addEventListener("click",()=>{
    if(hams.classList.contains("fa-bars")){
        hams.classList.remove("fa-bars");
        hams.classList.add("fa-xmark");
        settings.classList.add("active");
        // settingMenu.children[0].innerText="songs";
        // settingMenu.children[1].innerText="your playlist";
        // settingMenu.children[2].innerText="create playlist";

        
    }
    else{
        hams.classList.remove("fa-xmark");
        hams.classList.add("fa-bars");
        // settingMenu.children[0].innerText="";
        // settingMenu.children[1].innerText=""; 
        // settingMenu.children[2].innerText="";
        settings.classList.remove("active");
    }
    console.log("abcd",settings)
});



searchBox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let match=false;
        songlist.forEach((song)=>{
            if(song.children[0].innerText.toLowerCase()===searchBox.value.toLowerCase()){
                song.style.display="flex";
                match=true;
            }
            else{
                song.style.display="none";
            }
        })
         songlist1.style.display = match ? "none" : "flex";
    }
});

goBack.addEventListener("click",()=>{
    songlist1.style.display="none";
    songlist.forEach((song)=>{
        song.style.display="flex";
        songlist1.style.display="none";
    })
    searchBox.value="";
})

    settingMenu_1.addEventListener("click",()=>{
        if(settingMenu_1.innerText==="songs"){
            songlist.forEach((song)=>{
                if(song.style.display="none"){
                    song.style.display="flex"

                }
            })
            searchBox.value="";
            songlist1.style.display="none" 
        }
    });

//initial currentsong name
currentSongName.innerText=songlist[0].children[0].innerText;


playIcon.addEventListener("click",()=>{
    if(currentSong.paused||currentSong.currentTime<=0){
        currentSong.play();

        songlist[index].style.backgroundColor="rgb(78,78,78)";
        pindex=index;

        gif.style.opacity="0.8";
        playIcon.classList.remove("fa-circle-play");
        playIcon.classList.add("fa-circle-pause");
        songlist[index].children[2].children[0].classList.remove("fa-circle-play");
        songlist[index].children[2].children[0].classList.add("fa-circle-pause"); 

    }
    else{
        currentSong.pause();
        gif.style.opacity="0.01";
        playIcon.classList.remove("fa-circle-pause");
        playIcon.classList.add("fa-circle-play"); 
    }
});

function changeAllPreviousIcon(){
    sonListIcons.forEach((icon)=>{
        icon.children[0].classList.remove("fa-circle-pause");
        icon.children[0].classList.add("fa-circle-play");
    });
}

songlist.forEach((song)=>{
    
    song.addEventListener("click",()=>{
        index=parseInt(song.id);
        console.log(index);
        currentSongName.innerText=song.children[0].innerText;
        changeAllPreviousIcon();
        song.children[2].children[0].classList.remove("fa-circle-play");
        song.children[2].children[0].classList.add("fa-circle-pause");
        currentSong.src=song.children[3].currentSrc; //change the url of currentSong
        console.log(currentSong);
        currentSong.currentTime=0;
        songlist[pindex].style.backgroundColor="rgb(36,35,35)";
        currentSong.play();
        songlist[index].style.backgroundColor="rgb(78,78,78)";
        pindex=index;
        gif.style.opacity="0.8";
        playIcon.classList.remove("fa-circle-play");
        playIcon.classList.add("fa-circle-pause")
    });
});


currentSong.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress=parseInt((currentSong.currentTime/currentSong.duration)*100);
    console.log(progress);
    rangeBar.value=progress;
    if(currentSong.ended){
        playIcon.classList.remove("fa-circle-pause");
        playIcon.classList.add("fa-circle-play");
    }
    
});
rangeBar.addEventListener("change",()=>{
    currentSong.currentTime=(rangeBar.value*currentSong.duration)/100;
    currentSong.play();
    gif.style.opacity="0.8";
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause");
});

previous.addEventListener("click",()=>{
    console.log("p",index);
    console.log(songlist[index]);
    if(index===0){
        index=songlist.length-1;
    }
    else{
        index--;
    }
    console.log("n",index);
    console.log(songlist[index].children[3]);
    console.log(songlist[index].children[3].currentSrc); changeAllPreviousIcon();
    songlist[index].children[2].children[0].classList.remove("fa-circle-play");
    songlist[index].children[2].children[0].classList.add("fa-circle-pause");
    currentSong.src=songlist[index].children[3].children[0].src; 
    //change the url of currentSong
    currentSong.currentTime=0;
    currentSongName.innerText=songlist[index].children[0].innerText;
    songlist[pindex].style.backgroundColor="rgb(36,35,35)";
    currentSong.play();
    songlist[index].style.backgroundColor="rgb(78,78,78)";
    pindex=index;
    gif.style.opacity="0.8";
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause")
    
});


forward.addEventListener("click",()=>{
    console.log("p",index);
    console.log(songlist[index]);
    if(index>=songlist.length-1){
        index=0;
    }
    else{
        index++;
    }
    console.log("n",index);
    console.log(songlist[index].children[3]);
    console.log(songlist[index].children[3].currentSrc); changeAllPreviousIcon();
    songlist[index].children[2].children[0].classList.remove("fa-circle-play");
    songlist[index].children[2].children[0].classList.add("fa-circle-pause");
    currentSong.src=songlist[index].children[3].children[0].src; 
    //change the url of currentSong
    currentSong.currentTime=0;
    currentSongName.innerText=songlist[index].children[0].innerText;
    songlist[pindex].style.backgroundColor="rgb(36,35,35)";
    currentSong.play();
    songlist[index].style.backgroundColor="rgb(78,78,78)";
    pindex=index;
    gif.style.opacity="0.8";
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause")
    
});

autoChange.addEventListener("click",()=>{
    if(autoChange.children[1].innerText=="1"){
        autoChange.children[1].innerText="A"
    }
    else{
        autoChange.children[1].innerText="1";
    }
})

currentSong.addEventListener("ended",()=>{
    if(autoChange.children[1].innerText=="A"){
        if(index>=songlist.length-1){
            index=0;
        }
        else{
            index++;
        }
        console.log(",......",index);
         changeAllPreviousIcon();
    songlist[index].children[2].children[0].classList.remove("fa-circle-play");
    songlist[index].children[2].children[0].classList.add("fa-circle-pause");
    currentSong.src=songlist[index].children[3].children[0].src; 
    //change the url of currentSong
    currentSong.currentTime=0;
    currentSongName.innerText=songlist[index].children[0].innerText;
    songlist[pindex].style.backgroundColor="rgb(36,35,35)";
    currentSong.play();
    songlist[index].style.backgroundColor="rgb(78,78,78)";
    pindex=index;
    gif.style.opacity="0.8";
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause");
        
    }
    else{
    currentSong.currentTime=0;
    console.log(".......",index)
    currentSongName.innerText=songlist[index].children[0].innerText;
    currentSong.play();
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause");
    }
});





