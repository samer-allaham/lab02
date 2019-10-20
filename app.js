'use strict'
var name = prompt('excuse me may i know your name ?')
name = name.toLowerCase();
alert('such a lovely name ' + name );

var hello = prompt('am i from usa?');
hello = hello.toLowerCase();
switch(hello)
{case 'yes':
case'y':
alert('actually im from jordan')
break;
case 'no':
case 'n':
    alert(hello +'  Welldone') ;
    // console.log(hello+ ' is the right answer');
    break;
    default:
        alert('thats not a country !')
}

var goal = prompt('have i worked as a customer service advisor?')
goal = goal.toLowerCase();
if (goal === 'yes' || goal ==='y')

{ alert('True well done');
// console.log(goal+ ' is the right answer');
} else if (goal === 'no' || goal ==='n') {
    (goal ==='no' || goal ==='n');
    alert('actually yes i worked mate!');
}else{
    alert('Okay whatever!')
}

var gamer= prompt('did i graduated from university of jordan?')
gamer = gamer.toLowerCase();
if(gamer ==='yes' || gamer ==='y')
{
    alert('thats not true!')
}else if (gamer ==='no' || gamer ==='n')
{
    alert('well done')
    // console.log(gamer+ ' is the right answer');
}else {
    alert('never mind')
}

var skydiving = prompt('have i worked as a cashier?');
skydiving= skydiving.toLowerCase()

    if(skydiving==='yes'|| 'y')
    alert('thats true')
    // console.log( skydiving + ' is the right answer')
    else if(skydiving === 'no'|| skydiving==='n' )
    {
        alert('unfortunatlly, i did')
    }else{
        alert('you gotta say yes or no!')
    }
    

var books= prompt('do i mentioned about me reading books?')
books=books.toLowerCase()
switch(books)
{case('yes'):
case('y'):
alert('Nah, i didnt')
break;
case('no'):
case('n'):
alert('thats true i didnt')
// console.log(books+ ' is the right answer');
break;
default:
    alert('ughh ' )
}
alert('Welcome to the site '+ name);


