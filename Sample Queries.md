## Sample Data Queries

Game JSON
http://www.nfl.com/liveupdate/game-center/2012020500/2012020500_gtd.json

Current Week's scores:
http://www.nfl.com/liveupdate/scores/scores.json

Alternative Week's Scores JSON
https://feeds.nfl.com/feeds-rs/scores.json

Season Schedule
https://feeds.nfl.com/feeds-rs/schedules.json

Big Play Videos
https://feeds.nfl.com/feeds-rs/bigPlayVideos.json

Current week (xml):
http://www.nfl.com/liveupdate/scorestrip/ss.xml

Arbitrary weeks (xml):
http://www.nfl.com/ajax/scorestrip?season=%d&seasonType=%s&week=%d

seasonType can be PRE, REG, or POST. For reg or post, weeks go 1-22 (18 is WC, 19 Div, 20 Conf Championship, 21 is blank, 22 is SB). For pre, 0-4 IIRC.



You can plug in one of those eid values from the XML into the json link. So if you wanted the stats from a game, you could open the XML file, find the EID of the game in question, then run the query against the game center json feed and find data for a specific game that way.

The "better way" is to pre-cache all the schedule data and then look up the eid however best suits you.




Also you can use the date from this JSON to build the request for the player data. Data is only shown for the dates that there are games so only use days when games are played. For example today is before the upcoming Pro Bowl so it is set to 2017012900 for the gamein the score JSON. However you can only see player data from last Sunday.

http://www.nfl.com/liveupdate/game-center/2017012200/2017012200_gtd.json
