package data;

import java.util.List;

import entities.Game;

public interface GameDAO {
	
	public List<Game> index(int id);

	public Game showGame(int id);
	
	public Game createGame(Game game);
	
	
}
