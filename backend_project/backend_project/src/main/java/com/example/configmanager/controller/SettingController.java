package com.example.configmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.configmanager.entity.Setting;

import com.example.configmanager.service.SettingService;

@RestController
@CrossOrigin("*")
public class SettingController {

    @Autowired
    private SettingService service;

    @GetMapping("/settings")
    public List<Setting> getSettings() {

        return service.getAllSettings();
    }

    @PostMapping("/settings")
    public Setting createSetting(
        @RequestBody Setting setting
    ) {

        return service.createSetting(setting);
    }

    @PutMapping("/settings/{id}")
    public Setting updateSetting(
        @PathVariable Long id,
        @RequestBody Setting setting
    ) {

        return service.updateSetting(
            id,
            setting
        );
    }

    @DeleteMapping("/settings/{id}")
    public void deleteSetting(
        @PathVariable Long id
    ) {

        service.deleteSetting(id);
    }

    @GetMapping("/search")
    public List<Setting> search(
        @RequestParam String query
    ) {

        return service.searchSettings(
            query
        );
    }
}