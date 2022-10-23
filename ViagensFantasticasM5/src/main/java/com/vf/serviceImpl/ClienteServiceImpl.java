package com.vf.serviceImpl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vf.exception.ErroMensagemException;
import com.vf.model.Cliente;
import com.vf.repository.ClienteRepository;
import com.vf.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService{
	
	@Autowired
	private ClienteRepository repo;
	
	@Override
	public Cliente findById(Long id) {
		
		Optional<Cliente> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ErroMensagemException("Cliente não encontrado!"));
	}
	
	@Override
	public List<Cliente> findAll() {
		return repo.findAll();
	}
	
	@Override
	@Transactional
	public Cliente create(Cliente obj) {
		return repo.save(obj);
	}
	
	@Override
	@Transactional
	public void delete(Long id) {
		findById(id);
		repo.deleteById(id);
	}
	
	@Override
	public Cliente update(Long id, Cliente obj) {
		Cliente cliente = findById(id);
		
		cliente.setNome(obj.getNome());
		cliente.setCpf(obj.getCpf());
		cliente.setUsername(obj.getUsername());
		cliente.setPassword(obj.getPassword());
		
		return repo.save(cliente);
	}
	
	

}
