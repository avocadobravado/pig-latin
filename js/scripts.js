$(function(){
  $("#translatorForm").submit(function(event) {
    event.preventDefault();
    // var userInput1 = [];
    var userInput = $("#userInput").val();
    var output = [];
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "y" , "w", "x", "z"];
    var y = "y";
    var qu = ["q", "u"];
    var secondConsonant;
    var firstConsonant;

//Converts to lowercase
    var convertLowerCase = function(){
    userInput = userInput.toLowerCase();
    return userInput;
    }
    convertLowerCase(userInput);
//Adds way to the end of a string (begginig with VOWEL)
    for(var index = 0; index < vowels.length; index +=1){
      if (userInput[0] === vowels[index]) {
      var userInput0 = userInput + "way";
      $("#output").text(userInput0);
    }
    // (userInput[0] === vowels[index]) { break };
    }


// //Adds ay to the end of a string (begginig with CONSONANT)
    for(var index = 0; index < consonants.length; index +=1){
      if (userInput[0] === consonants[index]) {
        firstConsonant = userInput.charAt(0).slice(-1);
        userInput1 = userInput.slice(1);
        userInput1 = userInput1 + firstConsonant + "ay";
       $("#output").text(userInput1);
      } else if (userInput[1] === consonants[index]){
       secondConsonant = userInput.charAt(1).slice(-1);
       var userInput2 = userInput.replace(userInput[0], "").replace(userInput[1], "") + firstConsonant + secondConsonant + "ay";
       $("#output").text(userInput2);
     } else if (userInput[2] === consonants[index]){
       firstConsonant = userInput.charAt(0).slice(-1);
       secondConsonant = userInput.charAt(1).slice(-1);
       var thirdConsonant = userInput.charAt(2).slice(-1);
       console.log(thirdConsonant);
       var userInput3 = userInput.replace(userInput[0], "").replace(userInput[1], "").replace(userInput[2], "") + firstConsonant + secondConsonant + thirdConsonant + "ay";
       console.log(userInput3);
     }
     $("#output").text(userInput3);
    }


//TRY TO CONVERT USERINPUT INTO AN ARRAY


    // for(var index = 0; index < consonants.length; index +=1){
    //   if (userInput[0] === consonants[index] || userInput[1] === consonants[index]) {
    //
    //     var firstConsonant = userInput.charAt(0).slice(-1);
    //     var secondConsonant = userInput.charAt(1).slice(-1);
    //     userInput = userInput.slice(2);
    //
    //     userInput =  firstConsonant +  secondConsonant + userInput +"ay";
    //     console.log(userInput);
    //
    //   }
    // } else if (userInput[0] === consonants[index]){
    //   for(var index = 1; index < consonants.length; index +=1){
    //   if (userInput[1] === consonants[index]){
    //     var secondConsonant = userInput1.charAt(0).slice(-1); //change slice
    //     console.log(secondConsonant);
    //     userInput = userInput.slice(1);
    //     console.log(userInput);
    //     userInput = userInput1 + userInput + secondConsonant + "ay";
    //     console.log(userInput);
    //     }
    //   }
    // }



  });
});



// //
// for(var index = 0; index < consonants.length; index +=1){
//   if (userInput[0] === consonants[index]) {
//     var firstConsonant = userInput.charAt(0).slice(-1);
//     // console.log(firstConsonant);
//     userInput = userInput.slice(1);
//     console.log(userInput);
//     userInput = userInput + firstConsonant + "ay";
//     console.log(userInput);
//
//   }
// }
//
//   for(var index = 1; index < consonants.length; index +=1){
//   if (userInput[1] === consonants[index]){
//     var secondConsonant = userInput1.charAt(0).slice(-1); //change slice
//     console.log(secondConsonant);
//     userInput = userInput.slice(1);
//     console.log(userInput);
//     userInput = userInput1 + userInput + secondConsonant + "ay";
//     console.log(userInput);
//   }
// }
