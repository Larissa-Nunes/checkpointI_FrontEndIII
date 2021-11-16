/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({ portifolio, temaEscuro }) => {

  return (
    <header class="sticky-top">
      <nav class={`navbar navbar-expand-sm navbar-${temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`} aria-label="Third navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#projetos">{portifolio}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul class="navbar-nav mb-2 mb-sm-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#projetos">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#footer">Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;