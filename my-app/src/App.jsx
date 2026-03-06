import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import Texto from './components/Texto'

function App() {
  return (
    <div>
      <h1>Minha Primeira Aula! YEEY</h1>

      <Titulo/>

      <Aluno/>

      <button onClick={Botao}>Clique aqui!</button><br></br>

      <input type = "text" onChange={Texto}/>

    </div>
  )
}

export default App
