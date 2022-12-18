<script>
 export default{
    props:["info"],
 }
</script>

<template>
    
                <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" alt="">
                <div class="info-title">
                    <div id="Titolo">
                        {{info.title}}
                    </div>
                    <div id="titolo-originale">
                        {{info.original_title}}
                    </div>
                    <div id="lingua">
                        {{info.original_language}}
                    </div>
                    <div id="voto">
                        {{info.vote_average}}
                    </div>
                </div>
            
           
</template>

<style lang="scss">

</style>