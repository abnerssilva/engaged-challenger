<template>
  <main id="application" class="home">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-gray-700"> 
      <!-- Title -->
			<em><h1 id="title" class="poppins text-center text-white pt-2 mb-3">Rick and Morty App</h1></em>
			
      <!-- Pagination Buttons -->
      <div class="flex justify-center">
        <div id="pagination" class="mb-5 flex justify-between w-1/2">
          <Button class="p-button-secondary p-button-rounded p-button-sm" label="First" icon="pi pi-check" iconPos="left" @click="firstPage()" />
          <Button class="p-button-secondary p-button-rounded p-button-sm" label="Prev" icon="pi pi-angle-double-left" iconPos="left" @click="previousPage()" />
          <Button class="p-button-secondary p-button-rounded p-button-sm" label="Next" icon="pi pi-angle-double-right" iconPos="right" @click="nextPage()" />
          <Button class="p-button-secondary p-button-rounded p-button-sm" label="Last" icon="pi pi-check" iconPos="right" @click="lastPage()" />
        </div>
      </div>

      <!-- Search Field -->
			<div id="search" class="pb-2 flex justify-center">
				<span class="p-input-icon-left">
					<i class="pi pi-search" />
					<InputText class="p-input" type="text" v-model="name" placeholder="Buscar" @keypress.enter="searchOrReset()" />
				</span>
        <Button class="p-button-secondary p-button-lg" :label="label" icon="pi pi-check" iconPos="right" @click="searchOrReset()" />
			</div>
		</header>

    <section>
      <!-- Query -->
      <ApolloQuery 
        :query="require('../graphql/allCharacters.graphql')"
        :variables="{ page, filter }"
        :update="data => data.characters.results"
      >
        <template v-slot="{ result: { data, loading, error } }">
          <!-- Loading condition -->
          <div v-if="loading"><Loading /></div>

          <!-- Data Condition -->
          <div v-else-if="data">
            <section id="main">
              <div class="m-auto pt-4" v-for="character in data" :key="character.id">
                <CharacterCard 
                  :id="character.id" 
                  :name="character.name" 
                  :image="character.image" 
                  :status="character.status" 
                  :species="character.species" 
                  :origin="character.origin.name" 
                  :episode="character.episode"
                />
              </div>
            </section> 
          </div>

          <!-- Error Condition -->
          <div class="error-class" v-else-if="error">
            <Error 
              :error="error"
            />
          </div>
        </template>
      </ApolloQuery>
    </section>
  </main>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'Characters',

  components: {
    CharacterCard,
    Loading,
    Error,
    InputText,
    Button
	},

  data () {
    return {
      page: 1,
      label: 'Search',
      name: '',
      filter: { "name": '' }
    }
  },

  mounted() {
    this.animationEntrance()
  },

  methods: {
    // Method to reach the first page of characters graphQL query
    firstPage() {
      this.page = 1
    },

    // Method to reach the previous page of characters graphQL query
    previousPage() {
      if(this.page === 1) {
        this.page = 1
        alert('Não existem Páginas anteriores')
      } else {
        this.page--
      }
    },

    // Method to reach the next page of characters graphQL query
    nextPage() {
      if(this.page === 42) {
        this.page = 42
        alert('Atingimos a Última Página')
      } else {
        this.page++
      }
    },

    // Method to reach the last page of characters graphQL query
    lastPage() {
      this.page = 42
    },

    // Method to reach the searched character or rest to show all characters on graphQL query
    searchOrReset() {
      const inputSearch = document.querySelector('.p-input')

      if(this.name === '' || this.name === ' ' || this.name === null || this.name === undefined) {
        inputSearch.focus()
        inputSearch.blur()
        let objectNameForFilter = {
          "name": this.name
        }
        this.filter = objectNameForFilter
        this.label = 'Search'
        this.page = 1      
      } else {
        let objectNameForFilter = {
          "name": this.name
        }
        this.filter = objectNameForFilter
        this.label = 'Reset'
        this.name = ''
      }
    },

    // Method to animate the App's first page entrance
    animationEntrance() {
      const application = document.querySelector('#application')
      setTimeout(() => {
        application.classList.add('animate')
      }, 1500)
    }
  }

}
</script>

<style>

	.home {
		background-color: #0d101a;
	}

  #application {
    opacity: 0;
  }

  .animate {
    animation-name: enter;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  @keyframes enter {
    to {
      opacity: 1;
    }
  }

	input.p-inputtext {
		width: 100%;
	}

	.p-button:focus {
		outline: none;
	}

	#main {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-auto-flow: row;	
	}

	#title {
		font-size: 3.75rem/* 60px */;
	}

	@media (max-width: 1299.98px) {
		#main{
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		#title {
			font-size: 3rem/* 48px */;
		}
	}

	@media (max-width: 950px) {
		#main{
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		#title {
			font-size: 2.25rem/* 36px */;
			line-height: 2.5rem/* 40px */;
		}
	}

	@media (max-width: 650px) {
		#main{
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
		#title{
			font-size: 1.5rem;
			line-height: 2rem;
		}
    #pagination {
      width: 100%;
    }
   
		.p-button {
			margin-top: 10px;
		}
		input.p-inputtext {
			width: 100%;
		}
	}
</style>
