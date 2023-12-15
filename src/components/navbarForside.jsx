import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="invisible md:visible lg:visible w-full">
        <div className="flex justify-evenly text-black flex-row w-full">  
          <Link to="/ForsidePage">Forside</Link>
          <Link to="/BookRoom">Book et værelse</Link>
          <Link to="/">Book et bord</Link>
          <Link to="/bookselskab">Book et selskab</Link>
        </div>
      </nav>
    </>
  );
}