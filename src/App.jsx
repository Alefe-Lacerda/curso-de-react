import { useEffect, useState } from "react";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './index.css';
import {v4} from 'uuid';
//import './App.css'; Vc pode importar o CSS e fazer o q vc quiser... Mas vamos usar o tailwind

function App(){

  //1. Armazenar State da lista de task e depois atualiza o state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); //Aqui eu estou usando o useState para criar um state chamado tasks, que é a minha lista de tarefas, e a função setTasks para atualizar essa lista de tarefas, e o valor inicial desse state é o que eu tenho no localStorage do navegador, ou seja, toda vez que eu abrir a aplicação, ela vai pegar a lista de tarefas que eu tinha salvo no localStorage, e se não tiver nada salvo no localStorage, ela vai ser uma lista vazia ([])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //Aqui eu estou salvando a minha lista de tarefas no localStorage do navegador, ou seja, toda vez que a lista de tarefas for alterada, ela vai ser salva no localStorage, e o JSON.stringify é usado para transformar a lista de tarefas em uma string, porque o localStorage só aceita strings, ou seja, eu preciso transformar a minha lista de tarefas em uma string para poder salvar no localStorage
  }, [tasks]) //O use effect execulta a função (1º parâmetro) sempre que o valor da lista (2º parâmetro) for alterado
  //useEffect é um hook do React que permite executar uma função sempre que um valor específico for alterado, ou seja, "effect" vem de efeito colateral, a consequência de algo q foi alterado.

  useEffect(() => {
    // Chamar a API
    async function fetchTasks(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_Limit=10', {
      method: 'GET', //Aqui eu estou especificando o método da requisição, que é GET, ou seja, eu quero pegar os dados da API, e não enviar dados para a API, ou seja, eu quero ler os dados da API, e não criar ou atualizar ou deletar dados na API
      }
      ); //Aqui eu estou usando a função fetch para fazer uma requisição para a API do JSONPlaceholder, que é uma API fake que retorna uma lista de tarefas, e o await é usado para esperar a resposta da API, ou seja, o código abaixo do await só vai ser executado depois que a resposta da API for recebida
      
      //Pegar os dados q ela retorna
      const data = await response.json(); //Aqui eu estou usando a função json para transformar a resposta da API em um objeto JavaScript, ou seja, o código abaixo do await só vai ser executado depois que a resposta da API for transformada em um objeto JavaScript

      // Armazenar/Persistir os dados no State

      setTasks(data); //Aqui eu estou usando a função setTasks para atualizar a minha lista de tarefas com os dados que eu recebi da API, ou seja, toda vez que a resposta da API for recebida e transformada em um objeto JavaScript, a minha lista de tarefas vai ser atualizada com esses dados
    }
    // Caso um dia queira chamar uma API pra pegar as tarefas
    // fetchTasks();

    
  }, []) //Lista vazia, o que signfica que a função dentro do useEffect vai ser executada apenas uma vez, ou seja, quando o componente for montado, ou seja, quando a aplicação for aberta, ou seja, quando a página for carregada, ou seja, quando o usuário acessar a aplicação pela primeira vez, ou seja, quando o usuário abrir a aplicação pela primeira vez

  //2. Criar a função pra atualizar o isCompleted da task
  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      // Preciso atualizar essa tarefa que foi clicada, ou seja, preciso criar uma nova lista de tarefas onde a tarefa que foi clicada vai ter a propriedade isCompleted invertida, ou seja, se ela era false, ela vai virar true, e se ela era true, ela vai virar false, e as outras tarefas vão permanecer iguais
    if(task.id === taskId){
      return {...task, isCompleted: !task.isCompleted} /* Aqui eu estou usando o operador spread para copiar todas as propriedades do objeto task e depois estou sobrescrevendo a propriedade isCompleted com o valor contrário do que ela era antes, ou seja, se ela era false, ela vai virar true, e se ela era true, ela vai virar false */
    }
    //Não preciso atualizar essa tarefa
    //Ps: Não é necessário colocar else, porque se a condição do if for verdadeira, o return vai ser executado e a função vai ser finalizada, ou seja, o código abaixo do if não vai ser executado, então se a condição do if for falsa, o return do else vai ser executado, ou seja, o código abaixo do if vai ser executado
    return task;
    });
    setTasks(newTasks); //Ou seja, estou atualizando a lista de tarefas com a nova lista de tarefas
    }

  function onTrashClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(), //Aqui eu estou usando a função v4 da biblioteca uuid para gerar um id único para cada tarefa, ou seja, toda vez que eu criar uma nova tarefa, ela vai ter um id diferente das outras tarefas, o que é importante para o React saber qual tarefa é qual quando eu for atualizar ou deletar uma tarefa
      title, //Como o title já está como parâmetro da função, eu posso usar a sintaxe curta de objetos, ou seja, eu posso simplesmente colocar o nome da variável (title) e o valor dela vai ser atribuído à propriedade title do objeto newTask, ou seja, é a mesma coisa que escrever title: title
      description, //Mesma coisa da linha acima aqui
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); //...tasks (tudo q estava aqui antes) e depois o newTask (a nova tarefa q eu quero adicionar)
    }

    return(
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks 
            tasks={tasks} 
            onTaskClick={onTaskClick} 
            /* Aqui eu passo a minha lista de tarefas para o componente Tasks, para que ele possa renderizar as tarefas na tela, ou seja, a prop tasks é o State ali de cima (linha 8 a 26) */
            onTrashClick={onTrashClick} /> {/*Tudo q eu passar aqui eu tenho acesso lá através do props*/}
        </div>
      </div>
    );

  
}

 export default App;