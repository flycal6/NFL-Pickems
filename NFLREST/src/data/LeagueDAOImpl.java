package data;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.League;
import entities.User;

@Repository
@Transactional
public class LeagueDAOImpl implements LeagueDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Set<League> index() {
		String query = "SELECT l FROM League l";
		return new HashSet<League>( em.createQuery(query, League.class).getResultList());
		
	}

	@Override
	public League showLeague(int lid) {
		String query = "SELECT l FROM League l WHERE l.id = :lid";
		League league = em.createQuery(query, League.class).setParameter("lid", lid)
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
