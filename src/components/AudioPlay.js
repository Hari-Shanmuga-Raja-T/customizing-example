const AudioPlay = props => {
  const audioFile = new Audio(props.url)

  const toggleMusic = () => {
    audioFile.paused ? audioFile.play() : audioFile.pause();
  }

  return(
    <button onClick={toggleMusic}>
      {props.btnName}
    </button>
  );

}

export default AudioPlay
