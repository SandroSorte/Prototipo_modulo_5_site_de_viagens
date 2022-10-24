package com.vf.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vf.model.Cliente;
import com.vf.repository.ClienteRepository;

@Service
public class ClienteDetailsService implements UserDetailsService{
	
	@Autowired
	ClienteRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Cliente cliente = repo.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException("Cliente não encontrado: " + username));
		return new User(cliente.getUsername(), cliente.getPassword(), true, true, true, true, cliente.getAuthorities());
	}

}
