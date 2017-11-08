package data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Pick;
import entities.User;
import entities.Week;

@Repository
@Transactional
public class leaderBoardDAOImpl implements leaderBoardDAO {

	@PersistenceContext
	private EntityManager em;


	@Override
	public User showSeasonLeader(){
		// TODO Auto-generated method stub
		return null;
	}

	@Override
    public Map<Integer, Map<Integer, Integer>> calcWeek() {
		String qUser = "SELECT u FROM User u";
		List<User> users = em.createQuery(qUser, User.class).getResultList();
		
		String qWeek = "SELECT w FROM Week w";
		List<Week> weeks = em.createQuery(qWeek, Week.class).getResultList();
		
		String qPick = "SELECT p FROM Pick p WHERE p.correct = 'true' AND p.game.week.id = :wid AND p.user.id = :uid";

		Map<Integer, Map<Integer, Integer>> userWeekPick = new HashMap<>();
		
		for (User user : users) {
			Map<Integer, Integer> weekPick = new HashMap<>();
			userWeekPick.put(user.getId(), weekPick);
			
			for (Week week : weeks) {
				Integer picks = em.createQuery(qPick, Pick.class)
				.setParameter("wid", week.getId())
				.setParameter("uid", user.getId())
				.getResultList().size();
				
				weekPick.put(week.getId(), picks);
			}
		}

        System.out.println("correct picks: " + userWeekPick);
//        if (query.equals("true")) {
//            numCorrect++;
//        }
        return userWeekPick;
    }

	@Override
    public Map<String, Object> calcSeason(int uid) {
//        String query = "SELECT count(p) FROM Pick WHERE p.isCorrect = 'true' AND p.user.id = :id";    
//        Integer picks = em.createQuery(query, Integer.class)
//                            .setParameter("id", uid)
//                            .executeUpdate();
//        HashMap<String, Object> results = new HashMap<>(); 
//        results.put("user", em.find(User.class, uid));
//        results.put("numCorrect", picks);
        
        return null;
    }

	@Override
	public List<User> indexWeekLeaders(int wid) {
		// TODO Auto-generated method stub
		return null;
	}

}
