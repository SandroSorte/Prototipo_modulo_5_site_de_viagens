package com.vf.service;

import java.util.List;
import com.vf.model.Cliente;
import com.vf.model.dto.ClienteAcessoDto;

public interface ClienteService {
	
	Cliente findById(Long id);
	
	List<Cliente> findAll();
	
	Cliente update(Long id, Cliente Obj);
	
	void delete (Long id);

	Cliente create(Cliente obj);

	Cliente save(Cliente cliente);
	

}
