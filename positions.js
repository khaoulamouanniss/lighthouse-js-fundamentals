const finalPosition = function (moves) {
  var result=[0,0];
  for (var i of moves){
switch(i){
  case "east" : result[0]+=1;
  break;
  case "west": result[0] -= 1;
  break;
  case "north" : result[1] += 1;
  break;
  case "south" : result [1] -= 1;
  break;
}
  }
  console.log(result);
  return result;
  
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves);