<template>
   <div>

       <h1> laravel </h1> 
       <button class ="back" @click="backonestep()">backonestep</button>
   </div>
 
</template>
<script>

 export default {
   mounted(){
       if(this.$route.query.search){
           console.log(this.$route.query.search);
       }
       else{
           console.log('no');
       }
   
 },

 methods:{
     backonestep :function(){
         this.$router.go(-1);
     }
 }

 }

</script>
<style scoped>
 .back {
    width:300px;
    height:40px ;
   color:black ;
   font-size:25px;
   margin:20px auto ;
 }
</style>