package com.automaticaycontrol.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${emails.sender_email}")
    private String senderEmail;
    @Value("${emails.sender_name}")
    private String senderName;
    @Value("${emails.sender_address}")
    private String senderAddress;

    public void sendEmail(String receiverEmail, String subject, String content) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(receiverEmail);
            message.setFrom(senderEmail);
            message.setSubject(subject);
            message.setText(content);

            javaMailSender.send(message);
            System.out.println("Email sent successfully");
        }catch (Exception e) {
            System.out.println("Email sent failed");
            e.printStackTrace();
        }
    }
}
