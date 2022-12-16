<script >
import axios from "axios"
import AppSearch from './components/AppSearch.vue';
import ContentList from './components/ContentList.vue';
import { store } from './components/store';
export default{
 name:"App",
  data() {
    return {
      store,
    }
  },

// Creiamo il metodo per richiamre la nostra contentList

  methods: {
    getContent(){
    
    // Creiamo la variabile myUrl che richiama store.apiUrl
    
    let myUrl = this.store.apiUrl

    //Poniamo la condizione che se searchText è diverso  da stringa vuota aggiungiamo ad myUrl lo status che richiam il valore di store.searchText

  
    if(this.store.searchText != "" ){
         myUrl += `${store.apiOriginal}+${store.apiTitle}+${this.store.searchText} `
      }
      
    axios
    
    //con questo methods richiamiamo myUrl
    .get(myUrl)
    
    //Con then diciamo che tutto è andato per il verso giusto 
    .then(res =>{

      //quando definiamo con methods dobbiamo ricordarci sempre di aggiungere this.nomevariabile

      store.ContentList = res.data.results;
    })

    //Con catch diciamo che ci sono stati degli errori 

    .catch(err =>{
      console.log("Errori",err);
    }
    )
   
  },
  },
  //mettiamo tutti i file importati in components

  components: {
    
    AppSearch,
    ContentList,
    
    
  },


  //con mounted andiamo a definire la nostra funzione in modo che possa avviarsi

  mounted() {
        this.getContent();
      }
}

</script>

<template>
    <header>
      BOOLFLIX
    <AppSearch  @search="getContent()"/>
    
    </header>
    <main>
      <ContentList/>
    </main>
</template>

<style lang="scss" scoped>
  @use'./components/styles/general.scss' as *;
  @use'./components/styles/partial/variables.scss' as *;

</style>
