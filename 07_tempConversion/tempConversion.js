import { create, all } from 'mathjs'
const config = { }
const math = create(all, config)

const ftoc = function(fahr) {
return math.round((fahr-32)*5/9,1)
};

const ctof = function(cels) {

return math.round(cels*9/5+32,1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
