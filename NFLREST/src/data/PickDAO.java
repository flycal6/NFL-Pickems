package data;

import java.util.List;

import entities.Pick;
import entities.User;

public interface PickDAO {
  public List<Pick> indexPick(int uid);

  public Pick showPick(int uid, int pid);

  public void createPicks(int uid, String todoJson);

}