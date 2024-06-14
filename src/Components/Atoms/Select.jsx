import styled from "styled-components";

const SelectStyled = styled.select`
    width: 50%;
    margin: 30px;
    text-align: center;
`
function Select (props){
    const handlerOnChange =(event=>{
        props.fnVal(event.target.value)
    })
    return(
        <SelectStyled name={props.name} onChange={handlerOnChange}>
            <option value="">{props.opc1}</option>
            <option value="abierta">{props.opc2}</option>
            <option value="opcion Multiple">{props.opc3}</option>
            <option value="falso o verdadero">{props.opc4}</option>
        </SelectStyled>
    )
}
export default Select;