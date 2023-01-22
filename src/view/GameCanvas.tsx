import * as React from "react";
import { useState, useEffect } from "react";
import { Container, Stage, Text } from "react-pixi-fiber";
import Chessboard from "./Chessboard";
import RotatingBunny from "./RotatingBunny";

function GameCanvas() {
  const [zoom, setZoom] = useState(1);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const options = {
    backgroundColor: 0x56789a,
    resolution: 1,
    width: width,
    height: height
  };
  const style = {
    width: width,
    height: height
  };

  const minZoom = 0.5;
  const maxZoom = 1.5;
  const minX = -width / 2;
  const maxX = width / 2;
  const minY = -height / 2;
  const maxY = height / 2;

  useEffect(() => {
    setWidth(window.innerWidth - 100);
    setHeight(window.innerHeight - 100);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseWheel = (event: any) => {
    event.preventDefault();
    const zoomDelta = event.deltaY < 0 ? 1.1 : 0.9;
    let newZoom = zoom * zoomDelta;

    if (newZoom < minZoom) {
      newZoom = minZoom;
    } else if (newZoom > maxZoom) {
      newZoom = maxZoom;
    }

    setZoom(newZoom);
    const newX = position.x - (event.clientX - position.x) * (zoomDelta - 1)/zoom;
    const newY = position.y - (event.clientY - position.y) * (zoomDelta - 1)/zoom;

    if (newX < minX) {
      setPosition({ x: minX, y: newY });
    } else if (newX > maxX) {
      setPosition({ x: maxX, y: newY });
    } else if (newY < minY) {
      setPosition({ x: newX, y: minY });
    } else if (newY > maxY) {
      setPosition({ x: newX, y: maxY });
    } else {
      setPosition({ x: newX, y: newY });
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.buttons)
  return;

const x = position.x + event.clientX - dragStart.x;
const y = position.y + event.clientY - dragStart.y;

if (x < minX) {
  setPosition({ x: minX, y });
} else if (x > maxX) {
  setPosition({ x: maxX, y });
} else if (y < minY) {
  setPosition({ x, y: minY });
} else if (y > maxY) {
  setPosition({ x, y: maxY });
} else {
  setPosition({ x, y });
}
setDragStart({ x: event.clientX, y: event.clientY });
};

return (
<div onWheel={handleMouseWheel} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}>
  <Stage options={options} style={style} x={position.x} y={position.y}>
  <Container position={[150, 150]}>
    <Text position="350,0" text={"x=" + position.x + ",y=" + position.y + ",zoom=" + zoom} />
    <RotatingBunny position="0,50" scale={zoom} />
    <Chessboard  position="0,0" squareSize={40*zoom} scale={zoom}></Chessboard>
    </Container>
  </Stage>
</div>
);
}

export default GameCanvas;
