import styled from "styled-components";

const InputStyled = styled.input`
    width: 50%;
    margin: 10px;
    height: 50px;
    text-align: center;
`

function Input (props){
    const handlerOnChange =(event=>{
        props.fnVal(event.target.value)
    })
    return(
        <InputStyled type={props.type} placeholder={props.placeholder} onChange={handlerOnChange}></InputStyled>
    )
}

export default Input;