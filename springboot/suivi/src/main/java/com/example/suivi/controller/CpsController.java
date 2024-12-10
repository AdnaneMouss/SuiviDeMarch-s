package com.example.suivi.controller;

import com.example.suivi.model.Cps;
import com.example.suivi.model.CpsDTO;
import com.example.suivi.model.UtilisateurDTO;
import com.example.suivi.service.CpsService;
import org.springframework.beans.factory.annotation.Autowired;
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


}
