import React, { Component } from 'react';
import Pubsub from 'pubsub-js';

export default class Header extends Component {

  pesquisa(event){
   event.preventDefault();

   fetch(`https://instalura-api.herokuapp.com/api/public/fotos/${this.loginPesquisado.value}`)
    .then(response => response.json())
    .then(fotos => {
      Pubsub.publish('timeline', fotos);
    });
  }

  render() {
    return (
      <header class="header container">
        <h1 class="header-logo">
          Instalura
        </h1>

        <form lpformnum="1" class="header-busca" onSubmit={this.pesquisa.bind(this)}>
          <input type="text" name="search" placeholder="Pesquisa" class="header-busca-campo" ref={input => this.loginPesquisado = input}/>
          <input type="submit" value="Buscar" class="header-busca-submit"/>
        </form>


        <nav>
          <ul class="header-nav">
            <li class="header-nav-item">
              <a href="#">
                ♡
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
