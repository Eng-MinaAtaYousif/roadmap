<template>
   <div class="main">
     
        <img class="auther" src="../assets/me.jpeg"/>
        <address>Auther : Mina Ata <br>
         last update : 2022/20/05 - 3:03 PM</address>
       <h1 id="Backend-Developer"> What is Backend Developer? Skills Need for Web Development </h1> 
       <h2> What is Backend Development? </h2>
       <p>
        Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store. Code written by back-end developers helps browsers to communicate with database information.
       </p>
       <h2> 
           Example:
       </h2>
      
       <img src="../assets/be.webp"/>
       <p>Most common example of Backend programming is when you are reading an article on the blog. The fonts, colors, designs, etc. constitute the frontend of this page. While the content of the article is rendered from a server and fetched from a database. This is the backend part of the application.
       </p>
       <h2> In this tutorial, you will learn </h2>
      <ul>
        <li> <a href="#Backend-Developer">What is Backend Development? </a></li>
        <li> <a href="#Skills">Skills You Need to Become a Backend Developer </a></li>
        <li> <a href="#Roles">Roles and Responsibilities of Backend Developer </a></li>
     
 
        </ul>
       <h2 id="Skills">Skills You Need to Become a Backend Developer</h2>
       <img src="../assets/skills.webp"/>
       <p>Following are the skills you require to become a back end developer:</p>
       <ul>
           <li>Web Development Languages</li>
           <li>Database and Cache</li>
           <li>Server</li>
           <li>API (REST & SOAP)</li>
       </ul>
        <h2 id="Roles">Roles and Responsibilities of Backend Developer</h2>
        <ul>
        <li>The Back end developer job is to understand the goals of the website and come up with effective solutions</li>
        <li>Storing data and also ensuring that it is displayed to that user who are supposed to have access to it</li>
        <li>Responsible for developing Payment processing system like accepting data, securely storing that info, and making charges to that payment</li>
        <li>Manage APIs resources which work across devices</li>
        <li>He or she might be involved in the architecture of a system and Data science analyses.</li>
        <li>Developers are responsible to organize the logic of the system which runs across various devices</li>
        <li>Back end developer also needs to involved in building frameworks or the architecture to make it easier to program against.</li>
        <li>Back End web developer should have the skills for implementing algorithms and solving system related problems.</li>
     </ul>
     <h2>Summary</h2>
     <ul>
       <li>Back end Development refers to the server-side development </li>
       <li>Back end developer skills include Development Languages, Database and cache, Server, API (REST & SOAP), etc. </li>
       <li> The backend web developer should understand the goals of the website and come up with effective solutions</li>
       <li>The languages that a front-end developer should be familiar with are HTML, CSS, and JavaScript whereas Back End web developer should be familiar with the database, Server, API, etc. </li>
       <li> Front-end development service can’t be offered independently but Backend web development service can be offered independently.</li>
    </ul>
         <h2>You Might Like:</h2>
     <ul>
       <li></li>
       <li></li>
       <li></li>
    </ul>
   </div>
 
</template>



<style scoped>

  .main{
      /* text-align: center ; */
      margin:20px ;

  }
    .main .auther{
      width:100px;
      height:100px ;
   
  }

  h1 , h2{
      text-align: left;
      margin-bottom: 30px;
      margin-top: 10px;
      background-color: rgb(39, 39, 39);
      border-left :2px solid #000 ;
      padding:20px ;
      
  }
  p{
      font-size: 20px;
      text-align: left;
      background-color: rgb(59, 59, 59);
      padding-left:25px ;
  }
  .main > img {
      width: 100%;
      height: 300px;
  }
  .main  >ul {
      /* list-style: none; */
      text-align:left;
      background-color: rgb(26, 25, 25);
   
      
  }
  .main > ul > li {
      font-size: 20px;
      margin-top: 10px;
      cursor: pointer;
      margin-left: 10px ;
  }
 .main > ul > li > a {
 
    text-decoration: underline;
    color:rgb(255, 255, 255);
    cursor: pointer;
    
 }


</style>