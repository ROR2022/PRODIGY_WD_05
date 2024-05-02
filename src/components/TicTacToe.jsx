import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  mode: null,
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ value, onClick, isWinner }) => (
  <Button
    style={{ height: "40px", width: "40px" }}
    variant={isWinner === true ? "success" : "outline-primary"}
    className=""
    onClick={onClick}
  >
    <span className="d-flex justify-content-center align-items-center">
      {value}
    </span>
  </Button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  isWinner: PropTypes.bool,
};

const Board = ({ squares, onClick, winSquares }) => (
  <Container>
    <Row>
      {squares.map((square, index) => {
        const isWinner = winSquares?.includes(index);
        return (
          <Col key={index} xs={4} className="border border-2 text-center">
            <div className="my-2">
              <Square
                value={square}
                isWinner={isWinner}
                onClick={() => onClick(index)}
              />
            </div>
          </Col>
        );
      })}
    </Row>
  </Container>
);

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func,
  winSquares: PropTypes.array,
};

//componente que determina el modo de juego 2 jugadores o contra la maquina
const GameMode = ({ setGameMode }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center gap-2">
      <Button
        className="mt-3 "
        variant="outline-secondary"
        onClick={() => setGameMode("2players")}
      >
        2 Players
      </Button>
      <Button
        className="mt-3"
        variant="outline-success"
        onClick={() => setGameMode("machine")}
      >
        AI mode
      </Button>
    </Container>
  );
};

GameMode.propTypes = {
  setGameMode: PropTypes.func,
};

const TicTacToe = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [winSquares, setWinSquares] = useState([]);
  const [gameMode, setGameMode] = useState(null);
  const [isTied, setIsTied] = useState(false);

  //utilizaremos un useEffect para jugar contra la maquina
  
  useEffect(() => {
    if (gameMode === "machine" && !state.xIsNext && !state.winner && !isTied) {
      const squares = [...state.squares];
      let i = Math.floor(Math.random() * 9);
      while (squares[i]) {
        i = Math.floor(Math.random() * 9);
      }
      squares[i] = "O";
      //console.log("Maquina juega en: ", i);
      //console.log("Squares: ", squares);
      const winner = calculateWinner(squares);
      setState({ squares, xIsNext: !state.xIsNext, winner });
    }
  }, [state.squares]);

  const calculateWinner = (squares) => {
    //console.log("calculateWinner: ", squares);
    let numLines = 0;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      numLines++;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        //convinacion ganadora
        //console.log("Ganador: ", lines[i]);
        setWinSquares([a, b, c]);
        return squares[a];
      }
      
    }
    //determinar si hay algun cuadro vacio
    const emptySquare = squares.filter((square) => square === null);
    //determinar si hay un empate
    if (numLines === lines.length && !state.winner && emptySquare.length === 0) {
      setIsTied(true);
    }
    return null;
  };

  const handleClick = (i) => {
    //console.log("handleClick:...", i);
    const squares = [...state.squares];
    if (state.winner || squares[i]) return;

    squares[i] = state.xIsNext ? "X" : "O";
    const winner = calculateWinner(squares);

    setState({ squares, xIsNext: !state.xIsNext, winner });
  };

  const renderStatus = () => {
    if (state.winner) {
      return `Winner: ${state.winner}`;
    } else {
      if (isTied) {
        return "Tied game";
      }
      return `Next player: ${state.xIsNext ? "X" : "O"}`;
    }
    
  };

  const handleReset = () => {
    setWinSquares([]);
    setGameMode(null);
    setState(INITIAL_STATE);
    setIsTied(false);
  };

  return (
    <div className="my-5">
      <Container className="d-flex flex-column justify-content-center align-items-center ">
        <h1>Tic Tac Toe</h1>

        {!gameMode ? (
          <div>
            <GameMode setGameMode={setGameMode} />
            <h5 className="mt-3">Please Choose Mode First</h5>
          </div>
        ) : (
          <p>Game mode: {gameMode}</p>
        )}

        {gameMode && (
          <>
            <div className="status">{renderStatus()}</div>
            <div className="mt-3">
              <Board
                squares={state.squares}
                winSquares={winSquares}
                onClick={handleClick}
              />
            </div>
            <Button className="mt-3" variant="primary" onClick={handleReset}>
              Reset
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default TicTacToe;
