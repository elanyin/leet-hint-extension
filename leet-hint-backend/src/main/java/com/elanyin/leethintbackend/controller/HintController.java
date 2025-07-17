package com.elanyin.leethintbackend.controller;

import com.elanyin.leethintbackend.dto.LeetcodeProblem;
import com.elanyin.leethintbackend.service.HintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/hint")
public class HintController {

    @Autowired
    private HintService hintService;

    @PostMapping
    public ResponseEntity<Map<String, String>> getHint(@RequestBody LeetcodeProblem problem) {
        String hints = hintService.generateHint(problem);
        Map<String, String> response = new HashMap<>();
        response.put("hints", hints);
        return ResponseEntity.ok(response);
    }
}
