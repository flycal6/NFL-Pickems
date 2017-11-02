package data;

import java.util.List;

import javax.servlet.http.HttpSession;

import entities.User;

public interface UserDAO {
	
	public List<User> indexUser(int lid);
	
	public User showUser(int uid);
	
	public User updateUser(int uid, String todoJson);
	
	public Boolean destroyUser(int uid);

	public Boolean userJoinLeague(int uid, int lid);
	 
	
}
