
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PostDetails from "./pages/PostDetails"

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
      </Routes>
     
    </div>
  )
}

export default App
