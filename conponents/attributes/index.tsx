import "./attributes.css"
type TAttItem = {
    label: string
    isActive ?:boolean
}
const AttItem = ({label, isActive=false}:TAttItem) =>{
    const myClass = isActive;
    if(myClass == true){
        'attrs_item attrs_item_actived';
    }else{
        'attrs_item'
    }
    return <span className="myClass">{label}</span>
}
const Attributes = () =>{
    return (
        <div className="attrs_container">
            <span className="attrs_lable">Màu sắc</span>
            <AttItem isActive={true} label="Đen"/>
            <AttItem label="Hồng"/>
            <AttItem  label="Xanh"/>
        </div>
    );
}
export default Attributes;