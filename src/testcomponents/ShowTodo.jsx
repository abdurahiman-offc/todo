
import { Todocard } from "../App"

export function ShowTodo({todo}){
    return <>{
    
  todo.map(function (item){
      // console.log("sdfs",item)
      return(
        <Todocard key={item.key}>

          <div>

              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
             
          </div>
        </Todocard>
      )
  })}</>

}