var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
  console.log("Node Tutorial")
  // export function
  this.pTutor = function()
  {
    var PTutor=Tutor
    PTutor.tutorial();
  }
}

//
// var exports=module.exports={};
// exports.AddNumber=function(a,b)
// {
//   return a+b;
// };



// Or
// var Tutor=require('./Tutorial.js');
// exports.NodeTutorial=function()
// {
// console.log("Node Tutorial")
// this.pTutor = function ()
// {
// var PTutor=Tutor
// PTutor.tutorial();
// }
// }
