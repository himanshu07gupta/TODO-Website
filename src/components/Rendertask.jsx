export function Render(probs){
    const tasklist = probs.data
    return<div>
        {tasklist.map(function(todo){
            return <div >
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                {todo.completed?(<button>completed</button>):
                (<button key={todo._id} onClick={function(key){
                    fetch("localhost:3000/completed",{
                        method : "put",
                        body : JSON.stringify({
                            _id :  key
                        }),
                        headers: {
                            "Content-Type": "application/json",
                          },
                    }).then(async function(res){
                        const data = await res.json()
                        console.log(data)
                    })
                     
                }}>mark as Done</button>)}
            </div>
        })}
        </div>
    
}

