<template>
  <main>
    <h1>Cardapio</h1>

    <hr />

    <header>
      <button
        class="category-btn"
        :class="categories.salgados"
        @click="changeCategory('salgados')"
      >
        Salgados
      </button>
      <button
        class="category-btn"
        :class="categories.doces"
        @click="changeCategory('doces')"
      >
        Doces
      </button>
      <button
        class="category-btn"
        :class="categories.bebidas"
        @click="changeCategory('bebidas')"
      >
        Bebidas
      </button>
    </header>

    <section>
      <table
        v-show="categories.salgados === 'active'"
      >
        <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="salgado in salgados"
            :key="salgado.id"
          >
            <td>
              {{ salgado.nome }}
            </td>
            <td>
              {{ salgado.quantidade }}
            </td>
            <td>
              R${{ salgado.valor }}
            </td>
          </tr>
        </tbody>
      </table>

      <table
        v-show="categories.doces === 'active'"
      >
        <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="doce in doces"
            :key="doce.id"
          >
            <td>
              {{ doce.nome }}
            </td>
            <td>
              {{ doce.quantidade }}
            </td>
            <td>
              R${{ doce.valor }}
            </td>
          </tr>
        </tbody>
      </table>

      <table
        v-show="categories.bebidas === 'active'"
      >
        <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="bebida in bebidas"
            :key="bebida.id"
          >
            <td>
              {{ bebida.nome }}
            </td>
            <td>
              {{ bebida.quantidade }}
            </td>
            <td>
              R${{ bebida.valor }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <div class="btn-container">
      <RouterLink class="btn-link" to="/login" title="Login" >
        <font-awesome-icon icon="fa-solid fa-user" />
      </RouterLink>
      <RouterLink class="btn-link" to="/adm" title="Configurações" >
        <font-awesome-icon icon="fa-solid fa-gear" />
      </RouterLink>
    </div>
</template>

<script>
  import { supabase } from '../supabase'

  export default {
    name: 'Home',
    data() {
      return {
        categories: {
          'salgados': 'active',
          'doces': 'disable',
          'bebidas': 'disable'
        },
        salgados: null,
        doces: null,
        bebidas: null,
      }
    },
    methods: {
      async changeCategory(name) {
        if (name === 'salgados') {
          this.categories.salgados = 'active'
          this.categories.doces = 'disable'
          this.categories.bebidas = 'disable'
          return
        }

        if (name === 'doces') {
          this.categories.salgados = 'disable'
          this.categories.doces = 'active'
          this.categories.bebidas = 'disable'
          return
        }

        if (name === 'bebidas') {
          this.categories.salgados = 'disable'
          this.categories.doces = 'disable'
          this.categories.bebidas = 'active'
          return
        }
      },
      async getSalgados() {
        try {
          const { data, error } = await supabase
            .from('cardapio')
            .select()
            .eq('tipo', 'salgado')

          this.salgados = data
        } catch (error) {
          console.log(error)
        }
      },
      async getDoces() {
        try {
          const { data, error } = await supabase
            .from('cardapio')
            .select()
            .eq('tipo', 'doce')

          this.doces = data
        } catch (error) {
          console.log(error)
        }
      },
      async getBebidas() {
        try {
          const { data, error } = await supabase
            .from('cardapio')
            .select()
            .eq('tipo', 'bebida')

          this.bebidas = data
        } catch (error) {
          console.log(error)
        }
      }
    },
    mounted() {
      this.getSalgados()
      this.getDoces()
      this.getBebidas()
    }
  }
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;

    padding: 15px;

    text-align: center;

    min-height: 100vh;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 15px;
  }

  .category-btn {
    background: transparent;

    border: none;
    border-bottom: 1px solid transparent;

    font-size: 2em;

    margin-inline: 15px;

    transition: ease-in .2s;
  }

  .category-btn:hover {
    cursor: pointer;

    color: var(--c-primary);
  }

  .category-btn.active {
    border-color: var(--c-primary);
  }
  .category-btn.active:hover {
    border-color: var(--c-secondary);
  }

  .btn-container {
    position: fixed;

    right: 10px;
    bottom: 10px;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .btn-link {
    display: grid;
    place-items: center;

    color: var(--c-text);

    font-size: 2em;

    width: 3.5rem;
    height: 3.5rem;

    background: var(--c-primary);


    border-radius: 50%;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
</style>