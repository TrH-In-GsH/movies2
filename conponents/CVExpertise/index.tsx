import {cv} from "../../data/cv";
type TRankItem={
    name: string;
    rank: number;
}
const RankItem = ({name, rank}:TRankItem)=>{
    const dots =[1,2,3,4,5]
    return(
        <li className="flex gap-16 items-center">
            <span className="w-20">{name}</span>
            <span className="flex gap-2 items-center">
                {dots.map((dot)=>{
                    if(dot <= rank){
                        return(
                            <span className="w-[10px] h-[10px] rounded-full bg-amber-500 block "></span>
                        )
                    }else{
                        return (
                            <span
                              key={dot}
                              className="w-[10px] h-[10px] rounded-full bg-white block"
                            ></span>
                        );
                    }
                })}
            </span>
        </li>
    )
}
const CVExpertise = () => {
    return (
      <div className="leading-9 text-white text-sm">
        <ul className="mt-5 tracking-wider">
          {cv.expertise.map((item) => {
            return <RankItem name={item.name} rank ={item.rank}/>;
          })}
        </ul>
      </div>
    );
  };
export default CVExpertise;