export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Add parentheses around `student`
    .map((student) => {
      // Add parentheses around `grade`
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Spread student object to keep the original properties
        grade: gradeObj ? gradeObj.grade : 'N/A', // Add the grade or 'N/A' if not found
      };
    });
}
