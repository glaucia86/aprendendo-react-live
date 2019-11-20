/**
 * arquivo: src/index.js
 * descrição:
 * data: 19/11/2019
 * author: Glaucia Lemos (@glaucia86)
 */

import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Jumbotron } from "react-bootstrap";
import { Fragment } from "react";

class Quadrado extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Tabuleiro extends React.Component {
  renderQuadrado(i) {
    return <Quadrado />;
  }

  render() {
    const status = "Próximo Jogador: X";
    return (
      <div>
        <div>
          
        </div>
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
        <Jumbotron>
        <h2 className="text-center">
          <span
            className="glyphicon glyphicon-thumbs-up"
            aria-hidden="true"
          ></span>{" "}
          Aplicação Jogo da Velha - Live Coding
        </h2>
        <h3 className="text-center">Glaucia Lemos</h3>
        <h4 className="text-center">Cloud Advocate 🥑 LATAM @ Microsoft</h4>
        <h5 className="text-center">Rio de Janeiro, Brasil - 2019</h5>
        <hr className="m-y-md" />
        <p className="lead">
          <a
            className="btn btn-danger btn-lg"
            href="https://www.youtube.com/user/l32759"
            role="button"
          >
            Inscreva-se no Canal
          </a>
        </p>
      </Jumbotron>
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

ReactDom.render(<Jogo />, document.getElementById("root"));
