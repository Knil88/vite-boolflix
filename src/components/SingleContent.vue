<script>
 export default{
    props:["info"],
   data() {
    return {
        data() {
        return {
            arrayFlags: [
                {
                    img: "..flag/Flag_of_Italy.svg.png",
                    lang: "it"
                },
                {
                    img: "..flag/flag-en.png",
                    lang: "en"
                },
                {
                    img:"..flag/flag-ja.png",
                    lang: "ja"
                },
               
               
                {
                    img: "..flag/rainbow.png",
                    lang: ""
                }
            ]
        }
    },
    }
   },
   computed:{
   getFlags(){
    for (let i = 0; i < this.arrayFlags.length; i++) {
                if (this.arrayFlags[i].lang.includes(this.info.original_language)) {
                    return this.arrayFlags[i].img
                }
            }
            return this.arrayFlags[this.arrayFlags.length - 1].img
        },
   }
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
                        <img :src="getFlags" alt="" id="lingua">
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