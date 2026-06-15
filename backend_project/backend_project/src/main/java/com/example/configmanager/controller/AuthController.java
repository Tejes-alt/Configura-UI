package com.example.configmanager.controller;

import com.example.configmanager.dto.LoginRequest;
import com.example.configmanager.dto.RegisterRequest;

import com.example.configmanager.entity.User;
import com.example.configmanager.entity.Role;

import com.example.configmanager.repository.UserRepository;
import com.example.configmanager.repository.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")

public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping("/register")

    public Map<String, String> register(

            @RequestBody RegisterRequest request
    ) {

        Role role =
                roleRepository.findByRoleName(
                        request.getRole()
                );

        if(role == null) {

            role = new Role();

            role.setRoleName(
                    request.getRole()
            );

            roleRepository.save(role);
        }

        User user = new User();

        user.setUsername(
                request.getUsername()
        );

        user.setEmail(
                request.getEmail()
        );

        user.setPassword(
                request.getPassword()
        );

        user.setRole(role);

        userRepository.save(user);

        Map<String, String> response =
                new HashMap<>();

        response.put(
                "message",
                "User Registered Successfully"
        );

        return response;
    }

    @PostMapping("/login")

    public Map<String, String> login(

            @RequestBody LoginRequest request
    ) {

        User user =
                userRepository.findByEmail(
                        request.getEmail()
                );

        Map<String, String> response =
                new HashMap<>();

        if(
                user != null &&
                user.getPassword().equals(
                        request.getPassword()
                )
        ) {

            response.put(
                    "token",
                    "configura_token"
            );

            response.put(
                    "role",
                    user.getRole()
                            .getRoleName()
            );

            response.put(
                    "username",
                    user.getUsername()
            );

        } else {

            response.put(
                    "token",
                    "invalid"
            );
        }

        return response;
    }
}