const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
  const studentFeedback = [
    'Nice Job Joe, you got a B',
    'Excellent Job Jen, you got an A',
    'Well done Steph, you got a C',
    'What happened Allen, you got a D',
    'Not good Gina, you got an F',
  ];
  function gradeToFeedback(grade) {
    if (grade >= 90) return "Excellent Job";
    if (grade >= 80) return "Nice Job";
    if (grade >= 70) return "Well done";
    if (grade >= 60) return "What happened";
    return "Not good";
  }  
  function getLetterGrade(numericGrade) {
    if (numericGrade >= 90) return 'A';
    if (numericGrade >= 80) return 'B';
    if (numericGrade >= 70) return 'C';
    if (numericGrade >= 60) return 'D';
    return 'F';
  }  
