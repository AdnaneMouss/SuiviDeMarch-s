package com.example.suivi.service;

import com.example.suivi.model.Cps;
import com.example.suivi.model.CpsDTO;
import com.example.suivi.repository.CpsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CpsService {

    @Autowired
    private CpsRepository cpsRepository;

    public List<Cps> getAllCps() {
        return cpsRepository.findAll();
    }
}
