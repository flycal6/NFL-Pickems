package data;

import java.util.List;

import entities.League;
import entities.User;

public interface UserDAO {
	
	public List<User> indexUser(int lid);
	
	public User showUser(int uid);
	
	public User updateUser(int uid, String todoJson);
	
	public Boolean destroyUser(int uid);
	 
	
}
