<template>
    <div class=intro style="set-font">

      <h1>Introduction to MBTI</h1>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <div data-aos="zoom-in">
             <h3 style="text-align:justify; text-justify:inter-ideograph;">In personality typology, the Myers–Briggs Type Indicator (MBTI) is an introspective self-report questionnaire indicating differing psychological preferences in how people perceive the world and make decisions. The test attempts to assign four categories: introversion or extraversion, sensing or intuition, thinking or feeling, judging or perceiving. One letter from each category is taken to produce a four-letter test result, such as "INTJ" or "ESFP".<sup><a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator">[1]</a ></sup></h3>

             <h3 style="text-align:justify; text-justify:inter-ideograph;">You can take a test <a href="https://www.16personalities.com/free-personality-test">HERE</a > if you want.</h3>
          </div>
        </el-col>
      </el-row>

      <h1>About our datasets</h1>
      <div  data-aos="zoom-in">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <div>
            <h3 style="text-align:justify; text-justify:inter-ideograph;">Our research is based on 4 datasets on kaggle about different aspects related to the MBTI test. Following the wrangling of the original dataset, we now have:</h3>
          </div>
        </el-col>
      </el-row>
        
        <el-row :gutter="24" type="flex">
          <el-col :span="4" class="grid-content"></el-col>
          <el-col :span="8" class="grid-content">
              <div class="iCountUp">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal1"
                  :options="options"
                  @ready="onReady1"
                />
              </div>
              <h3>different countries</h3>
          </el-col>
          <el-col :span="8" class="grid-content">
              <div class="iCountUp">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal2"
                  :options="options"
                  @ready="onReady2"
                />
              </div>
              <h3>different posts</h3>
          </el-col>
        </el-row>

        <el-row :gutter="24" type="flex">
            <el-col :span="4" class="grid-content"></el-col>
            <el-col :span="8" class="grid-content">
              <div class="iCountUp">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal3"
                  :options="options"
                  @ready="onReady3"
                />
              </div>
                <h3>movie characters</h3>
            </el-col>
            <el-col :span="8" class="grid-content">
              <div class="iCountUp">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal4"
                  :options="options"
                  @ready="onReady4"
                />
              </div>
                <h3>birthday records</h3>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
        <el-col :span="16">
          <div>
            <h3 style="text-align:justify; text-justify:inter-ideograph;">This anaysis has a high level of credibility since they are based on sufficient data.</h3>
          </div>
        </el-col>
      </el-row>
      </div>

      <h1>Data analysis</h1>
      <h2>Birth month distribution</h2>

        <el-row :gutter="24" type="flex">
          <el-col :span="4"></el-col>
          <el-col :span="7">
            <div  data-aos="fade-right">
              <br><br>
              <h3 style="text-align:justify; text-justify:inter-ideograph;">The bar chart on the right depicts the monthly distribution of birth dates for the 16 personalities. We applied normalization to the original dataset to get the result. We found the INTJ and INFP types were frequent in all months except August. Other types like ESFP, ESTJ, and ESFJ are rare.</h3>
              <h3 style="text-align:justify; text-justify:inter-ideograph;">In personality types, E is for extrovert and I is for introvert. In the graph, above the grey line is extrovert and below is introvert. We found that, overall, there are more introverts. But in August, the proportion of extroverts was larger than in other months. This is in line with our expectation that people born in summer are more outgoing.</h3>
            </div>
          </el-col>
            <el-col :span="9" class="grid-content" data-aos="fade-left">
                <iframe src="static/birthday_overall.html" scrolling="auto" frameborder="0" style="width: 500px; height: 550px"></iframe>
            </el-col>
        </el-row>

      <h2>Birth month and continent</h2>

      <div  data-aos="zoom-in">

      <el-row type="flex" justify="center">
        <el-col :span="16">
          <div>
            <h3 style="text-align:justify; text-justify:inter-ideograph;">We integrated the two datasets and created the parallel categories diagram below to investigate the association between continents and birth month. The INFP personality type was discovered to be the most frequent of all personality types. There are also personality types that only appear in a few months. This may be due to the size of the dataset, where some cases are not covered.</h3>
          </div>
        </el-col>
      </el-row>
        
        <el-row :gutter="24" type="flex">
           <el-col :span="4"></el-col>
            <el-col :span="16" class="grid-content" style="height: 500px">
                <iframe src="static/sankey.html" scrolling="auto" frameborder="0" style="width: 100%; height: 550px"></iframe>
            </el-col>
        </el-row>
        <br><br>

        </div>

        <h2>Personalities in cinematic universes</h2>

        <div  data-aos="zoom-in">

        <el-row type="flex" justify="center">
        <el-col :span="16">
          <div>
            <h3 style="text-align:justify; text-justify:inter-ideograph;">Have you ever wondered what the personalities of the characters in the cinematic universes are like? We explored the distribution of personality types for characters in the Marvel and Harry Potter films and came up with the following two Sunburst graphs. We found that the ESTJ (Executive) type is the most in Harry Potter, and the ISTJ (Logistician) is the most in Marvel movies.</h3>
          </div>
        </el-col>
      </el-row>

        
        <el-row>
          <el-col :span="12" class="grid-content">
            <h3>Harry Potter</h3>
            <iframe src="static/hp_character.html" scrolling="auto" frameborder="0" style="width: 700px; height: 700px"></iframe>    
          </el-col>      
          <el-col :span="12" class="grid-content">
            <h3>Marvel</h3>
            <iframe src="static/marvel_character.html" scrolling="auto" frameborder="0" style="width: 700px; height: 700px"></iframe>    
          </el-col>  
        </el-row>

        </div>
        
        <br><br><br>
        <h1>Next...</h1>
        <h3>Now, you can go to the <router-link to="/type">Personalities</router-link> page to explore each personality.</h3>
        
    </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'demo',
    components: {
      ICountUp
    },
    data() {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        delay: 1000,
        endVal1: 158,
        endVal2: 8675,
        endVal3: 18741,
        endVal4: 306,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      }
    },
    methods: {
      onReady1: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal1);
      },
      onReady2: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal2);
      },
      onReady3: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal3);
      },
      onReady4: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal4);
      }
    }
  };
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700");
@import url("https://fonts.googleapis.com/css?family=Martel+Sans");
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .iCountUp {
    font-family: "Playfair Display", serif;
    font-size: 4em;
    margin: 0;
    color: #99a9bf;
  }
  .set-font{
    font-family: "Martel Sans"
  }
</style>