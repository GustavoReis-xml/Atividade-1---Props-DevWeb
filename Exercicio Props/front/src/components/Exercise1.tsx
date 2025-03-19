import { useState } from 'react';
import Ball from './ball';

function Exercise1() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleGenerate = () => {
    const newCount = Math.min(count, 12);
    const randomNumbers = Array.from({ length: newCount }, () =>
      Math.floor(Math.random() * 100)
    ).sort((a, b) => a - b);
    setNumbers(randomNumbers);
  };

  return (
    <div>
      <h2>Exercício 1</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      
      <button onClick={handleGenerate}
      style={{
        marginLeft: '10px',
        padding: '5px 10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4e73df',
        color: '#fff',
        cursor: 'pointer',
      }}>Gerar Números</button>

      <div>{numbers.map((num, index) => <Ball key={index} number={num} />)}</div>
    </div>
  );
}

export default Exercise1;
