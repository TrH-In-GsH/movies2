import {cv} from "../../data/cv";
import CVExpertise from "../CVExpertise";
function CvLeft() {
  return (
    <div className="m-8">
        <div>
           <img  className="w-48 h-48 rounded-full m-auto mb-10" src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/346279069_782256326742243_2189200350255964972_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=zn8VfsQcnB8AX-H9yvB&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBZg7gFK4RjoDRvgAMi5X4cAl9txQg8IqXW6KIIsYMFkA&oe=65A1C767" alt="" />
            <div className="">
                {cv.contact.map((list)=>{
                    return(
                        <div>
                            <h2 className="text-white font-bold tracking-wider">{list.ct}</h2>
                            <ul className="m-4 pl-5 list-disc text-white text-sm tracking-wider">
                                <li>
                                    <p className="text-white font-bold">{list.name}</p>
                                    <p className="font-extralight">{list.informations}</p>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="mt-9">
            <h2 className="text-white font-bold tracking-wider">EXPERTISE</h2>
            <CVExpertise />
        </div>
        <div className="mt-9">
            {cv.skill.map((list)=>{
                return(
                    <div className="">
                        <h2 className="text-white font-bold tracking-wider">{list.sk}</h2>
                        <ul className="m-4 pl-5 list-disc  text-white text-sm tracking-wider">
                            <li>
                                <p>{list.name}</p>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CvLeft;