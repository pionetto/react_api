import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [deputados, setDeputados] = useState([])

  useEffect(() => {
    axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome")
    .then((response) => {
        
        setDeputados(response.data.dados)
    
    }).catch(() => {
        console.log("Deu ERRADO")
    })
  }, [])

	return(
		<div className="app">

      {deputados.map((element, key) => {

              return (
              <div className="tabela" >
                <table>
                  <tbody>
                    <tr key={key}>
                      <td>{ element.nome }</td>
                      <td>{ element.siglaPartido }</td>
                      <td>{ element.siglaUf }</td>
                    </tr>
                  </tbody>
                </table>
             </div>
  
          )
      })}

			

		</div>
	)

}

export default App;