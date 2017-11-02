package data;

import java.util.Set;

import entities.League;

public interface LeagueDAO {
	
	public Set<League> index();

	public League showLeague(int uid, int id);
	
	public League createLeague(int uid, String todoJson);
	
	public League updateLeague(int uid, int lid, String todoJson);
	
	public Boolean destroyLeague(int uid, int tid);
	
	
}