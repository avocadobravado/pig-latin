$(function(){
  $("#translatorForm").submit(function(event) {
    event.preventDefault();
    // var userInput1 = [];
    var userInput1 = $("#userInput").val();
    var output = [];
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    var y = "y";
    var qu = ["q", "u"];

    // for (var index = 1; index < vowels.length; index++) {
    //   console.log(output);
      if (vowels.indexOf(userInput.charAt(0)) === -1 ) {
        output = userInput1 + "ay" ;
        console.log(output);
      } else{
        console.log("hello");
      }
    // };

    // if (userInput1 === vowels ) {
    //   output = userInput1 + "ay" ;
    //   console.log(output);
    // }else{
    //   console.log("hello");
    // }
    // console.log(vowels);


    $("#output").text(output);
  });
});
