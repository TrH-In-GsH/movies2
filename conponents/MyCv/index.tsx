
import CvLeft from "../Left";
import CvRight from "../Right";
function ProjectCv() {
  return (
    <div className="h-[180vh] max-w-[100%] items-center flex justify-center bg-indigo-800">
      <div className=" flex drop-shadow-2xl shadow-xl">
        <div className="col_left w-[350px] bg-indigo-800 mt-2 font-thin">
          <CvLeft/>
        </div>
        <div className="col_right  w-[500px] bg-slate-50 mt-2 ">
          <div className="name m-11 pl-11 pt-12  ">
            <h1 className="font-bold text-blue-800 text-5xl font-sans">AMANDA</h1>
            <h2 className="font-thin text-5xl text-blue-900 ">CASSIE</h2>
            <h3 className="font-medium text-lg text-blue-900 pt-1">WEB DEVELOPER</h3>
          </div>
          <CvRight />
        </div>
      </div>
    </div>
  );
}

export default ProjectCv;