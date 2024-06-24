let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function func(arr) {
  let promises = arr.map((element) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(element * 2);
      }, 500);
    });
  });

  Promise.all(promises)
    .then((results) => {
      let a = results; 
      console.log(a); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

func(arr);
