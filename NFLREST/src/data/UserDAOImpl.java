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
public class UserDAOImpl implements UserDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<User> indexUser(int lid) {
		String query = "SELECT u FROM User u WHERE u.league.id = :lid ";
		List<User> users = em.createQuery(query, User.class).setParameter("lid", lid).getResultList();
		return users;
	}
	
	@Override
	public User showUser(int uid) {
		String query = "SELECT u FROM User u WHERE u.id = :uid";
		User user = em.createQuery(query, User.class).setParameter("uid", uid).getSingleResult();
		return user;
	}

	@Override
	public User updateUser(int uid, String todoJson) {
//		User user = em.find(User.class, uid);
		User managedUser = em.find(User.class, uid);
		User user = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			  user = mapper.readValue(todoJson, User.class);
			} catch (Exception e) {
			  e.printStackTrace();
			}
		
		managedUser.setfName(user.getfName());
		managedUser.setlName(user.getlName());
		managedUser.setEmail(user.getEmail());
		managedUser.setPassword(user.getPassword());
		managedUser.setPoints(user.getPoints());
		managedUser.setPicks(user.getPicks());
		managedUser.setLeagues(user.getLeagues());
		
		return managedUser;
	}

	@Override
	public Boolean destroyUser(int uid) {
		User user = em.find(User.class, uid);
		try {
			em.remove(user);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}