/* ROOM */
var roomName = "Minnesota Gophers DOMO";
var maxPlayers = 16;
var roomPublic = false;
var playerName = "GopherBOT";
var stadiumWidth = 1150;
var stadiumHeight = 600;
var radiusBall = 10;
var throwInLeeway = 350;
var greenLine = 510;
/* SETTINGS */
var triggerDistance = radiusBall + 15 + 0.001;
var outLineY = stadiumWidth - (radiusBall / 2) + 6;
stadiumWidth += (radiusBall / 2) + 6;
stadiumHeight += (radiusBall / 2) + 6;
var Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var lastScores = 0;
var lastTeamTouched = 0;
var lineBallPosition;
var exitingPos = null;
var previousBallPos;
var assistingTouch = "";
var lastPlayerTouched = "";
var lat = 4.5;
var long = -74.2;
var backMSG = false;
var lastCall;
var isBallUp = false;
var crossed = false;
var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var lineCrossedPlayers = [{ name: "temp", times: 0 }];
var isBallKickedOutside = false;
var previousPlayerTouched;
var timeOutside = 0;
geo = { "code": "co", "lat": 4.5, "lon": -74.2 };
var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: playerName, token: "thr1.AAAAAFyRjgZMy18R2w9YjQ.-FYMqQV18YE", geo });

room.setDefaultStadium("Big");
room.setScoreLimit(0);
room.setTimeLimit(7);
room.setTeamsLock(true);
room.setTeamColors(1, 60, 0xFFFFFF, [0xff6961, 0xff6961, 0xff6961]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x5681f5, 0x5681f5, 0x5681f5]);



function clonekick(player) {
    players = room.getPlayerList();
    for (i = 0; i < players.length - 1; i++) {
        if (player.name == players[i].name) {
            room.kickPlayer(player.id, "Ya existe un jugador en la room con tu nombre.", false);
        }
    }
}
var boldedNumbers = '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗';
var circledNumbers = '🄋⓵⓶⓷⓸⓹⓺⓻⓼⓽';

function boldedNumber(num) {
    var result = '';
    var reversedDigits = [];

    do {
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);

    for (var i = reversedDigits.length; i-- > 0;) {
        result += boldedNumbers.substr(reversedDigits[i] * 2, 2);
    }
    return result;
}
function circledNumber(num) {
    var result = '';
    var reversedDigits = [];
    do {
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);
    for (var i = reversedDigits.length; i-- > 0;) {
        if (reversedDigits[i] == 0) {
            result += circledNumbers.substr(reversedDigits[i], 2);
        } else {
            result += circledNumbers.substr(1 + reversedDigits[i], 1);
        }
    }
    return result;
}

/*FUNCIONES*/

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
    // Get all players except the host (id = 0 is always the host)
    var players = room.getPlayerList().filter((player) => player.id != 0);
    if (players.length == 0) { room.stopGame(); } // No players left, do nothing.
    if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
    room.setPlayerAdmin(players[0].id, false); // Give admin to the first non admin player in the list
}
function initPlayerStats(player) {
}
function NumeroUnoFun(player) { // !1
    room.sendAnnouncement('🔢  𝟭         ౹         𝟏          𝟷          𝟣         １         ߗ1𐰯¹₁⥠↿˥⒈         𝟏        𝟷𐰯 І        Ι         Ӏ        ᅵ        𝗹        ।         ⅂        𐐑        ⓵        ①         ➀         ➊          para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroDosFun(player) { // !1
    room.sendAnnouncement('🔢  𝟮        Ƨ        2️⃣        ౽        ੨        ૨        ২        २        ௨        𝟐        ２        2        ᒿ        𝟤        ᒾ        ²        ₂        շ        𝟸        ᘖ        𝟚        Ձ        ⒉        ƻ        Չ        Զ        ϩ        ⓶        ②        ➁        ❷        ㈃        ⒛ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroTresFun(player) { // !1
    room.sendAnnouncement('🔢  Ʒ        3        3️⃣        ३        ੩        ʒ        ӡ        Ӡ        ᴣ        ᶾ        э        Э        ℈        ぅ        う        ㄋ        ȝ        Ȝ        𝟯        𝟥        з        ɜ        ᴈ        ᢃ        ౩        ⓷        ③        ➂        ❸        ੩        ૩        ३ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroCuatroFun(player) { // !1
    room.sendAnnouncement('🔢  𝟰        ㏣        ㍜        𝟒        ４        𝟺        𝟦        4        ₄        ⁴        Ϥ        կ        Կ        Ч        ч        ɥ        ౺        ⒋ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroCincoFun(player) { // !1
    room.sendAnnouncement('🔢  Ƽ        ƽ        𐐠        𐑈        𝟱        𝟓        ５        ㏤        5        ㍝        5️⃣        𝟻        5        ₅        ⁵        ⒌ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroSeisFun(player) { // !1
    room.sendAnnouncement('🔢  𝟲        𝟔        ６        𝟼        ㏥        ㍞        6        𝟨        ₆        ⁶        𝟞        ⒍        ⑥        ⓺        ➅        ➏        ❻        ɓ        ꕃ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroSieteFun(player) { // !1
    room.sendAnnouncement('🔢  ⅂        𐐑        ヿ        ⏋        ⌉        𝟳        𝟕        𝟟        7        𝟽        ７        ⁊        ₇        ⁷        𝟩        7️⃣        ⒎        ꔔ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroOchoFun(player) { // !1
    room.sendAnnouncement('🔢  𝟴        𝟖        8        𝟪        ৪        ⁸        ₈        ８        𐌚        𝟾        ꖉ        ⊟        𝛉        ⒏        ㏧        ㍠        8️⃣ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroNueveFun(player) { // !1
    room.sendAnnouncement('🔢  𝟵        𝟗        9        𝟿        ９        𝟫        ⁹        ₉        ୨        ց        ɡ        ᕤ        ⒐        9        ㏨        ㍡        9️⃣        𝟡        ۹        ٩        ᑫ        ᑴ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}
function NumeroDiezFun(player) { // !1
    room.sendAnnouncement('🔢  ⒑        🔟        ⑩        ➉        ➓        ❿        ю        Ю        ㍢        ㏩        ⑽ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
}

colors = {
    "red": 15729691,
    "green": 10812739,
    "black": 0,
    "transparent": -1,
    "blue": 367351,
    "yellow": 16771089,
    "orange": 16737796,
    "purple": 14886893,
    "white": 16777215,
    "gold": 14140044
};
function bosshaftColor(player, message) {
    if (player.admin == true) {
        let e = message.split(/ +/).slice(1);
        return room.setDiscProperties(0, {
            color: e[0]
        }), !1
    }
}
function bosshaftColorString(player, message) {
    if (player.admin == true) {
        if (message.split(/ +/).length < 2) {
            return bosshaftColorString(player, "!ball transparent")
        }
        let e = message.split(/ +/).slice(1);
        return (colors.hasOwnProperty(e[0].toLowerCase()) ? room.setDiscProperties(0, {
            color: colors[e[0].toLowerCase()]
        }) : room.sendAnnouncement("Ese color no es válido! Los colores que puedes utilizar son: red/blue/green/yellow/orange/black/white/purple/gold/transparent", player.id, 0xc23b22, "bold", 0))
    }
}

function PelotaFun(player) { // !pelota
    if (player.admin == true) {
        room.sendAnnouncement('           ⚠️𝐀𝐓𝐄𝐍𝐂𝐈Ó𝐍: Crash comando !ball arreglando por PANDA.⚠️', player.id, 0xc23b22, "normal", 0);
        room.sendAnnouncement('!ball + red/blue/green/yellow/orange/black/white/purple/gold/transparent (sin el + ni el slash)', player.id, 0xc23b22, "normal", 0);
        room.sendAnnouncement('!customball + color (En decimal) | Página para transformar colores: https://convertingcolors.com/', player.id, 0xc23b22, "normal", 0);
    }
}
/*
for commands
*/
function swapFun(player) {
    if (player.admin == true) {
        if (room.getScores() == null) {
            players = room.getPlayerList();
            for (i = 0; i < players.length; i++) {
                if (players[i].team == 1) {
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2) {
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
        }
    }
}
function specTeamFun(player, message) {
    if (player.admin == true) {
        if (room.getScores() == null) {
            if (message.split(/ +/).length > 1) {
                players = room.getPlayerList()
                let e = "" + message.split(/ +/).slice(1)
                let tm = 0;
                if (e == "red") {
                    tm = 1
                }
                if (e == "blue") {
                    tm = 2
                }
                for (i = players.length - 1; i > 0; i--) {
                    if (players[i].team == tm) {
                        room.setPlayerTeam(players[i].id, 0);
                    }
                }
            }
        }
    }
}
function pushMuteFun(player, message) { // !mute Anddy
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    if (message = "!mute RX") {
        room.sendAnnouncement("No podés hpta!", player.id, 0xcb99c9, 'bold', 0);
        room.sendAnnouncement("@" + playerName + " Está intentando silenciar a RX. Esto es una dictadura papi, aquí no. 🖕 ", null, 0x06ff00, 'bold', 0);
        return false;
    }
    if (player.admin == true) {
        if (!(mutedPlayers.includes(message.substr(6)))) mutedPlayers.push(message.substr(6));
    }
}
function gotMutedFun(player) {
    if (mutedPlayers.includes(player.name)) {
        return true;
    }
}
//==
function unmuteFun(player, message) { // !unmute Anddy
    // Allow somebody to talk if he has been muted
    // need to be admin
    if (player.admin == true) {
        pos = mutedPlayers.indexOf(message.substr(9));
        mutedPlayers.splice(pos, 1);
    }
}
function confirmFun(player, message) { // !confirm aaa
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    let password = message.substr(9);
    let account = accounts.find(a => a.password === password);
    if (account !== undefined) {
        account.playerId = player.id;
        room.sendAnnouncement("[" + player.name + "] " + account.username + " se ha confirmado.", null, 0xa3fcff, "normal", 0);
        confirmedPlayers.add(player.id);
        if (stats.hasOwnProperty(account.username)) { }
        else { stats[account.username] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"]; }
    }
    return false;
}


function chatasbotFun(player, message) {
    messagetext = message.substr(11)
    room.sendChat(messagetext);
    return false;
}

function adminFun(player, message) { // !admin Andis
    // Gives admin to the person who type this password

    room.setPlayerAdmin(player.id, true);
    return false; // The message won't be displayed
}

function resignFun(player, message) {
    room.setPlayerAdmin(player.id, false);
}
function helpFun() { // !help
    room.sendAnnouncement("[💬] Comandos disponibles: | !confirm | !afk | !afks | !confirmed  | !stats Nickname  | !elohelp | !eloranking", null, 0x95d853, 'bold', 0);
    room.sendAnnouncement("| !ranking | !questionsmap | !poss | !adminhelp | !gkhelp | !rankhelp | !bb | !maps | !confirmar", null, 0x95d853, 'bold', 0);
    room.sendAnnouncement("| !pelota | !customball (Color Hexadecimal) | !ball (color en inglés) | !1-9 | !goles | !asistencias | !discord |", null, 0x95d853, 'bold', 0);
}
function mapsFun() { // !maps
    room.sendAnnouncement("[💬] 𝐒𝐎́𝐋𝐎 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍: Elige entre los siguientes mapas: | !medium,  !rs, !pensblue, !pensred y !minirs | !juegos", null, 0xfdfd96, 'bold', 0);
}
function adminHelpFun() {
    room.sendAnnouncement("💬  Comandos disponibles: '!mute Player', '!unmute Player', '!clearbans', '!rr', '!kickafks', '!resign', '!swap' (Para cambiar de lado)", null, 0xD4D400, 'bold', 0);
}
function gkHelpFun() { // !gkhelp
    room.sendAnnouncement('💬  El jugador que se encuentre más atrás será seleccionado como el arquero. Escribe !gk si el bot se equivoca. (NO VÁLIDO PARA ESPECTADORES).', null, 0xfdfd96, "normal", 0)
}
function rankHelpFun() { // !gkhelp
    room.sendAnnouncement("💬  Ten puntos en el host! Gol: 2 pts, Assistencia: 1 pts, Victoria: 3 pts, Vaya invicta: 3 pts, Derrota: -3 pts, Goal en contra: -2 pts..", null, 0xfdfd96, "normal", 0)
}
function eloHelpFun() {
    room.sendAnnouncement("💬 ¡Consigue puntos por ganar partidos! Los puntos se calculan utilizando el sistema ELO.", null, 0xfdfd96, "normal", 0)
}
//STATS//
function statsFun(player, message) {
    if (stats.hasOwnProperty(message.substr(7))) {
        sendStats(message.substr(7));
    } else { return false; }
} let areStatsCounting = false;
let modeToCountStats = 3;
room.onGameStart = function () {
    let players = room.getPlayerList();
    areStatsCounting = players.filter(p => p.team == 1).length == modeToCountStats &&
        players.filter(p => p.team == 2).length == modeToCountStats;
}
//==
function resetStatsAdminFun(player, message) { // !resetpakhome
    playername = message.substr(10);
    stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];
    return false;
}
function clearbansFun(player) { // !clear
    if (player.admin == true) { room.clearBans(); room.sendAnnouncement("💎 Los bans se han borrado.", null, 0xfdfd96, "normal", 0); }
}
function resetFun(player) {
    if (player.admin == true) {
        room.stopGame();
        room.startGame();
    }
} function gkFun(player) { // !gk
    if (room.getScores() != null && room.getScores().time < 60) {
        if (player.team == 1) {
            gk[0] = player;
            room.sendAnnouncement("El nuevo arquero de 𝐑𝐄𝐃 🔴 es: " + gk[0].name)
        }
        else if (player.team == 2) {
            gk[1] = player;
            room.sendAnnouncement("El nuevo arquero de 𝐁𝐋𝐔𝐄 🔵 es:" + gk[1].name)
        }
    }
    return;
}
function closeFun(player) {
    if (player.name == "CRASH DDOS") { // artificially generate an error in order to close the room
        stats.crash();
    }
}
function leaveFun(player) {
    room.kickPlayer(player.id, "Chai bb, te cuidas.", false);
}
/*
For ranking
*/
function rankingCalc(player) {
    var name = player;
    players = Object.keys(stats);
    account = players.find(a => a === name)
    if (account !== undefined) {
        return stats[name][0] * 2 + stats[name][1] * 1 +
            stats[name][2] * 3 + stats[name][5] * 3 -
            stats[name][3] * 3 - stats[name][4] * 2;
    }
    else { return 0; }
}
function ranking() {
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = rankingCalc(players[i])
        // Gol: 2 pts, Asistencia: 1 pts, Victoria: 3 pts, Valla Invicta: 3 pts, Derrota: -3 pts, Gol en Contra: -2 pts
        overall.push({ name: players[i], value: score });
    }
    overall.sort(function (a, b) {
        return b.value - a.value;
    })
    let top15 = overall.splice(0, 15);
    let pos = 1;
    if (top15.length) {
        room.sendAnnouncement("💎 Ranking [TOP15]: ", null, 0xfdfd96, "bold", 0);
    }
    while (top15.length) {
        let tmp = top15.splice(0, 5);
        let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join("   ┃");
        room.sendAnnouncement(message, null, 0xfdfd96, "normal", 0);
    }
    room.sendAnnouncement("Para que puedas guardar tus datos, confírmate ┃ !confirmar ┃", null, 0xcb99c9, "bold", 0);
}

function GoleadoresCalc(player) {
    var name = player;
    players = Object.keys(stats);
    account = players.find(a => a === name)
    if (account !== undefined) {
        return stats[name][0] * 1;
    }
    else { return 0; }
}

function TopGoleadores(player, message) {

    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = GoleadoresCalc(players[i])
        // Gol: 2 pts, Asistencia: 2 pts, Victoria: 5 pts, Valla Invicta: 3 pts, Derrota: -3 pts, Gol en Contra: -2 pts
        overall.push({ name: players[i], value: score });
    }
    overall.sort(function (a, b) {
        return b.value - a.value;
    })
    let top30 = overall.splice(0, 30);
    let pos = 1;
    if (top30.length) {
        room.sendAnnouncement("[⚽] 💎 MÁXIMOS GOLEADORES 💎: ", player.id, 0xfdfd96, "bold", 0);
    }
    while (top30.length) {
        let tmp = top30.splice(0, 5);
        let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join("   ┃");
        room.sendAnnouncement(message, player.id, 0xfdfd96, "normal", 0);

    }
    room.sendAnnouncement("Para que tus goles sumen a las estadísticas debes confirmarte con RX#5494 en https://discordapp.com/", player.id, 0xcb99c9, "bold", 0);
}

function AsistidoresCalc(player) {
    var name = player;
    players = Object.keys(stats);
    account = players.find(a => a === name)
    if (account !== undefined) {
        return stats[name][1] * 1;
    }
    else { return 0; }
}

function TopAsistidores(player, message) {

    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = AsistidoresCalc(players[i])
        // Gol: 2 pts, Asistencia: 2 pts, Victoria: 5 pts, Valla Invicta: 3 pts, Derrota: -3 pts, Gol en Contra: -2 pts
        overall.push({ name: players[i], value: score });
    }
    overall.sort(function (a, b) {
        return b.value - a.value;
    })
    let top30 = overall.splice(0, 30);
    let pos = 1;
    if (top30.length) {
        room.sendAnnouncement("[👟] 💎 MÁXIMOS ASISTIDORES 💎: ", player.id, 0xfdfd96, "bold", 0);
    }
    while (top30.length) {
        let tmp = top30.splice(0, 5);
        let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join("   ┃");
        room.sendAnnouncement(message, player.id, 0xfdfd96, "normal", 0);

    }
    room.sendAnnouncement("Para que tus asistencias sumen a las estadísticas debes confirmarte con RX#5494 en https://discordapp.com/", player.id, 0xcb99c9, "bold", 0);
}

function eloCalc(player) {
    var name = player;
    return stats[name][6];
}
function eloranking() {
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = eloCalc(players[i])
        // Gol: 2 pts, Asistencia: 1 pts, Victoria: 3 pts, Valla invicta: 3 pts, Derrota: -3 pts, Gol en contra: -2 pts
        overall.push({ name: players[i], value: score });
    }
    overall.sort(function (a, b) {
        return b.value - a.value;
    })
    let top15 = overall.splice(0, 15);
    let pos = 1;
    if (top15.length) {
        room.sendAnnouncement("💎 ELO Ranking [TOP15]: ", null, 0xfdfd96, "bold", 0);
    }
    while (top15.length) {
        let tmp = top15.splice(0, 5);
        let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join("   ┃");
        room.sendAnnouncement(message, null, 0xfdfd96, "normal", 0);
    }
    room.sendAnnouncement("Para que tenga valor los puntos ELO, confírmate ┃ !confirmar ┃", null, 0xcb99c9, "bold", 0);
}

function sendStats(name) {
    ps = stats[name]; // stands for playerstats
    /*  if (ps[7] == parseInt(0)) {ps[7] = "L"} else {ps[7] = "W"}
    if (ps[8] == parseInt(0)) {ps[8] = "L"} else {ps[8] = "W"}
    if (ps[9] == parseInt(0)) {ps[9] = "L"} else {ps[9] = "W"}
    if (ps[10] == parseInt(0)) {ps[10] = "L"} else {ps[10] = "W"}
    if (ps[11] == parseInt(0)) {ps[11] = "L"} else {ps[11] = "W"} */
    room.sendAnnouncement(name + ":  Goles: " + ps[0] + " |  Assistencias: " + ps[1]
        + " |  Goles en contra: " + ps[4] + " |  Arcos en 0: " + ps[5] + " |  Victorias: " + ps[2] + " |  Derrotas: " + ps[3] + " | 💎 ELO: " + ps[6], null, 0xa3fcff, "normal", 0);
    if (ps[7] !== "D" && ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] !== "D") { room.sendAnnouncement(name + ": 🥇 últimos 5 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11], null, 0xa3fcff, "normal", 0); }
    if (ps[7] !== "D" && ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] == "D") { room.sendAnnouncement(name + ": 🥇 últimos 4 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11], null, 0xa3fcff, "normal", 0); }
    if (ps[7] !== "D" && ps[8] !== "D" && ps[9] !== "D" && ps[10] == "D" && ps[11] == "D") { room.sendAnnouncement(name + ": 🥇 últimos 3 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11], null, 0xa3fcff, "normal", 0); }
    if (ps[7] !== "D" && ps[8] !== "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D") { room.sendAnnouncement(name + ": 🥇 últimos 2 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11], null, 0xa3fcff, "normal", 0); }
    if (ps[7] !== "D" && ps[8] == "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D") { room.sendAnnouncement(name + ": 🥇 últimos W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11], null, 0xa3fcff, "normal", 0); }
}


function whichTeam() { // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}
function afkFun(player, message) { // !afk
    if (afkPlayerIDs.has(player.id)) {
        afkPlayerIDs.delete(player.id);
        room.sendAnnouncement("💎 " + player.name + " : No está más AFK.", null, 0xa3fcff, "normal", 0);
    } else { afkPlayerIDs.add(player.id); room.setPlayerTeam(player.id, 0); room.sendAnnouncement("💎 " + player.name + " : 😴Está AFK!", null, 0xa3fcff, "normal", 0); }
}
function afksFun(player, message) { // !huge
    afkPlayers_list = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
    afkPlayers_list_string = afkPlayers_list.map(x => x.name).join("   ┃");
    if (afkPlayers_list == "") {
        room.sendAnnouncement("💎 NO HAY AFKs.", null, 0xfdfd96, "normal", 0);
    }
    else {
        room.sendAnnouncement("😴 Están AFKs:  " + afkPlayers_list_string, null, 0xa3fcff, "normal", 0);
    }
}
function kickafksFun(player, message) { // !huge
    if (player.admin == true) {
        afksPlayers = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
        for (var i = 0; i < afksPlayers.length; i++) { room.kickPlayer(afksPlayers[i].id, "AFK!", false); }
    }
}//stats en locaStorage//
function saveStatsFun() {
    var val = JSON.stringify(stats);
    window.localStorage.setItem("stats", val);
    return false;
}
//----
function getAverageRank(team) {
    average = 0;
    for (var i = 0; i < team.length; i++) {
        if (team[i].name !== undefined) {
            average += rankingCalc(team[i].name);
        }
    }
    return average / team.length;
}
function getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult) {
    redAverage = getAverageRank(redTeam);
    blueAverage = getAverageRank(blueTeam);
    var redChanceToWin = 1 / (1 + Math.pow(10, (blueAverage - redAverage) / 400));
    var blueChanceToWin = 1 - redChanceToWin;
    return [Math.round(32 * (redGameResult - redChanceToWin)), Math.round(32 * (blueGameResult - blueChanceToWin))];
}
function updateElo(redTeam, blueTeam, redGameResult, blueGameResult) {
    if (redTeam.length == blueTeam.length && redTeam.length == '3' && blueTeam.length == '3') {
        [redDelta, blueDelta] = getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult)
        for (var i = 0; i < redTeam.length; i++) {
            let account3 = accounts.find(a => a.playerId === redTeam[i].id);
            if (account3 !== undefined) { stats[account3.username][6] += redDelta; } else { };
            let account4 = accounts.find(a => a.playerId === blueTeam[i].id);
            if (account4 !== undefined) { stats[account4.username][6] += blueDelta; } else { };
        }
        return redDelta;
    }
    return 0;
}
function confirmedPlayersFun(player, message) { // !huge
    confirmedPlayers_list = room.getPlayerList().filter((x) => confirmedPlayers.has(x.id));
    confirmedPlayers_list_string = confirmedPlayers_list.map(x => x.name).join(" ┃ ");
    if (confirmedPlayers_list == "") {
        room.sendAnnouncement("💎 No hay jugadores!", null, 0xa3fcff, "normal", 0);
    }
    else {
        room.sendAnnouncement("💎 Jugadores registrados: " + confirmedPlayers_list_string, null, 0xa3fcff, "normal", 0);
    }
}
function eightballFun(player, message) {
    var myArray = ['Radi es la negra del grupo.', 'DIEGO la más obesa.', 'Lucho es una lok.', '!mute DIEGO', '!mute ₀₁ warrior'];
    var rand = myArray[(Math.random() * myArray.length) | 0];
    var myArray2 = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😏', '😣', '😥', '😮', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0];
    room.sendChat(rand);
}
function InsultosFun(player, message) {
    var myArray = ['Fight of invalids', ' Esto se va a poner feo. ', ' PELEA! PELEA! ', ' Ayyy cómo le dice ', ' turn down for what ', ' OHHHHHH ', 'Se va a dejar?'];
    var rand = myArray[(Math.random() * myArray.length) | 0];
    var myArray2 = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😏', '😣', '😥', '😮', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0];
    room.sendChat(randimage + " " + rand);
}
function setpasswordFun(player, message) {  //!set_password  !confirm
    if (player.admin == true) {
        code = message.substr(14)
        room.setPassword(code);
        room.sendAnnouncement("💎 Host blocked.", null, 0xD10000, "normal", 0);
        return false;
    }
}
function clearpasswordFun(player, message) {  //!clear_password
    if (player.admin == true) {
        room.setPassword();
        room.sendAnnouncement("💎 Unlocked host.", null, 0xD10000, "normal", 0);
        return false;
    }
}
function backaccountFun(player, message) {  //!back876 waffle 10 2 3 2 1 1 1000
    if (player.admin == true) {
        var playername = message.substring(message.lastIndexOf(":") + 1, message.lastIndexOf(";"));
        var index = message.substr(message.lastIndexOf(";") + 1).split(" ");
        var goals = index[1]
        var assists = index[2]
        var wins = index[3]
        var losses = index[4]
        var og = index[5]
        var cs = index[6]
        var elo = index[7]
        var ws1 = index[8]
        var ws2 = index[9]
        var ws3 = index[10]
        var ws4 = index[11]
        var ws5 = index[12]
        stats[playername] = [parseInt(goals), parseInt(assists), parseInt(wins), parseInt(losses), parseInt(og), parseInt(cs), parseInt(elo), ws1, ws2, ws3, ws4, ws5];  // goals, assists, wins, losses, og, cs, elo
        saveStatsFun();
        return false;
    }
}
function addaccountFun(player, message) { //!addaccount Waffle aaa
    var playername = message.substring(message.lastIndexOf(":") + 1, message.lastIndexOf(";"));
    var index = message.substr(message.lastIndexOf(";") + 1).split(" ");
    var password = index[index.length - 1]
    accounts.push({ username: playername, password: password });
    if (stats.hasOwnProperty(playername)) { }
    else { stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"]; }
    saveStatsFun();
    return false;
}
function pmFun(player, message) { //!pm
    var pm = message.substr(4);
    var index = message.split(" ").slice(1);
    var playerID = index[0]
    var message2 = message.substr(4).substr(playerID);
    var message3 = "[PM DE " + player.name + "(ID:" + player.id + ")]: " + message2;
    console.log(playerID);
    console.log(index);
    console.log(message);
    console.log(message2);
    console.log(message3);
    room.sendChat(message3, parseInt(playerID))
    var players = room.getPlayerList().filter((player) => player.id != 0);
    if (players.find((player => player.id === playerID))) { room.sendChat("User ID is not found!, Check # for getting ID.", player.id) }
    else { room.sendChat("Treated!", player.id) };
    return false;
}
function isGk() { // gives the mosts backward players before the first kickOff
    var players = room.getPlayerList();
    var min = players[0];
    min.position = { x: room.getBallPosition().x + 60 }
    var max = min;
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            if (min.position.x > players[i].position.x) min = players[i];
            if (max.position.x < players[i].position.x) max = players[i];
        }
    }
    return [min, max]
}
function updateWinLoseStats(winners, losers) {
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) { stats[account.username][2] += 1; } else { };
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) { stats[account1.username][3] += 1; } else { };
    }
}
function updateWinLoseStreakStats(winners, losers) {
    //if (redTeam.length == blueTeam.length && redTeam.length == '4' && blueTeam.length == '4'){
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) {
            if (stats[account.username][10] == "W") { stats[account.username][11] = "W"; } else if (stats[account.username][10] == "L") { stats[account.username][11] = "L"; } else { };
            if (stats[account.username][9] == "W") { stats[account.username][10] = "W"; } else if (stats[account.username][9] == "L") { stats[account.username][10] = "L"; } else { };
            if (stats[account.username][8] == "W") { stats[account.username][9] = "W"; } else if (stats[account.username][8] == "L") { stats[account.username][9] = "L"; } else { };
            if (stats[account.username][7] == "W") { stats[account.username][8] = "W"; } else if (stats[account.username][7] == "L") { stats[account.username][8] = "L"; } else { };
            stats[account.username][7] = "W";
        } else { };
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) {
            if (stats[account1.username][10] == "W") { stats[account1.username][11] = "W"; } else if (stats[account1.username][10] == "L") { stats[account1.username][11] = "L"; } else { };
            if (stats[account1.username][9] == "W") { stats[account1.username][10] = "W"; } else if (stats[account1.username][9] == "L") { stats[account1.username][10] = "L"; } else { };
            if (stats[account1.username][8] == "W") { stats[account1.username][9] = "W"; } else if (stats[account1.username][8] == "L") { stats[account1.username][9] = "L"; } else { };
            if (stats[account1.username][7] == "W") { stats[account1.username][8] = "W"; } else if (stats[account1.username][7] == "L") { stats[account1.username][8] = "L"; } else { };
            stats[account1.username][7] = "L";
        } else { };
    }
    //}
}
function initBallCarrying(redTeam, blueTeam) {
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
}
function updateTeamPoss(value) {
    if (value[1] == 1) redPoss += value[0];
    if (value[1] == 2) bluePoss += value[0];
}
var bluePoss;
var redPoss;
var timeOnHalves;
function teamPossFun() {
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    room.sendAnnouncement("⛹ Posesión del balón:  Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(redPossPercent) + "% - " + boldedNumber(bluePossPercent) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 ", null, 0xfdfd96, "normal", 0);
    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    room.sendAnnouncement("◧ Posesión en el campo: Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(timeOnRedHalf) + "% - " + boldedNumber(timeOnBlueHalf) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 ", null, 0xfdfd96, "normal", 0);
}
/*
For the game
*/
// Gives the last player who touched the ball, works only if the ball has the same
// size than in classics maps.
var radiusBall = 10;
function getLastTouchTheBall(lastPlayerTouched, time) {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                lastPlayerTouched = players[i];
                return lastPlayerTouched;
            }
        }
    }
    return lastPlayerTouched;
}
// Calculate the distance between 2 points
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
function isOvertime() {
    scores = room.getScores();
    if (scores != null) {
        if (scores.timeLimit != 0) {
            if (scores.time > scores.timeLimit) {
                if (scores.red == 0 && hasFinished == false) {
                    let account = accounts.find(a => a.playerId === gk[0].id);
                    if (account !== undefined) {
                        stats[account.username][5] += 1;
                    } else { };
                    let account1 = accounts.find(a => a.playerId === gk[1].id);
                    if (account1 !== undefined) {
                        stats[account1.username][5] += 1;
                    } else { };
                    hasFinished = true;
                }
            }
        }
    }
}
// return: the name of the team who took a goal
var team_name = team => team == 1 ? "𝐑𝐄𝐃 🔴" : "𝐁𝐋𝐔𝐄 🔵";
var team_color = team => team == 1 ? "𝐑𝐄𝐃 🔴" : "𝐁𝐋𝐔𝐄 🔵";
// return: whether it's an OG
var isOwnGoal = (team, player) => team != player.team ? " [❌ Gol en contra]" : "";
// return: a better display of the second when a goal is scored
var floor = s => s < 10 ? "0" + s : s;
// return: whether there's an assist
//var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (" + playerList[1].name + ")" : "";
playerTouchedTwice = function (playerList) {
    let account = accounts.find(a => a.playerId === playerList[1].id);
    if (playerList[0].team == playerList[1].team && account !== undefined) { return " (" + playerList[1].name + "[" + account.username + "]" + ")"; }
    else if (playerList[0].team == playerList[1].team && account == undefined) { return " (" + playerList[1].name + ")"; }
    else { return ""; };
}//cargar stats//
var stats;
if (!(localStorage.getItem("stats"))) {
    stats = {};
} else { stats = JSON.parse(localStorage.getItem("stats")); }
window.setInterval(saveStatsFun, 3000);
/* window.setInterval(saveStatsFun, 300000); */
var mutedPlayers = []; // Array where will be added muted players
const confirmedPlayers = new Set()
const afkPlayerIDs = new Set()
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var scorers; // Map where will be set all scorers in the current game (undefined if reset or end)
var whoTouchedLast; // var representing the last player who touched the ball
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball
var gk = [init, init];
var goalScored = false;
let accounts = [];



var commands = {
    // Command that doesnt need to know players attributes.
    "!help": helpFun,
    "!ball": bosshaftColorString,
    "!pelota": PelotaFun,
    "!customball": bosshaftColor,
    "!maps": mapsFun,
    "!gkhelp": gkHelpFun,
    "!adminhelp": adminHelpFun,
    "!rankhelp": rankHelpFun,
    "!ranking": ranking,
    "!goles": TopGoleadores,
    "!asistencias": TopAsistidores,
    "!poss": teamPossFun,
    "!elohelp": eloHelpFun,
    "!eloranking": eloranking,
    "!reset": resetStatsAdminFun,
    "!1": NumeroUnoFun,
    "!2": NumeroDosFun,
    "!3": NumeroTresFun,
    "!4": NumeroCuatroFun,
    "!5": NumeroCincoFun,
    "!6": NumeroSeisFun,
    "!7": NumeroSieteFun,
    "!8": NumeroOchoFun,
    "!9": NumeroNueveFun,
    "!10": NumeroDiezFun,
    // Command that need to know who is the player.
    "!gk": gkFun,
    "!adming0ph3r": adminFun,
    // Command that need to know if a player is admin
    "!swap": swapFun,
    "!rr": resetFun,
    "!clearbans": clearbansFun,
    "!bye": closeFun,
    "!savestats": saveStatsFun,
    "!spec": specTeamFun,
    // Command that need to know what's the message.
    "!stats": statsFun,
    "!addaccount": addaccountFun,
    "!bb": leaveFun,
    "!confirm": confirmFun,
    "!confirmed": confirmedPlayersFun,
    "!afk": afkFun,
    "!afks": afksFun,
    "!kickafks": kickafksFun,
    "!resign": resignFun,
    "!chatasbot": chatasbotFun,
    "!mute": pushMuteFun,
    "!talk": eightballFun,
    "!insulto": InsultosFun,
    "!unmute": unmuteFun,
    "!set_password": setpasswordFun,
    "!clear_password": clearpasswordFun,
    "!pm": pmFun,
    "!back": backaccountFun
}
initPlayerStats(room.getPlayerList()[0]); // lazy lol, i'll fix it later
initPlayerStats(init);
room.onGameStart = function (player) {
    lineCrossedPlayers = [{ name: "temp", times: 0 }];
    lastScores = room.getScores().red + room.getScores().blue;
    timeOutside = 0;
    isTimeAddedShown = false;
    isTimeAddedShowndos = false;
    isTimeAddedShowntres = false;
    isTimeAddedShowncuatro = false;
    isTimeAddedShowncinco = false;
    lineBallPosition = 0;
    [redTeam, blueTeam] = whichTeam();
    ballCarrying = initBallCarrying(redTeam, blueTeam);
    timeOnHalves = [0, 0];
}
room.onPlayerTeamChange = function (player) {
    if (room.getScores() != null) {
        if (1 <= player.team <= 2) ballCarrying.set(player.name, [0, player.team]);
    }
    if (player.team !== 0 && afkPlayerIDs.has(player.id)) {
        room.setPlayerTeam(player.id, 0)
        room.sendAnnouncement("💎 " + player.name + " está 𝘈𝘍𝘒!", null, 0xa3fcff, "normal", 0)
    }
    if (player.id <= 0) {
        room.setPlayerTeam(player.id, 0)
    }
}
room.onPlayerChat = function (player, message) {
    if (message.includes("!send") && player.admin) {
        adminMessage = message;
        message = message.split(/ +/);
        var adminChatColor = 0xF0E226; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
        room.sendAnnouncement(`ANUNCIO DE ${player.name}: ${adminMessage}`, null, adminChatColor, 'bold', 1);
        return false;
    }else if (message == "!tabla") {
            room.sendAnnouncement(" https://tinyurl.com/potts-host ", null, 0xcb99c9, 'bold', 0);
    }

    //BAN SPAMMERS//
    if (message.includes("ఌ") || message.includes("甈") || message.includes("㐷") || message.includes("怅") || message.includes("瘪") || message.includes("⑸") || message.includes("㬆") || message.includes("権") || message.includes("怜") || message.includes("∯") || message.includes("㤒") || message.includes("䉊") || message.includes("匊") || message.includes("ᙻ") || message.includes("ൽ") || message.includes("爂") || message.includes("爇") || message.includes("त") || message.includes("権") || message.includes("怜") || message.includes("∯") || message.includes("㤒") || message.includes("BOT HPTA") || message.includes("眮") || message.includes("㤮") || message.includes("㵧") || message.includes("間") || message.includes("謝") || message.includes("奶") || message.includes("如") || message.includes("失") || message.includes("好") || message.includes("莖") || message.includes("治") || message.includes("帶") || message.includes("陰") || message.includes("KKKKKKKKKKK") || message.includes("kkkkkkk")) {
        room.kickPlayer(player.id, "BOOOOM💥 NO SPAM NEGGE.", true);
        return false; // The message won't be displayed
    } if (message.includes("bot hpta")) {
        room.kickPlayer(player.id, "Su mamita.", false);
        return false; // The message won't be displayed
    }
    //camisetas
    switch (message) {
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
        case "kra/alternativa/blue":
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
        case "dev/titular/red":
            room.setTeamColors(1, 90, 0xFFFFFF, [0xFF0000, 0xFF0000, 0x000000]);
            break;
        case "dev/titular/blue":
            room.setTeamColors(2, 90, 0xFFFFFF, [0xFF0000, 0xFF0000, 0x000000]);
            break;
        case "dev/alternativa/red":
            room.setTeamColors(1, 90, 0xFFCC26, [0x000000, 0x000000, 0xFFFFFF]);
            break;
        case "dev/alternativa/blue":
            room.setTeamColors(2, 90, 0xFFCC26, [0x000000, 0x000000, 0xFFFFFF]);
            break;
        case "!lagtest":
            room.setCustomStadium(ghostball)
            break;
        default:
            break;
        // code block
    }
    if (mutedPlayers.includes(player.name)) return false;
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
    if (message.indexOf("!") == 0) return false;
}
room.onPlayerBallKick = function (player) {
    whoTouchedLast = player;
    var ballPosition = room.getBallPosition();
    if (player.name != lastPlayerTouched) {
        if (lastTeamTouched == player.team) {
            assistingTouch = lastPlayerTouched;
        } else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;
    if (isBallOutsideStadium) {
        getPlayersNotWithinLine();
    }
    if (isBallOutsideStadium && ballPosition.y < 0) {
        isBallKickedOutside = true;
    } else if (isBallOutsideStadium && ballPosition.y > 0) {
        isBallKickedOutside = true;
    } else isBallKickedOutside = false;
}
function isBallGoingUp() {
    previousBallPosForGoingUp = currentBallPosForGoingUp;
    currentBallPosForGoingUp = room.getBallPosition().y;
    if (previousBallPosForGoingUp - currentBallPosForGoingUp > 0.01) {
        isBallUp = 2;
    } else if (previousBallPosForGoingUp - currentBallPosForGoingUp < -0.01) {
        isBallUp = 1;
    } else {
        isBallUp = 0;
    }
}
var tickCount = 0;
var kickOff = false;
var hasFinished = false;
room.onGameTick = function () {
    if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
        if (room.getScores().time != 0) {
            kickOff = true;
            gk = isGk();
            let account = accounts.find(a => a.playerId === gk[0].id);
            let account1 = accounts.find(a => a.playerId === gk[1].id);
            if (account == undefined && account1 == undefined) { room.sendAnnouncement("Red Team GK: " + gk[0].name + ", Blue Team GK: " + gk[1].name, null, 0xfdfd96, "normal", 0) }
            else if (account !== undefined && account1 == undefined) { room.sendAnnouncement("Red Team GK: " + gk[0].name + "[" + account.username + "]" + ", Blue Team GK: " + gk[1].name, null, 0xfdfd96, "normal", 0) }
            else if (account == undefined && account1 !== undefined) { room.sendAnnouncement("Red Team GK: " + gk[0].name + ", Blue Team GK: " + gk[1].name + "[" + account1.username + "]", null, 0xfdfd96, "normal", 0) }
            else { room.sendAnnouncement("Red Team GK:" + gk[0].name + "[" + account.username + "]" + ", Blue Team GK: " + gk[1].name + "[" + account1.username + "]", null, 0xfdfd96, "normal", 0) };
        }
    }
    if (goalScored == false) {
        whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
    }
    if (whoTouchedLast != undefined) {
        if (ballCarrying.get(whoTouchedLast.name)) {
            ballCarrying.get(whoTouchedLast.name)[0] += 1 / 60;
        }
        if (whoTouchedLast.id != whoTouchedBall[0].id) {
            whoTouchedBall[1] = whoTouchedBall[0];
            whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
        }
    }
    updateTimeOnHalves();
    isThrowInCorrect();
    getLastTouchTheBalltwo();
    checkBallPosition();
    isBackRequired();
    hasBallLeftTheLine();
    tickCount++;
}
updateTimeOnHalves = function () {
    if (room.getBallPosition().x < 0) {
        timeOnHalves[0] += 1 / 60;
    } else if (room.getBallPosition().x > 0) {
        timeOnHalves[1] += 1 / 60;
    }
}
room.onTeamGoal = function (team) { // Write on chat who scored and when.
    goalScored = true;
    var time = room.getScores().time;
    var m = Math.trunc(time / 60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
    var assist = "";
    if (ownGoal == "") assist = playerTouchedTwice(whoTouchedBall);
    let account = accounts.find(a => a.playerId === whoTouchedBall[0].id);
    if (account !== undefined) {
        room.sendAnnouncement("⚽ GOAL " + whoTouchedBall[0].name + "[" + account.username + "]" +
            assist + ownGoal + " at [" +
            time + "] for  " + team_name(team), null, 0xfdfd96, "normal", 0);
        room.sendAnnouncement("Score: " + team_color(1) + " " +
            boldedNumber(room.getScores().red) + " - " + boldedNumber(room.getScores().blue) + " " + team_color(2), null, 0xfdfd96, "normal", 0);
        if (ownGoal != "") {
            stats[account.username][4] += 1;
        } else {
            stats[account.username][0] += 1;
        }
    }
    else {
        room.sendAnnouncement("⚽ GOAL by: " + whoTouchedBall[0].name +
            assist + ownGoal + " at [" +
            time + "] for  " + team_name(team), null, 0xfdfd96, "normal", 0);
        room.sendAnnouncement("Score: " + team_color(1) + " " +
            boldedNumber(room.getScores().red) + " - " + boldedNumber(room.getScores().blue) + " " + team_color(2), null, 0xfdfd96, "normal", 0);
    }
    let account1 = accounts.find(a => a.playerId === whoTouchedBall[1].id);
    if (account1 !== undefined) {
        if (whoTouchedBall[1] != init && assist != "") stats[account1.username][1] += 1;
    }
    else {
        if (whoTouchedBall[1] != init && assist != "");
    }
    if (scorers == undefined) scorers = new Map(); // Initializing dict of scorers
    scorers.set(scorers.size + 1 + ") " + whoTouchedLast.name, [time, assist, ownGoal])
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    saveStatsFun();
}
room.onPositionsReset = function () {
    goalScored = false;
}
room.onTeamVictory = function (scores) { // Sum up all scorers since the beginning of the match.
    let account = accounts.find(a => a.playerId === gk[0].id);
    if (account !== undefined && scores.blue == 0 && gk[0].position != null && hasFinished == false) {
        stats[account.username][5] += 1;
    } else { };
    let account1 = accounts.find(a => a.playerId === gk[1].id);
    if (account1 !== undefined && scores.red == 0 && gk[1].position != null && hasFinished == false) {
        stats[account1.username][5] += 1;
    } else { };
}
room.onGameStop = function () {
    scorers = undefined;
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    gk = [init, init];
    kickOff = false;
    hasFinished = false;
}
function getNewRating(myRating, opponentRating, myGameResult) {
    return myRating + getRatingDelta(myRating, opponentRating, myGameResult);
}
var _savestatsInterval = 1000 * 10800;
SaveStats = setInterval(function () { saveStatsFun(); }, _savestatsInterval);
function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
room.onPlayerJoin = function (player) {
    clonekick(player);
    playerName = player.name.replace(/ /g, "_");
    room.sendAnnouncement("[📶] Welcome to Gophers DOMO" + playerName + ".", null, 0x95d853, 'bold', 0);
}
room.onPlayerLeave = function (player) {
}
function isOutsideStadium(ballPosition) {
    return ballPosition.x > stadiumWidth || ballPosition.x < -stadiumWidth || ballPosition.y > stadiumHeight || ballPosition.y < -stadiumHeight;
}
var isBallOutsideStadium = false;
function checkBallPosition() {
    var ballPosition = room.getBallPosition();
    if (isOutsideStadium(ballPosition)) {
        if (!isBallOutsideStadium) {
            isBallOutsideStadium = true;
            exitingPos = ballPosition.x;
            var totalScores = room.getScores().red + room.getScores().blue;
            if (lastScores != totalScores) {
                lastScores = totalScores;
                return false;
            }
            if (ballPosition.x > stadiumWidth && lastTeamTouched == Team.RED || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.BLUE) {
                lastCall = "[⚽] Goal kick";
                room.sendAnnouncement("[⚽] Goal kick");
            }
            else if (ballPosition.x > stadiumWidth && lastTeamTouched == Team.BLUE || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.RED) {
                room.sendAnnouncement("[🚩] ᴄᴏʀɴᴇʀ");
                lastCall = "[🚩] ᴄᴏʀɴᴇʀ";
            }
            else {
                isBallKickedOutside = false;
                room.sendAnnouncement(lastTeamTouched == Team.RED ? "𝐁𝐋𝐔𝐄 🔵" : "𝐑𝐄𝐃 🔴");
                lastCall = lastTeamTouched == Team.RED ? "2" : "1";
            }
        }
    }
    else {
        isBallOutsideStadium = false;
        backMSG = true;
    }
    return true;
}
function getLastTouchTheBalltwo() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (lastPlayerTouched != players[i].name) {
                    if (lastTeamTouched == players[i].team) {
                        assistingTouch = lastPlayerTouched;
                    } else assistingTouch = "";
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i].name;
            }
        }
    }
    return lastPlayerTouched;
}
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
var playersNotInLine = new Array;
function getPlayersNotWithinLine() {
    console.log("test");
    playersNotInLine = new Array;
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            if (players[i].team != lastTeamTouched && players[i].team != lastCall && lastCall != "[🚩] ᴄᴏʀɴᴇʀ" && lastCall != "[⚽] Goal kick") {
                if ((players[i].position.y > greenLine || players[i].position.y < -greenLine) && pointDistance(room.getBallPosition(), players[i].position) < 500) {
                    playersNotInLine.push(players[i].name);
                }
            }
        }
    }
}
function checkPlayersLine() {
    console.log("2");
    for (var i = 0; i < playersNotInLine.length; i++) {
        var found = false;
        for (var j = 0; j < lineCrossedPlayers.length; j++) {
            if (lineCrossedPlayers[j].name == playersNotInLine[i]) {
                lineCrossedPlayers[j].times = lineCrossedPlayers[j].times + 1;
                room.sendAnnouncement("🚨 Line - " + lineCrossedPlayers[j].name + " {" + lineCrossedPlayers[j].times + "}");
                found = true;
            }
        }
        if (!found) {
            lineCrossedPlayers.push({
                name: playersNotInLine[i],
                times: 1,
                punished: false
            });
            room.sendAnnouncement("🚨 Line - " + playersNotInLine[i] + " {1}");
        }
    }
}
var trigger = false;
var wrongThrowPosition = false;
function isBackRequired() {
    var ballPosition = room.getBallPosition();
    if (!isBallKickedOutside) {
        if (lastCall == "1") {
            if ((ballPosition.x - exitingPos > throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendAnnouncement("⚠ BACK ⚠");
                trigger = true;
                wrongThrowPosition = true;
            }
            if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendAnnouncement("⚠ FURTHER ⚠");
                trigger = true;
                wrongThrowPosition = true;
            }
        }
        if (lastCall == "2") {
            if ((ballPosition.x - exitingPos > throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendAnnouncement("⚠ FURTHER ⚠");
                trigger = true;
                wrongThrowPosition = true;
            }
            if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
                backMSG = false;
                room.sendAnnouncement("⚠ BACK ⚠");
                trigger = true;
                wrongThrowPosition = true;
            }
        }
    }
    if (lastCall == "2" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
        room.sendAnnouncement("OK 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
    if (lastCall == "1" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
        room.sendAnnouncement("OK 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
}
function isThrowInCorrect() {
    var ballPosition = room.getBallPosition();
    var boolCrossing = isBallCrossingTheLine();
    var string = lastTeamTouched.toString();
    if (boolCrossing && !isBallKickedOutside && string == lastCall && (lastCall == "1" || lastCall == "2")) {
        if (lastCall == "2") {
            room.sendAnnouncement("BAD THROW");
        }
        if (lastCall == "1") {
            room.sendAnnouncement("BAD THROW");
        }
        isBallKickedOutside == false;
    } else if (boolCrossing && string != lastCall && (lastCall == "1" || lastCall == "2")) {
        //room.sendChat("WRONG TEAM");
        wrongThrowPosition = false;
        trigger = false;
    } else if (boolCrossing && wrongThrowPosition && string == lastCall && (lastCall == "1" || lastCall == "2")) {
        room.sendAnnouncement("WRONG PLACE");
        wrongThrowPosition = false;
        trigger = false;
    } else if (boolCrossing) {
        checkPlayersLine();
    }
}
function isBallCrossingTheLine() {
    previousBallPos = lineBallPosition;
    lineBallPosition = room.getBallPosition().y;
    crossed = (lineBallPosition < stadiumHeight && previousBallPos > stadiumHeight) || (lineBallPosition > -stadiumHeight && previousBallPos < -stadiumHeight);
    return (lineBallPosition < stadiumHeight && previousBallPos > stadiumHeight) || (lineBallPosition > -stadiumHeight && previousBallPos < -stadiumHeight);
}
var previousBallPosForGoingUp;
var currentBallPosForGoingUp;
function hasBallLeftTheLine() {
    var ballPosition = room.getBallPosition();
    if (ballPosition.y < outLineY && isBallKickedOutside) {
    } else if (ballPosition.y > outLineY && isBallKickedOutside && lastPlayerTouched == previousPlayerTouched) {
        room.sendAnnouncement("BALL GONE");
    }
}