
// When mode is true, then dark mode is considered as ON
// When mode is false, then lght mode is considered as ON 

const LightMode = () => {
  return(
    <h1>Light Mode is ON</h1>
  );
} 

const DarkMode = () => {
  return(
    <h1>Dark Mode is ON</h1>
  );
} 

const ModeToggler = props => {

  const ModeTransfer = () => {
    props.setMode(!props.mode)
  }

  return (
    <>
      <button onClick={ModeTransfer}>
        { props.mode ?  'Go light mode': 'Go dark mode' }
      </button>
      { props.mode ? <LightMode/> : <DarkMode/> }
    </>
  )

  // const GuessRandom = () => {
  //   let randomNum = Math.floor(Math.random() * 3) + 1;
  //   let userInput = prompt('type a number'); 
  //   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  // }

  // return (
  //   <button onClick={GuessRandom}>
  //     Guess a number between 1 and 3
  //   </button>
  // )
}


export default ModeToggler