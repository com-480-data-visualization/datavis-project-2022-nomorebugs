<template>
    <div class=test>
        <h1>TEST</h1>

        <iframe src="static/world.html" scrolling="auto" frameborder="0" style="width: 100%; height: 500px;"></iframe>

        <iframe src="static/distribution_INFP.html" scrolling="auto" frameborder="0" style="width: 100%; height: 500px;"></iframe>

        <iframe src="static/marvel.html" scrolling="auto" frameborder="0" style="width: 100%; height: 500px;"></iframe>

        <!-- <iframe ref="iframe" :src="pdfUrl" v-if="pdfUrl"></iframe> -->

        <!-- <iframe :src="require('../static/world.html')" alt="">  -->
        <!-- <iframe :src="img3Src" alt="">  -->
        <!-- <img :src="require('../static/img/'+ this.imgName +'.jpg')" alt="">  -->
    </div>

    <!-- <iframe :src="pdfUrl" v-if="pdfUrl" scrolling="auto" frameborder="0" style="width: 100%; height: 500px;"></iframe> -->

</template>






<script>
export default{
    data(){
        return {
        value1: false,
        value2: false,
        value3: true,
        value4: true,
        rawHtml: "static/world.html",
        iframe1 : {
          src: ''
        }
      }
    },
}
</script>