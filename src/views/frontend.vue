<template>
   <div class="main">
     
        <img class="auther" src="../assets/me.jpeg"/>
        <address>Auther : Mina Ata <br>
         last update : 2022/20/05 - 3:03 PM</address>
       <h1> What Is a Front-End Developer? </h1> 
       <p>

           Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.

            The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer
       </p>
       <h2> 
           HTML, CSS, & JavaScript:
       </h2>
       <p>
           A front-end developer architects and develops websites and applications using web technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation input for non-web platform environments
       </p>
       <img src="../assets/fe.png"/>
       <h1> What do front end developers do? </h1>
       <p> Front end developers take web designers’ designs and bring them to life on the screen. They look at a web designer’s wireframes and designs (often called design comps) and then use HTML, CSS, and JavaScript to make functional and beautiful websites that users can actually interact with. </p>
       <p>This means building out the navigation, layouts, and buttons that a web designer has carefully laid out and making sure that all of the design elements work properly while looking the way that they’re supposed to according to the designer’s UX/UI research.</p>
       <p>Not only that, but front end developers also make sure the website runs properly. Companies want users to have great experiences on their sites, which means that they need front end developers to make sure that the user interface is always working properly by fixing any bugs or errors that users may encounter.</p>
       <p>For example, when you’re on Reddit and when you go to upvote a comment, nothing happens, that might mean there’s a bug with the upvote button, which a front end developer would try to fix. (And if you see a cat error though, that’s probably not the front end developer’s fault :)).</p>
       <h1> The languages and tools you need to become a front end developer </h1>
       <h2>WHAT LANGUAGES DO FRONT END DEVELOPERS USE?</h2>
       <h2>HTML AND CSS</h2>
       <p> HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets) are the most basic building blocks of web coding. The 2021 Stack Overflow survey(opens in a new tab) found that 56 percent of professional developers use HTML and CSS extensively in their work. Without these two skills, you can’t create a website design — all you’d have is unformatted plain text on the screen. In fact, you can’t even add images to a page without HTML!</p>
       <p>HTML was actually only invented in the 1980s even though computers have been around for much longer. Tim Berners Lee(opens in a new tab) developed his first hypertext system, “Enquire,” in 1980 for his own use. With a background in text processing, real-time software and communications, Tim started the WorldWideWeb project at CERN(opens in a new tab) in 1989.</p>
       <h2>JAVASCRIPT</h2>
       <p>JavaScript lets you add a ton more functionality to your websites, and you can create a lot of basic web applications using nothing more than HTML, CSS, and JavaScript (JS for short).
        At the most basic level, JS is used to create and control things like maps that update in real time, interactive films, and online games. Sites like YouTube(opens in a new tab) use a lot of JavaScript to make their user interface easy to use (the fact that the page doesn’t reload whenever you Save to Playlist is thanks to JavaScript!)</p>
        <h2>JQUERY</h2>
        <p>jQuery is a JavaScript library: a collection of plugins and extensions that makes developing with JavaScript faster and easier. It’s also used by 77.3 percent of all websites(opens in a new tab) on the Internet! Rather than having to code everything from scratch, jQuery is like shorthand for JavaScript, which allows you to use all the cool functions of JavaScript without having to write out all the JavaScript code for yourself). You can use jQuery for things like countdown timers(opens in a new tab), search form autocomplete(opens in a new tab), and even automatically-rearranging and resizing grid layouts.</p>

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
</style>