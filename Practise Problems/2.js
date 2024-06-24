let arr = [4, 5, 2, 2, 7, 1, 5, 7, 9];

function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1 && arr[i] == arr[i + 1]) {
      let rand = Math.round(Math.random());
      console.log(rand);
      if (rand == 0) {
        arr[i] *= 2;
        i++;
      } else {
      }
    } else {
      arr[i] *= 2;
    }
  }
  console.log(arr);
}

func(arr);
