// task_4/js/subjects/Java.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
    // Using declaration merging to add an optional attribute
    export interface Teacher {
        experienceTeachingJava?: number; // Optional attribute
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
