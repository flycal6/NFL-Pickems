package data;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.League;
import entities.User;

@Transactional
public class LeagueDAOImpl implements LeagueDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<League> index(int uid) {
		String query = "SELECT l FROM League l WHERE l.user.id = :uid ";
		List<League> leagues = em.createQuery(query, League.class).setParameter("uid", uid).getResultList();
		return leagues;
	}

	@Override
	public League showLeague(int uid, int lid) {
		String query = "SELECT l FROM League l WHERE l.user.id = :uid AND l.id = :lid";
		League league = em.createQuery(query, League.class).setParameter("uid", uid).setParameter("tid", lid)
				.getResultList().get(0);
		return league;
	}

	@Override
	public League createLeague(int uid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
		League league = null;
		try {
			league = mapper.readValue(todoJson, League.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		User user = em.find(User.class, uid);
		league.getUsers().add(user);
		em.persist(league);
		em.flush();
		return league;
	}

	@Override
	public League updateLeague(int uid, int lid, String todoJson) {
		User user = em.find(User.class, uid);
		League managedLeague = em.find(League.class, lid);
		League league = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			  league = mapper.readValue(todoJson, League.class);
			} catch (Exception e) {
			  e.printStackTrace();
			}
		
		managedLeague.setIsPublic(league.getIsPublic());
		managedLeague.setName(league.getName());
		managedLeague.setCost(league.getCost());
		managedLeague.setUsers(league.getUsers());
		
		return managedLeague;
	}

	@Override
	public Boolean destroyLeague(int uid, int lid) {
		User user = em.find(User.class, uid);
		League league = em.find(League.class, lid);
		try {
			em.remove(league);
			List<League> userLeagues = user.getLeagues();
			for (League l : userLeagues) {
				if (l.getId() == lid) {
					userLeagues.remove(l);
					break;
				}
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
