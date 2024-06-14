import styled from "styled-components";

const LabelStyled = styled.label`

`
function Label (props){
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;