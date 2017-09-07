var friends = ["Batman", "Superman", "The Flash", "Green Arrow", "Aquaman"];


for (var i = 0; i < friends.length; i++) {

    for (var j = 99; j > 0; j--) {
        
    var minus = j-1;
       
        if (j > 2) {
            
           
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + minus + " lines of code in the file.");
            
           
        } else if (j===2) {
            console.log("2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 more line of code in the file.")
            
            } else {
                console.log("1 line of code in the file, 1 line of code: " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.")
            }
           
        }
    
        
    }
