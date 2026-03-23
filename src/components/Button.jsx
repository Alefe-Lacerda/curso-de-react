/* eslint-disable react/prop-types */
function Button(props){
    return (
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button;