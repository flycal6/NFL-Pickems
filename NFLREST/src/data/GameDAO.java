package data;

import java.util.List;

import entities.Game;

public interface GameDAO {
	
	public List<Game> indexGame(int id);

	public Game showGame(int id, int gid);
	
	public Game createGame(int wid, String todoJson);
	
	public Game createGame(String gameJSON);
	 
}
