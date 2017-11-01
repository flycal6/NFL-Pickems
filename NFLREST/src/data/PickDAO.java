package data;

import java.util.List;

import entities.Pick;
import entities.User;

public interface PickDAO {
  public List<Pick> indexPick(User user);

  public Pick showPick(User user, int id);

  public Pick createPick(User user, Pick pick, String todoJson);

}