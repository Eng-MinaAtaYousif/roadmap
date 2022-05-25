<template>
<div class="app container-fluid">
   <!-- 1 div in the page / brandname div started -->
  <div class="col-lg-12 col-md-12 col-sm-12 brandname">
    <div class="row">
      <div class="n1">
        <h1>RoadMap</h1>
      </div>
     <div class="n2">
      <ul>
        <li> service 1 </li>
        <li> service 2 </li>
      
      </ul>
     </div> 
 
    </div>
    <div class="news">
      <div>NEWS</div>
      <p> here important news </p> 
    </div>
  </div>
   <!-- 1 div in the page / brandname div ended -->

   <!-- 2 div in the page / header div started -->
  <div class="header col-lg-12 col-md-12">
    <div class="row">
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search in RoadMap Articles" name="search">
        </div>
        <button type="submit" class="btn btn-default search"> <i class="glyphicon glyphicon-search"></i> Search</button>
      </form>
    </div> 
  </div>
   <!-- 2 div in the page / brandname div ended -->
 
   <!-- 3 div in the page / show div started -->
   <div class="showing">

    <div class="show">
      <category></category>
    
    </div> 

    <div id="app" class="app">
      <!-- <h1> mina ata </h1> -->
       <router-view/>
        <ul>  
        <!-- <li> <router-link to="/">home</router-link> </li> -->
        <button class="back" @click = 'back()'>  home  </button>
        <button class="back" @click = 'backonestep()'> prev </button>
     
       </ul> 
     </div>

   </div>
   <!-- 3 div in the page / show div ended -->
   
   <!-- started footer  -->
   <footer>
     <div>
        <div>
          <h1> Articles </h1>
          <ul>
            <li>  php </li>
            <li>  javascript</li>
            <li>  html </li>
            <li>  html5 </li>
            <li>  css </li>
            <li>  css3 </li>
            <li>  jquery </li>
            <li>  bootstrap </li>
            <li>  vuejs </li>
            <li>  laravel </li>
            <li>  ajax </li>
            <li>  json  </li>

          </ul>
        </div>
        <div>
          <h2> Community </h2>
          <ul>
           <li> <a href=""> Github </a> </li>
            <li> <a href=""> Facebook </a></li>
            <li> <a href=""> LinkedIn </a></li>
             <li> <a href=""> Twitter </a></li>
             <li>  (+20)01068462474 </li>
  
          </ul>
        </div>
        <div></div>
        
     </div>
     <p> &copy; Copywrite - RoadMap - 2022 </p>
   </footer>
   <!-- ended footer -->
  <p class="up" @click="up()"> <i class="fa-solid fa-angles-up up"> up </i> </p>
 </div>
</template>
<script>
import category from './components/category';

 export default {
    components:{
      category
  },
   methods:{
    //  frontend: function (){
    //    this.$router.push('frontend');
    //  }
    back : function (){
      this.$router.push ('/');
    },
    backonestep:function (){
      this.$router.go(-1);
    },
    up :function (){
      
     window.scrollTo(0,10);   
    
    }
      
   }
 }
</script>

<style scoped>
  *{
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}

/* project app class  started */

.container-fluid{
  background-color: rgb(0, 0, 0);
  /* background-image: url('@/assets/base.png');
  background-attachment: fixed ;
  background-size:cover;
  background-repeat:no-repeat; */
  color:rgb(255, 255, 255) ;
  
}

/* project app class  ended */



/* 1 div in the page / brandname div started  */

/* 
        -> all classes in this div ;
        
        - main class -> brandname ,
        .brandname > .row > h1 , ul ;
*/
.app .brandname {
  
}
.app .brandname .row div {
  /* border: 1px solid #000; */
}
 
.app .brandname .row  {
   /* display:grid ;
   grid-template-areas:
    'n1 n2 n2 n2'
   ; */
   display: flex;
   flex-direction: row;
}


.app .brandname .row .n1 {
  /* grid-area: n1; */
  width: 100%;
}

.app .brandname .row .n1 h1{
  margin:30px;
  font-size:30px;
  position:absolute;
}
.app .brandname .row .n2 {
  /* grid-area: n2; */
  width: 100%;
}

.app .brandname .row .n2 ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
 
}
.app .brandname .row .n2 ul li {
  margin-right: 10px;
  font-size:25px
}
@media screen and (max-width:600px){


}

.app .brandname .row:last-child{
 
}
.news {
  width: 100%;
  margin-top:30px;
  height: 50px;
  background-color: rgb(106, 66, 248);
  position: relative;
  transform: skewX(20deg);
  overflow-x:hidden ;
  border-top-left-radius: 20px;
  border-bottom-right-radius:20px;
  
}
.news div {
  width:20%;
  height: 100%;
  background-color: rgb(253, 4, 4);
  float: right;
  color: black;
  font-size: 25px;
  text-align: center;
  position: absolute;
  z-index: 2;
  right: 0%;
  /* border-left: 1px solid #FFF; */

}

.news p {
 
  animation:  moving 20s  ease-in-out infinite;
  color: white;
  font-size: 25px;
  
}
@keyframes moving {
  0%{
     transform: translateX(1000px);
  }
  100%{
    transform: translateX(-200px);
  }
}
  /* 1 div in the page / brandname div ended  */

  /* 2 div in the page / brandname div started */

  .header .row {
    width: 80%;
    margin:30px auto;
    
  }

  .header .row .navbar-form{
    /* background-color: rgb(90, 90, 90); */
    width: 100%;
    height: 70px;
    
  }
  .header .row .navbar-form .form-group {
    background-color: rgb(206, 146, 146);
    width: 80%;
    
  }
  .header .row .navbar-form .form-group .form-control{
    width: 100%;
    height: 40px;
    font-size: 25px;
    margin-left: 0%;
    box-shadow:  none;
    
  }
  .header .row .navbar-form .search {
    width:auto;
    padding:10px;
    height: 40px;
    font-size: 20px;
    padding-left: 40px;
    padding-right:40px ;
    /* border:1px solid #000; */
    background-color:#CCC;
    padding-bottom:10px
  }
  /* 2 div in the page / brandname div ended */


  /* 3 div in the page / show div started */
 
 .showing {
  min-height: 1000px;
   width: 99%;
   margin: 30px auto;
   display: grid;
   grid-template-columns: 1fr 3fr;
   grid-gap: 10px;
   height:auto ;
 }
 .showing .show {
     min-height: 600px;
   height:auto
 }

 .showing .app{
   height:auto ;
   min-height:1000px;
 }
 @media screen and (max-width:600px){
  .showing {
   /* height: 1000px; */
   /* width: 99%; */
   /* margin: 30px auto; */
   display: grid;
   grid-template-areas: 
    'a a a a'
    's s s s'
   ;
   grid-gap: 10px;
 }
 .showing .app{
   grid-area: a;

 }
 .show{
   grid-area: s;
   min-height: 600px;
   height:auto
 }
 }
 .showing div {
   /* border: 1px solid #fff; */
 }
 .showing .app {
   height:auto ;
   min-height: 600px;
  


 }
  /* 3 div in the page / show div ended */
  /* start footer */

  footer{
    width: 100%;
    height: auto;
    min-height: 300px;
    /* border: 1px solid rgb(255, 252, 252); */
    /* background-color: rgb(29, 29, 29); */
    background-image: url('./assets/footer.jpg');
    background-repeat:no-repeat ;
    background-attachment: fixed;
    background-size:cover ;
  }
  footer > div {
    display:flex;
    flex-direction: row;
    height: auto;
    width: 90%;
    margin :10px auto ;
    /* background-color: rgba(155, 142, 142, 0.199)99); */
  }

 footer > div > div {
   width:30% ;
   min-height:200px;
   height:auto;
   /* border:1px solid rgb(255, 255, 255); */
   padding: 20px;
   margin: 20px;
   margin-left: 15px;
   /* background-color: rgb(112, 112, 112); */
 }
  footer > div > div > ul {
    list-style:none ;
    margin-left:20px
  }
  footer > div > div > ul > li {
    font-size:20px;
    /* border-bottom:1px solid rgb(255, 255, 255) ; */
    padding-bottom:10px ;
    margin-top:10px ;
    cursor:pointer ; 
    
  }
  /* footer > div > div > ul > li:hover{
    color:rgb(101, 6, 255) ;
    border-bottom:2px solid rgb(101, 6, 255) ;
  } */
 @media screen and (max-width:600px){
  footer > div {
    display:flex;
    flex-direction: column;
    height: auto;
    width: 90%;
    margin :10px auto ;
  }

 footer > div > div {
   width:80% ;
   min-height:200px;
   height:auto;
   /* border:1px solid #000; */
   padding: 20px;
   margin: 20px auto;
   margin-left: 15px;
 }
 }
 footer > div > div {

 }
 footer > p{
   text-align:center;
   font-size:30px;
 }
  /* end footer */
.container-fluid > * {
  /* border:1px solid #fff; */
}

/* back btn */

.back {
  width:30%;
  height:40px ;
   color:black ;
   font-size:25px;
   margin:20px ;
  
}
@media screen and (max-width:600px) {

  .back {
    width:50%;
    height:40px ;
    color:black ;
    font-size:25px;
    margin:20px ;
    
}
}
.up{
  width:50px;
  height:50px ;
  color:black;
  background-color: #fff;
  border-radius: 50%;
  cursor:pointer ; 
  position:fixed;
  top:500px ;
  right:20px ;
  
}
</style>
