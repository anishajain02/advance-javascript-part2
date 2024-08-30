//simple for loop
for(let i=0; i<10; i++){
    console.log(i);
}


//for of loop-> used for arrays
const users = ['John', 'Jane', 'Jack', 'Jill'];
for(const user of users){
    console.log(user);
}


//for in loop-> used for objects
const loggedInUsers = {
    name: 'Ani',
    age : 25,
    isAdmn: true
}
for(const propertyName in loggedInUsers){
    console.log(propertyName);
    console.log(loggedInUsers[propertyName]);
}

//while loop-> used when we dont know the number of iterations
let isFinished = false;
while(!isFinished){
    isFinished = confirm('Do you want to exit?');
}
console.log('Exited');