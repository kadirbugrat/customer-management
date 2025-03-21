package com.example.customermanagement.config;

import com.example.customermanagement.model.AppUser;
import com.example.customermanagement.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner init(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
         return args -> {
              if (userRepository.findByUsername("admin").isEmpty()) {
                  AppUser admin = new AppUser();
                  admin.setUsername("admin");
                  admin.setPassword(passwordEncoder.encode("admin123"));
                  admin.setRoles("ADMIN");
                  userRepository.save(admin);
              }
         };
    }
}
