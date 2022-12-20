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
     
    <input type="search" name="" id="input-search"  v-model="store.searchText" @keypress.enter="$emit('search')" >
    <button  @click="$emit('search') ">
        Cerca
    </button>
   </div>

 
   
</template>

<style lang="scss" >
button{
    background-color: red;
    margin: 0px 26px;
    color: wheat;
    font-family: sans-serif;
    border: none;
    padding: 6px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
#input-container{
    margin: 0px 30px;
}
#input-search{
    padding: 5px;
    font-size: 15px;
}
</style>