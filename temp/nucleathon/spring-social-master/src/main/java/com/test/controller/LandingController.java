package com.test.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LandingController {
	@RequestMapping(value = "/")
	public ModelAndView home(){
		return new ModelAndView("index.jsp");
	}
}
