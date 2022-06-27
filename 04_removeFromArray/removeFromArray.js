removeFromArray = function(array, element,...theArgs) {

    let args = Array.from(arguments);
    console.log(args);
    console.log(args.length);
    
    for (let i=1; i<args.length; ++i){
        console.log(args[i]);
        if(array.includes(args[i])){
            array.splice(array.indexOf(args[i]),1);
            } };
    return array;
    }

// Do not edit below this line
module.exports = removeFromArray;
