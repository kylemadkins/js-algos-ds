function takeShower() {
  return "Showering";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Pancakes"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ready");
}

wakeUp();

/*
Step 1
- wakeUp

Step 2
- takeShower
- wakeUp

Step 3
- wakeUp

Step 4
- eatBreakfast
- wakeUp

Step 5
- cookFood
- eatBreakfast
- wakeUp

Step 6
- eatBreakfast
- wakeUp

Step 7
- wakeUp

Step 8
- Finished
*/
