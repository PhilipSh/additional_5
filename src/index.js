module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
  var sum, newI;
  sum = 0;
  for (var k = 0; k < arr.length ; k++)
  for(var i = 0; i < bracketsConfig.length; i++)
  {
    if(arr[k] == bracketsConfig[i][0]) {
      ++sum;
      newI = i;
    }
    if(arr[k] == bracketsConfig[i][1] ) --sum;
    if (sum < 0) return false;
  }
if(sum == 0){
  return true;
}
else return false;
}
