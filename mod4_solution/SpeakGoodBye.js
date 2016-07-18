/* ByeSpeaker
	When passed a var [name], outputs "Bye [name]"" to the console, as well as the html
*/
(function(window) {

	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
  		var speakGreeting = speakWord + " " + name
  		console.log(speakGreeting);
  		// Adding this for fun. Prints the same thing as the console log to the html as well
  		document.getElementById("content").innerHTML += ("<div class='goodbye'>" + speakGreeting +"</div>");
	};

	window.byeSpeaker = byeSpeaker;

}) (window);