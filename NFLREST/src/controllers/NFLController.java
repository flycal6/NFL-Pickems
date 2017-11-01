package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.NFLDAO;

@RestController
public class NFLController {
	
	@Autowired
	NFLDAO dao;
	
	@RequestMapping(path="ping", method=RequestMethod.GET)
	public String ping(){
	  return "pong";
	}
	

}