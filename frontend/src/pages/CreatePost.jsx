import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ImCross } from "react-icons/im"


const CreatePost = () => {

 const [cat, setCat] = useState("")
 const [cats, setCats] = useState([])

const addCategory = () => {
  let updateCats = [...cats]
  updateCats.push(cat)
  setCat("")
  setCats(updateCats)
}

const deleteCategory = (i) => {
  let updateCats = [...cats]
  updateCats.splice(i)
  setCats(updateCats)
}

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input type="text" placeholder='Enter post title' className='rounded-xl px-4 py-2' />
          <input type="file" className='px-4' />
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
              <input value={cat} onChange={(e) => setCat(e.target.value)} className='px-4 py-2 rounded-xl' placeholder='Enter post category' type="text" />
              <div onClick={addCategory} className='rounded-xl bg-black text-white px-6 py-2 font-semibold cursor-pointer'>Add</div>
            </div>
            {/*categories*/}
            <div className="flex px-4 mt-3">
              {cats?.map((c, i) => (
                <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                <p>{c}</p>
                <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
              </div>
              ))}
              
             
            </div>

          </div>

          <textarea rows={5} cols={30} className='px-4 py-2 rounded-xl' placeholder='Enter post description'/>
          <button className=' rounded-xl bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create Post</button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default CreatePost