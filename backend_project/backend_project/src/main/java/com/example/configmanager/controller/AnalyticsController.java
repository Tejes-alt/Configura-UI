package com.example.configmanager.controller;

import com.example.configmanager.repository.UserRepository;
import com.example.configmanager.repository.SettingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/analytics")
@CrossOrigin("*")
public class AnalyticsController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SettingRepository settingRepository;

    @GetMapping
    public Map<String,Object> getAnalytics() {

        Map<String,Object> data =
                new HashMap<>();

        long totalUsers =
                userRepository.count();

        long totalConfigs =
                settingRepository.count();

        long totalAdmins =
                userRepository.countByRole_RoleName(
                        "ADMIN"
                );

        long totalNormalUsers =
                userRepository.countByRole_RoleName(
                        "USER"
                );

        data.put(
                "totalUsers",
                totalUsers
        );

        data.put(
                "totalAdmins",
                totalAdmins
        );

        data.put(
                "totalNormalUsers",
                totalNormalUsers
        );

        data.put(
                "totalConfigs",
                totalConfigs
        );

        data.put(
                "serverHealth",
                "99%"
        );

        return data;
    }
}