<template>
  <main>
    <form @submit="login" v-if="status === 'login'">
      <h1>Login</h1>

      <hr />

      <Input
        type="email"
        label="Email"
        placeholder="exemplo@email.com"
        :msg="msgEmail"
        v-model="email"
      />

      <Input
        type="password"
        label="Senha"
        placeholder="********"
        :msg="msgSenha"
        v-model="senha"
      />

      <hr />

      <Button
        type="submit"
        label="Entrar"
        :disabled="false"
        :sucess="false"
      />

      <Button
        type="button"
        label="Registrar"
        :disabled="false"
        :sucess="false"
        @click="changeLogin"
      />
    </form>

    <form @submit="register" v-else>
      <h1>Registrar</h1>

      <hr />

      <Input
        type="text"
        label="Nome Completo"
        placeholder="João da Silva"
        :msg="msgNome"
        v-model="nome"
      />

      <Input
        type="email"
        label="Email"
        placeholder="exemplo@email.com"
        :msg="msgEmail"
        v-model="email"
      />

      <Input
        type="password"
        label="Senha"
        placeholder="********"
        :msg="msgSenha"
        v-model="senha"
      />

      <hr />

      <Button
        type="submit"
        label="Registrar"
        :disabled="false"
        :sucess="false"
      />

      <Button
        type="button"
        label="Entrar"
        :disabled="false"
        :sucess="false"
        @click="changeLogin"
      />
    </form>
  </main>
</template>

<script>
  import Input from '../components/Input.vue'
  import Button from '../components/Button.vue'

  import { supabase } from '../supabase'

  export default {
    name: 'Login',
    components: {
      Input,
      Button
    },
    data() {
      return {
        nome: null,
        email: null,
        senha: null,
        msgNome: null,
        msgEmail: null,
        msgSenha: null,
        status: 'login'
      }
    },
    methods: {
      async login(e) {
        e.preventDefault()

        if (!this.email) {
          this.msgSenha = null
          this.msgEmail = 'O email é obrigatório!'
          return
        }

        if (!this.senha) {
          this.msgEmail = null
          this.msgSenha = 'A senha é obrigatória!'
          return
        }

        this.msgEmail = null
        this.msgSenha = null

        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.senha,

        })

        if (error) throw error

        this.$router.push('/conta')
      },
      async register(e) {
        e.preventDefault()

        if (!this.nome) {
          this.msgEmail = null
          this.msgSenha = null
          this.msgNome = 'O nome é obrigatório!'
          return
        }

        if (!this.email) {
          this.msgNome = null
          this.msgSenha = null
          this.msgEmail = 'O email é obrigatório!'
          return
        }

        if (!this.senha) {
          this.msgNome = null
          this.msgEmail = null
          this.msgSenha = 'A senha é obrigatória!'
          return
        }

        this.msgNome = null
        this.msgEmail = null
        this.msgSenha = null

        const { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.senha,
          options: {
            data: {
              name: this.nome
            }
          }
        })

        if (error) throw error

        window.alert('Conta Criada com sucesso, agora verifique seu email para poder fazer login')
      },
      async changeLogin(e) {
        e.preventDefault()

        if (this.status === 'login') {
          this.status = 'register'
        } else {
          this.status = 'login'
        }

        this.nome = null
        this.email = null
        this.senha = null
        this.msgEmail = null
        this.msgSenha = null
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
    display: flex;
    flex-direction: column;
    gap: 15px;

    text-align: center;

    padding: 15px;

    border-radius: 10px;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
</style>