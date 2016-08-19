/**
 * Created by sara on 19/08/16.
 */
import { Injectable } from '@angular/core';

import { Students } from './students';
import { STUDENTS } from './mock-students';

@Injectable()

export class StudentService {
    students: Students[] = STUDENTS;
    // lastId: number = 0;
    lastId: number = Math.max.apply(null, this.students.map(item => item.id));

    getAllStudents(): Students[]{
        return this.students;
    }

    deleteStudentById(id: number): StudentService{
        this.students = this.students
            .filter(student => student.id !== id);
        return this;
    }

    addStudent(student: Students): StudentService {
        if (!student.id) {
            console.log("--------> ",this.lastId)
            student.id = ++this.lastId;
        }
        this.students.push(student);
        return this;
    }
    editStudentById(values: Object = {}) {
        Object.assign( values);
    }

    getStudentById(id: number): Students {
        return this.students
            .filter(student => student.id === id)
            .pop();
    }

}
