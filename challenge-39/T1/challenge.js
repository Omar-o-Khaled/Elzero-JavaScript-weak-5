let job = "Manager";
let salary = 0;

/*
if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}
*/

switch (job){
    case "Manager":
        salary = 8000;
        console.log(`job: ${job}, salery: ${salary}`)
    break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`job: ${job}, salery: ${salary}`)
    break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`job: ${job}, salery: ${salary}`)
    break;
    default:
        salary = 4000;
        console.log(`job: ${job ?? Unkwon}, salery: ${salary}`)
    break;
}