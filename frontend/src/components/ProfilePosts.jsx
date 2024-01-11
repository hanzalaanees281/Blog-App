

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">

    {/* left */}

    <div className="w-[35%] h-[200px] flex justify-center items-center">
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp" alt="" className="h-full w-full object-cover" />
    </div>

    {/* right */}

    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        10 uses of Artificial Intelligence
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@hanzalaanees</p>
        <div className="flex space-x-2 text-sm">
          <p>10/1/2024</p>
          <p>4:35</p>
        </div>
      </div>
      <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate nulla, voluptatem dicta maxime possimus nobis at vitae alias expedita.</p>
    </div>
  </div>
  )
}

export default ProfilePosts
