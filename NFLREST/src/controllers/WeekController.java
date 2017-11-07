package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.WeekDAO;
import entities.Result;
import entities.Week;

@RestController
public class WeekController {
	
	@Autowired
	WeekDAO dao;
	
	@RequestMapping(path = "weeks", method = RequestMethod.GET)
	public List<Week> indexWeek() {
		return dao.indexWeek();
	}
	
	@RequestMapping(path = "weeks", method = RequestMethod.POST)
	public Week createWeek(@RequestBody String weekJSON) {
//		System.out.println("in controller");
//		System.out.println(weekJSON);
		return dao.createWeek(weekJSON);
	}
	
	@RequestMapping(path = "weeks", method = RequestMethod.PUT)
	public List<Result> updateWeek(@RequestBody String weekJSON, HttpServletRequest req, HttpServletResponse res) {
		System.out.println("controller Week PUT");
		System.out.println(weekJSON);
		return dao.setWeekResults(weekJSON);
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
