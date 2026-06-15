package com.example.configmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.configmanager.entity.Setting;

public interface SettingRepository
extends JpaRepository<Setting, Long> {

    List<Setting>
    findByCategory(String category);

    List<Setting>
    findByKeyNameContainingIgnoreCase(
        String query
    );
}