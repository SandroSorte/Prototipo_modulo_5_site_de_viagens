package com.vf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vf.model.Cliente;

public interface ClienteRepository extends JpaRepository < Cliente, Long> {
	
	Cliente findByUsername(String username);
	  
	@Query("SELECT u FROM Cliente u JOIN FETCH u.acessos WHERE u.username = :username")
	Cliente findByUsernameFetchAcessos(@Param("username") String username);

}
