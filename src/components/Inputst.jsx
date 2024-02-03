export  function Inputcreate(){

  console.log("from inputst function")
  return <div>
        <input style={{
            margin :10 ,
            padding : 20
        }} type="text" placeholder="Title" id="input1" /> <br />
       
        <input style={{
            margin :10 ,
            padding : 20
        }} type="text" placeholder="descriptin" id="input2" /> <br />

        <button style={{
            padding :20
        }} onClick={async function(){
            const res = await fetch("http://localhost:3000/todo",{
                method :"post",
                body: JSON.stringify({
                    title : document.querySelector("#input1").value,
                    description : document.querySelector("#input2").value,
                    completed : false
                 }),
                 headers:{
                    "content-Type" : "application/json"
                 }
             })
                  const data = await res.json()
                  alert("data is added succesfully")
             }
            
        }> Add to do </button>
        
    </div>
}