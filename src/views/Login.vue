<template>
  <main>
    <form @submit="login">
      <h1>Login</h1>

      <Input
        type="text"
        label="Senha"
        placeholder="********"
        :msg="msg"
        v-model="senha"
      />

      <Button
        type="submit"
        label="Entrar"
        :disabled="false"
        :sucess="false"
      />
    </form>
  </main>
</template>

<script>
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'

  export default {
    name: 'Login',
    components: {
      Input,
      Button
    },
    data() {
      return {
        senha: null,
        msg: null
      }
    }
  }
</script>

<style scoped>
  main {
    display: grid;
    place-items: center;

    min-height: 100vh;
  }

  form {
    text-align: center;

    padding: 15px;

    border-radius: 10px;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
</style>