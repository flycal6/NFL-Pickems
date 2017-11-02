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
import entities.Pick;
import entities.User;


@Transactional
public class PickDAOImpl implements PickDAO{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Pick> indexPick(int uid) {
		String query = "SELECT p FROM Pick p WHERE p.user.id = :uid ";
		List<Pick> picks = em.createQuery(query, Pick.class).setParameter("uid", uid).getResultList();
		return picks;
	}

	@Override
	public Pick showPick(int uid, int pid) {
		String query = "SELECT p FROM Pick p WHERE p.user.id = :uid AND p.id = :pid";
		League league = em.createQuery(query, League.class).setParameter("uid", uid).setParameter("pid", pid)
				.getResultList().get(0);
		return null;
	}

	@Override
	public Pick createPick(int uid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
		Pick pick = null;
		try {
			pick = mapper.readValue(todoJson, Pick.class);
		} catch (JsonParseException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		User user = em.find(User.class, uid);
		pick.setUser(user);
//		pick.getUsers().add(user);
		em.persist(pick);
		em.flush();
		return pick;
	}

}
