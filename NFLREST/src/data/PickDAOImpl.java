package data;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dto.CardDTO;
import dto.PickDTO;
import entities.Game;
import entities.League;
import entities.Pick;
import entities.Team;
import entities.User;

@Transactional
@Repository
public class PickDAOImpl implements PickDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Pick> indexPick(int uid) {
		String query = "SELECT p FROM Pick p WHERE p.user.id = :uid ";
		List<Pick> picks = em.createQuery(query, Pick.class).setParameter("uid", uid).getResultList();

//		System.out.println(picks.get(0));
		return picks;
	}

	@Override
	public Pick showPick(int uid, int pid) {
		String query = "SELECT p FROM Pick p WHERE p.user.id = :uid AND p.id = :pid";
		Pick pick = em.createQuery(query, Pick.class).setParameter("uid", uid).setParameter("pid", pid).getResultList()
				.get(0);
		return pick;
	}

	@Override
	public void createPicks(int uid, String todoJson) {
		List<Pick> picksToDelete = indexPick(uid);
		if(picksToDelete.size() > 0) {
			deleteUserWeekPicks(picksToDelete);			
		}
		
		ObjectMapper mapper = new ObjectMapper();
		try {
			CardDTO cdto = mapper.readValue(todoJson, CardDTO.class);
			for(PickDTO pdto : cdto.getPicks()) {
				Pick p = new Pick();
				p.setUser(em.find(User.class, uid));
				Team t = em.find(Team.class, pdto.getTeamId());
				p.setTeam(t);
				Game g = em.find(Game.class, pdto.getGameId());
				p.setGame(g);
				em.persist(p);
				
			}
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		em.flush();
	}

	private void deleteUserWeekPicks(List<Pick> picks) {
		for (Pick pick : picks) {
			em.remove(pick);
		}
	}
}
