<script >

// Importiamo il file SingleCharacter 

import SingleContent from "./SingleContent.vue"

import {store} from './store'
   export default{
        name:"ContentList",
        components:{
            SingleContent,
        },
        data() {
            return {
                store,
            }
        },
   }
</script>

<template>
  
   
        <section id="card-container">
          
            
           
             
           

            <div class="big-card" v-for="(element,index) in store.ContentList"
            :key="element.id">
              <SingleContent  :info="element" />
                
            
            </div>
      
        </section>
 
</template>

<style lang="scss" >

    #card-container{
        display: flex;
       
        flex-wrap: wrap;
        margin: auto;
        width:100%;
        color: white;
        background: rgb(2,0,36);
       
         

        .big-card{
            text-align: center;
            margin: 13px;
            width: 30%;
          
          
            
        }

    }
    img{
        max-width: 100%;
    }
   
</style>