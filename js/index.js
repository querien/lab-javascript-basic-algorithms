// Iteration 1: Names and Input

let hacker1 = “Dimitri”;
console.log(`The drivers name is ${hacker1}`);
let hacker2 = “Querien”;
console.log(`The navigator’s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names ${hacker1.length} characters.`)
}


// Iteration 3: Loops

let newString = "";
for (let i=0; i<hacker1.length;i++) {
  let letter = hacker1[i].toUpperCase();
  newString += `${letter} `;
}

console.log(newString);

let newString2 = "";
for (let i=hacker2.length-1;i>=0;i--) {
  let letter2 = hacker2[i].toUpperCase();
  newString2 += `${letter2} `;
}
console.log(newString2)

console.log(hacker2 < hacker1);
if (hacker1 > hacker2){
  console.log(‘The drivers name foes first’);
} else if (hacker1 < hacker2){
  console.log(‘The navigator goes first.’);
} else {
  console.log(‘You both have the same name.’)
}

const lorem = ‘Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend urna eget justo hendrerit pretium. Ut elementum purus consectetur lectus pulvinar, vel accumsan nisi mollis. Pellentesque porttitor mi in facilisis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut enim sed mauris sollicitudin rutrum id ut mi. Quisque sit amet sodales enim. Aliquam vel ligula molestie, vehicula dui non, efficitur enim. Vivamus tristique lectus eros, id accumsan enim pharetra in. Nunc facilisis magna eu posuere aliquam. Pellentesque vitae semper turpis. In vitae dapibus ligula. Etiam leo magna, luctus facilisis ornare et, varius vel ipsum. Donec id metus faucibus lacus mollis semper.Quisque sapien felis, vehicula fringilla auctor elementum, consectetur ut ligula. Proin efficitur elit ac magna vehicula cursus. Duis maximus elit at urna luctus, lobortis suscipit ante faucibus. Ut interdum justo sit amet leo sagittis consectetur. Maecenas elementum, purus nec varius commodo, orci enim egestas est, vitae facilisis massa diam ac diam. Vestibulum eget convallis odio. Quisque dolor ipsum, ultrices eget ex sit amet, rutrum blandit erat. Proin consequat, nulla sit amet eleifend venenatis, nisi leo feugiat elit, sed varius elit massa id erat.Vivamus venenatis in massa mollis ultricies. Vestibulum varius fringilla ligula, a tincidunt lectus finibus sit amet. Suspendisse aliquam ac nibh at iaculis. Suspendisse convallis at velit ut suscipit. Nunc quis volutpat risus. Suspendisse maximus diam a lacus auctor ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.’;
let counter = 0;
for (let i=0; i<lorem.length;i++){
  if (lorem[i] === ‘et’){
    counter++;
  }
}

console.log(counter);



