import reactLogo from './assets/react.svg'
import './App.css'
import { Board } from './components/board/Board'



function App() {

  return (
    <div className="App">
      <div>
        <h1>Tic Tac Toe</h1>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Board></Board>
      </div>
    </div>
  )
}

export default App
