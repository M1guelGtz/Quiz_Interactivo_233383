import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../Components/Atoms/Button";
import SectionForm from "../Components/Organisms/SectionForm";
import { Quiz } from "../Data/Quiz";
import { lista, quiz } from "../Dependences/dependences";
import './Formulario.css'
function Formulario (){
    const navigate = useNavigate();
    const [pregunta, setPregunta] = useState("");
    const [tipo, setTipo] = useState("");
    const handlerClick = (event)=> {
        if ( pregunta != '' && tipo != '') {
            switch(tipo){
                case "abierta": 
                    Swal.fire({
                    text: "Pregunta Guardada Correctamente",
                    icon: "success"
                    })
                    const Quizz = new Quiz();
                    Quizz.setPregunta(pregunta)
                    Quizz.setTipo('text')
                    lista.push(Quizz)
                break;
                case "falso o verdadero": 
                    const Quizf = new Quiz();
                    Swal.fire({
                    text: "Pregunta Guardada Correctamente",
                    icon: "success"
                    })
                    Quizf.setPregunta(pregunta)
                    Quizf.setTipo('checkbox')
                    lista.push(Quizf)
                break;
                case "opcion Multiple": 
                    navigate("/formulario/datos/")
                    quiz.setPregunta(pregunta)
                    quiz.setTipo(tipo)
                break;
            }
            
            
        }else{
            Swal.fire({
                text: "Complete todos los campos",
                icon: "error"
            })
        }
    }
    const handlerClick2 = (event)=>{
        navigate("/")
    }
    return (
        <>
        <Helmet>
            <title>Quiz Interactivo | Formulario</title>
        </Helmet>
        <div id="Formulario_Card">
            <SectionForm 
            text='introduzca la pregunta: '
            text2='seleccionar' 
            type='text' 
            val={pregunta} 
            fnVal={setPregunta} 
            val2={tipo} 
            fnVal2={setTipo} 
            opc1='default'
            opc2='abierta'
            opc3='opcion multiple'
            opc4='falso o verdadero'
            id='Section_form'>

            </SectionForm>
            <Button onClick={handlerClick} text='agregar la Pregunta'></Button>
            <Button onClick={handlerClick2} text='Guardar quiz'></Button>

        </div>
        <div>
            
        </div>
        </>
    )

}

export default Formulario;