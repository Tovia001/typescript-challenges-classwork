let score: number = 65;

let grade: string;

if (score < 0 || score > 100) {
    grade = "Invalid score";
} else if (score >= 70) {
    grade = "Grade A";
} else if (score >= 60) {
    grade = "Grade B";
} else if (score >= 50) {
    grade = "Grade C";
} else if (score >= 45) {
    grade = "Grade D";
} else {
    grade = "Grade F";
}

console.log(grade);
