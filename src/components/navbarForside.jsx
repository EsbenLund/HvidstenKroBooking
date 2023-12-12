import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex items-center text-black">
          <ul className="flex flex-row">
          <li><Link to="/ForsidePage">Forside</Link></li>
          <li><Link to="/">Book et værelse</Link></li>
          <li><Link to="/">Book et bord</Link></li>
          <li><Link to="/">Book et selskab</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}