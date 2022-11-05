package com.vf.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@Component
public class SecurityWeb {
	 
	@Autowired
	private final ClienteDetailsService details;
	
	public SecurityWeb(ClienteDetailsService details) {
		this.details = details;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
		return http
				.csrf().disable()
				.authorizeHttpRequests(auth -> auth.antMatchers("/", "/home", "vf/cliente")
				.permitAll()
				.anyRequest().authenticated())
				.userDetailsService(details)
				.headers(headers -> headers.frameOptions().sameOrigin())
				.httpBasic(withDefaults())
				.build();
	}
}

