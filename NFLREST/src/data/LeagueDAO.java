package data;

import java.util.List;

import entities.League;
import entities.User;

public interface LeagueDAO {
	
	public List<League> index(User user, int uid);

	public League showLeague(User user, int id);
	
	public League createLeague(User user, League league, String todoJson);
	
	public League updateLeague(User user, int lid, String todoJson);
	
	public Boolean destroyLeague(User user, League league);
	
	
}