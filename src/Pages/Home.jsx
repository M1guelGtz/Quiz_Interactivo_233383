import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Atoms/Button";
import './Home.css';
function Home () {
    const navigate = useNavigate()
    const handleClickForm = (e) =>{
        navigate('/formulario')
    }
    const handleClickQuiz = (e) =>{
        navigate('/quiz')
    }
    return(
        <>
        <Helmet>
            <title>Quiz Interactivo | Home</title>
        </Helmet>
        <div id="Quiz_Home">
            <div id="Quiz_Home_title">
                <h1>Generador de Quiz Interactivos</h1>
            </div>
            <div id="Quiz_Home_buttons">
                <Button text='create quiz' onClick={handleClickForm}></Button>
                <Button text='quizes created' onClick={handleClickQuiz}></Button>
            </div>
        </div>
        </>
    )
}

export default Home;