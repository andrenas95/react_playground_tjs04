import React, { useEffect, useState } from "react"

function Tarefa() {

 const [completed, setCompleted] = useState(false);
 const [tarefa, setTarefa] = useState('');

 useEffect(() => {
   if (completed) {
      setTarefa('Parabéns! tarefa Concluída')
  }
 }, [completed])

 console.log("Completed:" + completed);

  return (
    <div>
     <h2>Componente Tarefa</h2>

    <h3>{tarefa}</h3>

    <p>Conclua a Tarefa</p>

    <button onClick={() => setCompleted(true)}>Concluir Tarefa </button>
    </div>
  )

}

export default Tarefa