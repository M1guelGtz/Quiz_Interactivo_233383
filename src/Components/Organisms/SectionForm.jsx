import Field from "../Molecules/Field";
import FieldSelect from "../Molecules/FieldSelect";
function SectionForm (props) {

    return (
        <>
        <FieldSelect text ='Tipo de pregunta(abierta, cerrada u opcion multiple):' val={props.val2} fnVal={props.fnVal2} opc2={props.opc2} opc3={props.opc3} opc4={props.opc4} opc1 = {props.opc1}></FieldSelect>
        <Field text={props.text} type={props.type} text2={props.text2} val={props.val} fnVal={props.fnVal}></Field>
        </>

    )
}
export default SectionForm;