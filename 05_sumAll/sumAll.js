const sumAll = function(k,l) {
    if(Number.isInteger(arguments[0])&Number.isInteger(arguments[1])){
        if(arguments[0]>=0&arguments[1]>=0){
            my_debut=Math.min(arguments[0],arguments[1]);
            my_fin=Math.max(arguments[0],arguments[1]);
            
            for (i=my_debut+1;i<=my_fin;++i){
                my_debut=my_debut+i
            }
        return my_debut;
        
        } else {return "ERROR"}
    } else {return "ERROR"}
 
};

// Do not edit below this line
module.exports = sumAll;
