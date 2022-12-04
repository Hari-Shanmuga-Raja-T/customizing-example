import logo from './assets/logo.svg';
import ReactPlayer from "react-player/youtube";
import AudioPlayer from './components/AudioPlay';


const SetBackground = props => {
  const bird1 = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3';
  const bird2 = 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3';
  const sampleImage = 'https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg';
  
  return(
    <>
      <h1>{props.mode ? 'Dark' : 'Light' } Mode is turned ON</h1>
      <img 
        src={logo}
        height={200}
      />
      <img 
        src={require("./assets/logo2.jpg")}
        height={200}
        alt='Logo 2'
      />
      <img
        src={sampleImage}
        height={200}
      />
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <AudioPlayer url={bird1} btnName={'Audio1'}/>
      <AudioPlayer url={bird2} btnName={'Audio2'}/>
    </>
  );
}

export default SetBackground
