import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 300px;
    color: white;
    background-color: blue;
    border-radius: 5px;
    box-shadow: 5px 5px 7px 0 red;
    -webkit-box-shadow: 5px 2px 10px  blue;
    -moz-box-shadow: 5px 5px 7px black;
    margin: 30px;
    &:hover {
        background-color: #b9b9ff;
        color: black;
        box-shadow: 5px 5px 7px 0 red;
        -webkit-box-shadow: 5px 5px 7px gray;
        -moz-box-shadow: 5px 5px 7px gray;
    }
`

function Button (props){
    return (
        <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
    )
}

export default Button;