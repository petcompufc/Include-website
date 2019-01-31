<style scoped>
  /* general rules */

  footer a { text-decoration: underline; color: rgb(255,255,255) }

  footer h1 {
    text-align: justify;
    font-size: 1em;
    margin-bottom: 20px;
  }

  footer li, footer address { font-size: .8em; margin-bottom: 8px }
  @media (max-width: 699px) { footer li, footer h1 { text-align: center } }

  #contributing-container, #address-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* contributing rules */
  #contributing-container {
    background-color: rgb(177,69,68);
    color: rgb(255,255,255);
    padding: 10px;
  }

  #contributing-container a {
    text-decoration: none;
    color: inherit;
    margin: 5px 0 0 10px;
  }

  /* address rules */
  #address-container {
    flex-wrap: wrap;
    padding: 50px 0;
  }

  .address-items {
    min-height: 160px;
    margin: 15px 80px;
  }

  .logos-container:first-child {
    margin-bottom: 20px;
  }

  .sm-list, .sm-list li { display: inline-block; }
  .sm-list { margin-right: 2px; }
  .sm-list li { margin: 4px 2px; }

  /* copyright rules */
  #copyright-container p {
    text-align: center;
    background-color: rgb(13,37,76);
    color: rgb(255,255,255);
    padding: 10px;
  }
</style>

<template>
  <footer>
    <section id="contributing-container">
      <img src="../assets/imgs/social-media/github-logo.png" alt="github logo" />
      <a href="https://github.com/petcompufc/Include-website" target="_blank">Ajude-nos a melhorar!</a>
    </section>

    <section id="address-container">
      <section class="address-items">
        <img src="../assets/imgs/logo-pet.png" alt="PET Computação logo" /><br>
        <img src="../assets/imgs/logo-ufc.png" alt="UFC logo">
      </section>

      <section class="address-items">
        <h1>PET Computação</h1>
        <address>
          Av. Humberto Monte, s/n<br>
          UFC - Campus do Pici<br>
          PET Computação\nBloco 910
        </address>
        <section class="social-media-container">
          <a href="http://www.petcomp.ufc.br" target="_blank">petcomp@ufc.br</a><br>
          <ul class="sm-list">
            <li>
              <a href="https://www.facebook.com/PETCompUFC/" target="_blank">
                <img src="../assets/imgs/social-media/fb-cc-logo.png" alt="Logo vermelha do Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/petcompufc/" target="_blank">
                <img src="../assets/imgs/social-media/instagram-cc-logo.png" alt="Logo vermelha do Instagram">
              </a>
            </li>
          </ul>
          <ul class="sm-list">
            <li>
              <a href="https://www.facebook.com/PET-Eng-Comp-336280073590849/" target="_blank">
                <img src="../assets/imgs/social-media/fb-ec-logo.png" alt="Logo azul do Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/petufc.engcomp/" target="_blank">
                <img src="../assets/imgs/social-media/instagram-ec-logo.png" alt="Logo azul do Instagram">
              </a>
            </li>
          </ul>
          <ul class="sm-list">
            <li>
              <a href="https://www.facebook.com/pettelecomufc/" target="_blank">
                <img src="../assets/imgs/social-media/fb-et-logo.png" alt="Logo vermelha do Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pettelecom/" target="_blank">
                <img src="../assets/imgs/social-media/instagram-et-logo.png" alt="Logo amarela do Instagram">
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section class="address-items">
        <h1>Links</h1>
        <ul>
          <li><a href="http://www.ufc.br/" target="_blank">Portal UFC</a></li>
          <li><a href="http://portal.dc.ufc.br/" target="_blank">Departamento de Computação</a></li>
          <li><a href="http://cc.ufc.br/" target="_blank">Curso de Ciência da Computação</a></li>
          <li><a href="http://www.engcomp.ufc.br/" target="_blank">Curso de Engenharia da Computação</a></li>
          <li><a href="http://www.telecom.ufc.br/" target="_blank">Curso de Engenharia de Telecomunicações</a></li>
        </ul>
      </section>
    </section>

    <section id="copyright-container">
      <p><small>© 2019 PET Computação UFC, Todos os direitos reservados.</small></p>
    </section>
  </footer>
</template>
