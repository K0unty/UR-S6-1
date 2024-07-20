import logo from "../assets/lo.gif";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactPanty</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
