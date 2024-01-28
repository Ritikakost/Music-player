
document.addEventListener("DOMContentLoaded", function () {
    var searchMusicDiv = document.getElementById("searchMusicDiv");
    var searchButton = document.getElementById("searchbutton");
    var homebutton = document.getElementById("homebutton");

    searchButton.addEventListener("click", function () {


        searchMusicDiv.classList.remove("show-search-music");


    });

    homebutton.addEventListener("click", function () {


        searchMusicDiv.classList.add("show-search-music");


    });
});

let name=prompt("Enter your name");
let username=document.querySelector(".username");
username.innerText=name.charAt(0).toUpperCase();

let forward = document.querySelector(".forward");
let sidebar = document.querySelector(".sidebar");
forward.addEventListener("click", function () {
    sidebar.classList.remove("sidebar-shift");

})
let backward = document.querySelector(".home-backward");
backward.addEventListener("click", function () {
    sidebar.classList.add("sidebar-shift");
})
const search=()=>{
    const searchbox=document.getElementById("search-song").value.toUpperCase();
    const store_songs=document.getElementsByClassName("music-menu");
    const song=document.querySelectorAll(".songItem");
    const sname=document.getElementsByTagName("h5");
    for(var i=0;i<sname.length;i++){
        let match=song[i].getElementsByTagName('h5')[0];
        if(match){
           let text_value= match.textContent||match.innerHTML;
           if(text_value.toUpperCase().indexOf(searchbox)>-1){
            song[i].style.display="";
           }
           else{
            song[i].style.display="none";
           }
        }
    }

}

const music = new Audio("1.mp3");

//CREATE ARRAY
const songs = [
    {
        id: 1,
        songName: `Nasheeli Ankhein <br>
        <div class="subtitle">Sachet-Parampara</div>`,
        poster: "SONG1.jpg",
    },
    {
        id: 2,
        songName: `Deewane-hum-nhi-hote <br>
        <div class="subtitle">Aditya Yadav</div>`,
        poster: "SONG2.jpg",
    },
    {
        id: 3,
        songName: `Baby ko bass Pasand Hai <br>
        <div class="subtitle">Vishal Dadlani
            
        </div>`,
        poster: "SONG3.jpg",
    },
    {
        id: 4,
        songName: ` BILIONERA <br>
        <div class="subtitle">OtiliA Bruma</div>`,
        poster: "SONG4.jpg",
    },
    {
        id: 5,
        songName: `HUSN <br>
        <div class="subtitle">Anuv-Jain</div`,
        poster: "SONG5.jpg",
    },
    {
        id: 6,
        songName: `Kudi-Gujarat-DI<br>
        <div class="subtitle">Jasbir Jassi</div>`,
        poster: "SONG6.jpg",
    },
    {
        id: 7,
        songName: ` Hasi Ban Gye
        <div class="subtitle">Ami Mishra and Shreya Goshal</div>`,
        poster: "SONG7.jpg",
    },
    {
        id: 8,
        songName: `Humnava Mere<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "SONG8.jpg",
    },
    {
        id: 9,
        songName: `Nachenge Saari Raat<br>
        <div class="subtitle">Tulsi Kumar</div>`,
        poster: "SONG9.jpg",
    },
    {
        id: 10,
        songName: ` You are my Soniya<br>
        <div class="subtitle">Alka Yagnik and Sonu Nigham</div>`,
        poster: "SONG10.jpg",
    },
    {
        id: 11,
        songName: `Thoda Aur <br>
        <div class="subtitle">Arjit Singh and Palak Mucchal</div>`,
        poster: "SONG11.jpg",
    },
    {
        id: 12,
        songName: ` Ghar se Nikalte hi<br>
        <div class="subtitle">Amaal Malik</div>`,
        poster: "SONG12.jpg",
    },
    {
        id: 13,
        songName: `You are the light<br>
        <div class="subtitle">Sarah Hart</div> `,
        poster: "SONG13.jpg",
    },
    {
        id: 14,
        songName: `Heeriye<br>
        <div class="subtitle">Sachet-Parampara</div> `,
        poster: "SONG14.jpg",
    },
    {
        id: 15,
        songName: `Kaash Aisa Hota<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "SONG15.jpg",
    }]
Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})
let middle_pause = document.querySelector(".middle-pause");
let wave = document.querySelector(".wave");
middle_pause.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        middle_pause.classList.remove("fa-play");
        middle_pause.classList.add("fa-pause");
        wave.classList.add("active2");


    }
    else {
        music.pause();
        middle_pause.classList.add("fa-play");
        middle_pause.classList.remove("fa-pause");
        wave.classList.remove("active2");
    }
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("song-play")).forEach((element) => {


        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");


    })

}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((element) => {


        element.style.background = "rgb(105,105,170,0)";


    })

}

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("song-play")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.dir(e);
        index = e.target.id;

        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");


        /* const music=new Audio(`${index}.mp3`);*/
        music.src = (`${index}.mp3`);
        poster_master_play.src = `SONG${index}.jpg`;

        music.play();
        //check to which id matches the that song id
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })
        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;

        })
        middle_pause.classList.remove("fa-play");
        middle_pause.classList.add("fa-pause");
        wave.classList.add("active2");
        music.addEventListener("ended", () => {
            middle_pause.classList.add("fa-play");
            middle_pause.classList.remove("fa-pause");
            wave.classList.remove("active2");

        })
        makeAllBackgrounds();
        makeAllBorders();
        Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "#232323";
    })

})
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;
    let progress_bar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progress_bar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener("change", () => {
    music.currentTime = seek.value * music.duration / 100;
})
music.addEventListener("ended", () => {
    middle_pause.classList.add("fa-play");
    middle_pause.classList.remove("fa-pause");
    wave.classList.remove("active2");

})

let vol_icon = document.getElementById("fa-volume-low");
let vol = document.getElementById("volume");
let vol_dot = document.getElementById("vol-dot");
let vol_bar = document.getElementById("vol-bar3");

vol.addEventListener("change", () => {
    let vol_a = vol.value;

    // Update volume bar and dot positions
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    // Update music volume
    music.volume = vol_a / 100;

    // Update volume icon based on volume value
    if (vol_a === 0) {
        vol_icon.classList.remove("fa-volume-low", "fa-volume-high");
        vol_icon.classList.add("fa-volume-mute");
    } else if (vol_a > 50) {
        vol_icon.classList.remove("fa-volume-mute", "fa-volume-low");
        vol_icon.classList.add("fa-volume-high");
    } else {
        vol_icon.classList.remove("fa-volume-mute", "fa-volume-high");
        vol_icon.classList.add("fa-volume-low");
    }
});

let back = document.querySelector(".back");
let next = document.querySelector(".next");
back.addEventListener("click", () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;

    }
    music.src = (`${index}.mp3`);
    poster_master_play.src = `SONG${index}.jpg`;

    music.play();
    //check to which id matches the that song id
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;

    })
    makeAllPlays();
    makeAllBorders();
    document.getElementById(`${index}`).classList.remove("fa-play");
    document.getElementById(`${index}`).classList.add("fa-pause");
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "#232323";

})

next.addEventListener("click", () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 1;

    }
    music.src = (`${index}.mp3`);
    poster_master_play.src = `SONG${index}.jpg`;

    music.play();
    //check to which id matches the that song id
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;

    })
    makeAllPlays();
    makeAllBorders();
    document.getElementById(`${index}`).classList.remove("fa-play");
    document.getElementById(`${index}`).classList.add("fa-pause");
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "#232323";

})

const card_songs = [
    {
        id: 16,
        songName: `Mahiye Jinna Sonha <br>
    <div class="subtitle">Darshan Raval</div>`,
        poster: "card16img.jpg",
    },
    {
        id: 17,
        songName: `Awaara Shaam Hai <br>
    <div class="subtitle">Piyush Mehroliya</div>`,
        poster: "card17img.jpg",
    },
    {
        id: 18,
        songName: `NAA Ready <br>
    <div class="subtitle">Thalapathy Vijay</div>`,
        poster: "card18img.jpg",
    },
    {
        id: 19,
        songName: `Tujhe Bhula Diya <br>
    <div class="subtitle">Mohit Chauhan</div>`,
        poster: "card19img.jpg",
    },
    {
        id: 20,
        songName: `Asal Mein <br>
    <div class="subtitle">Darshan Raval</div>`,
        poster: "card20img.jpg",
    },
]
Array.from(document.getElementsByClassName("cardsongs")).forEach((element, i) => {
    element.id = `${card_songs[i].id}`;
    element.getElementsByClassName("card-img")[0].src = card_songs[i].poster;
    element.getElementsByClassName("card-title")[0].innerHTML = card_songs[i].songName;
})
const makeAllBorders = () => {
    Array.from(document.getElementsByClassName("cardsongs")).forEach((element) => {


        element.style.border = "none";


    })

}
Array.from(document.getElementsByClassName("cardsongs")).forEach((element, i) => {
    element.addEventListener("click", (e) => {
        console.dir(e);
        index = e.target.id;

        makeAllPlays();
        makeAllBackgrounds();




        music.src = (`${index}.mp3`);
        poster_master_play.src = `card${index}img.jpg`;

        music.play();
        //check to which id matches the that song id
        let song_title = card_songs.filter((ele) => {
            return ele.id == index;
        })
        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;

        })

        middle_pause.classList.remove("fa-play");
        middle_pause.classList.add("fa-pause");
        wave.classList.add("active2");
        music.addEventListener("ended", () => {
            middle_pause.classList.add("fa-play");
            middle_pause.classList.remove("fa-pause");
            wave.classList.remove("active2");

        })
        makeAllBorders();
        Array.from(document.getElementsByClassName("cardsongs"))[`${index-16}`].style.border="2px solid white";
    })
})




