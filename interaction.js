function print(something){
    document.write("<p>"+something+"</p>");
  }
  print("hello");
  
//   var name = prompt("what's your name?");
//   print('hello '+ name);
  
//   var myArray = prompt('enter some numbers separated by commas');
//   print(myArray);
  

  // chatbot experiment
  var message = prompt("how can I help you?");
//   print(question(message));

if (question(message)) {
    print ("please wait")
} else if (intense(message)) {
    print ("you feel pretty strong about that")  
} else if (shouting(message)) {
    print ("please stop shouting")
} else  { 
    print ("i agree")
}

function question(message) {
      return message.endsWith("?")
  }

function intense(message) {
      return message.endsWith("!")
  }

function shouting(message) {
  return (message === message.toUpperCase()) == true;
}

  