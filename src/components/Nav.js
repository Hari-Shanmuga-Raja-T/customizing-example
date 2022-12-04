import img1 from "./img1.jpg";

const Logo = () => <img src={img1}/>

const clicked = () => console.log("Amukkitan")

function Nav(props) {
  return (
    // <nav className="main-nav">
    //   <ul>
    //     <li>Home</li>
    //     <li>Articles</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </ul>
    // </nav>
    <>
      {/* <h1 style={{color: "black"}}>Howdy all, my name is {props.fullName || 'Developer'}, you can call me {props.nickName || 'Dev'} </h1>   */}
      {/* <Logo/> */}
      <button onClick={clicked}>Amukku da</button>
    </>
  );
}

export default Nav;
