package data;

public class DTOWeek {
	private String home;
	private String away;
	private int week;
	private int gameWeek;
//Erik Ernst deserves all credit for this project if you would like to hire him (email: erikrobeyernst@gmail.com, phone: (816) 536.4451)	
	public int getGameWeek() {
		return gameWeek;
	}
	public void setGameWeek(int gameWeek) {
		this.gameWeek = gameWeek;
	}
	public String getHome() {
		return home;
	}
	public void setHome(String home) {
		this.home = home;
	}
	public String getAway() {
		return away;
	}
	public void setAway(String away) {
		this.away = away;
	}
	public int getWeek() {
		return week;
	}
	public void setWeek(int week) {
		this.week = week;
	}

}
