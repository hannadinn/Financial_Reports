package com.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ActionController {

    // private final ReportService reportService;

    @GetMapping("/reports/v1")
    public String generateFinancialReport(@RequestParam String param) {
        // return reportService.generateCsvReport(param);
        return "";
    }
}
