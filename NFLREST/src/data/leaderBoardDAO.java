package data;

import java.util.List;
import java.util.Map;

import entities.User;

public interface leaderBoardDAO {
	
	public List<User> indexWeekLeaders(int wid);
	
	public User showSeasonLeader();
	
	public Map<Integer, Map<Integer, Integer>> calcWeek();
	
	public Map<String, Object> calcSeason(int uid);


}
