import Input from "../Atoms/Input";
import Label from "../Atoms/Label";

function Field (props) {
    return(
        <>
        <Label text={props.text}></Label>
        <Input type={props.type} placeholder={props.text2} val={props.val} fnVal={props.fnVal} ></Input>
        </>
    )
}

export default Field;