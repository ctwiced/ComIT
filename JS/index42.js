const myMessage = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. \n The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a \n worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. \n Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. \n The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who \n was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult \n Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
const combinedUpperLower = myMessage.toLocaleLowerCase() + myMessage.toLocaleUpperCase();
const comboMessageLength = combinedUpperLower.length;
const template =`The total character length of this bullshit is ${comboMessageLength}`

console.log(myMessage.toLocaleUpperCase());
console.log('\n');
console.log(myMessage.toLocaleLowerCase());
console.log('\n');
console.log(combinedUpperLower);
console.log(template);





