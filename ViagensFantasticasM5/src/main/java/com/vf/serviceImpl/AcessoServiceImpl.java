package com.vf.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vf.model.Acesso;
import com.vf.model.Cliente;
import com.vf.model.dto.ClienteAcessoDto;
import com.vf.repository.ClienteRepository;
import com.vf.service.AcessoService;

@Service
public class AcessoServiceImpl implements AcessoService {
	
	@Autowired
	ClienteRepository repo;
	
	public Cliente executar(ClienteAcessoDto clienteAcessoDto) {
		
		Optional<Cliente> clienteExists = repo.findById(clienteAcessoDto.getIdUser());
		
		List<Acesso> acessos = new ArrayList<>();
		
		if(clienteExists.isEmpty()) {
			throw new Error("Cliente não encontrado;");
		}
		
		acessos = clienteAcessoDto.getIdsAcesso().stream().map(acesso -> {
			return new Acesso(acesso);}).collect(Collectors.toList());
		
		Cliente cliente = clienteExists.get();
		
		cliente.setAcessos(acessos);
		
		repo.save(cliente);
		
		return cliente;
	}

}
