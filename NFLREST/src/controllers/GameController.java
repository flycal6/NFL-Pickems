package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.GameDAO;
import entities.Game;

@RestController
public class GameController {
	
	@Autowired
	GameDAO dao;
	
	@RequestMapping(path="ping", method=RequestMethod.GET)
	public String ping(){
	  return "pong";
	}
	
	@RequestMapping(path = "weeks/{wid}/game", method = RequestMethod.GET)
	public List<Game> indexGame(@PathVariable int wid) {
		return dao.indexGame(wid);
	}
	
	@RequestMapping(path = "weeks/{wid}/game/{gid}", method = RequestMethod.GET)
	public Game showGame(@PathVariable int wid, @PathVariable int gid ) {
		return dao.showGame(wid, gid);
	}
}
