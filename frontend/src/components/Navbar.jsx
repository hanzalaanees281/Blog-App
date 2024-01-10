import {Link} from "react-router-dom"
import {CiSearch} from "react-icons/ci"

const Navbar = () => {
  const user = true
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">My Blog App</Link></h1>
      <div className="flex justify-center items-center space-x-0">
        <p><CiSearch /></p>
        <input className="outline-none px-3" type="text" placeholder="Search a post"/>

      </div>
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? <h3><Link to="/write">Create Post</Link></h3> : <h3><Link to="/login">login</Link></h3>}
        {user ? <h3>Profile</h3> : <h3><Link to="/signup">signup</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar
