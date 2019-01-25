<style scoped>
  /* footer-address start */
  .footer-address {
    background-color: rgb(0,0,0);
    color: rgb(255,255,255);
    font-size: .38em;
    text-align: left;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .footer-address-items {
    width: 200px;
    height: 200px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .footer-address-items h1 {
    font-size: 1em;
    margin: 0 0 20px;
  }

  .footer-address-items a {
    color: rgb(255,255,255);
    display: inline-block;
    margin-bottom: 5px;
    text-decoration: underline;
  }

  .footer-address-imgs {
    width: 200px;
    height: 61px;
    display: block;
    margin: 10px 0;
  }

  .social-media-container {margin-top: 10px;}
  .social-media-items {margin-right: 10px;}

  /* footer-address end */

  #copyright {
    height: 40px;
    background-color: rgb(105, 105, 105);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <footer id="include-footer">
    <section class="footer-address">
      <section class="footer-address-items">
        <img class="footer-address-imgs" src="../assets/imgs/logo-pet.png" alt="PET Computação logo" />
        <img class="footer-address-imgs" src="../assets/imgs/logo-ufc.png" alt="UFC logo">
      </section>
      <section class="footer-address-items">
        <h1>PET Computação</h1>
        <address>
          Av. Humberto Monte, s/n<br/>
          UFC - Campus do Pici<br/>
          Departamento da Computação<br/>
          Bloco 910<br/>
        </address>
        <section class="social-media-container">
          <a href="http://www.petcomp.ufc.br" target="_blank">petcomp@ufc.br</a><br/>
          <a class="social-media-items" href="https://www.facebook.com/PETCompUFC/" target="_blank">
            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="358.4 9.6 40 40">
              <path fill="#FFFFFF" d="M393 9.6h-29.2c-3 0-5.4 2.4-5.4 5.4v29.2c0 3 2.4 5.4 5.4 5.4h14.4V35.3h-3.7c-.5 0-.9-.4-.9-.9v-4.6c0-.5.4-.9.9-.9h3.7v-4.5c0-5.2 3.2-8 7.8-8h3.8c.5 0 .9.4.9.9v3.9c0 .5-.4.9-.9.9h-2.3c-2.5 0-3 1.2-3 2.9v4h5.5c.5 0 .9.5.9 1l-.5 4.6c-.1.4-.4.8-.9.8h-4.9v14.3h8.6c3 0 5.4-2.4 5.4-5.4V15c-.2-3-2.6-5.4-5.6-5.4z"/>
            </svg>
          </a>
          <a class="social-media-items" href="https://www.instagram.com/petcompufc/" target="_blank">
            <svg width="20px" height="20px" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="501.5 10.5 40 40">
              <path d="M529.6 10.5h-16.2c-6.6 0-11.9 5.3-11.9 11.9v16.2c0 6.6 5.3 11.9 11.9 11.9h16.2c6.6 0 11.9-5.3 11.9-11.9V22.4c0-6.6-5.3-11.9-11.9-11.9zm7.9 28.1c0 4.4-3.5 7.9-7.9 7.9h-16.2c-4.4 0-7.9-3.5-7.9-7.9V22.4c0-4.4 3.5-7.9 7.9-7.9h16.2c4.4 0 7.9 3.5 7.9 7.9v16.2z"/>
              <path d="M521.5 20.1c-5.7 0-10.3 4.6-10.3 10.3s4.6 10.3 10.3 10.3c5.7 0 10.3-4.6 10.3-10.3s-4.6-10.3-10.3-10.3zm0 16.7c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3z"/>
              <circle cx="531.9" cy="20.2" r="2.5"/>
            </svg>
          </a>
          <a class="social-media-items" href="https://www.youtube.com/user/petcompufc" target="_blank">
            <svg width="20px" height="20px" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="411.5 10.5 40 40">
              <path d="M443.2 16.3h-23.4c-4.6 0-8.3 3.7-8.3 8.3v11.7c0 4.6 3.7 8.3 8.3 8.3h23.4c4.6 0 8.3-3.7 8.3-8.3V24.7c0-4.6-3.7-8.4-8.3-8.4zm-5.6 14.8l-10.9 5.2c-.3.1-.6-.1-.6-.4V25.1c0-.3.3-.5.6-.4l10.9 5.5c.3.2.3.7 0 .9z"/>
            </svg>
          </a>
        </section>
      </section>
      <section class="footer-address-items">
        <h1>Links</h1>
        <section>
          <a href="http://www.ufc.br/" target="_blank">Portal UFC</a><br/>
          <a href="http://portal.dc.ufc.br/" target="_blank">Departamento de Computação</a><br/>
          <a href="http://cc.ufc.br/" target="_blank">Curso de Ciência da Computação</a><br/>
          <a href="http://www.engcomp.ufc.br/" target="_blank">Curso de Engenharia de Computação</a><br/>
          <a href="">Curso de Engenharia de Telecomunicação</a>
        </section>
      </section>
      <!-- <img src="../assets/imgs/logo-dc.png" alt="PET Computação logo" />
      <img src="../assets/imgs/logo-ufc.png" alt="PET Computação logo" /> -->
    </section>
    <section id="copyright">
      <p><small>© 2019 PET Computação UFC, Todos os direitos reservados.</small></p>
    </section>
  </footer>
</template>

<script>
export default {};
</script>
