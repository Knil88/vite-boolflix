<script>
 export default{
    props:["info"],
 }
</script>

<template>
    <div class="big-card">
                <img :src="info.backdrop_path" alt="">
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