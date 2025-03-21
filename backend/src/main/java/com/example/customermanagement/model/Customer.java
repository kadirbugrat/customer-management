package com.example.customermanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Pattern(regexp = "^[a-zA-ZıİğĞüÜşŞöÖçÇ ]+$", message = "First name must contain only letters and spaces.")
    private String firstName;

    @NotBlank
    @Pattern(regexp = "^[a-zA-ZıİğĞüÜşŞöÖçÇ ]+$", message = "Last name must contain only letters and spaces.")
    private String lastName;

    @NotBlank
    @Pattern(regexp = "^[0-9]{11}$", message = "TC No must be exactly 11 digits.")
    @Column(unique = true)
    private String tcNo;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;
}
