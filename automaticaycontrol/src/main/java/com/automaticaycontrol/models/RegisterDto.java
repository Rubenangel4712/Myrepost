package com.automaticaycontrol.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegisterDto {

	@NotEmpty
	private String firstName;
	
	@NotEmpty
	private String lastName;
	
	@NotEmpty
	@Email
	private String email;
	
	private String phone;
	
	private String address;
	
	@Size(min = 6, message = "Debe tener al menos seis caracteres")
	private String password;
	
	private String confirmPassword;


}
