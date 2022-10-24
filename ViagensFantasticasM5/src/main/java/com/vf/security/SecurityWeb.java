package com.vf.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class SecurityWeb {
	
	@Autowired
	ClienteDetailsService userDetailsService;
	
	@Bean
	public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
		
		return http.csrf().disable().authorizeRequests(auth -> auth
				.antMatchers("/", "vf/cliente/cadastrar").permitAll()
				.anyRequest().authenticated())
				.httpBasic(Customizer.withDefaults())
				.build();
	}
		/*
		http
				.httpBasic()
				.and()
				.authorizeHttpRequests()
				.antMatchers(HttpMethod.POST,"vf/cliente/cadastrar").permitAll()
				.antMatchers(HttpMethod.GET,"vf/cliente/**").hasRole("ADMIN")
				.antMatchers(HttpMethod.GET,"vf/cliente/**").hasRole("ADMIN")
				.anyRequest().authenticated()
				.and()
				.csrf().disable();
				
		return http.build();
    }*/
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
		
	}
	
}