// task_4/js/subjects/React.ts

import { Subjects } from './Teacher';
import { Subject } from './Subject';

export namespace Subjects {
    // Using declaration merging to add an optional attribute
    export interface Teacher {
        experienceTeachingReact?: number; // Optional attribute
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
