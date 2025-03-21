package com.example.customermanagement.controller;

import com.example.customermanagement.dto.ChangePasswordRequest;
import com.example.customermanagement.model.AppUser;
import com.example.customermanagement.repository.AppUserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
         this.userRepository = userRepository;
         this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/login")
    public ResponseEntity<String> login() {
         return ResponseEntity.ok("Login successful!");
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest request,
                                                 Authentication authentication) {
         String currentUsername = authentication.getName();
         AppUser user = userRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new RuntimeException("User not found"));

         if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
              return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Old password is incorrect");
         }

         user.setPassword(passwordEncoder.encode(request.getNewPassword()));
         userRepository.save(user);
         return ResponseEntity.ok("Password changed successfully");
    }
}
