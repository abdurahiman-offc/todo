

let id = 0
export function CreateTodo({todo,setTodo,todoCount,todoCounter}){
    // const [title,setTitle]  = useState("");
    // const [description,setDiscription] = useState("");

    function clickHandler(){
        const todotTitle = document.getElementById('todotitle');
        const todoDescription = document.getElementById('tododescription');
        let newTodo ={
            key: id++,
            title : todotTitle.value,
            description : todoDescription.value
        }
        
        setTodo([...todo,newTodo])
        todotTitle.value=""
        todoDescription.value=""
        // alert("todo added")
        todoCounter(todoCount+1)
    } 

    return <div>
        <input id="todotitle" type="text" placeholder="title"></input>
        <input id="tododescription" type="text" placeholder="description"></input>
        <button onClick={clickHandler}>add</button>
        </div>  
       
    
}