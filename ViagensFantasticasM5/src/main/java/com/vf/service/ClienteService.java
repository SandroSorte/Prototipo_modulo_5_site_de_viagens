package com.vf.service;

import java.util.List;
import com.vf.model.Cliente;

public interface ClienteService {
	
	Cliente findById(Long id);
	
	List<Cliente> findAll();
	
	Cliente create(Cliente obj);
	
	Cliente update(Long id, Cliente Obj);
	
	void delete (Long id);
	

}