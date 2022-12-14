package com.vf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vf.model.Cliente;
import com.vf.serviceImpl.ClienteServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("vf/cliente")
public class ClienteController {
	
	@GetMapping("/home")
	public String index() {
	return "Ola Mundo";
	}
	
	@Autowired
	private ClienteServiceImpl service;

	@GetMapping("/{id}")
	public ResponseEntity<Cliente>findById(@PathVariable Long id) { 
		Cliente obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@GetMapping
	public ResponseEntity <List<Cliente>> findAll(){
		List<Cliente> obj = service.findAll();
		return ResponseEntity.ok().body(obj);
	}
	
	
	@PostMapping
	public ResponseEntity<Cliente> create(@RequestBody Cliente obj){
		return new ResponseEntity <Cliente>(service.create(obj), HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity <Cliente> update(@PathVariable Long id,@RequestBody Cliente obj){
		Cliente newObj = service.update(id,  obj);
		return ResponseEntity.ok().body(newObj);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity <String> delete(@PathVariable Long id){
		service.delete(id);
		return new ResponseEntity<String>("Cliente deletado!", HttpStatus.OK);
	}
	
}
