'use strict'
var name = prompt('excuse me may i know your name ?')
name = name.toLowerCase();
alert('hello '+ name +' welcome to my site');
console.log('name'+name);
var points= 0;


//

// var goal = prompt('have i worked as a customer service advisor?')
// goal = goal.toLowerCase();
// if (goal === 'yes' || goal ==='y')

// { alert('True well done');
// // console.log(goal+ ' is the right answer');
// } else if (goal === 'no' || goal ==='n') {
//     (goal ==='no' || goal ==='n');
//     alert('actually yes i worked mate!');
// }else{
//     alert('Okay whatever!')
// }

// var gamer= prompt('did i graduated from university of jordan?')
// gamer = gamer.toLowerCase();
// if(gamer ==='yes' || gamer ==='y')
// {
//     alert('thats not true!')
// }else if (gamer ==='no' || gamer ==='n')
// {
//     alert('well done')
//     // console.log(gamer+ ' is the right answer');
// }else {
//     alert('never mind')
// }

// var skydiving = prompt('have i worked as a cashier?');
// skydiving= skydiving.toLowerCase()

//     if(skydiving==='yes'|| 'y')
//     alert('thats true')
//     // console.log( skydiving + ' is the right answer')
//     else if(skydiving === 'no'|| skydiving==='n' )
//     {
//         alert('unfortunatlly, i did')
//     }else{
//         alert('you gotta say yes or no!')
//     }
    

// var books= prompt('do i mentioned about me reading books?')
// books=books.toLowerCase()
// switch(books)
// {case('yes'):
// case('y'):
// alert('Nah, i didnt')
// break;
// case('no'):
// case('n'):
// alert('thats true i didnt')
// // console.log(books+ ' is the right answer');
// break;
// default:
//     alert('ughh ' )
// }
// alert('Welcome to the site '+ name);

// 'have i worked as acustomer service advisor?',
// 'did i graduated from university of jordan ?',
// 'have i worked as acashier ?',
// 'do i mentiond about me reading books'


// var yesReplies = [1];
//     // 'actually im from jordan',
//     // 'True well done',
//     // 'thats not true!',
//     // 'thats true',
//     // 'Nah, i didnt',

// var noRepilies = [2];
//     // 'Welldone',
//     // 'actually yes i worked mate!',
//     // 'well done',
//     // 'unfortunatlly, i did',
//     // 'thats true i didnt'

var options = [
    [ name +' ' +'am i from the US?',
        'thats not true!',
        'true well done ',
        false
    ],
    ['have i worked as a customer service advisor?',
        'True well done ',
        'actually yes i worked mate!',
        true
    ],
    ['did i graduated from university of jordan?',
        'thats not true! ',
        'well done ',
        false
    ],
    ['have i worked as a cashier?',
        'thats true',
        'unfortunatlly, i did ',
        true
    ],
    ['do i mentioned about me reading books?',
        'Nah, i didnt ',
        'thats true i didnt',
        false
    ]
    
  


];
// var likeInfo = prompts[0];
// question = prompt(likeInfo[0]);
// var question = prompt('am i from usa?');
// question = question.toLowerCase();
// switch(question)
// {case 'yes':
// case'y':
// alert(likeInfo[1])
// break;
// case 'no':
// case 'n':
//     alert(likeInfo[2]) ;
//     // console.log(hello+ ' is the right answer');
//     break;
//     default:
//         alert('thats not a country!')
// }


for (var i=0 ; i <options.length ; i++)
{
    var question = options[i];

    var userResponse = prompt(question[0]); // first element of the array 

    userResponse = userResponse.toUpperCase();

    var yesReplies=question[1]; // second element of the array

    var noReplies=question[2];
    var YesIsTrue=question[3]; // third element of the array
// options.push ('will add another element');
//options[6] = ' '; will add another element
// options.pop(); will get rid of the last index in the array
  switch(userResponse){
      case'YES':
      case'Y':
      if (YesIsTrue == true)
      {
          points++;
      }
      alert(yesReplies + ' your score >' +points);
      break;
      case'NO':
      case'N':
      if (question[3]==false)
      {

        points++;


    }
    alert ( noReplies+ ' your score' + points)
     
      break;
default:
    alert('wrong answer!');

  }
}
//   if (ys === 'yes' || answer === 'y') {
//     // if it's correct, give them a point
//     userPoints++;
//   } else {
//     // if it's not correct, tell them to try again
//     alert('Wrong! try again');
//   }
  
//   alert('you have ' + userPoints + ' points.');  
// }
// Math.round(Math.random() * 10 + 1);
var computerGuess = 5;   // the number from computer
var guess = 4; // the number allowed till the game is over 
// console.log(computerGuess);

while (true) {
  var userGuess = parseInt(prompt("Please pick a number between 1 and 10"));// the number that user guess
  if (userGuess < 1 || userGuess > 10) {
    alert("Please guess between 1 and 10"); 
  } else { 
    if (guess > 1) {
      if (userGuess === computerGuess) {
        alert("Winner!");
        points++;
        break;
      } else if (userGuess > computerGuess) {
        guess--;
        alert("Please guess lower. You have " + guess + " guesses remaining."); 
      } else {
        guess--;
        alert("Please guess higher. You have " + guess + " guesses remaining.");
    }
    } else {
      alert("you lose!");
      break;
    } 
  } 
}
alert('THE CORRECT AnsWER IS  '+ computerGuess);


var guessanswers =5;
var quizz = ['give me a yellow furit you have only 5 attempts!',
             'banana',
            'lemon',
            'mango',
            'pears']
for (i = 0;i<quizz.length;i++)
{

    var questions=quizz[i];
    var answer = prompt(quizz[0]);
    var bananaanswer=quizz[1];
    var lemonanswer=quizz[2];
    var mangoanswer=quizz[3];
    var pearsanswer=quizz[4];
    
    if (answer === 'banana'){
        points++;
        alert(bananaanswer + ' ' + 'True its a yellow fruit and your score is '+ points );
        break;
    //     guessanswers--; 
    //  alert("you have " + guessanswers +" guess remaining")
        
    }else if (answer === 'lemon'){
        points++;
    alert (lemonanswer + ' ' + 'True its a yellow fruit and your score is '+ points);
    break;
    // guessanswers--;
    // alert(" You have " + guessanswers + " guesses remaining.");
    
    
    } else if (answer === 'mango')
    {
        points++;
        alert(mangoanswer + ' ' + 'True its a yellow fruit and your score is '+ points)
        // guessanswers--;
        // alert(" You have " + guessanswers + " guesses remaining.");
        break;       
    }
    else if (answer === 'pears'){
        points++;
    alert(answer + 'True its a yellow fruit and your score is '+ points)
    // {guessanswers--;
    //     alert(" You have " + guessanswers + " guesses remaining.");
        break;
    }
    else { 
    alert ('its not a yellow fruit !' + guessanswers--)
    }}
    alert('YOUR FINAL SCORE ' + points + '  out of 7questions ')
    
    // questions !== 'banana','mango','pears','lemon'
  

// }


// var secretnumber = 4;
// var guesses=parseIntprompt('guess the number!');
// var guess=number(guesses);
// if (guess === secretnumber){
//     alert("Well done");
// }
// else if(guess > secretnumber)
// {
//     alert ("too high guess again")
// }
// else {
//     alert('too low guess again')
// }
