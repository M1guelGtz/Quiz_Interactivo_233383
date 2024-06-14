import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../Components/Atoms/Button";
import Field from "../Components/Molecules/Field";
import { Quiz } from "../Data/Quiz";
import { lista, quiz } from "../Dependences/dependences";
import './Generador.css';
function Generador( ) {
    const navigate = useNavigate()
    const handlerClick = (event)=> {
        if (respuesta1 != '' && respuesta2 != '' && respuesta3 != '' && respuesta4 != '') {
            navigate("/formulario")
            let quiz1 = new Quiz();
            quiz1.setPregunta(quiz.getPregunta())
            quiz1.setTipo(quiz.getTipo())
            quiz1.pushResp(respuesta1)
            quiz1.pushResp(respuesta2)
            quiz1.pushResp(respuesta3)
            quiz1.pushResp(respuesta4)  
            lista.push(quiz1)
        }else{
            Swal.fire({
                title: "Complete todos los campos",
                icon: "error",  
                text: "No deje espacios vacios"
            })
        }
    }
    const [respuesta1, setRespuesta1] = useState("")
    const [respuesta2, setRespuesta2] = useState("")
    const [respuesta3, setRespuesta3] = useState("")
    const [respuesta4, setRespuesta4] = useState("")
    return(
        <>
        <Helmet>
            <title>Quiz interacivo | formulario | Generador</title>
        </Helmet>
        <div id="Conteiner">
            <h1>la pregunta es: {quiz.getPregunta()}</h1>
            <p>Pregunta de {quiz.getTipo()}</p>
            <Field text='Ingrese la opcion 1 para respuesta:' type='text' text2='respuesta' val={respuesta1} fnVal={setRespuesta1}></Field>
            <Field text='Ingrese la opcion 2 para respuesta:' type='text' text2='respuesta' val={respuesta2} fnVal={setRespuesta2}></Field>
            <Field text='Ingrese la opcion 3 para respuesta:' type='text' text2='respuesta' val={respuesta3} fnVal={setRespuesta3}></Field>
            <Field text='Ingrese la opcion 4 para respuesta:' type='text' text2='respuesta' val={respuesta4} fnVal={setRespuesta4}></Field>
            <Button text='Guardar' onClick={ handlerClick} ></Button>
        </div>
        </>
    )
}

export default Generador;