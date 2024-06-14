import Label from "../Atoms/Label";
import Select from "../Atoms/Select";
function FieldSelect(props){
    return(
        <>
        <Label text={props.text}></Label>
        <Select name='tipo de pregunta:' val={props.val} fnVal={props.fnVal} opc1={props.opc1} opc2={props.opc2} opc3={props.opc3} opc4={props.opc4}></Select>
        </>
    )
}

export default FieldSelect;