var videoshow = require('../')

var songs = [
  __dirname + '/output/apple.mp3',
  __dirname + '/data/apple__gb_1.mp3',
  __dirname + '/data/banana__gb_2.mp3',
  __dirname + '/data/peach__gb_2.mp3',
  __dirname + '/data/tayberry__gb_1.mp3',
];
var images = [
  {
    path: __dirname + '/data/img-1.jpg',
    caption: 'Apple [E] /ˈæpl/',
    // loop: 2,
    // captionStart: 1,
    captionEnd: 2
  },
  {
    path: __dirname + '/data/img-1.jpg',
    caption: 'Apple [A] /ˈæpl/',
    // loop: 2,
    // captionStart: 2,
    // captionEnd: 3
  }
];

var audio_options = {
  delay : 0,
  fade: false
};

var options = {
  loop: 4,// seconds
  captionDelay: 350,
  transitionDuration: 1, // seconds
  transition: false,

  fps: 25,
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '360x?',
  audioBitrate: '128k',
  audioChannels: 2,
  format: 'mp4',
  pixelFormat: 'yuv420p',
  useSubRipSubtitles: false,

  subtitleStyle: {
    Fontname: 'Verdana',
    Fontsize: '26',
    PrimaryColour: '11861244',
    SecondaryColour: '11861244',
    TertiaryColour: '11861244',
    BackColour: '-2147483640',
    Bold: '2',
    Italic: '0',
    BorderStyle: '2',
    Outline: '2',
    Shadow: '3',
    Alignment: '1', // left, middle, right
    MarginL: '40',
    MarginR: '60',
    MarginV: '40'
  }
};

videoshow(images, options)
  .audio(songs[0],audio_options)
  .save('output/video_'+new Date().getTime()+'.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
