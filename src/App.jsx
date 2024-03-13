
import './App.css'
import Gonona from './Gonona';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Users></Users>
      
    <Gonona></Gonona>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
    </>
  )
  }

  export default App
