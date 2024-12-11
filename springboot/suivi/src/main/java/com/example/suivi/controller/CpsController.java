package com.example.suivi.controller;

import com.example.suivi.model.Cps;
import com.example.suivi.model.CpsDTO;
import com.example.suivi.model.ProjetDTO;
import com.example.suivi.model.UtilisateurDTO;
import com.example.suivi.service.CpsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/cps")
public class CpsController {

    @Autowired
    private CpsService cpsService;

    @GetMapping("/list")
    public List<CpsDTO> getCPS() {
        System.out.println(cpsService.getAllCps());
        return cpsService.getAllCps().stream()
                .map(CpsDTO::new)
                .collect(Collectors.toList());
    }
    @PostMapping("/add")
    public String addCPS(@RequestBody CpsDTO cpsDTO) {
        try {
            cpsService.addCps(cpsDTO);
            return "Project added successfully.";
        } catch (Exception e) {
            return"Error adding user.";
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        try {
            cpsService.deleteCPSById(id);
            return ResponseEntity.ok("CPS with ID " + id + " deleted successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user.");
        }
    }

}
