// import { BeakerIcon } from "@heroicons/react/24/solid";
import { FaPlus } from 'react-icons/fa';
function Card() {
  return (
    <div className="container py-5 flex justify-center w-full ">
      <div className=" bg-[#1f1137] rounded-xl shadow-xl hover:scale-105 transition-all hover:shadow-2xl hover:bg-[#291749] cursor-pointer w-80 h-40 flex-col flex justify-center  items-center">
        <button className=" rounded-xl py-2 px-2 text-white "><FaPlus className="h-6 w-6 "/>
          </button>
          <p className='font-semibold text-white text-xl'>Buat Catatan</p>
      </div>
    </div>
  )
}

export default Card