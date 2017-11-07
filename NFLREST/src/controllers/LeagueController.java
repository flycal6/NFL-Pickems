package controllers;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.LeagueDAO;
import entities.League;

@RestController
@RequestMapping(path="/leagues")
public class LeagueController {
	
	@Autowired
	private LeagueDAO lDao;
	
	@RequestMapping(path = "/ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path="/", method=RequestMethod.GET)
    public Set<League> index(HttpServletRequest req, HttpServletResponse res) {
		return lDao.index();
	}
	
	@RequestMapping(path="/{uid}", method=RequestMethod.POST)
    public League createLeague(@PathVariable int uid, @RequestBody String todoJson) {
    return lDao.createLeague(uid, todoJson);    
    }
	

	@RequestMapping(path="/{lid}/{uid}", method=RequestMethod.GET)
	public League showLeague(@PathVariable int lid, @PathVariable int uid, HttpServletRequest req, HttpServletResponse res) {
		System.out.println("lid: " + lid + ", uid: " + uid);
		return lDao.showLeague(lid, uid);
	}
	

}
