<template>
   <ul>

      <li @click = 'frontend()'> Front-end </li>
      <li @click = 'backend()'>Back-end</li>
      <li @click = 'backend()'>Full-stack</li>
      <li @click = 'backend()'>Databases</li>
      <li @click = 'backend()'>Libraries</li>
      <li @click = 'backend()'>Frameworks</li>
      <li @click = 'backend()'>Most common programming questions</li>
      <li @click = 'backend()' class ="li">
         <i class="fa-solid fa-house-laptop"></i>
          <strong><em>
                  who we are
           </em></strong>
      </li>
      

   </ul>


</template>

<script>
 export default{
     name:'category',
     methods:{
         frontend:function (){
             this.$router.push('frontend');
         }
         ,
        backend:function (){
             this.$router.push('backend');
         }
     }
 }
</script>

<style scoped>
 ul{
     list-style:none ;
     margin: 20px;
     
 }

 ul li {
     
     border-bottom:1px solid #fff ;
     padding-bottom :20px ;
     font-size:25px ;
     cursor: pointer;
     margin-bottom : 20px ;
     color:rgb(255, 255, 255);
     height:auto ;
    
 }
 ul > li:hover{
     border-bottom:2px solid #00f;
 }
 ul > .li{
     display:flex ;
     flex-direction: row;
 }
 ul > li > .fa-solid {
    width:100px;
    height:100px;
    color:#00f;
    background-color: rgb(219, 22, 22);
 }
 ul .li strong em {
     font-size:20px ;
     margin-left: 10px;
 }

</style>