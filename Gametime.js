var room = HBInit({
  roomName: "HaxCOL official ROOM",
  maxPlayers: 14,
  noPlayer: true // Remove host player (recommended!)
});
room.setDefaultStadium("Big");
room.setScoreLimit(0);
room.setTimeLimit(7);

var commands = {

}

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  var players = room.getPlayerList();
  if (players.length == 0) return; // No players left, do nothing.
  if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

room.onPlayerJoin = function (player) {
  updateAdmins();
}

room.onPlayerLeave = function (player) {
  updateAdmins();
}

room.onPlayerChat = function (player, message) {
  switch (message) {
    // camisetas
    // juggernauts
    case "jug/titular/red":
      room.setTeamColors(1, 0, 0x00FFEE, [0x04042C]);
      break;
    case "jug/titular/blue":
      room.setTeamColors(2, 0, 0x00FFEE, [0x04042C]);
      break;
    case "jug/alternativa/red":
      room.setTeamColors(1, 0, 0x04042C, [0xFFFFFF]);
      break;
    case "jug/alternativa/blue":
      room.setTeamColors(2, 0, 0x04042C, [0xFFFFFF]);
      break;
    // dojo
    case "doj/titular/red":
      room.setTeamColors(1, 208, 0xC2C2CC, [0x263238, 0x161E21, 0x263238]);
      break;
    case "doj/titular/blue":
      room.setTeamColors(2, 208, 0xC2C2CC, [0x263238, 0x161E21, 0x263238]);
      break;
    case "doj/alternativa/red":
      room.setTeamColors(1, 208, 0x263238, [0xE8F5E9, 0xD2DED3, 0xE8F5E9]);
      break;
    case "doj/alternativa/blue":
      room.setTeamColors(2, 208, 0x263238, [0xE8F5E9, 0xD2DED3, 0xE8F5E9]);
      break;
    // kraken
    case "kra/titular/red":
      room.setTeamColors(1, 60, 0x000000, [0xFFFFFF, 0xBFC754, 0xFFFFFF]);
      break;
    case "kra/titular/blue":
      room.setTeamColors(2, 60, 0x000000, [0xFFFFFF, 0xBFC754, 0xFFFFFF]);
      break;
    case "kra/alternativa/red":
      room.setTeamColors(1, 90, 0x000000, [0xAB0E38]);
      break;
    case "doj/alternativa/blue":
      room.setTeamColors(2, 90, 0x000000, [0xAB0E38]);
      break;
    // Lions
    case "lio/titular/red":
      room.setTeamColors(1, 60, 0xFF1F1F, [0x003478, 0x004E91, 0x003478]);
      break;
    case "lio/titular/blue":
      room.setTeamColors(2, 60, 0xFF1F1F, [0x003478, 0x004E91, 0x003478]);
      break;
    case "lio/alternativa/red":
      room.setTeamColors(1, 0, 0xFF0000, [0x002D59, 0xFFFFFF, 0xFFFFFF]);
      break;
    case "lio/alternativa/blue":
      room.setTeamColors(2, 0, 0xFF0000, [0x002D59, 0xFFFFFF, 0xFFFFFF]);
      break;
    // Furious
    case "fur/titular/red":
      room.setTeamColors(1, 90, 0x5CFFFF, [0x682970]);
      break;
    case "fur/titular/blue":
      room.setTeamColors(2, 90, 0x5CFFFF, [0x682970]);
      break;
    case "fur/alternativa/red":
      room.setTeamColors(1, 90, 0x682970, [0xFFFFFF]);
      break;
    case "fur/alternativa/blue":
      room.setTeamColors(2, 90, 0x682970, [0xFFFFFF]);
      break;
    // Devils
    case "lio/titular/red":
      room.setTeamColors(1, 90, 0xFFFFFF, [0xFF0000, 0xFF0000, 0x000000]);
      break;
    case "lio/titular/blue":
      room.setTeamColors(2, 90, 0xFFFFFF, [0xFF0000, 0xFF0000, 0x000000]);
      break;
    case "lio/alternativa/red":
      room.setTeamColors(1, 90, 0xFFCC26, [0x000000, 0x000000, 0xFFFFFF]);
      break;
    case "lio/alternativa/blue":
      room.setTeamColors(2, 90, 0xFFCC26, [0x000000, 0x000000, 0xFFFFFF]);
      break;
    default:
      break;
    // code block
  }
  let spacePos = message.search(" ");
  let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
  if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
  if (message.indexOf("!") == 0) return false;
}