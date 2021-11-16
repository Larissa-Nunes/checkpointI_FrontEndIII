import { Component } from 'react';
import GitHub from '../../assets/github.png';
import Filmes from '../../assets/filmes.png';
import Todo from '../../assets/keepnotes.png';
import Olimpify from '../../assets/olimpify.png';

import './style.scss';

export default class Projetos extends Component {
  constructor() {
    super();
    this.state = {
      listaProjetos: [
        {
          id: 1,
          nome: 'Olimpify',
          github: 'https://github.com/Larissa-Nunes/olimpify',
          url: 'https://larissa-nunes.github.io/olimpify/',
          img: Olimpify
        },
        {
          id: 2,
          nome: 'Cadastro de Filmes',
          github: 'https://github.com/Larissa-Nunes/checkpointI_FrontEndII',
          url: 'https://larissa-nunes.github.io/checkpointI_FrontEndII/',
          img: Filmes
        },
        {
          id: 3,
          nome: 'To-Do',
          github: 'https://github.com/Larissa-Nunes/checkpointII_FrontEndII',
          url: 'https://larissa-nunes.github.io/checkpointII_FrontEndII/',
          img: Todo
        }
      ]

    };
  }

  render() {

    return (
      <section id="projetos">
        <>
          {this.state.listaProjetos.map(({ id, nome, url, github, img }) => {
            return (
              <div className="card" key={id} >
                <h3>{nome}</h3>
                <div className="link">
                  <a className="imagemProjeto" href={url}><img alt="imagem projeto" src={img} /></a>
                  <a className="iconeGitHub " href={github}><img alt="imagem github" src={GitHub} /></a>
                </div>
              </div>
            )
          })
          }
        </>
      </section>
    );
  }
}