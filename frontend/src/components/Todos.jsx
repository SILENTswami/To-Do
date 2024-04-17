
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/

// export function Todos({todos}) {
//     return <div>
//         {todos.map(function(todo) {
//             return <div key={todo._id}>
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button onClick={() => {
//                     fetch(`http://localhost:3000/todos/${todo._id}`, {
//                         method: "PUT",
//                         body: JSON.stringify({
//                              id: todo._id,
//                             //  completed: true
//                         }),
//                         headers: {
//                             "Content-type": "application/json"
//                         },
//                     })
//                     .then(async function(res) {
//                         const json = await res.json();
//                         if (res.ok) {
//                             todo.completed = true;
//                         }
//                         alert("Task Completed");
//                     })
//                 }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
//             </div>
//         })}
//     </div>
// }

export function Todos({todos}) {
    return <div>
        {todos.map(function(todo) {
            if(todo.title == ""){
                alert("Please enter a title and description")
            }
            else
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    fetch(`http://localhost:3000/todos/${todo._id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                             id: todo._id,
                            //  completed: true
                        }),
                        headers: {
                            "Content-type": "application/json"
                        },
                    })
                    .then(async function(res) {
                        const json = await res.json();
                        if (res.ok) {
                            todo.completed = true;
                        }
                        alert("Task Completed");
                    })
                }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>

                <button style={{
                    margin: 10
                }} onClick={() => {
                    fetch(`http://localhost:3000/todos/${todo._id}`, {
                        method: "DELETE",
                    })
                    .then(res => {
                        if (res.ok) {
                            // Remove the todo from the todos array
                            todos = todos.filter(t => t._id !== todo._id);
                            alert("Todo Deleted")
                        }
                    });
                }}>Delete Todo</button>
            </div>
        })}
    </div>
}