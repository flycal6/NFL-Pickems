package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.WeekDAO;
import entities.Week;

@RestController
public class WeekController {
	
	@Autowired
	WeekDAO dao;
	
	@RequestMapping(path = "weeks", method = RequestMethod.GET)
	public List<Week> indexWeek() {
		return dao.indexWeek();
	}
	
	@RequestMapping(path = "weeks/{wid}", method = RequestMethod.GET)
	public Week showWeek(@PathVariable int wid ) {
		return dao.showWeek(wid);
	}
	
//	@RequestMapping(path="/user/{uid}/todo", method=RequestMethod.POST)
//	public Todo create(@PathVariable int uid, @RequestBody String todoJson) {
//	return dao.create(uid, todoJson);	
//	}
}
