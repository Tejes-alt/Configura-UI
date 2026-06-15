package com.example.configmanager.repository;

import com.example.configmanager.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User,Long> {

    User findByEmail(
            String email
    );

    long countByRole_RoleName(
            String roleName
    );
}