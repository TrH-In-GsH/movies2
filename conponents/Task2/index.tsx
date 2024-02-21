import './index.css'
type TButton = {
    lable :string
    type: string
}
const Task2 = ({lable, type=""}:TButton) =>{
    return <button className={`button  ${type}`}>{lable}</button>
}
export default Task2;