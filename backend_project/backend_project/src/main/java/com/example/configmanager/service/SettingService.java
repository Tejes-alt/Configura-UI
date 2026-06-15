package com.example.configmanager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.configmanager.entity.Setting;

import com.example.configmanager.repository.SettingRepository;

@Service
public class SettingService {

    @Autowired
    private SettingRepository repository;

    public List<Setting> getAllSettings() {

        return repository.findAll();
    }

    public Setting createSetting(
        Setting setting
    ) {

        return repository.save(setting);
    }

    public Setting updateSetting(
        Long id,
        Setting updatedSetting
    ) {

        Setting setting =
            repository.findById(id)
                .orElse(null);

        if(setting != null) {

            setting.setValue(
                updatedSetting.getValue()
            );

            repository.save(setting);
        }

        return setting;
    }

    public void deleteSetting(Long id) {

        repository.deleteById(id);
    }

    public List<Setting> searchSettings(
        String query
    ) {

        return repository
            .findByKeyNameContainingIgnoreCase(
                query
            );
    }
}