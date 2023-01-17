import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
/*
const ReactPIXIChessBoard = ({ width:number, height, onSquareClick }) => {
    let canvasRef = React.createRef();
    let app:any;

    useEffect(() => {
        app = new PIXI.Application({
            width,
            height,
            view: canvasRef.current
        });

        // Create chess board
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let square = new PIXI.Graphics();
                square.beginFill((i + j) % 2 === 0 ? 0xffffff : 0x000000);
                square.drawRect(i * (width / 8), j * (height / 8), width / 8, height / 8);
                square.endFill();
                square.interactive = true;
                square.on("pointertap", () => {
                    onSquareClick(i, j);
                });
                app.stage.addChild(square);
            }
        }
        return () => {
            app.destroy(true);
        };
    }, [width, height, onSquareClick]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
};

export default ReactPIXIChessBoard;

*/