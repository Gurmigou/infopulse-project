//package com.infpulse.studentspoll.controllers;
//
//import com.infpulse.studentspoll.service.FormService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//import java.security.Principal;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class FormController {
//
//    private final FormService formService;
//
//    @Autowired
//    public FormController(FormService formService) {
//        this.formService = formService;
//    }
//
//    @PostMapping("/forms/new")
//    @ResponseStatus(HttpStatus.CREATED)
//    public FormDto newForm(@RequestBody @Valid FormDto formDto, Principal principal) {
//        return formService.saveForm(formDto, principal.getName());
//    }
//
//    @PutMapping("/forms/{formId}")
//    @ResponseStatus(HttpStatus.OK)
//    public FormDto updateForm(@PathVariable long formId, @RequestBody @Valid FormDto formDto, Principal principal) {
//        return formService.updateForm(formId, formDto, principal.getName());
//    }
//
//    @GetMapping("/forms/{formId}")
//    public FormDto getForm(@PathVariable long formId) {
//        return formService.getForm(formId);
//    }
//
//    @DeleteMapping("/forms/{formId}")
//    @ResponseStatus(HttpStatus.OK)
//    public void deleteForm(@PathVariable long formId, Principal principal) {
//        formService.deleteForm(formId, principal.getName());
//    }
//
//    @GetMapping("/forms-owned")
//    public List<FormDto> getOwnedForms(Principal principal) {
//        return formService.getOwnedForms(principal.getName());
//    }
//
//}