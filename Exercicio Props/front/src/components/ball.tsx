
interface BallProps {
    number: number;
    onRightClick?: (num: number) => void;
  }
  
  function Ball({ number, onRightClick }: BallProps) {
    return (
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          if (onRightClick) onRightClick(number);
        }}
        style={{
          display: 'inline-block',
          margin: '10px',
          padding: '20px',
          borderRadius: '50%',
          backgroundColor: '#4e73df',
          color: 'white',
          textAlign: 'center',
          width: '50px',
          height: '50px',
          lineHeight: '50px'
        }}
      >
        {number}
      </div>
    );
  }
  
  export default Ball;
  