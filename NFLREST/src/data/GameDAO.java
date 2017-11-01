package data;

import java.util.List;

import entities.Game;

public interface GameDAO {
	
	public List<Game> index(int id);

	public Game showGame(int id, int gid);
	
	public Game createGame(int wid, String todoJson);
	
	
}
