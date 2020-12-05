package de.fraunhofer.iem.StudentService.controller;

import de.fraunhofer.iem.StudentService.model.Student;
import de.fraunhofer.iem.StudentService.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Collection;

@RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("students")
    public ResponseEntity<Collection<Student>> getStudents() {
        Collection<Student> students = this.studentService.getStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @PostMapping("newstudent")
    public ResponseEntity<String> postStudents(@RequestBody Student student) {
        boolean stu = this.studentService.addStudents(student);
        if(stu){
            return new ResponseEntity<>("sucess", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("failed", HttpStatus.OK);
        }
    
    }
    @GetMapping("findstudent/{mn}")
    public ResponseEntity<Student> findStudents(@PathVariable("mn") Long mn) {
        Student stu = this.studentService.findStudents(mn);
        if(stu != null){
                return new ResponseEntity<>(stu, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(stu, HttpStatus.OK);
            }
        }
        @PutMapping("editstudent")
        public ResponseEntity<ArrayList> editStudents(@RequestBody Student s) {
            ArrayList stu = this.studentService.editStudents(s);
            if(stu != null){
                    return new ResponseEntity<>(stu, HttpStatus.OK);
                }
                else {
                    return new ResponseEntity<>(stu, HttpStatus.OK);
                }
            }
        
    
    
}
