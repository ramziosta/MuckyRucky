import VideoPlayer from 'react-video-js-player';

export default function MyVideoPlayer() {
    return (
        <VideoPlayer
            src={"blob:https://artgrid.io/327ea108-0e99-46c3-b3a5-6b602d78589d"}
            width={320}
            height={240}
            controls={true}
            autoplay={true}
        />
    );
}