package com.example.configmanager.repository;

import com.example.configmanager.entity.Role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository
extends JpaRepository<Role, Long> {

    Role findByRoleName(String roleName);
}