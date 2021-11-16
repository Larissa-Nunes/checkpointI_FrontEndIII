import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Footer from './components/Footer';


import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  nomePortifolio = 'Portifólio da Lari';



  render() {
    return (
      <>
        <Header portifolio={this.nomePortifolio} />
        <main>
          <Banner>
            <h2>Quem sou eu?</h2>
            <p>
              Meu nome é Larissa Nunes, tenho 25 anos de idade e resido na região do ABC Paulista. Sou formada em Química e estou em transição de carreira para a área de TI.
            </p>
          </Banner>
          <Projetos />
        </main>

        <Footer />
      </>
    );
  }
}