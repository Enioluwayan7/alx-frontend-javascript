// task_4/js/subjects/Subject.ts

import { Subjects } from './Teacher';

export namespace Subjects {
    export class Subject {
        teacher!: Teacher; // Implement the Teacher interface

        setTeacher(teacher: Teacher) {
            this.teacher = teacher; // Setter method to set the teacher
        }
    }
}
