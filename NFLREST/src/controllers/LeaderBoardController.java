package controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.leaderBoardDAO;

@RestController
@RequestMapping("/leaderboard")
public class LeaderBoardController {
	
	@Autowired
	leaderBoardDAO lbd;
	
//	@RequestMapping(path = "/leaderBoard/{wid}", method = RequestMethod.GET)
//	public List<User> indexWeekLeaders(@PathVariable int wid){
//		return lbd.indexWeekLeaders(wid);
//	}
	
	// hit from week.service.js
	@RequestMapping(path = "/league", method = RequestMethod.GET)
	public Map<Integer, Map<Integer, Integer>> indexWeekLeaders(){
		return lbd.calcWeek();
	}
	
	

}
