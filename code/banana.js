var videoshow = require('../')

var video_output = 'output/banana.mp4';

var songs = [
  __dirname + '/output/banana.mp3',
];

var images = [
  {
    path: __dirname + '/data/banana.jpg',
    caption: 'banana [E] /bəˈnɑːnə/',
    captionStart: 0,
    captionEnd: 2
  },
  {
    path: __dirname + '/data/banana2.jpg',
    caption: 'banana [A] /bəˈnɑːnə/',
  }
];

var audio_options = {
  delay : 0,
  fade: false
};

var options = {
  loop: 4,// seconds
  captionDelay: 1,
  transitionDuration: 0, // seconds
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
  .save(video_output)
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
