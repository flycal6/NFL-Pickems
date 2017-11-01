package data;

import java.util.List;

import entities.League;
import entities.User;

public interface LeagueDAO {
	
	public List<League> index(int uid);

	public League showLeague(int uid, int id);
	
	public League createLeague(int uid, String todoJson);
	
	public League updateLeague(int uid, int lid, String todoJson);
	
	public Boolean destroyLeague(int uid, int tid);
	
	
}