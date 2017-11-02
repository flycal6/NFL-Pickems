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
	
	
	
}
