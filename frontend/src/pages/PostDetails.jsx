import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import Comments from '../components/Comments'

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className='px-8 md:px-[200px] mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl font-bold text-black md:text-3xl"> 10 uses of Artificial Intelligence</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 md:mt-4'>
                    <p>@hanzalaanees</p>
                    <div className="flex space-x-2 text-sm">
                        <p>10/1/2024</p>
                        <p>4:35</p>
                    </div>
                </div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp" alt="" className='w-full  mx-auto mt-8' />
                <p className="mx-auto mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, aliquam eius eveniet voluptatem vel quas? Repellat ipsum, doloremque maiores minus praesentium libero autem eius? Ducimus quaerat velit quasi repudiandae nam.
                </p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>
                        Categories:
                    </p>
                    <div className='flex justify-center items-center space-x-2'>
                        <div className='bg-gray-300 rounded-lg px-3 py-1'>
                            Tech
                        </div>
                        <div className='bg-gray-300 rounded-lg px-3 py-1'>
                            AI
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">Comments: </h3>
                    {/*comment*/}
                    <Comments />
                    <Comments />
                  
                </div>
                {/* write a comment */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
                    <button className=" rounded-xl bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostDetails
