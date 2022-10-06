const sentence = "A Sumit is all about teachng web development skills and techinwues in an effcient and practical manner. If you are just getting started in web development, learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you form a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practieces for you secsoned web developers Sumit.";

const matches = sentence.match(/Sumit/gi);
const occurances = matches ? matches.length : 0;

console.log(occurances);

let position = sentence.search(/Sumit/i);
position = position >= 0 ? position : "not found!";
console.log(position);