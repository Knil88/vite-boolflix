<script>
 export default{
    props:["info"],
   data() {
    return {
        data() {
        return {
            arrayFlags: [
                {
                    img: "../assets/flag/Flag_of_Italy.svg.png",
                    lang: "it"
                },
                {
                    img: "../assets/flag/flag-en.png",
                    lang: "en"
                },
                {
                    img:"../assets/flag/flag-ja.png",
                    lang: "ja"
                },
               
               
                {
                    img: "../assets/flag/flag-rainbow.png",
                    lang: ""
                }
            ]
        }
    },
    }
   },
   computed:{
   getFlags(){
    for (let i = 0 ; i < this.arrayFlags.length; i++) {
                if (this.arrayFlags[i].lang.includes(this.info.original_language)) {
                    return this.arrayFlags[i].img
                }
            }
            return this.arrayFlags[this.arrayFlags.length - 1].img
        },
        getVote(){
            return Math.round(this.info.vote_average / 2);
        }
   }
 }
</script>

<template>
    
                <img :src="`https://image.tmdb.org/t/p/w500${info.poster_path}`" alt="">
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
                    <span id="star" v-for="star in getVote" >
                        <font-awesome-icon icon="fa-solid fa-star"/>
                    </span >
                   
                </div>
            
           
</template>

<style lang="scss">
    #lingua{
       max-width: 25px;
    }
    #star{
        color: gold;
    }
</style>