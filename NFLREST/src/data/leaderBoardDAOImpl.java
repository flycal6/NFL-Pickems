package data;

import java.util.List;

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
	public int calcWeek(List<Pick> picks, User uid, Week wid) {
		int numCorrect = 0;
		String query = "SELECT p FROM Pick WHERE p.isCorrect = 'true' AND p.user.id = :id AND p.week.id = :wid";
		Pick pick = em.createQuery(query, Pick.class).setParameter("isCorrect", numCorrect).getResultList()
				.get(0);
		if (query.equals("true")) {
			numCorrect++;
		}
		return numCorrect;
	}

	@Override
	public int calcSeason(List<Pick> picks, User uid) {
		int totalCorrect = 0;
		String query = "SELECT p FROM Pick WHERE p.isCorrect = 'true' AND p.user.id = :id";	
		Pick pick = em.createQuery(query, Pick.class).setParameter("isCorrect", totalCorrect).getResultList()
				.get(0);
		if (query.equals("true")) {
			totalCorrect++;
		}

		return totalCorrect;
	}

	@Override
	public List<User> indexWeekLeaders(int wid) {
		// TODO Auto-generated method stub
		return null;
	}

}
