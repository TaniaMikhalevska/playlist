"use strict";
var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
        {
            author: "queen",
            song: "bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"            
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"            
        }
    ],
    title = document.createElement('h1'),
    list = document.createElement('ul'),
    wrapper = document.createElement('div');

(function () {
    for (var i = 0; i < playList.length; i++) {
         var item = document.createElement('li');

            item.innerHTML = `<span style ="color: #a4a3a9; font-size: 14px;padding-right: 10px; margin-right: 6px;
            border-right: 1px solid rgba(164, 163, 169, 0.6)";
}

>${playList[i].duration}</span><span>${playList[i].author}</span><p>${playList[i].song}</p>`;
        
            title.innerHTML = "Play list";
            document.body.appendChild(wrapper);
            wrapper.appendChild(title);
            wrapper.appendChild(list);
            list.appendChild(item);
      
      document.body.style.cssText = "background-image: url(img/bg.jpg);\ background-position-x: 50%;\ background-position-y: center;\
      background-size: cover;\ font-family: Roboto, sans-serif;\ font-size: 16px;";
      wrapper.style.cssText = "background: #fff;\ margin: 50px auto 0;\ box-shadow: 1px 0 5px rgba(0, 0, 0, 0.4);\
      padding: 30px 20px;\ max-width: 400px;\ border-radius: 20px;";
      title.style.cssText = "text-align: center;\
    font-weight: 500;\ margin: 0 0 25px;"  
      list.style.listStyle = "none";
      item.style.cssText = "border-top: 1px solid #e4e2e2;\ padding-top: 10px;\ margin-top: 10px;"
     document.getElementsByClassName("duration").style ="color: red";
     //как обратиться к автору???
    }
})();