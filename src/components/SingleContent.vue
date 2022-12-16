<script>
    props:["info"]
</script>

<template>
    <div class="big-card"  v-for="content in store.ContentList" 
            :key="content.id">
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
</template>

<style lang="scss">
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