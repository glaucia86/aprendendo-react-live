/**
 * arquivo: src/index.js
 * descrição:
 * data: 19/11/2019
 * author: Glaucia Lemos (@glaucia86)
 */

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Quadrado extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Tabuleiro extends React.Component {
  renderQuadrado(i) {
    return <Quadrado />;
  }

  render() {
    const status = 'Próximo Jogador: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderQuadrado(0)}
          {this.renderQuadrado(1)}
          {this.renderQuadrado(2)}
        </div>
        <div className="board-row">
          {this.renderQuadrado(3)}
          {this.renderQuadrado(4)}
          {this.renderQuadrado(5)}
        </div>
        <div className="board-row">
          {this.renderQuadrado(6)}
          {this.renderQuadrado(7)}
          {this.renderQuadrado(8)}
        </div>       
      </div>
    );
  }
}

class Jogo extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Tabuleiro />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Jogo />,
  document.getElementById('root')
);