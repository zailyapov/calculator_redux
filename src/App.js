import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {
  const dispatch = useDispatch()
  
  const {res} = useSelector(state => state)

  const [num, setNum] = useState('')
  const [num2, setNum2] = useState('')

  const plus = () => {
    dispatch({
      type: 'PLUS',
      payload: +num + +num2
    })
  }
  const minus = () => {
    dispatch({
      type: 'MINUS',
      payload: num - num2
    })
  }
  const divided = () => {
    dispatch({
      type: 'MULTIPLY',
      payload: num / num2
    })
  }
  const multiply = () => {
    dispatch({
      type: 'DIVIDED',
      payload: num * num2
    })
  }

  return (
    <div className="App" style={{marginTop:'50px'}}>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
      <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/><br/>
      <button onClick={plus}>+</button><br/>
      <button onClick={minus}>-</button><br/>
      <button onClick={divided}>/</button><br/>
      <button onClick={multiply}>*</button><br/>
      {
        num > 0 && num2 > 0
          ? <h1>{res}</h1>
          : <p></p>
      }
    </div>
  );
}

export default App;