package controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.AuthDAO;
import entities.User;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private AuthDAO authDao;

	@RequestMapping(path = "/register", method = RequestMethod.POST)
	public User register(HttpSession session, @RequestBody User user, HttpServletResponse res) {
		System.out.println("controller: " + user);
		User u = authDao.register(user);
		
		if(u != null) {
			session.setAttribute("user", u);
			res.setStatus(201);
			return u;
		}
		res.setStatus(422);
		return null;
	}

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public User login(HttpSession session, @RequestBody User user, HttpServletResponse res) {
		// TODO : Authenticate user object, place the user in session, return the user
		User u = authDao.login(user);
		if(u != null) {
			session.setAttribute("user", u);
			res.setStatus(200);
			return u;
		}
		res.setStatus(401);
		return null;
	}

	@RequestMapping(path = "/logout", method = RequestMethod.POST)
	public Boolean logout(HttpSession session, HttpServletResponse response) {
		// TODO : Remove the "user" session, if successfully removed, return true
		session.removeAttribute("user");
		if(session.getAttribute("user") == null) {
			return true;
		}
		return false;
	}

	@RequestMapping(path = "/unauthorized")
	public String unauth(HttpServletResponse response) {
		response.setStatus(401);
		return "unauthorized";
	}
}
