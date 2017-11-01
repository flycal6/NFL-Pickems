package test;

import static org.junit.Assert.*;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Game;
import entities.League;
import entities.Pick;
import entities.Team;
import entities.User;
import entities.Week;

public class association_test {
	private EntityManagerFactory emf = null;
	private EntityManager em = null;

	@Before
	public void setUp() {
		emf = Persistence.createEntityManagerFactory("NFL");
		em = emf.createEntityManager();
	}

	@After
	public void tearDown() {
		em.close();
		emf.close();
	}

	@Test
	public void test_game_week_association() {
		Game game = em.find(Game.class, 1);
		Week week = game.getWeek();
		assertEquals(1, week.getId());
	}

	@Test
	public void test_game_team_association() {
		Game game = em.find(Game.class, 1);
		Team team = game.getHome();
		assertEquals("Cardinals", team.getName());
	}

	@Test
	public void test_league_association() {
		League league = em.find(League.class, 1);
		assertEquals("test league", league.getName());
	}

	@Test
	public void test_pick_team_association() {
		Pick pick = em.find(Pick.class, 1);
		Team team = pick.getTeam();
		assertEquals("Cardinals", team.getName());
	}

	@Test
	public void test_pick_game_association() {
		Pick pick = em.find(Pick.class, 1);
		Game game = pick.getGame();
		assertEquals(1, game.getId());
	}

	@Test
	public void test_user_pick_association() {
		User user = em.find(User.class, 1);
		Pick pick = user.getPicks().get(0);
		assertEquals("Arizona", pick.getTeam().getCity());
	}

	@Test
	public void test_week_association() {
		Week week = em.find(Week.class, 1);
		assertEquals(1, week.getId());
	}
	@Test
	public void test_league_user_association() {
		League league = em.find(League.class, 1);
		List<User> users = league.getUsers();
		users.add(em.find(User.class, 1));
		assertEquals("Bobbers", users.get(0).getlName());
		assertFalse("aiuefhswivb" == users.get(0).getlName());
	}
}