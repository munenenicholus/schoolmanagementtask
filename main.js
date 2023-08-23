import { getGradeStatus } from './gradeModule.js';
import { getStudentName } from './studentModule.js';

const student = {
  firstName: 'Alice',
  lastName: 'Smith',
  grade: 85,
};

const statusMessage = getGradeStatus(student.grade);
console.log(`Grade Status: ${statusMessage}`);

const fullName = getStudentName(student);
console.log(`Full Name: ${fullName}`);
