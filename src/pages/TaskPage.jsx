import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"; /* O useNavigate é um hook do react-router-dom que permite navegar para outra página, ou seja, ele é usado para redirecionar o usuário para outra página quando ele clicar no botão de voltar */
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate(); /* O useNavigate é um hook do react-router-dom que permite navegar para outra página, ou seja, ele é usado para redirecionar o usuário para outra página quando ele clicar no botão de voltar */    
    const [searchParams] = useSearchParams(); // O useSearchParams é um hook do react-router-dom que permite acessar os parâmetros da URL
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div>
            <div className="flex justify-center relative mb-6">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100"> {/* PS: Não posso colocar onClick={navigate(-1)} sem a função, pq se não, assim q executar a função, ela será chamada imediatamente, ou seja, assim q aparecer o botão na tela, ele já será clicado */}
                    <ChevronLeftIcon />
                </button>
                <Title>Detalhes da Tarefa</Title>
            </div>
                <div className="bg-slate-200 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-700">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;