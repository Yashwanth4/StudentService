package de.fraunhofer.iem.StudentService.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {

    private final String firstName;
    private final String lastName;
    private final Long matriculationNumber;
    private final String address;

    public Student(String firstName, String lastName, Long matriculationNumber, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.matriculationNumber = matriculationNumber;
        this.address = address;
    }
}
