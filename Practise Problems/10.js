function makeCoffe(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your ${type} is ready`);
    }, Math.floor(Math.random() * 4000));
  });
}
async function main() {
  console.log(await makeCoffe("Cappacino"));
  console.log(await makeCoffe("Latte"));
  console.log(await makeCoffe("frappacino"));
}

main();
