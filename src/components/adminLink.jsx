import { Link } from "react-router-dom"
export default function AdminLink() {
    return (
        <>
       <div className="flex justify-center items-center w-full mt-4">
       <button className="w-1/3 bg-[#653535] rounded text-white">
       <Link to="/AdminLoginPage">Admin Login KUN for medarbejdere</Link>
       </button>
       </div>
        </>
    )
};