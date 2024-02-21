import { list } from "../../data/list";
import { list1 } from "../../data/list";
import { list2 } from "../../data/list";
import { FaStar } from "react-icons/fa";

function ProductShop() {
  return (
    <div className="flex justify-evenly"> 
        <div className="shop1 ">
            {list.map((list)=>{
                return(
                    <div className="m-6">
                        <h2 className="font-bold mb-3 ">{list.title}</h2>
                        <div className="flex gap-5 ">
                            <img className="w-32 h-32 bg-slate-300"  src={list.img} alt={list.name} />
                            <div className="flex flex-col gap-3 justify-center">
                                <p className="tracking-wider text-gray-500">{list.name}</p>
                                <button className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button>
                                <p className="font-bold">{list.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="shop2">
            {list1.map((list)=>{
                    return(
                        <div className="m-6">
                            <h2 className="font-bold mb-3">{list.title}</h2>
                            <div className="flex gap-5">
                                <img className="w-32 h-32"  src={list.img} alt={list.name} />
                                <div className="flex flex-col gap-3 justify-center">
                                    <p className="tracking-wider text-gray-500">{list.name}</p>
                                    <button className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button>
                                    <h5 className="font-bold font-sans">{list.price}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
        <div className="shop3">
            {list2.map((list)=>{
                    return(
                        <div className="m-6">
                            <h2 className="font-bold mb-3">{list.title}</h2>
                            <div className="flex gap-5">
                                <img className="w-32 h-32"  src={list.img} alt={list.name} />
                                <div className="flex flex-col gap-3 justify-center">
                                    <p className="tracking-wider text-gray-500">{list.name}</p>
                                    <button className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></button>
                                    <h5 className="font-bold">{list.price}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default ProductShop;