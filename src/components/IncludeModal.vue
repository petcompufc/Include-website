<style scoped>
  /* general rules */
  .modal-backdrop, .modal-content, .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.2);
    z-index: 1000;
  }

  .modal-content {
    flex-direction: column;
    color: rgba(0,0,0);
    background-color: rgb(255,255,255);
    padding: 40px 20px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .modal-header {
    margin: 0 10px;
    padding: 10px;
    border-bottom: 1px solid rgb(214,214,214);
    width: 100%;
  }

  .modal-header h1 {
    font-size: 1.4em;
  }

  .modal-body {
    min-width: 300px;
    max-width: 300px;
  }

  .modal-body a {
    color: rgb(0,0,0);
    text-decoration: underline;
  }

  .modal-body h1 {
    margin: 20px;
  }

  .modal-body p {
    max-width: 300px;
    margin: 10px 50px 50px;
  }

  .modal-body ul {
    text-align: center;
    margin: 50px;
  }

  .modal-body ul li {
    padding: 10px;
    font-size: 1.2em;
  }

  .modal-btn {
    background-color: rgb(13,37,76);
    color: rgb(255,255,255);
    font-weight: bold;
    width: 100px;
    height: 30px;
    margin: 0 auto;
    border: none;
    border-radius: 20px;
    transition: background-color .3s ease;
    align-self: flex-end;
  }

  .modal-btn:hover {
    background-color: rgb(19, 52, 107);
  }
</style>

<template>
  <section class="modal-backdrop" @click.self="close">
    <section class="modal-content">
      <header class="modal-header">
        <slot name="header"></slot>
      </header>

      <section class="modal-body">
        <slot name="body"></slot>
      </section>

      <button class="modal-btn" @click.prevent="close">Fechar</button>
    </section>
  </section>
</template>


<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
