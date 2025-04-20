package com.automaticaycontrol.controllers;

import com.automaticaycontrol.models.ContactDto;
import com.automaticaycontrol.services.EmailSender;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private EmailSender emailSender;

    @GetMapping({"", "/"})
    public String getContactForm(Model model) {
        model.addAttribute("contactDto", new ContactDto());
        return "contact";
    }

    @PostMapping({"", "/"})
    public String saveContact(Model model, @Valid @ModelAttribute ContactDto contactDto
    , BindingResult result) {
        if (result.hasErrors()) {
            return "contact";
        }

        model.addAttribute("successMessage", "Su mensaje fue recibido correctamente!");
        model.addAttribute("contactDto", new ContactDto());

        String content= "Estimado " + contactDto.getName()+"\n\n" +
                "Gracias por contactarnos";
        String content_2 = contactDto.getName() + " \n" + contactDto.getEmail()+ " \n" + contactDto.getSubject()+ " \n" + contactDto.getMessage()  ;
        emailSender.sendEmail(contactDto.getEmail(), "Contact Confirmation", content);
        emailSender.sendEmail("autoycontrolinfo@gmail.com", "Contact Confirmation", content_2);



        return "contact";
    }
}



