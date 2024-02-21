import {cv} from "../../data/cv";
function CvRight() {
  return (
    <div className="name m-11 pl-11 ">
        <div>
            {cv.about.map((list)=>{
                return(
                    <div className="about">
                        <b className="font-bold tracking-wider">{list.ab}</b>
                        <p className="mt-6 text-zinc-400 text-sm font-sans">{list.text}</p>
                    </div>
                )
            })}
        </div>
        <div>
            {cv.education.map((list)=>{
                return(
                    <div className="education mt-6">
                        <b className="font-bold">{list.edu}</b>
                        <div className="mt-8 flex gap-20">
                            <div className="flex flex-col -mt-2 text-zinc-400">
                                <h2 className="font-medium text-sm">{list.text}</h2>
                                <i className="text-sm tracking-wider">{list.degreer}</i>
                            </div>
                            <p className="text-sm text-zinc-400">{list.year}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            {cv.work.map((list)=>{
                return(
                    <div className="work mt-7">
                        <b className="mt-8">{list.wk}</b>
                        <div className="mt-6 flex gap-40 text-zinc-400">
                            <div className="flex flex-col">
                                <h2 className="font-medium text-sm">{list.job}</h2>
                                <h2 className="font-medium text-sm">{list.company}</h2>
                            </div>
                            <p className="text-sm text-zinc-400">{list.year}</p>
                        </div>
                        <p className="mt-2 text-zinc-400 text-sm font-sans">{list.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CvRight;