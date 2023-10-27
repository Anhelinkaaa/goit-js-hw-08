import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle')


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(onplay, 1000));



function onplay(seconds) {
    localStorage.setItem(LOCAL_KEY, seconds.seconds);
};

if (localStorage.getItem(LOCAL_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCAL_KEY))
};

// player.setCurrentTime(localStorage.getItem(LOCAL_KEY))

