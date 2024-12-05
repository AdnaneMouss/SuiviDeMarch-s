package com.example.suivi.controller;

import com.example.suivi.model.Projet;
import com.example.suivi.service.ProjetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjetController {

    private final ProjetService projetService;

    public ProjetController(ProjetService projetService) {
        this.projetService = projetService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Projet>> getProjects() {
        List<Projet> projects = projetService.getAllProjects();
        System.out.println(projects);
        return ResponseEntity.ok().body(projects);
    }


    @PutMapping("/{id}/approve")
    public ResponseEntity<Projet> approveProject(@PathVariable int id) {
        Projet approvedProject = projetService.approveProject(id);
        return ResponseEntity.ok(approvedProject);
    }
    @PutMapping("/{id}/disapprove")
    public ResponseEntity<Projet> disApproveProject(@PathVariable int id) {
        Projet approvedProject = projetService.disApproveProject(id);
        return ResponseEntity.ok(approvedProject);
    }
}
