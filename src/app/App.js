import { useSelector } from 'react-redux';
import Theater from '../features/theater/Theater';
import './App.css';

function App() {
  let state = useSelector(state => state.currentPage)
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <Theater />
      </header>
    </div>
  );
}

export default App;
