package com.vf.model.dto;

import java.util.List;


public class ClienteAcessoDto {

	private Long idUser;

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
	
	private List<Long> idsAcesso;

	public List<Long> getIdsAcesso() {
		return idsAcesso;
	}

	public void setIdsAcesso(List<Long> idsAcesso) {
		this.idsAcesso = idsAcesso;
	}
}
