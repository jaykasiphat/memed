import appIcon from "../assets/troll-face.png";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <img className="header--icon" src={appIcon} alt="troll face" />
        <h1 className="header--title">Memed</h1>
        <h2 className="header--subtitle">A Meme Generator</h2>
      </div>
    </header>
  );
}

export default Header;
