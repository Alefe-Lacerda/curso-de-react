// JSX significa que ESSE ARQUIVO AQUI É UM COMPONENTE REACT (ou seja, por isso q é bom tu pôr na extensão do arquivo)
import { useNavigate } from "react-router-dom"; /* O useNavigate é um hook do react-router-dom que permite navegar para outra página, ou seja, ele é usado para redirecionar o usuário para outra página quando ele clicar em uma tarefa */
import { ChevronRightIcon, Trash2 } from "lucide-react";
import Button from "./Button";

/* eslint-disable react/prop-types */ /* Aqui eu estou desabilitando a regra de prop-types do eslint, ou seja, eu não vou precisar definir os tipos das props que eu estou passando para o componente Tasks, isso é útil para evitar erros de tipo, mas é importante lembrar que isso pode causar erros se eu passar uma prop com um tipo diferente do que o componente espera, então é importante ter cuidado ao usar essa regra */

//3. Passar a função onTaskClick para o componente Tasks, para que ele possa chamar essa função quando uma tarefa for clicada
function Tasks({tasks, onTaskClick, onTrashClick}){ /* Aqui eu estou usando a desestruturação de objetos para pegar as props que eu passei lá no App.jsx, ou seja, eu estou pegando a prop tasks, onTaskClick e onTrashClick */
    const navigate = useNavigate(); /* O useNavigate é um hook do react-router-dom que permite navegar para outra página, ou seja, ele é usado para redirecionar o usuário para outra página quando ele clicar em uma tarefa */
    
    function onSeeDetailsClick(task){ /* Aqui eu estou criando uma função onSeeDetailsClick que recebe a tarefa como parâmetro, ou seja, quando o usuário clicar no botão de ver detalhes, essa função vai ser chamada e vai receber a tarefa que ele clicou como parâmetro */
        const query = new URLSearchParams(); /* O URLSearchParams é uma classe do JavaScript que permite criar e manipular os parâmetros da URL, ou seja, ele é usado para criar os parâmetros da URL que eu quero passar para a página de detalhes da tarefa */
        query.set('title', task.title); /* Aqui eu estou usando o método set do URLSearchParams para definir o valor do parâmetro title como o título da tarefa, ou seja, eu estou pegando o título da tarefa clicada e definindo como valor do parâmetro title */
        query.set('description', task.description); /* Aqui eu estou usando o método set do URLSearchParams para definir o valor do parâmetro description como a descrição da tarefa, ou seja, eu estou pegando a descrição da tarefa clicada e definindo como valor do parâmetro description */
        navigate(`/tasks?${query.toString()}`); /* Aqui eu estou usando o navigate para redirecionar o usuário para a página de detalhes da tarefa, e passando os parâmetros title e description na URL, ou seja, eu estou pegando o título e a descrição da tarefa clicada e passando como parâmetros na URL */
    }
    
    return (
    <ul className="space-y-4 p-6 bg-slate-600 rounded-md shadow-md">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <Button
                    onClick={() => onTaskClick(task.id)} 
                    className={`bg-slate-400 text-white p-2 w-full rounded-md text-left 
                        ${task.isCompleted && 'line-through'}`}
                    >
                        {task.title}
                </Button>
                <Button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                    <ChevronRightIcon />
                </Button>
                <Button
                    onClick={() => onTrashClick(task.id)}
                    className="bg-slate-400 text-white p-2 rounded-md"
                    >
                        <Trash2 />
                </Button>
            </li> /* Aqui eu estou usando o método map para percorrer a lista de tarefas e renderizar cada tarefa na tela, ou seja, para cada tarefa eu estou criando um elemento li com o título da tarefa, sempre preciso de uma chave (key) única para cada elemento, e isso serve pro React saber internamente qual item é qual  */
        ))}
    </ul>
    );
}

export default Tasks;