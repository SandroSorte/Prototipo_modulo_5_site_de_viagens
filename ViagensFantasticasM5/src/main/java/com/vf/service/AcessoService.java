package com.vf.service;

import com.vf.model.Cliente;
import com.vf.model.dto.ClienteAcessoDto;

public interface AcessoService {
	
	Cliente executar(ClienteAcessoDto clienteAcessoDto);
}
