<script>
 export default{
    props:["info"],
   data() {
    return {
        
    }
   },
   methods: {

   },
 }
</script>

<template>
    
                <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" alt="">
                <div class="info-title">
                    <div id="Titolo">
                        {{info.title}}
                        {{ info.name }}
                    </div>
                    <div id="titolo-originale">
                        {{info.original_title}}
                        {{ info.original_name }}
                    </div>
                    <div >
                        <img id="lingua" :src="`https://countryflagsapi.com/svg/it`" alt="">
                    </div>
                    <div id="voto">
                        {{info.vote_average}}
                    </div>
                </div>
            
           
</template>

<style lang="scss">
    #lingua{
       max-width: 25px;
    }
</style>