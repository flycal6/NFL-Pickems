package entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	@JoinColumn(name="id")
	private Team home;
	
	@OneToOne
	@JoinColumn(name="id")
	private Team away;
	
	@OneToOne
	@JoinColumn(name="id")
	private Week week;
	
	

	public Team getHome() {
		return home;
	}

	public void setHome(Team home) {
		this.home = home;
	}

	public Team getAway() {
		return away;
	}

	public void setAway(Team away) {
		this.away = away;
	}

	public Week getWeek() {
		return week;
	}

	public void setWeek(Week week) {
		this.week = week;
	}

	public int getId() {
		return id;
	}

	public Game(int id, Team home, Team away, Week week) {
		super();
		this.id = id;
		this.home = home;
		this.away = away;
		this.week = week;
	}

	public Game() {
		super();
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", home=" + home + ", away=" + away + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((away == null) ? 0 : away.hashCode());
		result = prime * result + ((home == null) ? 0 : home.hashCode());
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (away == null) {
			if (other.away != null)
				return false;
		} else if (!away.equals(other.away))
			return false;
		if (home == null) {
			if (other.home != null)
				return false;
		} else if (!home.equals(other.home))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
}

