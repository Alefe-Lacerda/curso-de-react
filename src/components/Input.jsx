// Sempre q eu repito um código (principalmente se tratando de estilização, eu posso criar um componente pra isso, ou seja, um componente de input, onde eu posso colocar toda a estilização do input e depois usar esse componente em vários lugares da minha aplicação, ou seja, toda vez que eu precisar de um input estilizado, eu posso usar esse componente, o que é muito mais fácil e prático do que ficar repetindo o código de estilização do input em vários lugares da minha aplicação)

function Input(props){
    return(
        <input 
            className="p-2 rounded-md w-full border border-slate-300 outline-slate-400"
            {...props}
        />
    )
}

export default Input;