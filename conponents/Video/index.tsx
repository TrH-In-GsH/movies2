import { videos } from "../../data/video"
import { IoIosHeartHalf } from "react-icons/io";
const VideosList = () => {
  return (
      <div className="VideoItem flex-col">
        {
          videos.map((videos)=>{
            return(
              <div className="item flex gap-16  items-center m-5">
                <img className="w-28 h-18" src={videos.img} alt={videos.name} />
                <div className="name flex-row ">
                  <h3 className="font-bold tracking-widest">{videos.name}</h3>
                  <p className="text-stone-400 tracking-wider">{videos.namelist}</p>
                </div>
                <button className="text-2xl m-auto">{<IoIosHeartHalf />}</button>
              </div>
            )
          })
        }
      </div>
  )
}

export default VideosList;