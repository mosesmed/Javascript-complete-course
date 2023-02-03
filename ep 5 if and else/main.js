
//example one
const mathewAge = 50;
const simonAge = 40;

if(mathewAge < simonAge){
    console.log("Simon is older than Mathew");
}
else{
    console.log("Mathew is older than Simon");
}

//example two
const minimumAge = 18;

if(minimumAge < 18){
    console.log("You're not yet old enough");
}else{
    console.log("You're qualified to watch the movie");
}

//example three
const passMark = 50;
const johnMark = 10;

if(johnMark < passMark){
    const missMark = passMark - johnMark;
    console.log("You failed the exam by" + " " + missMark + " " + "Mark(s)");
}else{
    console.log("You passed the exam")
}