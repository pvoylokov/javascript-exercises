
const ftoc = function(fahr) {
cels = Math.round((fahr-32)*5/9*10)

  return cels/10
};

const ctof = function(cels) {
fahr = Math.round((cels*9/5+32)*10)
return fahr/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
