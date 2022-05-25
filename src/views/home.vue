<template>
<div>
    <div class="father">
     <!-- start div welcome  -->
        <div class="welcome">
           <div class="img">
              <h1> welcome in programming RoadMap </h1>
              <img src="../assets/rm.jpg"/>
           </div>
           <div class="data">
             <strong>
                <em>
                   <i class="wel-text">
                      roadmap is a community effort to create roadmaps, guides and other educational content to help guide the developers in picking up the path and guide their learnings.
                   </i>
                </em>
             </strong>
           </div>
          <div class="categories"> 
            <div class="c-frontend">
               <div @click="laravel()"> 
                  <img src="../assets/laravel.jpg"/>
                  <p> kmindis </p>
               </div>
               <div>
                  <img src="../assets/vue.jpg"/>
                  <p> kmindis </p>

               </div>
               <div>
                  <img src="../assets/vuex.png"/>

                  <p> kmindis </p>

               </div>
            </div> 
          </div>
         <div class="categories"> 
            <div class="c-frontend">
               <div> 
                  <img src="../assets/oop.png"/>
                  <p> kmindis </p>
               </div>
               <div>
                  <img src="../assets/php.png"/>
                  <p> kmindis </p>

               </div>
               <div>
                  <img src="../assets/js.png"/>

                  <p> kmindis </p>

               </div>
               
            </div> 
          </div>
           <div class="categories"> 
            <div class="c-frontend">
               <div> 
                  <img src="../assets/jquery.png"/>
                  <p> kmindis </p>
               </div>
          </div>
          </div>
        </div>
        <!-- end div welcome  -->
   </div>
</div>

</template>
<script>
export default {
  name: "home",
  methods:{
    laravel:function(){
      this.$router.push('laravel');
    }
  }
 
//   mounted(){
//       console.log(this.$route.query.search);
            
//         if(this.$route.query.search.includes('about'))
//          {
//              this.$router.push('about');
//          }
  
//  }

};

</script>  
<style scoped>
.welcome {
  text-align: center;
}
.welcome > div {
  width: 100%;
  text-align: center;
}
.welcome > .img > h1 {
  font-size: 30px;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 10px;
}

.welcome > .img > img {
  width: 80%;
  height: 300px;
  margin: 20px auto;
}

.welcome > .data {
  width: 80%;
  margin: 20px auto;
  text-align: left;
}
.wel-text {
  font-size: 25px;
  text-transform: capitalize;
  color: rgb(255, 255, 255);
}
.categories > .c-frontend {
  display: flex;
  flex-direction: row;

  grid-gap: 10px;
}
.categories > .c-frontend > div {
  width: 30%;
  height: 300px;
  border: 1px solid rgb(255, 255, 255);
  margin:10px ;
  margin-left: 15px;
}
.categories > .c-frontend > div > img {
  width: 100%;
  height: 60%;
}
@media screen and (max-width: 600px) {
  .categories > .c-frontend {
    display: flex;
    flex-direction: column;

    grid-gap: 10px;
  }
  .categories > .c-frontend > div {
    width: 80%;
    margin: 10px auto;
    height: 300px;
    border: 1px solid rgb(255, 255, 255);
  }
  .categories > .c-frontend > div > img {
    width: 100%;
    height: 60%;
  }
}
</style>