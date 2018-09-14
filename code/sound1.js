var audioconcat = require('audioconcat')

var songs = [
  __dirname + '/data/apple__gb_1.mp3',
  __dirname + '/data/apple__us_1.mp3',
];

audioconcat(songs)
  .concat(__dirname + '/output/apple.mp3')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Audio created in:', output)
  });
