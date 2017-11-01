package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Result {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	@JoinColumn(name = "id")
	private Game game;
	
	private int homeScore;
	
	private int awayScore;

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public int getHomeScore() {
		return homeScore;
	}

	public void setHomeScore(int homeScore) {
		this.homeScore = homeScore;
	}

	public int getAwayScore() {
		return awayScore;
	}

	public void setAwayScore(int awayScore) {
		this.awayScore = awayScore;
	}

	public int getId() {
		return id;
	}

	public Result(int id, Game game, int homeScore, int awayScore) {
		super();
		this.id = id;
		this.game = game;
		this.homeScore = homeScore;
		this.awayScore = awayScore;
	}

	public Result() {
		super();
	}

	@Override
	public String toString() {
		return "Result [id=" + id + ", game=" + game + ", homeScore=" + homeScore + ", awayScore=" + awayScore + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + awayScore;
		result = prime * result + ((game == null) ? 0 : game.hashCode());
		result = prime * result + homeScore;
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
		Result other = (Result) obj;
		if (awayScore != other.awayScore)
			return false;
		if (game == null) {
			if (other.game != null)
				return false;
		} else if (!game.equals(other.game))
			return false;
		if (homeScore != other.homeScore)
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	

}
