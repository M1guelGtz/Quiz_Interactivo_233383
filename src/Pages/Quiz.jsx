import { Helmet } from "react-helmet-async";
import Field from "../Components/Molecules/Field";
import FieldSelect from "../Components/Molecules/FieldSelect";
import { lista } from "../Dependences/dependences";
import './Quiz.css';
function Quiz () {
    console.log(lista)
    return(
        <>
        <Helmet>
            <title>Quiz Iteractivo | Quiz</title>
        </Helmet>
        <div id="Quiz">
            <h1>Resuelve el Quiz</h1>
            <div id="instruccions"> <p><b>instrucciones: </b>para las preguntas de tipo "verdadero y falso", marca la seleccion de la pregunta si consideras que la respuesta es verdadera en caso contrario deja la seleccion sin marcar</p></div>
            {
                lista.getHead() ?(
                    <Recurse nodo = {lista.getHead()}></Recurse>
                ):(
                    <p>--- No hay preguntas en el cuestionario ---</p>
                )
            }
        </div>
        </>
    )
}
function Recurse({nodo}){
    if(!nodo){
        return null
    }
    if (nodo.getData().getTipo() == 'opcion Multiple') {
        return(
            <>
                <FieldSelect text={nodo.getData().getPregunta()} opc1={nodo.getData().getResp(0)}opc2={nodo.getData().getResp(1)} opc3={nodo.getData().getResp(2)} opc4={nodo.getData().getResp(3)}></FieldSelect>
                {nodo.next && <Recurse nodo={nodo.next}></Recurse>}   
            </>
        )
    }
    return(
        
            <>
                <Field text={nodo.getData().getPregunta()} text2=' agregar respuesta' type={nodo.getData().getTipo()}></Field>
                {nodo.next && <Recurse nodo={nodo.next}></Recurse>}   
            </>
        
    )
}

export default Quiz;