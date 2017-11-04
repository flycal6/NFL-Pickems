package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.PickDAO;
import entities.Pick;

@RestController
public class PickController {
	
	@Autowired
	private PickDAO dao;
	
	@RequestMapping(path = "users/{uid}/picks", method = RequestMethod.GET)
	public List<Pick> indexPick(@PathVariable int uid) {
		return dao.indexPick(uid);
	}
	
	@RequestMapping(path = "users/{uid}/picks/{pid}", method = RequestMethod.GET)
	public Pick showPick(@PathVariable int uid, @PathVariable int pid ) {
		return dao.showPick(uid, pid);
	}
	
	@RequestMapping(path = "users/{uid}/picks", method = RequestMethod.POST)
	public void createPicks(@PathVariable int uid, @RequestBody String jsonAddress) {
			dao.createPicks(uid, jsonAddress);
	}
	
	
	
	
	
	
}
