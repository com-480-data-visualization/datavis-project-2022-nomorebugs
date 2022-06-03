<template>
  <div class="type" style="set-font">
    <!-- row 0 -->
    <el-row :gutter="24" type="flex">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-slider
          v-model="value"
          :step="1"
          :min="0"
          :max="15"
          :marks="marks"
          show-stops>
        </el-slider>
        <br><br>
      </el-col>
    </el-row>

    <!-- row 1 -->
    <el-row :gutter="24" type="flex">
        <el-col :span="1" class="grid-content"></el-col>

        <el-col :span="8" class="grid-content">
           <br>
            <h4 style="text-align:justify; text-justify:inter-ideograph;">{{intro_word_1}}</h4>
        </el-col>

        <el-col :span="4" class="grid-content">
            <img style="width: 300px; height: 200px" alt="Type image" :src="img_addr">
        </el-col>
        <el-col :span="1" class="grid-content"></el-col>

        <el-col :span="8" class="grid-content">
            <img style="width: 500px; height: 40px" src="static/quote1.jpg">
            <h4 style="width: 400px; margin-left: 50px; text-align:justify; text-justify:inter-ideograph;">{{intro_word_2}}</h4>
            <img style="width: 500px; height: 40px" src="static/quote2.jpg">
            <img style="width: 100px; height: 3px; margin-left: 50px" src="static/WechatIMG908.jpeg">
            <h4 style="margin-left: 50px; margin-top: -2px" >{{intro_word_3}}</h4>
        </el-col>
    </el-row>

    <!-- row 2 -->
    <el-row :gutter="24" type="flex">
      <el-col :span="4" class="grid-content"></el-col>
      <el-col :span="16" class="grid-content">
            <h3>This map shows the proportion of {{type}} in each country</h3>
            <h4 style="text-align:justify; text-justify:inter-ideograph;">* We notice that the largest ratio is 0.2 (i.e. 20%). In order to ensure that the scales of each type of distribution map are the same, we set the range to [0,0.2].</h4>
            <iframe :src="dis_addr" scrolling="auto" frameborder="0" style="width: 100%; height: 500px;"></iframe>
      </el-col>
    </el-row>

    <!-- row 3 -->
    <el-row :gutter="24" type="flex">
        <el-col :span="2" class="grid-content"></el-col>
        <el-col :span="10" class="grid-content">
            <h3>This pie chart shows the birthday distribution</h3>
            <iframe :src="bir_addr" scrolling="auto" frameborder="0" style="width: 100%; height: 520px"></iframe>
        </el-col>
        <el-col :span="12" class="grid-content">
          <h3>{{type}} type of person likes to say...</h3>
          <br>
          <br>
          <br>
          <img style="width: 400px; height: 400px" alt="Type image" :src="word_addr">
        </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        // value1: false,
        // value2: false,
        // value3: true,
        // value4: true,
        value: 0,
        marks: {
          0: 'INTJ',
          1: 'INTP',
          2: 'ENTJ',
          3: 'ENTP',
          4: 'INFJ',
          5: 'INFP',
          6: 'ENFJ',
          7: 'ENFP',
          8: 'ISTJ',
          9: 'ISFJ',
          10: 'ESTJ',
          11: 'ESFJ',
          12: 'ISTP',
          13: 'ISFP',
          14: 'ESTP',
          15: 'ESFP'
          },
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        iframe1 : {
          src: ''
        }
      }
    },
    computed: {
        type: function () {
            // let c1 = this.value1 ? 'E' : 'I'
            // let c2 = this.value2 ? 'N' : 'S'
            // let c3 = this.value3 ? 'T' : 'F'
            // let c4 = this.value4 ? 'J' : 'P'
            // return c1 + c2 + c3 + c4

            let type_list = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP']
            return type_list[this.value]
        },
        dis_addr: function () {
          return "static/distribution_" + this.type + ".html"
        },
        bir_addr: function(){
          return "static/birthday_" + this.type + ".html"
        },
        img_addr: function(){
          return "static/" +this.type+ ".svg"
        },
        word_addr: function(){
          return "static/word_" +this.type+ ".jpg"
        },
        intro_word_1: function(){
          switch(this.type){
            case 'INTJ':
              return "An Architect (INTJ) is a person with the Introverted, Intuitive, Thinking, and Judging personality traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one."
            case 'INTP':
              return "A Logician (INTP) is someone with the Introverted, Intuitive, Thinking, and Prospecting personality traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity."
            case 'ENTJ':
              return "A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them."
            case 'ENTP':
              return "A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter."
            case 'INFJ':
              return "An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things."
            case 'INFP':
              return "A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do."
            case 'ENFJ':
              return "A Protagonist (ENFJ) is a person with the Extraverted, Intuitive, Feeling, and Judging personality traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals."
            case 'ENFP':
              return "A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions."
            case 'ISTJ':
              return "A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose."
            case 'ISFJ':
              return "A Defender (ISFJ) is someone with the Introverted, Observant, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives."
            case 'ESTJ':
              return "An Executive (ESTJ) is someone with the Extraverted, Observant, Thinking, and Judging personality traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity."
            case 'ESFJ':
              return "A Consul (ESFJ) is a person with the Extraverted, Observant, Feeling, and Judging personality traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others."
            case 'ISTP':
              return "A Virtuoso (ISTP) is someone with the Introverted, Observant, Thinking, and Prospecting personality traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed."
            case 'ISFP':
              return "An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials."
            case 'ESTP':
              return "An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits."
            case 'ESFP':
              return "An Entertainer (ESFP) is a person with the Extraverted, Observant, Feeling, and Prospecting personality traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities."
          }
          return ""
        },
        intro_word_2: function(){
          var str = ""
          switch(this.type){
            case 'INTJ':
              return "Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but he is a thinking reed."
            case 'INTP':
              return "The important thing is not to stop questioning. Curiosity has its own reason for existence."
            case 'ENTJ':
              return "Your time is limited, so don’t waste it living someone else’s life."
            case 'ENTP':
              return "Follow the path of the unsafe, independent thinker. Expose your ideas to the dangers of controversy."
            case 'INFJ':
              return "Treat people as if they were what they ought to be and you help them to become what they are capable of being."
            case 'INFP':
              return "All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost."
            case 'ENFJ':
              return "When the whole world is silent, even one voice becomes powerful."
            case 'ENFP':
              return "It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing."
            case 'ISTJ':
              return "I’d be more frightened by not using whatever abilities I’d been given. I’d be more frightened by procrastination and laziness."
            case 'ISFJ':
              return "Love only grows by sharing. You can only have more for yourself by giving it away to others."
            case 'ESTJ':
              return "Good order is the foundation of all things."
            case 'ESFJ':
              return "Encourage, lift, and strengthen one another. For the positive energy spread to one will be felt by us all."
            case 'ISTP':
              return "I wanted to live the life, a different life. I didn’t want to go to the same place every day and see the same people and do the same job. I wanted interesting challenges."
            case 'ISFP':
              return "“I change during the course of a day. I wake and I’m one person, and when I go to sleep I know for certain I’m somebody else.”"
            case 'ESTP':
              return "Life is either a daring adventure or nothing at all."
            case 'ESFP':
              return "Live for each second without hesitation."
          }
          return ""
        },
        intro_word_3: function(){
          var str = ""
          switch(this.type){
            case 'INTJ':
              return "BLAISE PASCAL"
            case 'INTP':
              return "ALBERT EINSTEIN"
            case 'ENTJ':
              return "STEVE JOBS"
            case 'ENTP':
              return "THOMAS J. WATSON"
            case 'INFJ':
              return "JOHANN WOLFGANG VON GOETHE"
            case 'INFP':
              return "J. R. R. TOLKIEN"
            case 'ENFJ':
              return "MALALA YOUSAFZAI"
            case 'ENFP':
              return "ORIAH MOUNTAIN DREAMER"
            case 'ISTJ':
              return "DENZEL WASHINGTON"
            case 'ISFJ':
              return "BRIAN TRACY"
            case 'ESTJ':
              return "EDMUND BURKE"
            case 'ESFJ':
              return "DEBORAH DAY"
            case 'ISTP':
              return "HARRISON FORD"
            case 'ISFP':
              return "BOB DYLAN"
            case 'ESTP':
              return "HELEN KELLER"
            case 'ESFP':
              return "ELTON JOHN"
          }
          return ""
        }
    }
  }
</script>

<style>
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
  .el-slider__button {
    border:2px solid  #99a9bf;
    background: #ffffff;
  }
  .el-slider__bar{
    background: #99a9bf;
  }
  .set-font{
    font-family: "Martel Sans"
  }
</style>