package data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Game;
import entities.Team;
import entities.Week;

@Transactional
@Repository
public class WeekDAOImpl implements WeekDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Week> indexWeek() {
		String query = "SELECT w FROM Week w";
		List<Week> weeks = em.createQuery(query, Week.class).getResultList();
		return weeks;
	}

	@Override
	public Week showWeek(int id) {
		String query = "SELECT w FROM Week w WHERE w.id = :id";
		Week week = em.createQuery(query, Week.class).setParameter("id", id).getSingleResult();
		return week;
	}

	@Override
	public Week createWeek(String weekJSON) {
		System.out.println("in weekdaoimpl");
		System.out.println(weekJSON);
		
		ObjectMapper om = new ObjectMapper();
		Week week = new Week();
		try {
			DTOGame g = om.readValue(weekJSON, DTOGame.class);
			List<Game> games = new ArrayList<>();
			
//			week = em.find(Week.class, g.getWeeks().get(0).getWeek());
			
			String gw = "SELECT w FROM Week w";
			List<Week> weeks = em.createQuery(gw, Week.class).getResultList();
			int lastWeek = weeks.size() - 1;
			int lastGameWeek = weeks.get(lastWeek).getGameWeek();
			
			if(lastGameWeek > 16) {
				lastGameWeek = 1;
				week.setGameWeek(lastGameWeek);					
			}
			else {
				lastGameWeek ++;
				week.setGameWeek(lastGameWeek);					
			}
			
			em.persist(week);
			em.flush();
			
			for(DTOWeek dtow : g.getWeeks()) {
				System.out.println("em week: " + week);
				String q = "SELECT t FROM Team t WHERE t.abbr = :abbr"; 
				Team home = em.createQuery(q, Team.class)
							.setParameter("abbr", dtow.getHome())
							.getResultList().get(0);
				
				Team away = em.createQuery(q, Team.class)
							.setParameter("abbr", dtow.getAway())
							.getResultList().get(0);
				
				Game game = new Game();
				game.setAway(away);
				game.setHome(home);
				game.setWeek(week);
				em.persist(game);
				games.add(game);

				
			}
			em.flush();
			week.setGames(games);
			System.out.println("5");
			System.out.println(week.getGames().size() + "games in week");
//			throw new Exception("new exception");
			return week;
		}
		catch(Exception e){
			e.printStackTrace();
			System.out.println("exception*******");
		}
		return null;
	}

	@Override
	public Week updateWeek(String weekJSON) {
		String q = "SELECT w FROM Week w WHERE w.id = (SELECT MAX(w.id) FROM w)";
		
		Week w = em.createQuery(q, Week.class).getResultList().get(0);
		System.out.println("week id: " + w);
		return null;
	}
	
	
	
}
