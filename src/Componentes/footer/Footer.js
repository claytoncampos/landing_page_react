import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../footer/footer.css'


const Footer = () => (
  <div class="footer">

    <h1 class="footer__logo">º**LOGOTIPO**º</h1>

    <ul class="footer__nav">
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Encontre Eventos</h2>

        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">São Paulo</a>
          </li>

          <li>
            <a href="#">Belo Horizonte</a>
          </li>

          <li>
            <a href="#">Rio de janeiro</a>
          </li>

          <li>
            <a href="#">Recife</a>
          </li>

          <li>
            <a href="#">Goiânia</a>
          </li>
          <li>
            <a href="#">Porto Alegre</a>
          </li>

          <li>
            <a href="#">Florianópolis</a>
          </li>

          <li>
            <a href="#">Salvador</a>
          </li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title">Para Organizadores</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Como Funciona</a>
          </li>

          <li>
            <a href="#">Soluções</a>
          </li>

          <li>
            <a href="#">Serviços</a>
          </li>

          <li>
            <a href="#">Preço</a>
          </li>

          <li>
            <a href="#">Cases de Sucesso</a>
          </li>
        </ul>
      </li>

      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Planeje seu Evento</h2>

        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Música e Festa</a>
          </li>

          <li>
            <a href="#">Curso, Workshop</a>
          </li>

          <li>
            <a href="#">Esportivo</a>
          </li>
          <li>
            <a href="#">Congresso, Seminário</a>
          </li>
          <li>
            <a href="#">Gatronômico</a>
          </li>
          <li>
            <a href="#">Encontro, networking</a>
          </li>
          <li>
            <a href="#">Religioso</a>
          </li>
          <li>
            <a href="#">Evento Online</a>
          </li>
        </ul>


      </li>

      <li class="nav__item">
        <h2 class="nav__title">Ajuda</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Central de Ajuda</a>
          </li>

          <li>
            <a href="#">Compradores e Participantes</a>
          </li>

          <li>
            <a href="#">Organizadores de Eventos</a>
          </li>
        </ul>
      </li>
    </ul>

    <footer class="footer-end">

      <div class="footer-end-right">
        <a href="#"><FaFacebookSquare /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
      </div>

      <div class="footer-end-left">
        <p class="footer-links">
          <a class="#" href="#">Sobre</a>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contato</a>
        </p>
      </div>

      <div class="legal">
        <p>&copy; 2020 Something. All rights reserved.</p>
        <span>Feito com <span class="heart">♥</span>
            Facebook Coder</span>
      </div>

    </footer>
  </div>
);

export default Footer;