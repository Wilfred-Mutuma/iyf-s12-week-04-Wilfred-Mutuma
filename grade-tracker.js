
/*
 * Week 4: Student Grade Tracker
 * Author: Wilfred Mutuma
 */

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (student === null) {
            return null;
        }

        const grades = Object.values(student.grades);
        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        const grades = this.students
            .filter(student => student.grades[subject] !== undefined)
            .map(student => student.grades[subject]);

        if (grades.length === 0) {
            return null;
        }

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name)
                ? student
                : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(
            student => this.getStudentAverage(student.name) < 70
        );
    },

    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        }

        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);

        if (student === null) {
            return "Student not found";
        }

        const gradeLines = Object.entries(student.grades)
            .map(([subject, score]) => {
                return `${subject}: ${score} (${this.getLetterGrade(score)})`;
            })
            .join("\n");

        return `Report Card: ${student.name}\n${gradeLines}\nAverage: ${this.getStudentAverage(name)}`;
    }
};

// Test data required by the Week 4 assignment
gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

// Test every required method
console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Math class average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent()?.name);
console.log(
    "Students needing help:",
    gradeTracker.getStrugglingStudents().map(student => student.name)
);
console.log(gradeTracker.generateReportCard("Alice"));
console.log("Alice's letter grade:", gradeTracker.getLetterGrade(gradeTracker.getStudentAverage("Alice")));
