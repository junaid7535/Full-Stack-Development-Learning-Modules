import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <nav className="ml-4 flex gap-4 text-lg font-semibold text-gray-600">
            <Link to='/'>Dashboard</Link>
            <Link to="/add-job">Add Job</Link>
            
        </nav>
    )

}

export default Navbar