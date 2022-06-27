const repeatString = function(string, num) {
x="";
if (num>=0){
    for (let i = 0; i < num; i++){
        x+= string;
        }
        return x;
        
} else {return "ERROR"}
};

// Do not edit below this line
module.exports = repeatString;
