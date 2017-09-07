document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('btn1');
    btn.addEventListener('click', function(){

var friends = ["Batman", "Superman", "The Flash", "Green Arrow", "Aquaman"];
for (var i = 0; i < friends.length; i++) {
    var div = document.createElement('div');
    div.className = "friends";
    document.body.appendChild(div);
    var head = document.createElement('h3');
    var name = document.createTextNode(friends[i]);
    head.appendChild(name);
    div.appendChild(head);
    for (var j = 99; j > 0; j--) {
    var minus = j-1;
       if (j > 2) {
           var para = document.createElement('p');
           var lyric = document.createTextNode( j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + minus + " lines of code in the file.");
           para.appendChild(lyric);
           div.appendChild(para);
          
        } else if (j===2) {
            var para2 = document.createElement('p');
            var lyric2 = document.createTextNode("2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 more line of code in the file.");
            para2.appendChild(lyric2);
            div.appendChild(para2);
            
            } else {
                var para1 = document.createElement('p');
                var lyric1 = document.createTextNode("1 line of code in the file, 1 line of code: " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");
                para1.appendChild(lyric1);
                div.appendChild(para1);
                
            }
        }
     }
})
})       
    
        
           
       
            
         
           
            