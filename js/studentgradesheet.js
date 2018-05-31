/*
Scope: Student Grade Sheet;
Author: Ebenezer Makinde;
Tel: 08033291570;
Date: 26/05/2018;
*/

//Password function.
function revealPass() {
var password = document.getElementById("passwd");
if (password.type == "password" ) {

   password.type = 'text';
    
} else {

	password.type = 'password';
   }

}




//English Grade function 
  function grade(score, grade){

  if (score == ''){
   
    document.getElementById(grade).value = "Score cannot be empty";

  } else if (score >= 75  && score <= 100 ) {
	
    document.getElementById(grade).value = "A";

  } else if (score >=65 && score <= 74){
    
     document.getElementById(grade).value = "B";

  } else if(score >= 55 && score <= 64){
     
      document.getElementById(grade).value = "C";

  }else if (score >= 45 && score <= 54) {
  	 
      document.getElementById(grade).value = "D";

  } else if (score >= 35 && score <= 44) {
       
       document.getElementById(grade).value = "E";

  }else if(score >= 0 && score <= 34) {
        document.getElementById(grade).value = "F";
  	
  }else{
     document.getElementById(grade).value = "Invalid score value";
  }

}



//function totalscore


function compute(a,b,c,d,e){

// Calcuates the total score
  var totalscore = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);

  document.getElementById("total").innerHTML = totalscore;

// Computes the average from the total above
  var average = parseFloat(totalscore) / 5;
    document.getElementById("avscore").innerHTML = average;

   
    if (90 >= average <= 100){

        document.getElementById("remarks").innerHTML = "Excellent result. Bravo!";
        document.getElementsByClassName("fa fa-blank").value = "fa fa-thumbs-up";

    }else if(80 >= average <= 89){
        document.getElementById("remarks").innerHTML = "Good result, Still room to improve";
   
    }else if (70 >= average <= 79) {
        document.getElementById("remarks").innerHTML = "This is not encouraging at all.";

    } else {
        document.getElementById("remarks").innerHTML = "This is dishearting. Bad grades!";

    }

}



