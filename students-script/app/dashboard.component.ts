/**
 * Created by sara on 19/08/16.
 */
import { Component,ViewChild } from '@angular/core';
import { Students } from './students';
import { StudentService } from './student.service';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls:  ['app/dashboard.component.css'],
    directives: [MODAL_DIRECTIVES],
    providers: [StudentService]
 
})


export class DashboardComponent {
    levels = ['primary','secondary','preparatory'];
    @ViewChild('mymodal') modal: any;

    newStudent: Students = new Students();
    editnewStudent: Students = new Students();
    
    constructor(
        private studentservice: StudentService) {
    }

    addStudent() {
        console.log(this.newStudent)
        this.studentservice.addStudent(this.newStudent);
        this.newStudent = new Students(); //to empty this object
    }
    onChange(value:string){
        this.newStudent.level = value;
        console.log(this.newStudent.level)
    }
    onChangeEdit(value:string){
        this.editnewStudent.level = value;
    }

    get students() {
        return this.studentservice.getAllStudents()
    }
    removeStudent(student:Students) {
        this.studentservice.deleteStudentById(student.id);
    }
    editStudent(student:Students) {
        let std = this.studentservice.getStudentById(student.id);
        console.log(std)
        if(std){
            this.editnewStudent = std;
            this.modal.open();
        }
        // this.studentservice.editStudentById(student.id,this.newStudent);
    }
    close(){
        this.studentservice.editStudentById(this.editnewStudent);
        this.editnewStudent = new Students(); //to empty this object

    }

}



