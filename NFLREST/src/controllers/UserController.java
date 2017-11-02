package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.UserDAO;

@RestController
public class UserController {
	
	@Autowired
	private UserDAO udao;
	
	@RequestMapping(path="users/{uid}/leagues/{lid}", method=RequestMethod.POST)
	public Boolean joinLeague(@PathVariable int uid, @PathVariable  int lid, HttpServletRequest req, HttpServletResponse res) {
		return udao.userJoinLeague(uid, lid);
	}

}
