package com.vf.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.vf.model."})
@EnableJpaRepositories(basePackages = {"com.vf.repository"})
@ComponentScan(basePackages = {"com.vf.controller", "com.vf.serviceImpl", "com.vf.security","com.vf.service"})
@SpringBootApplication
public class ViagensFantasticasM5Application {

	public static void main(String[] args) {
		SpringApplication.run(ViagensFantasticasM5Application.class, args);
	}

}
