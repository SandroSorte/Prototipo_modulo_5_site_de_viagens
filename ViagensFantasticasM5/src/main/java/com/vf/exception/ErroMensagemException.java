package com.vf.exception;

public class ErroMensagemException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public ErroMensagemException(String mensagem) {
		super(mensagem);
	}
	
}

