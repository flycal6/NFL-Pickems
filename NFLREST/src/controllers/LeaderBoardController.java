package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.leaderBoardDAO;
import entities.User;

@RestController
@RequestMapping("/leaderBoard")
public class LeaderBoardController {
	
	@Autowired
	leaderBoardDAO lbd;
	
	@RequestMapping(path = "/leaderBoard/{wid}", method = RequestMethod.GET)
	public List<User> indexWeekLeaders(@PathVariable int wid){
		return lbd.indexWeekLeaders(wid);
	}

}
