
export default function Story() {
  return (

    <div className="flex justify-center items-center h-[700px]">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="rounded-full"
            src="./image.jpg" 
            alt="Round Photo"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-purple-950 p-12 shadow-lg w-full max-w-2xl">
          <h2 className="pb-5 text-white text-2xl font-bold mb-2">Be the first to test</h2>
          <p className="text-white mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum dignissimos deserunt perspiciatis dolore, tenetur quae? Porro, nesciunt veritatis ratione culpa earum distinctio, autem velit impedit reprehenderit eveniet, dicta iure.
          </p>
          <button className="bg-green-400 text-purple-950 font-semibold px-4 py-2 hover:bg-green-500">
            Apply for access
          </button>
        </div>
      </div>
    </div>
  );
}