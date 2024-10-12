// task_4/js/subjects/Cpp.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
    // Using declaration merging to add an optional attribute
    export interface Teacher {
        experienceTeachingC?: number; // Optional attribute
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
