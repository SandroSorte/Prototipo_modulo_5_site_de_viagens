package com.vf.security;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class HomeController {
	
	@GetMapping("/home")
	public String index(Model modelo) {
		modelo.addAttribute("home");
	   return "home";
		
		
	}

}
