import { Observable, fromEvent, interval } from 'rxjs';

export class SMSConstant {
    public static STUDENT_LIST = 'student-list';
}


export const loginCounter = interval(1000);
