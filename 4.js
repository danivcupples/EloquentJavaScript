
  //Sum of a Range
  var array = [];
  function range(start,end){
    for (i=start;i<=end;i++){
      array.push(i);
    }
    return array;
  }

  var answer = 0;
  function sum(arr){
    for (j=0;j<array.length;j++){
      answer += array[j];
    }
    return answer;
  }

  console.log(sum(range(1,10)));

//Reversing an Array
