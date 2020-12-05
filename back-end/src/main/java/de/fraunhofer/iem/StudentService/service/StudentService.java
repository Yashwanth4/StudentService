package de.fraunhofer.iem.StudentService.service;

import de.fraunhofer.iem.StudentService.model.Student;
import org.springframework.stereotype.Service;
 

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.*;

@Service
public class StudentService {

    private final ArrayList<Student> students;
    int ind = 0;

    public StudentService() {
        students = new ArrayList<>() {{
            add(new Student("Sam", "Wart", 111111L,"NLG") {
            });
            add(new Student("Bill", "Beggins", 222222L,"HYD") {
            });
            add(new Student("Stuward", "Gil", 333333L,"GER") {
            });
        }};
    }

    public Collection<Student> getStudents() {
        return students;
    }

    public boolean addStudents(Student student) {
        return students.add(student);
    }
    
    public Student findStudents(Long mn) {
        Student s,s1 = null;
        Iterator<Student> it = students.iterator();
        //System.out.println(mn);
        while (it.hasNext()) {
            s = it.next();
            if(s.matriculationNumber.equals(mn)){
                s1 = s; 
                ind = students.indexOf(s);
            }    
        }
        System.out.println(ind);
        return s1;       
    }

    public ArrayList<Student> editStudents(Student s) {
        students.set(ind, s);
        return students;
    }

}
