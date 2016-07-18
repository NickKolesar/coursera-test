/* HelloSpeaker
	When passed a var [Name], outputs "Hello [Name]" to the console, and the html
*/
(function (window) {

	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  		var speakGreeting = speakWord + " " + name
  		console.log(speakGreeting);
  		// Adding this for fun. Prints the same thing as the console log to the html as well
	  	document.getElementById("content").innerHTML += ("<div class='hello'>" + speakGreeting +"</div>");
	};

	window.helloSpeaker = helloSpeaker;

}) (window);