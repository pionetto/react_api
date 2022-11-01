import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [deputados, setDeputados] = useState([])

  useEffect(() => {
    axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome")
    .then((response) => {
        setDeputados(response.data)
      //  console.log(response.data)
        console.log(response.data.dados[0].nome)
        console.log(response.data.dados[1].id)

    }).catch(() => {
        console.log("Deu ERRADO")
    })
  }, [])

	return(
		<div className="app">

			<div className="cards">

      {Object.keys(deputados).map((deputado, key) => {

          return (
            <div className="card" key={key}>
            <div className="card-body" >
              <h1> { deputado.dados.id } </h1>
              <div className="line"></div>
              <h2> </h2>
            </div>
          </div>
  
          )
      })}

			
			</div>

		</div>
	)

}

export default App;