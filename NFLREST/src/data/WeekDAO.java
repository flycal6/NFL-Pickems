package data;

import java.util.List;

import entities.Result;
import entities.Week;

public interface WeekDAO {

	public List<Week> indexWeek();

	public Week showWeek(int wid);

	public Week createWeek(String weekJSON);

	public List<Result> setWeekResults(String weekJSON);
}
