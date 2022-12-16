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
          
            
           
             
           

            <div class="big-card">
                <img src="https://www.themoviedb.org/t/p/w500/1g0K701Z1SYJ83A34XvvfnbacTw.jpg" alt="">
                <div id="Titolo">
                    Titolo
                </div>
                <div id="titolo-originale">
                    Titolo Originale
                </div>
                <div id="lingua">
                    Lingua
                </div>
                <div id="voto">
                    Voto
                </div>
            
            </div>
      
        </section>
 
</template>

<style lang="scss" scoped>

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
            width: 13%;
          
          
            
        }

    }
    img{
        max-width: 100%;
    }
   
</style>