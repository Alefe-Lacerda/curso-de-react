import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
/* eslint-disable react/prop-types */

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col">
            <Input
                type="text" 
                placeholder="Título da Tarefa" 
                value={title} 
                onChange={(event) => setTitle(event.target.value)} />
            <Input
                type="text" 
                placeholder="Descrição da Tarefa" 
                value={description} 
                onChange={(event) => setDescription(event.target.value)} 
            />
            <Button 
                onClick={() => {
                    // Verificar se título e descrição estão preenchidos
                    if (title.trim() === "" || description.trim() === "") {
                        alert("Por favor, preencha o título e a descrição da tarefa.");
                        return;
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
                
                >
                    Adicionar
            </Button>
        </div>

    );
}

export default AddTask;