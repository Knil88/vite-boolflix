<script>
export default {
    name: "SingleContent",
    props: ["info"],
    data() {
        return {
            Flags: [
                {
                    img: "img/Flag_of_Italy.svg.png",
                    lang: "it"
                },
                {
                    img: "img/flag-en.png",
                    lang: "en"
                },
                {
                    img:"img/flag/flag-ja.png",
                    lang: "ja"
                },
               
               
                {
                    img: "img/flag-rainbow.png",
                    lang: ""
                }
            ]
        }
    },
    computed: {
        
        getFlags() {
            for (let i = 0; i < this.Flags.length; i++) {
                if (this.Flags[i].lang.includes(this.info.original_language)) {
                    return this.Flags[i].img
                }
            }
            return this.Flags[this.Flags.length - 1].img
        },
       
        getVote() {
            return Math.round(this.info.vote_average / 2);
        }
    }
}
</script>

<template>
    <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" alt="">
 <div id="layover">
   
    <div class="info-title">
        <div id="Titolo">
            {{info.title}}
            {{ info.name }}
        </div>
        <div id="titolo-originale">
            {{info.original_title}}
            {{ info.original_name }}
        </div>
        <div class="description">
            {{ info.overview }}
        </div>
        <div >
            <img :src="getFlags" alt="" id="lingua">
        </div>
        <span id="star" v-for="star in getVote" >
            <font-awesome-icon icon="fa-solid fa-star"/>
        </span >
        <span id="star" v-for="star in 5 - getVote" >
            <font-awesome-icon icon="fa-solid fa-star-half-stroke"/>
        </span >
       
    </div>
   
 </div>


</template>

<style lang="scss">
    #lingua{
       max-width: 25px;
    }
    #star{
        color: gold;
    }
    .info-title {
        position: absolute;
        bottom: 70%;
        width: 240px;
        left: 5%;
      }
    #layover{
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        
    }
    .description{
        height: 30px;
        overflow: auto;
    }
</style>