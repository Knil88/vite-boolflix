<script>
    import { store } from './store';
    export default{
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
  
   <div id="input-container">
     
    <input type="search" name="" id="input-search"  v-model="store.searchText" >
    <button  @click="$emit('search')">
        Cerca
    </button>
   </div>

 
   
</template>

<style lang="scss" >
#input-container{
    margin: 0px 30px;
}
</style>