import * as React from "react";
import { Container, Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

interface ChessboardProps {
  squareSize: number;
}



function Chessboard({squareSize, ...props }){
  const rows = 8;
  const cols = 8;
  const texture = PIXI.Texture.from("https://i.imgur.com/IaUrttj.png");
  return (
    <Container>
      {Array.from({ length: rows * cols }, (_, i) => {
        const x = (i % cols) * squareSize;
        const y = Math.floor(i / cols) * squareSize;


        return (
          <Container key={i} x={x} y={y}>
            <Sprite texture={texture} {...props}/>
          </Container>
        );
      })}
    </Container>
  );
};

export default Chessboard;
