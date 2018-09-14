ffmpeg -i data/apple__gb_1.mp3 -i data/banana__gb_2.mp3 -filter_complex amerge -ac 2 -c:a libmp3lame -q:a 4 output/output.mp3

ffmpeg -i data/banana__gb_2.mp3 -i blank-audio-master/2-seconds-of-silence.mp3 -filter_complex amerge -ac 2 -c:a libmp3lame -q:a 4 output.mp3

ffmpeg -y -i apple__gb_1.mp3 -i banana__gb_2.mp3 -filter_complex "[0:0][1:0] amix=inputs=2:duration=longest" -c:a libmp3lame outputnow.mp3


ffmpeg -i data/banana__gb_2.mp3 -i blank/1-second-of-silence.mp3 -i data/apple__us_1.mp3 -filter_complex amerge -c:a libmp3lame output/apple_out.mp3


ffmpeg -f concat -safe 0 -i data/banana__gb_2.mp3 -i blank/1-second-of-silence.mp3 -i data/apple__us_1.mp3 -c copy output


ffmpeg -y -i "concat:blank-mp3s/1sec.mp3|data/apple__gb_1.mp3|blank-mp3s/3sec.mp3|data/apple__us_1.mp3" -c copy output/apple.mp3

ffmpeg -y -i "concat:blank-mp3s/1sec.mp3|data/banana__gb_2.mp3|blank-mp3s/3sec.mp3|data/banana__us_1.mp3" -c copy output/banana.mp3

ffmpeg -y -i "concat:output/video_1536920006510.mp4|output/video_1536921442678.mp4" -codec copy output/video_2.mp4

ffmpeg -y -f concat -i videos.txt -c copy output/video_2.mp4