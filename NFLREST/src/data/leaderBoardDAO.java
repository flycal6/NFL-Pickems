package data;

import java.util.List;

import entities.Pick;
import entities.User;
import entities.Week;

public interface leaderBoardDAO {
	
	public List<User> indexWeekLeaders(int wid);
	
	public User showSeasonLeader();
	
	public int calcWeek(List<Pick> picks, User uid, Week wid);
	
	public int calcSeason(List<Pick> picks, User uid);


}
