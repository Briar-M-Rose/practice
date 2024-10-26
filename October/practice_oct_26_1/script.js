// This was used to practice the exercises at the end of Chapter 3 of Eloquent JavaScript.

function getMin(a, b){
  if(a < b || a == b){
    console.log(a)
  } else {
    console.log(b)
  }
}

function evenChecker(n){
  if(n === 0){
    console.log(true)
    return true;
  } else if(n === 1){
    console.log(false)
    return false;
  }
  if(n >= 0){
  evenChecker(n-2);
  } else {
    evenChecker(n+2);
  }
}

function countChar(string, letter){
  const term = String(string);
  const type = String(letter);
  const length = string.length;
  let count = 0;
  for (let i=0; i<length; i++){
    if(term[i] === type){
     console.log('Found a ' + type + '!')
     count++ 
    } else{
      console.log('Didn\'t find any ' + type + '!')
    }
  };
  if(count == 1){
     console.log('We found ' + count + type + '!');
  } else{
      console.log('We found ' + count + ' ' + type + 's!')
  }
}
