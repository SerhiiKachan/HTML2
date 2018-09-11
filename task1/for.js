for (var i = 2; i <= 20; i++){
    var prime = false;
    for (var n = 2; n < i; n++){
      if (i % n === 0) 
        break;
      else
        prime = true;
    }
    if (prime)
      console.log(i);
}