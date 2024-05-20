import { useState } from "react"

export default function App() {

  const [calc, setCalc] = useState(0);
  const [input, setInput] = useState('');

  const addNum = () => {
    if (input !== ''){
    setCalc(numValue => numValue + parseFloat(input));
      setInput('');
    }
  }

  const minusNum = () => {
    if (input !== ''){
      setCalc(numValue => numValue - parseFloat(input));
        setInput('');
      }
  }

  const resetNum = () => {
    setCalc(0);
    setInput('');
  }

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          placeholder="숫자를 입력하세요"
          onChange={(e)=>setInput(e.target.value)}
        /> 만큼을
        <button onClick={addNum}>더할게요</button>
        <button onClick={minusNum}>뺄게요</button>
        <button onClick={resetNum}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{calc}</p>
      </div>
    </div>
  );
}
