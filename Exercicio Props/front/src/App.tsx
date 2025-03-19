
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Altura total da viewport
      width: '100vw',  // Largura total da viewport
      backgroundColor: '#f8f9fc',
    }}>
      <div style={{
        padding: '20px',
        maxWidth: '500px',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center', // Centraliza o conteúdo dentro da div
      }}>
        <Exercise1 />
        <Exercise2 />
      </div>
    </div>
  );
}

export default App;