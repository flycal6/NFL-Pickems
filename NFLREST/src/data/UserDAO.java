package data;

import java.util.List;

import entities.League;
import entities.User;

public interface UserDAO {
	
	public User showUser(int uid);
	
	public User updateUser(int uid, String todoJson);
	
	public Boolean destroyUser(int uid);
	
	public League joinLeague(User u);
	
	public List<League> leagueIndex(); //Show available leagues
	
	
}
