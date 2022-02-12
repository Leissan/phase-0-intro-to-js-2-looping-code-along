// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  const gifts=["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i =0; i< gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
  }

  wrapGifts(gifts);

const name=["Guadalupe", "Ollie", "Aki" ];
const surprise="for the wonderful surprise gift!";
function writeCards(name){
  let messageArray=[];
  for ( let i=0; i<name.length; i++){
    let message=`Thank you, ${name[i]}, ${surprise}`
    messageArray.push(message);
  }
  return messageArray;
}

function countDown(){
  let num=10;
  while (num>=0){
    console.log(num);
    num--;
  }
}