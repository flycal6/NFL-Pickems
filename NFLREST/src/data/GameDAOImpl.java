package data;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Game;
import entities.Week;

public class GameDAOImpl implements GameDAO{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Game> index(int id) {
		String query = "SELECT g FROM Game g WHERE g.week.id = :id ";
		List<Game> games = em.createQuery(query, Game.class).setParameter("id", id).getResultList();
		return games;
	}

	@Override
	public Game showGame(int wid, int gid) {
		String query = "SELECT g FROM Game g WHERE g.week.id = :id AND g.id = :gid";
		Game game = em.createQuery(query, Game.class).setParameter("wid", wid).setParameter("gid", gid).getResultList()
				.get(0);
		return game;
	}

	@Override
	public Game createGame(int wid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
		Game game = null;
		try {
			game = mapper.readValue(todoJson, Game.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Week week = em.find(Week.class, wid);
		game.setWeek(week);
		em.persist(game);
		em.flush();
		return game;
	}

}
