module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
  var sum, maxSum;
  sum = 0;
  maxSum = -766766;
  for (var k = 0; k < arr.length ; k++){
  for(var i = 0; i < bracketsConfig.length; i++)
  {
  var sc = bracketsConfig[i];// достаем пару скобок

 
    if(arr[k] == bracketsConfig[i][0]) {
      ++sum;
      if(sum >= maxSum){
      maxSum = sum;
      }
     // else{
      //  return false;
     /// }
    }
    else{
      --sum;
      if(sum < 0 ) return false;
    }
  }
}
if(sum == 0){
  return true;
}
else return false;
}
