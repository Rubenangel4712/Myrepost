package com.automaticaycontrol.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class ContactDto {
    @NotEmpty
    private String name;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String subject;
    @NotBlank
    private String message;

    public @NotBlank String getName() {
        return name;
    }

    public void setName(@NotBlank String name) {
        this.name = name;
    }

    public @NotBlank @Email String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank @Email String email) {
        this.email = email;
    }

    public @NotBlank String getSubject() {
        return subject;
    }

    public void setSubject(@NotBlank String subject) {
        this.subject = subject;
    }

    public @NotBlank String getMessage() {
        return message;
    }

    public void  setMessage(@NotBlank String message) {
        this.message = message;
    }
}
