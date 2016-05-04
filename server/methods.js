Meteor.methods({
  addTable() {
    let tableId = Tables.insert({ name: Tables.defaultName, story: null });
    return tableId;
  },
  setTableName(tableId, name, story = null) {
    check(tableId, String);
    check(name, String);
    check(story, Match.Maybe(String));
    if (!getCurrentPlayer(tableId)) {
      throw new Meteor.Error('not-authorized');
    }
    Tables.update(tableId, { $set: { name: name, story: story } });
  },
  getCurrentPlayer(tableId) {
    return Players.findOne({ tableId: tableId, userId: Meteor.userId() })
  },
  addPlayer(tableId, name) {
    check(tableId, String);
    check(name, String);

    let player = Players.findOne({
      userId: Meteor.userId(),
      tableId: tableId
    });

    if (!player) {
      let playerId = Players.insert({
        userId: Meteor.userId(),
        tableId: tableId,
        name: name,
        vote: null
      });
      player = Players.findOne(playerId);
    }

    return player;
  },
  deletePlayer(tableId) {
    check(tableId, String);
    Players.remove({
      userId: Meteor.userId(),
      tableId: tableId
    });
  },
  setVote(tableId, vote) {
    check(tableId, String);
    check(vote, Number);
    let player = Players.findOne({
      userId: Meteor.userId(),
      tableId: tableId
    });
    if (player) {
      Players.update(player._id, { $set: { vote: vote } });
    }
  },
  clearVote(tableId) {
    check(tableId, String);
    if (!getCurrentPlayer(tableId)) {
      throw new Meteor.Error('not-authorized');
    }
    Players.update({ tableId: tableId }, { $set: { vote: null } });
  }
});
