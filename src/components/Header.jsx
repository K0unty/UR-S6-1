import logo from "../assets/lo.gif";
// import classes from "./Header.module.css";

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     border-radius: 100px;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//     transition: transform 1.5s ease-in-out;
//     cursor: pointer;
//   }

//   & img:hover {
//     transform: scale(2);
//   }
//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }

//   @media (min-width: 768px) {
//     margin-bottom: 4rem;

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactPanty
      </h1>
      <p className="text-lime-500">A community of ass and pussy-lovers.</p>
    </header>
  );
}
