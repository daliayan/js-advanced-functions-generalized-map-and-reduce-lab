// Add your functions here
function map(num, callback) {
    const r = [];

    for (let i = 0; i < num.length; i++ ) {
        const element = num[i];
      r.push(callback(element));
    }
    return r
  }

  function reduce(num, callback, start){
      let total;
      if (start){
          total = start;
          for (let i = 0; i < num.length; i++){
              total = callback(num[i], total);
          }
          return total;
      } else {
          total = num[0];
          for (let i = 1; i < num.length; i++){
            total = callback(num[i], total);
      }
      return total;
    }
  }