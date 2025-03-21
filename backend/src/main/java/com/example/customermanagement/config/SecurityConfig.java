package com.example.customermanagement.config;

import com.example.customermanagement.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final CustomUserDetailsService userDetailsService;
    
    public SecurityConfig(CustomUserDetailsService userDetailsService) {
         this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
         http
             .cors(cors -> cors.configurationSource(corsConfigurationSource()))
             .csrf(csrf -> csrf.disable())
             .authorizeHttpRequests(auth -> auth
                 .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                 .requestMatchers("/api/auth/**").authenticated()
                 .requestMatchers("/api/customers/**").authenticated()
                 .anyRequest().permitAll()
             )
             .httpBasic(Customizer.withDefaults());

         return http.build();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
         AuthenticationManagerBuilder auth = http.getSharedObject(AuthenticationManagerBuilder.class);
         auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
         return auth.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
         CorsConfiguration configuration = new CorsConfiguration();
         configuration.setAllowedOrigins(List.of("http://localhost:3000"));
         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
         configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
         configuration.setAllowCredentials(true);
         
         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
         source.registerCorsConfiguration("/**", configuration);
         return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
         return new BCryptPasswordEncoder();
    }
}
