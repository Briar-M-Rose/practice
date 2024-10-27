// Used to practice the fourth Chapter of Eloquent JavaScript.
/* The following solution only worked for 1-10 and an increment of 2, 
 though I have studied the more effecient solutiion to the problem */
function range(start, end, increment){
  const startValue = start;
  let rangeArray = [];
  let sum = 0;
  let newSum = 0
  const endRange = end - increment
  rangeArray.push(startValue)
  for(start; start<=end; start++){
    for (let i=0; i<=end; i++){
      if (increment == 0 && rangeArray[rangeArray.length - increment] < end - increment){
        rangeArray.push(start);
      } else if(rangeArray[rangeArray.length - increment] >= endRange){
        break
      } else{
          for(i=startValue; i<end; i += increment){
          start = start + increment
          newSum += start;
          rangeArray.push(start)
        }
      };
    rangeArray.splice(rangeArray.length-1)
    sum = newSum - rangeArray[rangeArray.length-1] - startValue
  }
}
  console.log("Range: "+ rangeArray)
  console.log("Sum: " + sum)
}
