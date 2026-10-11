let name=prompt("Enter student name:");

let mark1=Number(prompt("Enter your mark1:"));
let mark2=Number(prompt("Enter your mark2:"));
let mark3=Number(prompt("Enter your mark3:"));

function calculateAverage(mark1, mark2, mark3) {
    let average = (mark1 + mark2 + mark3) / 3;
    return average;
}
function totalMarks(mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    return total;
}
if(
    mark1<0||mark1>100||
    mark2<0||mark2>100||
    mark3<0||mark3>100
){
    alert(" Marks are invalid");
    }


else{
let average = calculateAverage(mark1, mark2, mark3);
let total = totalMarks(mark1,mark2,mark3);
let grade;
if(average >= 90) {
    grade="A" ;
} else if(average >= 75) {
    grade="B" ;
} else if(average>=50){
    grade="C" ;
}
else{
    grade="F" ;
}

    alert("" + name + ", your average mark is: " + average + " and your total marks are: " + totalMarks(mark1, mark2, mark3));
}
    let again=confirm("Do you want to calculate another student result?");
    if(again){
        location.reload();
    }
    else{
        alert(" Program ended" );
    }