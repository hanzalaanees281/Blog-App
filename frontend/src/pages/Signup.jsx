import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const Signup = () => {
    return (
        <>
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">My Blog App</Link></h1>
                <h3><Link to="/login">Login</Link></h3>
            </div>
            <div className="w-full flex justify-center items-center h-[90vh] ">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Create an Account</h1>
                    <input className="w-full px-4 py-2 rounded-xl border-2 border-black outline-0" type="text" placeholder="Enter your Name" />
                    <input className="w-full px-4 py-2 rounded-xl border-2 border-black outline-0" type="text" placeholder="Enter your email" />
                    <input className="w-full px-4 py-2 border-2 rounded-xl border-black outline-0" type="password" placeholder="Enter your password" />
                    <button className="w-full px-2 py-2 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black ">Sign up</button>
                    {/* <h3 className="text-red-500 text-sm ">Something went wrong</h3> */}
                    <div className="flex justify-center items-center space-x-3">
                        <p>Already have an Account?</p>
                        <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup
