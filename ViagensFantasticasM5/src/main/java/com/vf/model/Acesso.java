package com.vf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "acesso")
@AllArgsConstructor
@NoArgsConstructor
public class Acesso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String tipo_acesso;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTipo_acesso() {
		return tipo_acesso;
	}
	public void setTipo_acesso(String tipo_acesso) {
		this.tipo_acesso = tipo_acesso;
	}

	public Acesso(Long id) {
	this.id = id;
		
	}
}
