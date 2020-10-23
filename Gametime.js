	//Potts Host made by RX.,Panda.//
	//Use this code in haxball.com/headless""
	//Updated 20/04/2020//
	//Thanks to Raamyy, Basro, Andyy, Grandes Ligas community, a-others.//

	/* ROOM */
	var roomName = "HaxCOL Miami VPS";
	var maxPlayers = 20;
	var roomPublic = true;
	var playerName = "HaxCOL HOST";
	var adminPublic = false;
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
	geo = { "code": "co", "lat": 25.7617, "lon": -80.1918 };
	var room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: playerName, token: "thr1.AAAAAFyRjgZMy18R2w9YjQ.-FYMqQV18YE", geo });

	room.setDefaultStadium("Big");
	room.setScoreLimit(3);
	room.setTimeLimit(3);
	room.setTeamsLock(true);
	room.setTeamColors(1, 60, 0xFFFFFF, [0xff6961, 0xff6961, 0xff6961]);
	room.setTeamColors(2, 60, 0xFFFFFF, [0x5681f5, 0x5681f5, 0x5681f5]);

	//COLORS
	
	var redAngle = 60
	var redColors = [0xFFFFFF, 0xff6961, 0xff6961, 0xff6961]
	var blueAngle = 60
	var blueColors = [0xFFFFFF, 0x5681f5, 0x5681f5, 0x5681f5]

	// MAPS
	
	var minirs = '{"name":"Mini Real Soccer 3v3 from HaxMaps","width":800,"height":395,"spawnDistance":350,"bg":{"type":"grass","width":700,"height":340,"kickOffRadius":80,"cornerRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.07,"kickingDamping":0.98,"kickStrength":5.2},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]},"vertexes":[{"x":0,"y":370,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":706,"y":339,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":107.049796398,"vis":true,"color":"576C46"},{"x":734,"y":318,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":107.049796398,"vis":true,"color":"576C46"},{"x":739,"y":-321,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":60,"vis":true,"color":"576C46"},{"x":708,"y":-339,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":60,"vis":true,"color":"576C46"},{"x":-704,"y":100,"bCoef":1,"trait":"line","color":"ffffff"},{"x":-773,"y":101,"bCoef":1,"trait":"line","color":"FFFFFF","curve":14.223908765081},{"x":-700,"y":-100,"bCoef":1,"trait":"line","color":"ffffff"},{"x":-770,"y":-99,"bCoef":1,"trait":"line","color":"ffffff","curve":14.223908765081},{"x":700,"y":100,"bCoef":1,"trait":"line","color":"ffffff"},{"x":766,"y":100,"bCoef":1,"trait":"line","color":"ffffff"},{"x":700,"y":-100,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":766,"y":-100,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":0,"y":-4,"trait":"line"},{"x":0,"y":4,"trait":"line"},{"x":0,"y":-4,"trait":"line"},{"x":0,"y":4,"trait":"line"},{"x":-799,"y":411,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":796,"y":354,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":793,"y":-369,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":806,"y":362,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-828,"y":-407,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":798,"y":-352,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-780,"y":366,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-825,"y":-369,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-825,"y":367,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":783,"y":-409,"bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":817,"y":-370,"bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":816,"y":372,"bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":808,"y":417,"bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":93,"y":-386,"bCoef":0,"trait":"line"},{"x":26,"y":-388,"bCoef":-5,"trait":"line"},{"x":-15,"y":-387,"trait":"line"},{"x":-64,"y":-385,"trait":"line","vis":true,"color":"f13e3b"},{"x":-66,"y":-44,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-62},{"x":-69,"y":42,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-62},{"x":67,"y":-44,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","curve":154},{"x":67,"y":-44,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":62},{"x":67,"y":46,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":62},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":154},{"x":-69,"y":42,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":154},{"x":67,"y":-44,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":-54.6911986747},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":-54.6911986747},{"x":68,"y":43,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":154},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":154},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-54.6911986747},{"x":-66,"y":-44,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-54.6911986747},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":-1,"y":-391,"trait":"kickOffBarrier"},{"x":699,"y":142,"trait":"line"},{"x":514,"y":142,"trait":"line"},{"x":700,"y":115,"trait":"line"},{"x":623,"y":115,"trait":"line"},{"x":700,"y":-114,"trait":"line"},{"x":623,"y":-114,"trait":"line"},{"x":623,"y":115,"trait":"line"},{"x":623,"y":-114,"trait":"line"},{"x":699,"y":-140,"trait":"line"},{"x":514,"y":-140,"trait":"line"},{"x":514,"y":142,"trait":"line"},{"x":514,"y":-140,"trait":"line"},{"x":513,"y":71,"trait":"line"},{"x":514,"y":-81,"trait":"line"},{"x":-531,"y":144,"trait":"line"},{"x":-698,"y":143,"trait":"line"},{"x":-623,"y":118,"trait":"line"},{"x":-700,"y":118,"trait":"line"},{"x":-622,"y":-116,"trait":"line"},{"x":-699,"y":-116,"trait":"line"},{"x":-623,"y":118,"trait":"line"},{"x":-622,"y":-116,"trait":"line"},{"x":-532,"y":-138,"trait":"line"},{"x":-699,"y":-139,"trait":"line"},{"x":-531,"y":144,"trait":"line"},{"x":-532,"y":-138,"trait":"line"},{"x":-530,"y":76,"trait":"line","curve":-175.694074422},{"x":-530,"y":-75,"trait":"line","curve":-175.694074422},{"x":-590,"y":-5,"trait":"line"},{"x":-590,"y":3,"trait":"line"},{"x":-590,"y":-5,"trait":"line"},{"x":-590,"y":3,"trait":"line"},{"x":588,"y":-6,"trait":"line"},{"x":588,"y":2,"trait":"line"},{"x":588,"y":-6,"trait":"line"},{"x":588,"y":2,"trait":"line"},{"x":-709,"y":-342,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":60,"vis":true,"color":"576C46"},{"x":-734,"y":-319,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":60,"vis":true,"color":"576C46"},{"x":-739,"y":321,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":107.049796398,"vis":true,"color":"576C46"},{"x":-707,"y":341,"bCoef":-2.4,"cMask":["ball"],"trait":"ballArea","curve":107.049796398,"vis":true,"color":"576C46"},{"x":-769,"y":-100,"bCoef":1,"trait":"line","color":"ffffff"},{"x":-781,"y":-106,"bCoef":1,"trait":"line","color":"ffffff"},{"x":-774,"y":101,"bCoef":1,"trait":"line","color":"ffffff"},{"x":-782,"y":109,"bCoef":1,"trait":"line","color":"ffffff"},{"x":766,"y":-99,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":776,"y":-106,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":766,"y":100,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":777,"y":111,"bCoef":1,"trait":"line","color":"ffffff","curve":5},{"x":-724,"y":179,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"eb0e0a"},{"x":-724,"y":110,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"eb0e0a"},{"x":-730,"y":110,"bCoef":1,"cMask":["ball"]},{"x":-731,"y":179,"bCoef":1,"cMask":["ball"]},{"x":726,"y":-176,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"0a44eb"},{"x":725,"y":-109,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"0a44eb"},{"x":732,"y":-108,"bCoef":1,"cMask":["ball"]},{"x":733,"y":-176,"bCoef":1,"cMask":["ball"]},{"x":726,"y":-108,"bCoef":1,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":726,"y":-176,"bCoef":1,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":725,"y":108,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"0a44eb"},{"x":724,"y":175,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"0a44eb"},{"x":731,"y":176,"bCoef":1,"cMask":["ball"]},{"x":732,"y":108,"bCoef":1,"cMask":["ball"]},{"x":725,"y":176,"bCoef":1,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":725,"y":108,"bCoef":1,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-723,"y":-108,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"eb0e0a"},{"x":-723,"y":-177,"bCoef":-3,"cMask":["ball"],"trait":"line","curve":-55,"color":"eb0e0a"},{"x":-729,"y":-177,"bCoef":1,"cMask":["ball"]},{"x":-730,"y":-108,"bCoef":1,"cMask":["ball"]},{"x":-530,"y":76,"trait":"line","curve":-175.694074422},{"x":-530,"y":-75,"trait":"line","curve":-175.694074422},{"x":-523,"y":340,"trait":"line","curve":-92.90386693783,"color":"576C46"},{"x":-699,"y":149,"trait":"line","curve":-92.90386693783,"color":"576C46"},{"x":-700,"y":-144,"trait":"line","curve":-92.90386693783,"color":"576C46"},{"x":-525,"y":-339,"trait":"line","curve":-92.90386693783,"color":"576C46"},{"x":512,"y":-338,"trait":"line","curve":-92.853768677169,"color":"576C46"},{"x":699,"y":-147,"trait":"line","curve":-92.853768677169,"color":"576C46"},{"x":699,"y":149,"trait":"line","curve":-175.694074422,"color":"576C46"},{"x":512,"y":340,"trait":"line","curve":-175.694074422,"color":"576C46"}],"segments":[{"v0":8,"v1":10,"curve":14.223908765081,"color":"ffffff","trait":"reargoalNetleft","x":-1210},{"v0":12,"v1":14,"curve":-14.864625244832,"color":"ffffff","trait":"reargoalNetright"},{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":64.804683727205,"vis":true,"color":"576C46","bCoef":-2.4,"cMask":["ball"],"trait":"ballArea"},{"v0":5,"v1":6,"curve":60,"vis":true,"color":"576C46","bCoef":-2.4,"cMask":["ball"],"trait":"ballArea"},{"v0":7,"v1":8,"curve":5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":9,"v1":10,"curve":-5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":11,"v1":12,"curve":-5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":13,"v1":14,"curve":5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":15,"v1":16,"curve":-180,"trait":"line"},{"v0":17,"v1":18,"curve":180,"trait":"line"},{"v0":15,"v1":16,"curve":-90,"trait":"line"},{"v0":17,"v1":18,"curve":90,"trait":"line"},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"0a44eb","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":23,"v1":28,"curve":0,"vis":false,"color":"0a44eb","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":29,"v1":30,"curve":0,"vis":false,"color":"0a44eb","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":19,"v1":31,"curve":0,"vis":false,"color":"0a44eb","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":36,"v1":37,"curve":-62,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","x":-200},{"v0":39,"v1":40,"curve":62,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","x":-200},{"v0":41,"v1":42,"curve":54.6911986747,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","y":-50},{"v0":43,"v1":44,"curve":-54.6911986747,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","y":-50},{"v0":45,"v1":46,"curve":54.6911986747,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","y":-50},{"v0":47,"v1":48,"curve":-54.6911986747,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","y":-50},{"v0":49,"v1":50,"curve":-2.89366386094,"trait":"kickOffBarrier"},{"v0":51,"v1":52,"trait":"line","y":150},{"v0":53,"v1":54,"trait":"line","y":150},{"v0":55,"v1":56,"trait":"line","y":150},{"v0":57,"v1":58,"trait":"line","y":150},{"v0":59,"v1":60,"trait":"line","y":150},{"v0":61,"v1":62,"trait":"line","y":150},{"v0":63,"v1":64,"curve":175.694074422,"trait":"line","y":150},{"v0":65,"v1":66,"curve":0,"trait":"line","y":150},{"v0":67,"v1":68,"trait":"line","y":150},{"v0":69,"v1":70,"trait":"line","y":150},{"v0":71,"v1":72,"trait":"line","y":150},{"v0":73,"v1":74,"curve":0,"trait":"line","y":150},{"v0":75,"v1":76,"curve":0,"trait":"line","y":150},{"v0":77,"v1":78,"curve":-175.694074422,"trait":"line","y":150},{"v0":79,"v1":80,"curve":-180,"trait":"line"},{"v0":81,"v1":82,"curve":180,"trait":"line"},{"v0":79,"v1":80,"curve":-90,"trait":"line"},{"v0":81,"v1":82,"curve":90,"trait":"line"},{"v0":83,"v1":84,"curve":-180,"trait":"line"},{"v0":85,"v1":86,"curve":180,"trait":"line"},{"v0":83,"v1":84,"curve":-90,"trait":"line"},{"v0":85,"v1":86,"curve":90,"trait":"line"},{"v0":87,"v1":88,"curve":60,"vis":true,"color":"576C46","bCoef":-2.4,"cMask":["ball"],"trait":"ballArea"},{"v0":89,"v1":90,"curve":64.804683727205,"vis":true,"color":"576C46","bCoef":-2.4,"cMask":["ball"],"trait":"ballArea"},{"v0":91,"v1":92,"curve":-5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":93,"v1":94,"curve":-5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":95,"v1":96,"curve":5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":97,"v1":98,"curve":5,"color":"ffffff","bCoef":1,"trait":"sidegoalNet"},{"v0":99,"v1":100,"curve":-27.3426142644,"vis":true,"color":"eb0e0a","bCoef":-3,"cMask":["ball"],"trait":"line","x":-1220},{"v0":100,"v1":101,"vis":true,"bCoef":1,"cMask":["ball"]},{"v0":99,"v1":102,"vis":true,"bCoef":1,"cMask":["ball"]},{"v0":103,"v1":104,"curve":-55,"vis":true,"color":"0a44eb","bCoef":-3,"cMask":["ball"],"trait":"line","x":1220},{"v0":106,"v1":108,"vis":true,"color":"000000","bCoef":1,"cMask":["ball"]},{"v0":105,"v1":107,"vis":true,"color":"000000","bCoef":1,"cMask":["ball"]},{"v0":109,"v1":110,"curve":-55,"vis":true,"color":"0a44eb","bCoef":-3,"cMask":["ball"],"trait":"line","x":1220},{"v0":112,"v1":114,"vis":true,"color":"000000","bCoef":1,"cMask":["ball"]},{"v0":111,"v1":113,"vis":true,"color":"000000","bCoef":1,"cMask":["ball"]},{"v0":115,"v1":116,"curve":-27.3426142644,"vis":true,"color":"eb0e0a","bCoef":-3,"cMask":["ball"],"trait":"line","x":-1220},{"v0":116,"v1":117,"vis":true,"bCoef":1,"cMask":["ball"]},{"v0":115,"v1":118,"vis":true,"bCoef":1,"cMask":["ball"]},{"v0":119,"v1":120,"curve":-175.694074422,"trait":"line","y":150},{"v0":121,"v1":122,"curve":-92.90386693783,"color":"576C46","trait":"line","y":150},{"v0":123,"v1":124,"curve":-92.90386693783,"color":"576C46","trait":"line","y":150},{"v0":125,"v1":126,"curve":-92.853768677169,"color":"576C46","trait":"line","y":150},{"v0":127,"v1":128,"curve":-92.853768677169,"color":"576C46","trait":"line","y":150}],"goals":[{"p0":[-705,100],"p1":[-705,-100],"team":"red"},{"p0":[705,100],"p1":[705,-100],"team":"blue"}],"discs":[{"radius":4,"invMass":0,"pos":[-700,100],"color":"FF0000","bCoef":2,"trait":"goalPost"},{"radius":4,"pos":[-700,-100],"color":"FF0000","bCoef":2,"trait":"goalPost"},{"radius":4,"pos":[700,100],"color":"0000FF","bCoef":2,"trait":"goalPost"},{"radius":4,"pos":[700,-100],"color":"0000FF","bCoef":2,"trait":"goalPost"},{"pos":[-701,-341],"trait":"cornerflag"},{"pos":[-700,338],"trait":"cornerflag"},{"pos":[699,-341],"trait":"cornerflag"},{"pos":[700,338],"trait":"cornerflag"},{"radius":3,"pos":[-781,-107],"color":"FF0000","bCoef":3,"trait":"cornerflag"},{"radius":3,"pos":[-782,109],"color":"FF0000","bCoef":3,"trait":"cornerflag"},{"radius":3,"pos":[776,111],"color":"0000FF","bCoef":3,"trait":"cornerflag"},{"radius":3,"pos":[778,-107],"color":"0000FF","bCoef":3,"trait":"cornerflag"}],"planes":[{"normal":[0,1],"dist":-370,"bCoef":0,"trait":"ballArea"},{"normal":[0,-1],"dist":-369,"bCoef":0,"trait":"ballArea"},{"normal":[0,1],"dist":-610,"bCoef":0},{"normal":[0,-1],"dist":-610,"bCoef":0},{"normal":[1,0],"dist":-1300,"bCoef":0},{"normal":[-1,0],"dist":-1300,"bCoef":0.1},{"normal":[1,0],"dist":-774,"bCoef":0,"cMask":["ball"]},{"normal":[-1,0],"dist":-767,"bCoef":0,"cMask":["ball"]},{"normal":[0,1],"dist":-414,"bCoef":1.2},{"normal":[1,0],"dist":-824,"bCoef":1.2},{"normal":[-1,0],"dist":-815,"bCoef":1.2},{"normal":[0,-1],"dist":-421,"bCoef":1.2},{"normal":[-1,0],"dist":-767,"bCoef":0,"cMask":["ball"]}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":2},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.5,"color":"FFFF00","cGroup":[]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"},"tunnel":{"vis":true,"cMask":["red","blue"],"color":"000000"},"advertising":{"vis":true,"cMask":["red","blue"],"color":"333333"},"teambench":{"vis":true,"cMask":[],"color":"000000"},"manager":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"333333"},"physio":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"666666"},"redsubs":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"E56E56"},"bluesubs":{"radius":15,"vis":true,"cMask":["red","blue"],"invMass":0,"color":"5689E5"}}}';
	var real = '{"name":"Real Soccer 1.3D by RawR from HaxMaps","width":1300,"height":670,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180},"vertexes":[{"x":0,"y":700,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-700,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":1150,"y":255,"cMask":[]},{"x":840,"y":255,"cMask":[]},{"x":1150,"y":-255,"cMask":[]},{"x":840,"y":-255,"cMask":[]},{"x":1150,"y":155,"cMask":[]},{"x":1030,"y":155,"cMask":[]},{"x":1150,"y":-155,"cMask":[]},{"x":1030,"y":-155,"cMask":[]},{"x":840,"y":-135,"cMask":[]},{"x":840,"y":135,"cMask":[]},{"x":-1150,"y":-255,"cMask":[]},{"x":-840,"y":-255,"cMask":[]},{"x":-1150,"y":255,"cMask":[]},{"x":-840,"y":255,"cMask":[]},{"x":-1150,"y":-155,"cMask":[]},{"x":-1030,"y":-155,"cMask":[]},{"x":-1150,"y":155,"cMask":[]},{"x":-1030,"y":155,"cMask":[]},{"x":-840,"y":135,"cMask":[]},{"x":-840,"y":-135,"cMask":[]},{"x":935,"y":4,"cMask":[]},{"x":935,"y":-4,"cMask":[]},{"x":-935,"y":4,"cMask":[]},{"x":-935,"y":-4,"cMask":[]},{"x":-1150,"y":525,"bCoef":0,"cMask":["wall"]},{"x":-1075,"y":600,"bCoef":0,"cMask":["wall"]},{"x":-1075,"y":-600,"bCoef":0,"cMask":["wall"]},{"x":-1150,"y":-525,"bCoef":0,"cMask":["wall"]},{"x":1075,"y":600,"bCoef":0,"cMask":["wall"]},{"x":1150,"y":525,"bCoef":0,"cMask":["wall"]},{"x":1150,"y":-525,"bCoef":0,"cMask":["wall"]},{"x":1075,"y":-600,"bCoef":0,"cMask":["wall"]},{"x":-1150,"y":127,"cMask":[]},{"x":-1214,"y":124,"cMask":[]},{"x":-1150,"y":-127,"cMask":[]},{"x":-1214,"y":-124,"cMask":[]},{"x":1150,"y":127,"cMask":[]},{"x":1214,"y":124,"cMask":[]},{"x":1150,"y":-127,"cMask":[]},{"x":1214,"y":-124,"cMask":[]},{"x":0,"y":-4,"cMask":[]},{"x":0,"y":4,"cMask":[]},{"x":0,"y":-4,"cMask":[]},{"x":0,"y":4,"cMask":[]},{"x":-1214,"y":124,"cMask":[]},{"x":-1250,"y":150,"cMask":[]},{"x":-1214,"y":-124,"cMask":[]},{"x":-1250,"y":-150,"cMask":[]},{"x":1214,"y":124,"cMask":[]},{"x":1250,"y":150,"cMask":[]},{"x":1214,"y":-124,"cMask":[]},{"x":1250,"y":-150,"cMask":[]},{"x":-1185,"y":155,"bCoef":-4.5,"cMask":["ball"]},{"x":-1185,"y":255,"bCoef":-4.5,"cMask":["ball"]},{"x":1185,"y":155,"bCoef":-4.5,"cMask":["ball"]},{"x":1185,"y":255,"bCoef":-4.5,"cMask":["ball"]},{"x":-1185,"y":-155,"bCoef":-4.5,"cMask":["ball"]},{"x":-1185,"y":-255,"bCoef":-4.5,"cMask":["ball"]},{"x":1185,"y":-155,"bCoef":-4.5,"cMask":["ball"]},{"x":1185,"y":-255,"bCoef":-4.5,"cMask":["ball"]},{"x":1158,"y":-607,"bCoef":-2.45,"cMask":["ball"]},{"x":1187,"y":-578,"bCoef":-2.45,"cMask":["ball"]},{"x":1158,"y":607,"bCoef":-2.45,"cMask":["ball"]},{"x":1187,"y":578,"bCoef":-2.45,"cMask":["ball"]},{"x":-1158,"y":607,"bCoef":-2.45,"cMask":["ball"]},{"x":-1187,"y":578,"bCoef":-2.45,"cMask":["ball"]},{"x":-1158,"y":-607,"bCoef":-2.45,"cMask":["ball"]},{"x":-1187,"y":-578,"bCoef":-2.45,"cMask":["ball"]},{"x":-1190,"y":-255,"bCoef":-1,"cMask":["ball"]},{"x":-1180,"y":-255,"bCoef":-1,"cMask":["ball"]},{"x":-1190,"y":-155,"bCoef":-1,"cMask":["ball"]},{"x":-1180,"y":-155,"bCoef":-1,"cMask":["ball"]},{"x":-1190,"y":155,"bCoef":-1,"cMask":["ball"]},{"x":-1180,"y":155,"bCoef":-1,"cMask":["ball"]},{"x":-1190,"y":255,"bCoef":-1,"cMask":["ball"]},{"x":-1180,"y":255,"bCoef":-1,"cMask":["ball"]},{"x":1190,"y":-255,"bCoef":-1,"cMask":["ball"]},{"x":1180,"y":-255,"bCoef":-1,"cMask":["ball"]},{"x":1190,"y":-155,"bCoef":-1,"cMask":["ball"]},{"x":1180,"y":-155,"bCoef":-1,"cMask":["ball"]},{"x":1190,"y":255,"bCoef":-1,"cMask":["ball"]},{"x":1180,"y":255,"bCoef":-1,"cMask":["ball"]},{"x":1190,"y":155,"bCoef":-1,"cMask":["ball"]},{"x":1180,"y":155,"bCoef":-1,"cMask":["ball"]},{"x":-1148,"y":-525,"cMask":[]},{"x":1148,"y":-525,"cMask":[]},{"x":-1148,"y":525,"cMask":[]},{"x":1148,"y":525,"cMask":[]},{"x":-1150,"y":-260,"cMask":[]},{"x":-840,"y":-600,"cMask":[]},{"x":-1150,"y":260,"cMask":[]},{"x":-840,"y":600,"cMask":[]},{"x":-840,"y":-1150,"cMask":[]},{"x":1150,"y":-260,"cMask":[]},{"x":840,"y":-600,"cMask":[]},{"x":1150,"y":260,"cMask":[]},{"x":840,"y":600,"cMask":[]}],"segments":[{"v0":37,"v1":39,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":43,"v1":41,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"cMask":[],"color":"C7E6BD"},{"v0":5,"v1":7,"cMask":[],"color":"C7E6BD"},{"v0":6,"v1":7,"cMask":[],"color":"C7E6BD"},{"v0":8,"v1":9,"cMask":[],"color":"C7E6BD"},{"v0":9,"v1":11,"cMask":[],"color":"C7E6BD"},{"v0":10,"v1":11,"cMask":[],"color":"C7E6BD"},{"v0":13,"v1":12,"curve":130,"curveF":0.4663076581549986,"cMask":[],"color":"C7E6BD"},{"v0":14,"v1":15,"cMask":[],"color":"C7E6BD"},{"v0":15,"v1":17,"cMask":[],"color":"C7E6BD"},{"v0":16,"v1":17,"cMask":[],"color":"C7E6BD"},{"v0":18,"v1":19,"cMask":[],"color":"C7E6BD"},{"v0":19,"v1":21,"cMask":[],"color":"C7E6BD"},{"v0":20,"v1":21,"cMask":[],"color":"C7E6BD"},{"v0":23,"v1":22,"curve":130,"curveF":0.4663076581549986,"cMask":[],"color":"C7E6BD"},{"v0":25,"v1":24,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":27,"v1":26,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":24,"v1":25,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":26,"v1":27,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":24,"v1":25,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":26,"v1":27,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":25,"v1":24,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":27,"v1":26,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":24,"v1":25,"cMask":[],"color":"C7E6BD"},{"v0":26,"v1":27,"cMask":[],"color":"C7E6BD"},{"v0":28,"v1":29,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C7E6BD"},{"v0":30,"v1":31,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C7E6BD"},{"v0":32,"v1":33,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C7E6BD"},{"v0":34,"v1":35,"bCoef":0,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C7E6BD"},{"v0":36,"v1":37,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":39,"v1":38,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":41,"v1":40,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":45,"v1":44,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":46,"v1":47,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":45,"v1":44,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":46,"v1":47,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"C7E6BD"},{"v0":48,"v1":49,"cMask":[],"color":"FFFFFF"},{"v0":50,"v1":51,"cMask":[],"color":"FFFFFF"},{"v0":52,"v1":53,"cMask":[],"color":"FFFFFF"},{"v0":54,"v1":55,"cMask":[],"color":"FFFFFF"},{"v0":56,"v1":57,"bCoef":-4.7,"curve":40,"curveF":2.7474774194546225,"cMask":["ball"],"color":"BEB86C"},{"v0":59,"v1":58,"bCoef":-4.7,"curve":40,"curveF":2.7474774194546225,"cMask":["ball"],"color":"BEB86C"},{"v0":61,"v1":60,"bCoef":-4.7,"curve":40,"curveF":2.7474774194546225,"cMask":["ball"],"color":"BEB86C"},{"v0":62,"v1":63,"bCoef":-4.7,"curve":40,"curveF":2.7474774194546225,"cMask":["ball"],"color":"BEB86C"},{"v0":65,"v1":64,"bCoef":-2.45,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["ball"],"color":"BEB86C"},{"v0":66,"v1":67,"bCoef":-2.45,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["ball"],"color":"BEB86C"},{"v0":69,"v1":68,"bCoef":-2.45,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["ball"],"color":"BEB86C"},{"v0":70,"v1":71,"bCoef":-2.45,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["ball"],"color":"BEB86C"},{"v0":0,"v1":1,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":1,"v1":2,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":2,"v1":1,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":2,"v1":3,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":72,"v1":73,"bCoef":-1,"cMask":["ball"]},{"v0":74,"v1":75,"bCoef":-1,"cMask":["ball"]},{"v0":76,"v1":77,"bCoef":-1,"cMask":["ball"]},{"v0":78,"v1":79,"bCoef":-1,"cMask":["ball"]},{"v0":80,"v1":81,"bCoef":-1,"cMask":["ball"]},{"v0":82,"v1":83,"bCoef":-1,"cMask":["ball"]},{"v0":84,"v1":85,"bCoef":-1,"cMask":["ball"]},{"v0":86,"v1":87,"bCoef":-1,"cMask":["ball"]},{"v0":88,"v1":89,"cMask":[],"color":"5E844D"},{"v0":90,"v1":91,"cMask":[],"color":"5E844D"},{"v0":93,"v1":92,"curve":100,"curveF":0.83909963117728,"cMask":[],"color":"5E844D"},{"v0":94,"v1":95,"curve":100,"curveF":0.83909963117728,"cMask":[],"color":"5E844D"},{"v0":97,"v1":98,"curve":100,"curveF":0.83909963117728,"cMask":[],"color":"5E844D"},{"v0":100,"v1":99,"curve":100,"curveF":0.83909963117728,"cMask":[],"color":"5E844D"}],"planes":[{"normal":[0,1],"dist":-635,"bCoef":0,"cMask":["ball"]},{"normal":[0,-1],"dist":-635,"bCoef":0,"cMask":["ball"]},{"normal":[0,1],"dist":-670,"bCoef":0},{"normal":[0,-1],"dist":-670,"bCoef":0},{"normal":[1,0],"dist":-1300,"bCoef":0},{"normal":[-1,0],"dist":-1300,"bCoef":0.1},{"normal":[1,0],"dist":-1214,"bCoef":0,"cMask":["ball"]},{"normal":[-1,0],"dist":-1214,"bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1160,-124],"p1":[-1160,124],"team":"red"},{"p0":[1160,124],"p1":[1160,-124],"team":"blue"}],"discs":[{"radius":9.8,"invMass":1.05,"cGroup":["ball","kick","score"]},{"pos":[-1150,127],"radius":5,"invMass":0,"color":"FF0000"},{"pos":[-1150,-127],"radius":5,"invMass":0,"color":"FF0000"},{"pos":[1150,127],"radius":5,"invMass":0,"color":"FF"},{"pos":[1150,-127],"radius":5,"invMass":0,"color":"FF"},{"pos":[-1250,150],"radius":3,"bCoef":3,"invMass":0,"color":"FF0000","cMask":[]},{"pos":[-1250,-150],"radius":3,"bCoef":3,"invMass":0,"color":"FF0000","cMask":[]},{"pos":[1250,150],"radius":3,"bCoef":3,"invMass":0,"color":"FF","cMask":[]},{"pos":[1250,-150],"radius":3,"bCoef":3,"invMass":0,"color":"FF","cMask":[]},{"pos":[-1150,-600],"radius":2,"bCoef":-0.1,"invMass":0,"cMask":["ball"]},{"pos":[-1150,600],"radius":2,"bCoef":-0.1,"invMass":0,"cMask":["ball"]},{"pos":[1150,-600],"radius":2,"bCoef":-0.1,"invMass":0,"cMask":["ball"]},{"pos":[1150,600],"radius":2,"bCoef":-0.1,"invMass":0,"cMask":["ball"]}],"playerPhysics":{"acceleration":0.12,"kickStrength":5.65},"ballPhysics":"disc0","spawnDistance":500}'
	var penred = '{"name":"\u1d18\u1d07\u0274\u1d00\u029f\u1d1b\u028f \u0280\u1d07\u1d05 \u1d1b\u1d07\u1d00\u1d0d \ud83d\udd34 \u007c \ud835\udc06\ud835\udc0b\ud835\udc07","width":560,"height":700,"spawnDistance":460,"bg":{"type":"grass","width":700,"height":550,"kickOffRadius":10,"cornerRadius":0},"vertexes":[{"x":370,"y":685,"bCoef":0,"trait":"ballArea"},{"x":370,"y":-682,"bCoef":0,"trait":"ballArea","vis":false},{"x":-10,"y":-190,"trait":"penArea","curve":0},{"x":-10,"y":190,"trait":"penArea"},{"x":250,"y":-250,"trait":"line"},{"x":250,"y":250,"trait":"line"},{"x":0,"y":250,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":0,"y":194,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":-10,"y":-685,"bCoef":0,"cMask":["red"],"trait":"penArea","curve":0},{"x":-570,"y":-685,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"718c5a","vis":false},{"x":-570,"y":685,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"718c5a","vis":false},{"x":-10,"y":685,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":0,"y":125,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":0,"y":64,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":-61,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":-130,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0,"y":-190,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":-255,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":0,"y":-255,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":0,"y":-319,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":-383,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":-445,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":0,"y":449,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":382,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0,"y":320,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":250,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":250,"y":254,"trait":"line"},{"x":-61,"y":254,"trait":"line"},{"x":250,"y":-246,"trait":"line"},{"x":-61,"y":-246,"trait":"line"},{"x":249,"y":154,"trait":"line"},{"x":129,"y":154,"trait":"line"},{"x":249,"y":-146,"trait":"line"},{"x":129,"y":-146,"trait":"line"},{"x":-61,"y":-126,"trait":"line","curve":-130},{"x":-61,"y":134,"trait":"line","curve":-130},{"x":269,"y":154,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":269,"y":254,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":269,"y":-146,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":40,"color":"576C46"},{"x":269,"y":-246,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":40,"color":"576C46"},{"x":276,"y":-246,"bCoef":0,"cMask":["ball"]},{"x":276,"y":-146,"cMask":["ball"]},{"x":269,"y":-146,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":269,"y":-246,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":276,"y":254,"bCoef":0,"cMask":["ball"]},{"x":276,"y":154,"cMask":["ball"]},{"x":269,"y":254,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":269,"y":154,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":250,"y":264,"trait":"line","color":"638750"},{"x":-81,"y":-546,"trait":"line","curve":-90,"color":"638750"},{"x":250,"y":-256,"trait":"line","curve":-90,"color":"638750"},{"x":249,"y":-471,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":-471,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":250,"y":479,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":479,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":-550,"trait":"line"},{"x":-2051,"y":550,"trait":"line"},{"x":250,"y":550,"trait":"line"},{"x":250,"y":-550,"trait":"line"},{"x":0,"y":548,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":510,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0,"y":449,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":0,"y":-445,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":-514,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0,"y":-548,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2,"y":247,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":2,"y":191,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":2,"y":122,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":2,"y":61,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":-64,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":-133,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2,"y":-193,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":-258,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":2,"y":-258,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":2,"y":-322,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":-386,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":-448,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":2,"y":446,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":379,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2,"y":317,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":247,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":2,"y":548,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":507,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2,"y":446,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":2,"y":-448,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":-517,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2,"y":-548,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2,"y":253,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":-2,"y":197,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":-2,"y":128,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-2,"y":67,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":-59,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":-127,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2,"y":-187,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":-252,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-2,"y":-252,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-2,"y":-316,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":-380,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":-442,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-2,"y":452,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":385,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2,"y":323,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":253,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-2,"y":548,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":513,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2,"y":452,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-625,"y":-682,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-646,"y":685,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":250,"y":254,"trait":"line"},{"x":-61,"y":254,"trait":"line"},{"x":250,"y":-246,"trait":"line"},{"x":-61,"y":-246,"trait":"line"},{"x":0,"y":64,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":3,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":61,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":0,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":67,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":6,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0,"y":2.2692307692308,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":0,"y":-61.076923076923,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2,"y":-0.84615384615384,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":2,"y":-64.192307692308,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2,"y":5.3846153846154,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-2,"y":-57.961538461538,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-81,"y":550,"trait":"line","color":"638750"},{"x":250,"y":264,"trait":"line","color":"638750"},{"x":-81,"y":-546,"trait":"line","curve":-90,"color":"638750"},{"x":250,"y":-256,"trait":"line","curve":-90,"color":"638750"},{"x":249,"y":-471,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":-471,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":250,"y":479,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":479,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-2051,"y":-550,"trait":"line","curve":0},{"x":-2051,"y":550,"trait":"line","curve":0},{"x":250,"y":550,"trait":"line","curve":0},{"x":250,"y":-550,"trait":"line","curve":0},{"x":0.064692442521618,"y":-10.621259859396,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":0.064692442521618,"y":10.935375063751,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":1.8610786861172,"y":9.1389888201552,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0},{"x":0.96288556431944,"y":-8.8248736158008,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0},{"x":1.8610786861172,"y":6.4444094547618,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":0.064692442521618,"y":1.055250723975,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-5.3244662882652,"y":4.6480232111662,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":7.2502374169041,"y":2.8516369675706,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":5.4538511733084,"y":-5.2321011286096,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":0,"y":-15,"trait":"powerboost","bCoef":-2.4},{"x":0,"y":15,"trait":"powerboost","bCoef":-2.4},{"x":250,"y":-114.92552225676,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7","curve":0},{"x":312.8375029632,"y":-114.92552225676,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":250.14312782257,"y":122.05779951815,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":312.91459621899,"y":122.05779951815,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":250,"y":122.05779951815,"bCoef":0,"cMask":["wall"],"curve":0,"color":"b3d4a7"},{"x":359,"y":-142.867722739,"bCoef":0,"cMask":["wall"],"color":"ffffff","curve":0},{"x":359.5,"y":150,"bCoef":0,"cMask":["wall"],"color":"ffffff","curve":0},{"x":313.8375029632,"y":-112.92552225676,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":360,"y":-140.867722739,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":311.8375029632,"y":-116.92552225676,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":358,"y":-144.867722739,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":314.91459621899,"y":120.05779951815,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":361.5,"y":148,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":313.91459621899,"y":125.05779951815,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":360.5,"y":153,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":250,"y":-114,"bCoef":1,"cMask":["blue","ball"],"trait":"line","color":"C7E6BD","curve":0},{"x":313,"y":-114,"bCoef":1,"cMask":["blue","ball"],"trait":"line","color":"ffffff","curve":0},{"x":250,"y":122,"bCoef":0,"cMask":["blue","ball"],"trait":"line","color":"ffffff","curve":0},{"x":313,"y":122,"bCoef":0,"cMask":["blue","ball"],"trait":"line","color":"ffffff","curve":0},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":420,"y":-593,"vis":true,"color":"779668"},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":590,"y":-595,"curve":0,"vis":true,"color":"779668"},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":420,"y":595,"vis":true,"color":"779668"},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":590,"y":595,"curve":0,"vis":true,"color":"779668"},{"bCoef":-2.4,"cMask":["blue"],"trait":"gkArea","x":333,"y":103.09367650459},{"bCoef":-2.4,"cMask":["blue"],"trait":"gkArea","x":333,"y":-96.400186432926},{"x":-429,"y":-685,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"718c5a","vis":true},{"x":-429,"y":685,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"718c5a","vis":true},{"bCoef":0,"cMask":["blue"],"trait":"penArea","x":-428.5,"y":-15,"color":"769667","vis":true},{"bCoef":0,"cMask":["blue"],"trait":"penArea","x":-428.5,"y":15,"color":"769667","vis":true},{"bCoef":0,"cMask":["red"],"trait":"penArea","x":-381.5,"y":15,"color":"769667","vis":true},{"bCoef":0,"cMask":["red"],"trait":"penArea","x":-382.5,"y":-15,"color":"769667","vis":true},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":420,"y":-15,"vis":true,"color":"779668"},{"cMask":["blue"],"trait":"gkArea","x":420,"y":15,"vis":true,"color":"779668","bCoef":1},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":333,"y":-15,"vis":true,"color":"779668"},{"bCoef":1,"cMask":["blue"],"trait":"gkArea","x":333,"y":15,"vis":true,"color":"779668"},{"x":533,"y":-220.88888549805,"bCoef":0,"cMask":["red"],"color":"577b47","curve":0,"vis":true},{"x":488,"y":-220.88888549805,"bCoef":0,"cMask":["red"],"color":"577b47","vis":true},{"x":581,"y":-590,"bCoef":0,"cMask":["blue"]},{"x":581,"y":590,"bCoef":0,"cMask":["blue"]},{"cMask":["red"],"x":439.015625,"y":-2.484375,"color":"5f874d"},{"cMask":["red"],"x":387.015625,"y":-2.484375,"color":"5f874d"},{"cMask":["red"],"x":396.015625,"y":-9.484375,"color":"5f874d"},{"cMask":["red"],"x":395.015625,"y":5.515625,"color":"5f874d"},{"cMask":["red"],"x":467.015625,"y":9,"color":"b2e09d"},{"cMask":["red"],"x":474.015625,"y":-15,"color":"b2e09d"},{"cMask":["red"],"x":483.015625,"y":9,"color":"b2e09d"},{"cMask":["red"],"x":470.015625,"y":-0.484375,"color":"b2e09d"},{"cMask":["red"],"x":480.015625,"y":-0.484375,"color":"b2e09d"},{"cMask":["red"],"x":492.015625,"y":9,"color":"b2e09d"},{"cMask":["red"],"x":492.015625,"y":-15,"color":"b2e09d"},{"cMask":["red"],"x":497.015625,"y":-3.484375,"color":"b2e09d"},{"cMask":["red"],"x":505.015625,"y":9,"color":"b2e09d"},{"cMask":["red"],"x":524.015625,"y":-15,"color":"b2e09d"},{"cMask":["red"],"x":523.015625,"y":9,"color":"b2e09d"},{"cMask":["red"],"x":522.015625,"y":-6.484375,"curve":0,"color":"b2e09d"},{"cMask":["red"],"x":543.015625,"y":9,"curve":0,"color":"b2e09d"},{"bCoef":0,"cMask":["red"],"x":518.515625,"y":-235.37326049805,"curve":0,"vis":true,"color":"577b47"},{"bCoef":0,"cMask":["red"],"x":518.515625,"y":-205.37326049805,"vis":true,"color":"577b47"},{"x":251,"y":-523,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7"},{"x":224,"y":-550,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"b3d4a7"},{"x":261,"y":-548,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":-60,"color":"576C46"},{"x":289,"y":-528,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":-60,"color":"576C46"},{"x":252,"y":551,"trait":"line","color":"b3d4a7"},{"x":249,"y":-549,"trait":"line","color":"b3d4a7"},{"x":249.96866554743,"y":-567.96866462065,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":250.06946020197,"y":-549.47284551345,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":248.06948989935,"y":-549.46194649273,"bCoef":0,"cMask":["wall"]},{"x":247.96869524482,"y":-567.95776559993,"bCoef":0,"cMask":["wall"]},{"x":258,"y":-572,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":268,"y":-572,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":249,"y":-572,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"x":258,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":249,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":268,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"y":-442,"color":"6A9158"},{"bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"y":-511,"color":"6A9158"},{"bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"y":-548,"color":"7C9F6D"},{"bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"y":-514,"color":"7C9F6D"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":552,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":552,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":548,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":548,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":-550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":-550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":-551,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":-551,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":1000,"y":-549,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":251,"y":-549,"color":"718c5a"},{"x":225,"y":550,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7"},{"x":249,"y":525,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7"},{"x":262,"y":550,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":60,"color":"576C46"},{"x":290,"y":530,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":60,"color":"576C46"},{"x":250.73968267624,"y":548.92635788631,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":254.08526210564,"y":530.1424902194,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":256.00107836107,"y":530.71664009134,"bCoef":0,"cMask":["wall"],"color":"6f965e"},{"x":252.70402466899,"y":549.30233732129,"bCoef":0,"cMask":["wall"],"color":"6f965e"},{"x":262.66785179485,"y":529.07127847732,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":272.27131542127,"y":531.85937574538,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":254.02473453108,"y":526.56199093608,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"x":261.66413507663,"y":532.52853124432,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":253.02101781286,"y":530.01924370307,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":271.26759870305,"y":535.31662851238,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"x":234,"y":-115,"bCoef":1,"cMask":["blue"],"cGroup":["redKO"],"vis":false,"curve":0},{"x":234,"y":120,"bCoef":1,"cMask":["blue"],"cGroup":["redKO"],"vis":false,"curve":0},{"x":234,"y":-115,"bCoef":1,"cMask":["blue"],"cGroup":["blueKO"],"vis":false,"curve":0},{"x":234,"y":120,"bCoef":1,"cMask":["blue"],"cGroup":["blueKO"],"vis":false,"curve":0}],"segments":[{"v0":0,"v1":1,"bCoef":0,"trait":"ballArea"},{"v0":2,"v1":3,"curve":50,"trait":"penArea"},{"v0":4,"v1":5,"trait":"line"},{"v0":6,"v1":7,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":2,"v1":8,"curve":0,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"v0":8,"v1":9,"curve":0,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea","y":-685},{"v0":9,"v1":10,"curve":0,"vis":false,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":-570,"color":"769667"},{"v0":10,"v1":11,"curve":0,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea","y":685},{"v0":11,"v1":3,"curve":0,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"v0":7,"v1":12,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":12,"v1":13,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":14,"v1":15,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":15,"v1":16,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":16,"v1":17,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":18,"v1":19,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":19,"v1":20,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":22,"v1":23,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":23,"v1":24,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":24,"v1":25,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":27,"v1":29,"trait":"line","x":840},{"v0":30,"v1":31,"trait":"line","y":150},{"v0":31,"v1":33,"trait":"line","x":1030},{"v0":32,"v1":33,"trait":"line","y":-150},{"v0":34,"v1":35,"curve":-130,"trait":"line","x":840},{"v0":36,"v1":37,"curve":-40,"vis":true,"color":"576C46","bCoef":-4.7,"cMask":["ball"],"trait":"line","x":1220},{"v0":38,"v1":39,"curve":40,"vis":true,"color":"576C46","bCoef":-4.7,"cMask":["ball"],"trait":"line","x":1220},{"v0":45,"v1":47,"vis":true,"color":"000000","cMask":["ball"]},{"v0":44,"v1":46,"vis":true,"color":"000000","cMask":["ball"]},{"v0":40,"v1":43,"vis":true,"color":"000000","cMask":["ball"]},{"v0":41,"v1":42,"vis":true,"color":"000000","cMask":["ball"]},{"v0":55,"v1":56,"vis":true,"color":"C7E6BD","trait":"line"},{"v0":59,"v1":60,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":62,"v1":63,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":63,"v1":64,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":65,"v1":66,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":66,"v1":67,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":67,"v1":68,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":69,"v1":70,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":71,"v1":72,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":73,"v1":74,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":75,"v1":76,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":77,"v1":78,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":79,"v1":80,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":81,"v1":82,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":84,"v1":85,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":85,"v1":86,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":87,"v1":88,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":88,"v1":89,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":89,"v1":90,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":91,"v1":92,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":93,"v1":94,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":95,"v1":96,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":97,"v1":98,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":99,"v1":100,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":101,"v1":102,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":103,"v1":104,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":1,"v1":106,"vis":false,"color":"C7E6BD","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":107,"vis":false,"color":"C7E6BD","bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"v0":108,"v1":109,"trait":"line","y":250},{"v0":110,"v1":111,"trait":"line","y":-250},{"v0":112,"v1":113,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":114,"v1":115,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":116,"v1":117,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":118,"v1":119,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":120,"v1":121,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":122,"v1":123,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":124,"v1":125,"curve":90,"vis":true,"color":"638750","trait":"line"},{"v0":126,"v1":127,"curve":-90,"vis":true,"color":"638750","trait":"line"},{"v0":128,"v1":129,"curve":0,"vis":true,"color":"638750","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":130,"v1":131,"curve":0,"vis":true,"color":"638750","bCoef":0,"cMask":["wall"],"trait":"line","y":475},{"v0":133,"v1":134,"vis":true,"color":"C7E6BD","trait":"line","y":550,"curve":0},{"v0":132,"v1":135,"vis":true,"color":"C7E6BD","trait":"line","y":-550,"curve":0},{"v0":134,"v1":135,"vis":true,"color":"C7E6BD","trait":"line","x":250},{"v0":136,"v1":137,"curve":-180,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":136,"v1":137,"curve":180,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":136,"v1":137,"curve":163.40571006033,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":136,"v1":137,"curve":81.202589290009,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":136,"v1":137,"curve":-159.68456206984,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":136,"v1":138,"curve":158.47492555372,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":110.01595960288,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":139,"v1":140,"curve":-165.7499673022,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":139,"v1":141,"curve":-140.35507085927,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":139,"v1":141,"curve":46.397181027297,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":139,"v1":142,"curve":32.119974614321,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":139,"v1":138,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":143,"v1":142,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":144,"v1":142,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":145,"v1":146,"curve":180,"trait":"powerboost","bCoef":-2.4},{"v0":147,"v1":151,"curve":0,"vis":true,"color":"b3d4a7","bCoef":0,"cMask":["wall"],"x":1150},{"v0":148,"v1":152,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"cMask":["wall"]},{"v0":150,"v1":153,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"cMask":["wall"]},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":158,"v1":159,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":163,"v1":165,"curve":0,"color":"ffffff","bCoef":0,"cMask":["blue","ball"],"trait":"reargoalNetleft","x":-242},{"v0":162,"v1":163,"curve":0,"color":"ffffff","bCoef":1,"cMask":["blue","ball"],"trait":"sidegoalNet"},{"v0":164,"v1":165,"curve":0,"color":"ffffff","cMask":["blue","ball"],"trait":"sidegoalNet"},{"vis":true,"bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":166,"v1":167,"color":"779668"},{"vis":true,"bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":168,"v1":169,"color":"779668"},{"vis":true,"bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":169,"v1":167,"curve":0,"color":"779668","x":590},{"vis":false,"bCoef":-2.4,"cMask":["blue"],"trait":"gkArea","v0":170,"v1":171},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":172,"v1":174,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":173,"v1":175,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red"],"trait":"penArea","v0":175,"v1":176,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red"],"trait":"penArea","v0":174,"v1":177,"color":"769667"},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":166,"v1":178,"x":420},{"vis":true,"cMask":["blue"],"trait":"gkArea","v0":168,"v1":179,"color":"779668","bCoef":1,"x":420},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":178,"v1":180},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["blue"],"trait":"gkArea","v0":179,"v1":181},{"v0":182,"v1":183,"color":"577b47","bCoef":1000000,"cMask":["red"],"vis":true},{"v0":184,"v1":185,"vis":false,"bCoef":1000000,"cMask":["blue"]},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":172,"v1":9},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":173,"v1":10},{"curve":0,"vis":false,"color":"6e8a61","bCoef":0,"cMask":["blue"],"trait":"penArea","v0":175,"v1":174},{"color":"5f874d","cMask":["red"],"v0":186,"v1":187},{"color":"5f874d","cMask":["red"],"v0":187,"v1":188},{"color":"5f874d","cMask":["red"],"v0":187,"v1":189},{"color":"b2e09d","cMask":["red"],"v0":190,"v1":191},{"color":"b2e09d","cMask":["red"],"v0":191,"v1":192},{"color":"b2e09d","cMask":["red"],"v0":193,"v1":194},{"color":"b2e09d","cMask":["red"],"v0":195,"v1":196},{"color":"b2e09d","cMask":["red"],"v0":196,"v1":197,"curve":200.98295402466},{"curve":20.609692937532,"color":"b2e09d","cMask":["red"],"v0":197,"v1":198},{"curve":185.205124405,"color":"b2e09d","cMask":["red"],"v0":199,"v1":200},{"curve":172.3400281831,"color":"b2e09d","cMask":["red"],"v0":200,"v1":199},{"curve":0,"color":"b2e09d","cMask":["red"],"v0":201,"v1":202},{"curve":0,"vis":true,"bCoef":0,"cMask":["red"],"v0":182,"v1":203,"color":"577b47"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red"],"v0":182,"v1":204,"color":"577b47"},{"v0":205,"v1":206,"curve":90,"color":"b3d4a7","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":207,"v1":208,"curve":-60,"vis":true,"color":"576C46","bCoef":-2.45,"cMask":["ball"],"trait":"line"},{"v0":211,"v1":212,"curve":0,"vis":true,"color":"D7D7D9","bCoef":0,"cMask":["wall"],"trait":"cornerflag"},{"v0":213,"v1":214,"curve":0,"vis":true,"color":"708a5a","bCoef":0,"cMask":["wall"],"x":717},{"v0":215,"v1":216,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":215,"v1":216,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":216,"v1":216,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"x":-1148},{"v0":215,"v1":217,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":219,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":218,"v1":220,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","v0":221,"v1":222,"x":-2},{"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","v0":223,"v1":224,"x":-2},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":225,"v1":226},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":227,"v1":228,"y":552},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":229,"v1":230,"y":548},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":231,"v1":232,"y":-550},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":233,"v1":234,"y":-551},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":235,"v1":236,"y":-549},{"v0":237,"v1":238,"curve":90,"color":"b3d4a7","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":239,"v1":240,"curve":60,"vis":true,"color":"576C46","bCoef":-2.45,"cMask":["ball"],"trait":"line"},{"v0":241,"v1":242,"curve":0,"vis":true,"color":"D7D7D9","bCoef":0,"cMask":["wall"],"trait":"cornerflag"},{"v0":243,"v1":244,"curve":0,"vis":true,"color":"6f965e","bCoef":0,"cMask":["wall"],"x":717},{"v0":245,"v1":246,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":245,"v1":246,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":246,"v1":246,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"x":-1148},{"v0":245,"v1":247,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":248,"v1":249,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":248,"v1":249,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":249,"v1":249,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":248,"v1":250,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":251,"v1":252,"curve":0,"vis":false,"color":"C7E6BD","bCoef":1,"cMask":["blue"],"cGroup":["redKO"],"x":234},{"v0":253,"v1":254,"curve":0,"vis":false,"color":"C7E6BD","bCoef":1,"cMask":["blue"],"cGroup":["blueKO"],"x":234}],"goals":[{"p0":[254.47413299502,-116.97296260999],"p1":[116.91333071446,-96.396720055265],"team":"red"},{"p0":[251.17034377594,123.18225745334],"p1":[126.92635321833,99.724025788123],"team":"red"},{"p0":[129.604892169,-100.760187884],"p1":[-44.7798062387,-2.83176013576],"team":"red"},{"p0":[128.569187782,99.1577676439],"p1":[-44.7957215326,-0.564888851426],"team":"red"},{"p0":[260,121.16891891892],"p1":[260,-111.98923923924],"team":"blue"}],"discs":[{"radius":5,"pos":[250,-113],"trait":"goalPost"},{"radius":5,"pos":[250,122],"trait":"goalPost"},{"radius":3,"invMass":0,"pos":[360.5,150],"color":"4a4e52"},{"radius":3,"invMass":0,"pos":[359.5,-142],"color":"4a4e52"},{"radius":1.5,"pos":[250.44570276052,-549.17325861291],"color":"13181C","trait":"cornerflag","curve":0},{"radius":1.5,"pos":[249.85185940696,550.61632811312],"color":"13181C","trait":"cornerflag","curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"gkArea":{"vis":false,"bCoef":1,"cMask":["blue"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]},"line":{"vis":true,"color":"C7E6BD","cMask":[]},"goalnet":{"vis":true,"bCoef":0.1,"color":"C7E6BD","cMask":["ball","red"]},"powerboost":{"vis":false,"bCoef":-2.7,"cMask":["ball"],"color":"C7E6BD"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"color":"FFFFFF"}},"planes":[{"normal":[1,0],"dist":-560,"bCoef":0},{"normal":[-1,0],"dist":-591,"bCoef":0},{"normal":[0,1],"dist":-583,"bCoef":0,"trait":"ballArea"},{"normal":[0,-1],"dist":-578,"bCoef":0,"trait":"ballArea"},{"normal":[-1,0],"dist":-314,"bCoef":0,"cMask":["ball"]}]}'
	var penblue = '{"name":"\u1d18\u1d07\u0274\u1d00\u029f\u1d1b\u028f \u0299\u029f\u1d1c\u1d07 \u1d1b\u1d07\u1d00\u1d0d \ud83d\udd35 \u007c \ud835\udc06\ud835\udc0b\ud835\udc07","width":560,"height":700,"spawnDistance":460,"bg":{"type":"grass","width":700,"height":550,"kickOffRadius":10,"cornerRadius":0},"vertexes":[{"x":-369.28556285976,"y":-684.33509893402,"bCoef":0,"trait":"ballArea","curve":0},{"x":-370.64960675079,"y":682.66422051873,"bCoef":0,"trait":"ballArea","vis":false,"curve":0},{"x":9.8411401302855,"y":191.04364371393,"trait":"penArea","curve":0,"cMask":["blue"]},{"x":10.220318388214,"y":-188.95616710688,"trait":"penArea","cMask":["blue"]},{"x":-250.21860068257,"y":250.7841760881,"trait":"line"},{"x":-249.71968192214,"y":-249.21557499191,"trait":"line"},{"x":0.28019361786578,"y":-248.96611561169,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":0.22431471669736,"y":-192.96614349073,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":9.3472105574574,"y":686.04339728313,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0},{"x":569.34693176707,"y":686.60218629482,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"769667","vis":true},{"x":570.71396917065,"y":-683.3971316644,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"769667","vis":true},{"x":10.714247961042,"y":-683.95592067609,"bCoef":0,"cMask":["red","blue"],"trait":"penArea"},{"x":0.15546392775769,"y":-127,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":0.09459583898494,"y":-62.966208209926,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-0.030133851123153,"y":62.033729560076,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-0.09898464006282,"y":128,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-0.1588548913147,"y":191.03366533872,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-0.22371433017091,"y":256.03363297912,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-0.22371433017091,"y":256.03363297912,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-0.28757593150626,"y":320.03360111736,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-0.3514375328416,"y":384.0335692556,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-0.41330345913521,"y":446.03353838952,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":0.47876328451787,"y":-447.96601654153,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":0.41190817061993,"y":-384,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0.35004224432631,"y":-318.96608076289,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0.28019361786578,"y":-248.96611561169,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-249.71569057206,"y":-253.21557300055,"trait":"line"},{"x":61.28415459971,"y":-252.90524553156,"trait":"line"},{"x":-250.21460933249,"y":246.78417807946,"trait":"line"},{"x":60.785235839278,"y":247.09450554845,"trait":"line"},{"x":-248.81547482198,"y":-153.21462494702,"trait":"line"},{"x":-128.81553456278,"y":-153.09488444452,"trait":"line"},{"x":-249.11482607824,"y":146.78522570098,"trait":"line"},{"x":-129.11488581904,"y":146.90496620349,"trait":"line"},{"x":60.904976341782,"y":127.09456528925,"trait":"line","curve":-130},{"x":61.164414097207,"y":-132.90530527235,"trait":"line","curve":-130},{"x":-268.81546486518,"y":-153.23458169744,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-268.7156811131,"y":-253.23453191344,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-269.11481612144,"y":146.76526895056,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":40,"color":"576C46"},{"x":-269.21459987353,"y":246.76521916657,"bCoef":-4.5,"cMask":["ball"],"trait":"line","curve":40,"color":"576C46"},{"x":-276.21459638865,"y":246.75823430392,"bCoef":0,"cMask":["ball"]},{"x":-276.11481263656,"y":146.75828408792,"cMask":["ball"]},{"x":-269.11481612144,"y":146.76526895056,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-269.21459987353,"y":246.76521916657,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-275.71567762822,"y":-253.24151677609,"bCoef":0,"cMask":["ball"]},{"x":-275.8154613803,"y":-153.24156656009,"cMask":["ball"]},{"x":-268.7156811131,"y":-253.23453191344,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-268.81546486518,"y":-153.23458169744,"bCoef":-5,"cMask":["ball"],"trait":"line","curve":-40,"color":"576C46"},{"x":-249.70571219685,"y":-263.21556802215,"trait":"line","color":"638750"},{"x":80.485874626219,"y":547.11431294687,"trait":"line","curve":-90,"color":"638750"},{"x":-250.2245877077,"y":256.78417310106,"trait":"line","curve":-90,"color":"638750"},{"x":-249.49117712986,"y":-478.21546098655,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":2051.5076773403,"y":-475.91943685104,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":2050.4809025314,"y":553.08005087162,"trait":"line"},{"x":2051.5785238043,"y":-546.9194015044,"trait":"line"},{"x":-249.42033066588,"y":-549.21542563991,"trait":"line"},{"x":-250.51795193883,"y":550.78402673611,"trait":"line"},{"x":0.57754919908348,"y":-546.96596725537,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0.53963137329061,"y":-513,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0.47876328451787,"y":-447.96601654153,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":-0.41330345913521,"y":446.03353838952,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-0.48215424807488,"y":513,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-0.51608072378428,"y":549.033487112,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-1.7227988990168,"y":-252,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":-1.7786778001853,"y":-189.96814065929,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":-1.8475285891249,"y":-125,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-1.9083966778977,"y":-59.968205378488,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2.0331263680058,"y":65.031732391514,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-2.1019771569454,"y":130,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2.1618474081973,"y":194.03166817016,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2.2267068470535,"y":259.03163581056,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-2.2267068470535,"y":259.03163581056,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":-2.2905684483889,"y":323.0316039488,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2.3544300497242,"y":387.03157208704,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2.4162959760178,"y":449.03154122096,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":-1.5242292323648,"y":-444.96801371009,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-1.5910843462627,"y":-381,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-1.6529502725563,"y":-315.96807793145,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-1.7227988990168,"y":-252,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":-1.4224498052366,"y":-546.96796293042,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-1.463361143592,"y":-510,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-1.5242292323648,"y":-444.96801371009,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":-2.4162959760178,"y":449.03154122096,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":-2.4851467649575,"y":515,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-2.5160797281043,"y":549.03149143696,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2.2831861347484,"y":-258,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","vis":true},{"x":2.22730723358,"y":-195.96414632217,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","vis":true},{"x":2.1584564446403,"y":-130,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2.0975883558676,"y":-65.964211041365,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":1.9718608282386,"y":60.035726230797,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":1.9040078768198,"y":124,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":1.8441376255679,"y":188.03566250728,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":1.7792781867117,"y":253.03563014768,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":1.7792781867117,"y":253.03563014768,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D"},{"x":1.7154165853764,"y":317.03559828592,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":1.651554984041,"y":381.03556642416,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":1.5896890577474,"y":445.5,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":2.4817558014005,"y":-450.96401937297,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":2.4149006875026,"y":-387,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2.3530347612089,"y":-321.96408359433,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2.2831861347484,"y":-258,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"7C9F6D"},{"x":2.5775482034035,"y":-546.96397158033,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2.5426238901732,"y":-516,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2.4817558014005,"y":-450.96401937297,"bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0,"color":"6A9158"},{"x":1.4839182805358,"y":549.03548278705,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":624.34989789843,"y":683.65706885199,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":646.71393133481,"y":-683.32129601282,"bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":-249.71569057206,"y":-253.21557300055,"trait":"line"},{"x":61.28415459971,"y":-252.90524553156,"trait":"line"},{"x":-250.21460933249,"y":246.78417807946,"trait":"line"},{"x":60.785235839278,"y":247.09450554845,"trait":"line"},{"x":0.09459583898494,"y":-62.966208209926,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":0.033727750212191,"y":-1.9662385781654,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-1.9083966778977,"y":-59.968205378488,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-1.9692647666704,"y":1.031764253273,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":2.0975883558676,"y":-65.964211041365,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2.0367202670948,"y":-4.9642414096037,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":0.032998561254637,"y":-1.2354697112023,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-0.030210607855526,"y":62.110652598703,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-1.9701090907266,"y":1.8779176781776,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":-2.0333182598367,"y":65.224039988084,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":2.0361062132358,"y":-4.3488571005822,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":1.9728970441257,"y":58.997265209323,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":81.579504549087,"y":-548.8851414205,"trait":"line","color":"638750"},{"x":-249.70571219685,"y":-263.21556802215,"trait":"line","color":"638750"},{"x":80.485874626219,"y":547.11431294687,"trait":"line","curve":-90,"color":"638750"},{"x":-250.2245877077,"y":256.78417310106,"trait":"line","curve":-90,"color":"638750"},{"x":-249.49117712986,"y":-478.21546098655,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":2051.5076773403,"y":-475.91943685104,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":2050.4809025314,"y":553.08005087162,"trait":"line","curve":0},{"x":2051.5785238043,"y":-546.9194015044,"trait":"line","curve":0},{"x":-249.42033066588,"y":-549.21542563991,"trait":"line","curve":0},{"x":-250.51795193883,"y":550.78402673611,"trait":"line","curve":0},{"x":-0.044556464272096,"y":11.654949947476,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-0.023046445122198,"y":-9.9016742439158,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-1.8212242960007,"y":-8.1070813962288,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0},{"x":-0.94095663731765,"y":9.8576683473962,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0},{"x":-1.8239130483944,"y":-5.4125033723047,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-0.032905203899235,"y":-0.021554822860778,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":5.3598358471405,"y":-3.6089480166387,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-7.2166540994343,"y":-1.8251101785268,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":-5.4283350073327,"y":6.2604163948412,"bCoef":0,"cMask":["wall"],"trait":"line"},{"x":0.015766674836625,"y":16.033752460715,"trait":"powerboost","bCoef":-2.4},{"x":0.045701800462568,"y":-13.966232604086,"trait":"powerboost","bCoef":-2.4},{"x":-250,"y":115.70976559034,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7","curve":0},{"x":-312.92128998075,"y":115.64706397216,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":-249.9904752016,"y":-121.27358102311,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":-312.76191234787,"y":-121.33621674952,"bCoef":0,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":-250,"y":-121.2734382048,"bCoef":0,"cMask":["wall"],"curve":0,"color":"b3d4a7"},{"x":-359.11164581207,"y":143.54318787206,"bCoef":0,"cMask":["wall"],"color":"ffffff","curve":0},{"x":-359.31941116075,"y":-149.32488798444,"bCoef":0,"cMask":["wall"],"color":"ffffff","curve":0},{"x":-313.91929380786,"y":113.64606713032,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":-360.10964963918,"y":141.54219103022,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":-311.92328615363,"y":117.64806081401,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":-358.11364198495,"y":145.5441847139,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":-314.76390702723,"y":-119.33821342024,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":-361.32140584011,"y":-147.32688465516,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":-313.75891833747,"y":-124.33721309352,"bCoef":0,"cMask":["wall"],"trait":"line","color":"7C9F6D","curve":0},{"x":-360.31641715034,"y":-152.32588432844,"bCoef":0,"cMask":["wall"],"color":"7C9F6D","curve":0},{"x":-250.08289477973,"y":114.78424379434,"bCoef":1,"cMask":["red","ball"],"trait":"line","color":"C7E6BD","curve":0},{"x":-313.08286341581,"y":114.72138003053,"bCoef":1,"cMask":["red","ball"],"trait":"line","color":"ffffff","curve":0},{"x":-249.84740512481,"y":-121.21563871542,"bCoef":0,"cMask":["red","ball"],"trait":"line","color":"ffffff","curve":0},{"x":-312.84737376089,"y":-121.27850247924,"bCoef":0,"cMask":["red","ball"],"trait":"line","color":"ffffff","curve":0},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-420.56077431943,"y":593.61437295044,"vis":false,"color":"779668"},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-590.56268536167,"y":595.44473957621,"curve":0,"vis":false,"color":"779668"},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-419.37534334464,"y":-594.38503561566,"vis":false,"color":"779668"},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-589.37525871185,"y":-594.55466799421,"curve":0,"vis":false,"color":"779668"},{"bCoef":-2.4,"cMask":["red"],"trait":"gkArea","x":-332.86622924306,"y":-102.39214514657},{"bCoef":-2.4,"cMask":["red"],"trait":"gkArea","x":-333.06529170468,"y":97.101618474926},{"x":428.3470019625,"y":686.46149120438,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"769667","vis":true},{"x":429.71403936609,"y":-683.53782675485,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","curve":0,"color":"769667","vis":true},{"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":428.5155533504,"y":16.461325838405,"color":"769667","vis":false},{"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":428.54548847603,"y":-13.538659226395,"color":"769667","vis":false},{"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":381.54551187451,"y":-13.585557589876,"color":"769667","vis":true},{"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":382.51557625104,"y":16.415425312446,"color":"769667","vis":true},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-419.98402423237,"y":15.614660701952,"vis":true,"color":"779668"},{"cMask":["red"],"trait":"gkArea","x":-419.95408910674,"y":-14.385324362849,"vis":true,"color":"779668","bCoef":1},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-332.98406754445,"y":15.701472566267,"vis":true,"color":"779668"},{"bCoef":1,"cMask":["red"],"trait":"gkArea","x":-332.95413241882,"y":-14.298512498534,"vis":true,"color":"779668"},{"x":-543.3641515395,"y":136.51668294787,"bCoef":0,"cMask":["blue"],"color":"577b47","curve":0,"vis":true},{"x":-498.3641739423,"y":136.56158563631,"bCoef":0,"cMask":["blue"],"color":"577b47","vis":true},{"x":-581.55770065463,"y":590.4537226031,"bCoef":0,"cMask":["red"]},{"x":-580.38025238001,"y":-589.54568994572,"bCoef":0,"cMask":["red"]},{"cMask":["blue"],"x":-438.98715120541,"y":3.0800674286226,"color":"5f874d"},{"cMask":["blue"],"x":-386.98717709309,"y":3.1319549797076,"color":"5f874d"},{"cMask":["blue"],"x":-394.99316063333,"y":11.124967130022,"color":"5f874d"},{"cMask":["blue"],"x":-394.9791904102,"y":-4.8760237377395,"color":"5f874d"},{"cMask":["blue"],"x":-523.91138552266,"y":16.666620224183,"color":"b2e09d"},{"cMask":["blue"],"x":-517.05858641081,"y":-7.3758244171695,"color":"b2e09d"},{"cMask":["blue"],"x":-507.91168593417,"y":16.568573918778,"color":"b2e09d"},{"cMask":["blue"],"x":-520.96956109531,"y":7.1640396178821,"color":"b2e09d"},{"cMask":["blue"],"x":-510.9697488525,"y":7.102760677004,"color":"b2e09d"},{"cMask":["blue"],"x":-498.91185491564,"y":16.513422871988,"color":"b2e09d"},{"cMask":["blue"],"x":-499.05892437375,"y":-7.4861265107503,"color":"b2e09d"},{"cMask":["blue"],"x":-493.98845172199,"y":3.9986428046687,"color":"b2e09d"},{"cMask":["blue"],"x":-485.91209899999,"y":16.433760248846,"color":"b2e09d"},{"cMask":["blue"],"x":-467.05952519677,"y":-7.6822191215605,"color":"b2e09d"},{"cMask":["blue"],"x":-467.91243696294,"y":16.323458155266,"color":"b2e09d"},{"cMask":["blue"],"x":-469.00730479724,"y":0.84550177963098,"curve":0,"color":"b2e09d"},{"cMask":["blue"],"x":-447.91281247733,"y":16.200900273509,"curve":0,"color":"b2e09d"},{"bCoef":0,"cMask":["blue"],"x":-528.89423680324,"y":151.01550378981,"curve":0,"vis":true,"color":"577b47"},{"bCoef":0,"cMask":["blue"],"x":-528.86430167762,"y":121.01551872501,"vis":true,"color":"577b47"},{"bCoef":0,"cMask":["red"],"trait":"penArea","x":428.5155533504,"y":16.461325838405,"color":"6e8a61","vis":false},{"bCoef":0,"cMask":["red"],"trait":"penArea","x":428.54548847603,"y":-13.538659226395,"color":"6e8a61","vis":false},{"x":1.651554984041,"y":509,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":1.651554984041,"y":549.03149143696,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158","curve":0},{"x":1.651554984041,"y":445.5,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"6A9158"},{"x":1.651554984041,"y":509,"bCoef":0,"cMask":["wall"],"trait":"ballArea","color":"7C9F6D","curve":0},{"x":-249.43912327252,"y":471.78506390299,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":2050.5597316955,"y":474.08009020098,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"638750"},{"x":-252,"y":525,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7"},{"x":-227,"y":550,"bCoef":0,"cMask":["wall"],"trait":"line","color":"b3d4a7"},{"x":-264,"y":550,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":-60,"color":"576C46"},{"x":-292,"y":530,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":-60,"color":"576C46"},{"x":-254.80111669449,"y":532.27132049424,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":-252.0489225384,"y":550.56150669712,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":-254.02665756182,"y":550.85910403775,"bCoef":0,"cMask":["wall"],"color":"6e955d"},{"x":-256.77885171791,"y":532.56891783487,"bCoef":0,"cMask":["wall"],"color":"6e955d"},{"x":-264.17095687029,"y":529.11573185304,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":-254.41338638965,"y":526.9271664975,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":-272.95277030286,"y":531.08544067303,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"x":-263.3830720065,"y":532.62846318162,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E"},{"x":-272.16488543907,"y":534.5981720016,"bCoef":0,"cMask":["wall"],"color":"FA2E49"},{"x":-253.62550152586,"y":530.43989782608,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E"},{"x":-261,"y":-549,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":60,"color":"576C46"},{"x":-289,"y":-529,"bCoef":-2.45,"cMask":["ball"],"trait":"line","curve":60,"color":"576C46"},{"x":-249,"y":-551,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":-249,"y":-569.49609375,"bCoef":0,"cMask":["wall"],"trait":"cornerflag","curve":0,"color":"D7D7D9"},{"x":-247,"y":-569.49609375,"bCoef":0,"cMask":["wall"]},{"x":-247,"y":-551,"bCoef":0,"cMask":["wall"]},{"x":-258,"y":-572,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E","radius":20},{"x":-248,"y":-572,"bCoef":0,"cMask":["wall"],"color":"FA2E49","radius":20},{"x":-267,"y":-572,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E","radius":20},{"x":-258,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"trait":"line","curve":0,"color":"DEFE2E","radius":20},{"x":-267,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"color":"FA2E49","radius":20},{"x":-248,"y":-568.39999389648,"bCoef":0,"cMask":["wall"],"trait":"line","color":"DEFE2E","radius":20},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":-550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-251,"y":-550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":-551,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-251,"y":-551,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":-549,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-251,"y":-549,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-252,"y":550,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":549,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-252,"y":549,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-1000,"y":551,"color":"718c5a"},{"bCoef":0,"cMask":["wall"],"trait":"line","x":-252,"y":551,"color":"718c5a"},{"x":-234,"y":-120,"bCoef":1,"cMask":["red"],"cGroup":["redKO"],"vis":false,"curve":0},{"x":-234,"y":120,"bCoef":1,"cMask":["red"],"cGroup":["redKO"],"vis":false,"curve":0},{"x":-234,"y":-120,"bCoef":1,"cMask":["red"],"cGroup":["blueKO"],"vis":false,"curve":0,"_selected":"segment"},{"x":-234,"y":120,"bCoef":1,"cMask":["red"],"cGroup":["blueKO"],"vis":false,"curve":0,"_selected":"segment"}],"segments":[{"v0":0,"v1":1,"bCoef":0,"trait":"ballArea"},{"v0":2,"v1":3,"curve":50,"trait":"penArea","cMask":["blue"]},{"v0":4,"v1":5,"trait":"line"},{"v0":6,"v1":7,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":2,"v1":8,"curve":0,"vis":false,"bCoef":0,"cMask":["blue"],"trait":"penArea"},{"v0":8,"v1":9,"curve":0,"vis":false,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","y":-685},{"v0":9,"v1":10,"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","x":-570,"color":"769667"},{"v0":10,"v1":11,"curve":0,"vis":false,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","y":685},{"v0":11,"v1":3,"curve":0,"vis":false,"bCoef":0,"cMask":["blue"],"trait":"penArea"},{"v0":7,"v1":12,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":12,"v1":13,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":14,"v1":15,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":15,"v1":16,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":16,"v1":17,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":18,"v1":19,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":19,"v1":20,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":22,"v1":23,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":23,"v1":24,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":24,"v1":25,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":27,"v1":29,"trait":"line","x":840},{"v0":30,"v1":31,"trait":"line","y":150},{"v0":31,"v1":33,"trait":"line","x":1030},{"v0":32,"v1":33,"trait":"line","y":-150},{"v0":34,"v1":35,"curve":-130,"trait":"line","x":840},{"v0":36,"v1":37,"curve":-40,"vis":true,"color":"576C46","bCoef":-4.7,"cMask":["ball"],"trait":"line","x":1220},{"v0":38,"v1":39,"curve":40,"vis":true,"color":"576C46","bCoef":-4.7,"cMask":["ball"],"trait":"line","x":1220},{"v0":45,"v1":47,"vis":true,"color":"000000","cMask":["ball"]},{"v0":44,"v1":46,"vis":true,"color":"000000","cMask":["ball"]},{"v0":40,"v1":43,"vis":true,"color":"000000","cMask":["ball"]},{"v0":41,"v1":42,"vis":true,"color":"000000","cMask":["ball"]},{"v0":53,"v1":54,"vis":true,"color":"C7E6BD","trait":"line"},{"v0":57,"v1":58,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":58,"v1":59,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea"},{"v0":60,"v1":61,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":61,"v1":62,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":0},{"v0":63,"v1":64,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":64,"v1":65,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":65,"v1":66,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":67,"v1":68,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":69,"v1":70,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":71,"v1":72,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":73,"v1":74,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":75,"v1":76,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":77,"v1":78,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":79,"v1":80,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":82,"v1":83,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":83,"v1":84,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":85,"v1":86,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":86,"v1":87,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":87,"v1":88,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"curve":0},{"v0":89,"v1":90,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":93,"v1":94,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":97,"v1":98,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":99,"v1":100,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":101,"v1":102,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2},{"v0":1,"v1":105,"vis":false,"color":"C7E6BD","bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"v0":0,"v1":106,"vis":false,"color":"C7E6BD","bCoef":0,"cMask":["ball"],"trait":"ballArea","curve":0},{"v0":107,"v1":108,"trait":"line","y":250},{"v0":109,"v1":110,"trait":"line","y":-250},{"v0":111,"v1":112,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0},{"v0":113,"v1":114,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2,"curve":0},{"v0":115,"v1":116,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"curve":0},{"v0":117,"v1":118,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","curve":0},{"v0":119,"v1":120,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2,"curve":0},{"v0":121,"v1":122,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":-2,"curve":0},{"v0":123,"v1":124,"curve":90,"vis":true,"color":"638750","trait":"line"},{"v0":125,"v1":126,"curve":-90,"vis":true,"color":"638750","trait":"line"},{"v0":127,"v1":128,"curve":0,"vis":true,"color":"638750","bCoef":0,"cMask":["wall"],"trait":"line","y":475},{"v0":130,"v1":131,"vis":true,"color":"C7E6BD","trait":"line","y":550,"curve":0},{"v0":129,"v1":132,"vis":true,"color":"C7E6BD","trait":"line","y":-550,"curve":0},{"v0":131,"v1":132,"vis":true,"color":"C7E6BD","trait":"line","x":250},{"v0":133,"v1":134,"curve":-180,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":133,"v1":134,"curve":180,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":133,"v1":134,"curve":163.40571006033,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":133,"v1":134,"curve":81.202589290009,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":133,"v1":134,"curve":-159.68456206984,"bCoef":0,"cMask":["wall"],"trait":"line","x":935},{"v0":133,"v1":135,"curve":158.47492555372,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":133,"v1":135,"curve":110.01595960288,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":133,"v1":135,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":133,"v1":135,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":133,"v1":135,"curve":-159.68456206984,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":137,"curve":-165.7499673022,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":-140.35507085927,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":138,"curve":46.397181027297,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":139,"curve":32.119974614321,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":136,"v1":135,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":140,"v1":139,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":141,"v1":139,"curve":0,"vis":true,"color":"C7E6BD","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":142,"v1":143,"curve":180,"trait":"powerboost","bCoef":-2.4},{"v0":144,"v1":148,"curve":0,"vis":true,"color":"b3d4a7","bCoef":0,"cMask":["wall"],"x":-250},{"v0":145,"v1":149,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"cMask":["wall"]},{"v0":147,"v1":150,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"cMask":["wall"]},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":155,"v1":156,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"]},{"v0":160,"v1":162,"curve":0,"color":"ffffff","bCoef":0,"cMask":["red","ball"],"trait":"reargoalNetleft","x":-242},{"v0":159,"v1":160,"curve":0,"color":"ffffff","bCoef":1,"cMask":["red","ball"],"trait":"sidegoalNet"},{"v0":161,"v1":162,"curve":0,"color":"ffffff","cMask":["red","ball"],"trait":"sidegoalNet"},{"vis":false,"bCoef":1,"cMask":["red"],"trait":"gkArea","v0":163,"v1":164,"color":"779668"},{"vis":false,"bCoef":1,"cMask":["red"],"trait":"gkArea","v0":165,"v1":166,"color":"779668"},{"vis":true,"bCoef":1,"cMask":["red"],"trait":"gkArea","v0":166,"v1":164,"curve":0,"color":"779668","x":590},{"vis":false,"bCoef":-2.4,"cMask":["red"],"trait":"gkArea","v0":167,"v1":168},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":169,"v1":171,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":170,"v1":172,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":172,"v1":173,"color":"769667"},{"curve":0,"vis":true,"bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":171,"v1":174,"color":"769667"},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["red"],"trait":"gkArea","v0":163,"v1":175,"x":420},{"vis":true,"cMask":["red"],"trait":"gkArea","v0":165,"v1":176,"color":"779668","bCoef":1,"x":420},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["red"],"trait":"gkArea","v0":175,"v1":177},{"curve":0,"vis":true,"color":"779668","bCoef":1,"cMask":["red"],"trait":"gkArea","v0":176,"v1":178},{"v0":179,"v1":180,"color":"577b47","bCoef":1000000,"cMask":["blue"],"vis":true},{"v0":181,"v1":182,"vis":false,"bCoef":1000000,"cMask":["red"]},{"curve":0,"vis":true,"color":"6e8a61","bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":169,"v1":9},{"curve":0,"vis":true,"color":"6e8a61","bCoef":0,"cMask":["red","blue"],"trait":"penArea","v0":170,"v1":10},{"color":"5f874d","cMask":["blue"],"v0":183,"v1":184},{"color":"5f874d","cMask":["blue"],"v0":184,"v1":185},{"color":"5f874d","cMask":["blue"],"v0":184,"v1":186},{"color":"b2e09d","cMask":["blue"],"v0":187,"v1":188},{"color":"b2e09d","cMask":["blue"],"v0":188,"v1":189},{"color":"b2e09d","cMask":["blue"],"v0":190,"v1":191},{"color":"b2e09d","cMask":["blue"],"v0":192,"v1":193},{"color":"b2e09d","cMask":["blue"],"v0":193,"v1":194,"curve":200.98295402466},{"curve":20.609692937532,"color":"b2e09d","cMask":["blue"],"v0":194,"v1":195},{"curve":185.205124405,"color":"b2e09d","cMask":["blue"],"v0":196,"v1":197},{"curve":172.3400281831,"color":"b2e09d","cMask":["blue"],"v0":197,"v1":196},{"curve":0,"color":"b2e09d","cMask":["blue"],"v0":198,"v1":199},{"curve":0,"vis":true,"bCoef":0,"cMask":["blue"],"v0":179,"v1":200,"color":"577b47"},{"curve":0,"vis":true,"bCoef":0,"cMask":["blue"],"v0":179,"v1":201,"color":"577b47"},{"curve":0,"vis":false,"color":"6e8a61","bCoef":0,"cMask":["red"],"trait":"penArea","v0":203,"v1":202},{"v0":204,"v1":205,"curve":0,"vis":true,"color":"6A9158","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":206,"v1":207,"vis":true,"color":"7C9F6D","bCoef":0,"cMask":["wall"],"trait":"ballArea","x":2},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"638750","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":210,"v1":211,"curve":90,"color":"b3d4a7","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":212,"v1":213,"curve":-60,"vis":true,"color":"576C46","bCoef":-2.45,"cMask":["ball"],"trait":"line"},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"D7D7D9","bCoef":0,"cMask":["wall"],"trait":"cornerflag"},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"6e955d","bCoef":0,"cMask":["wall"],"x":717},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":219,"v1":219,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"x":-1148},{"v0":218,"v1":220,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":221,"v1":222,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":221,"v1":222,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":222,"v1":222,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"]},{"v0":221,"v1":223,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line"},{"v0":224,"v1":225,"curve":60,"vis":true,"color":"576C46","bCoef":-2.45,"cMask":["ball"],"trait":"line"},{"v0":226,"v1":227,"curve":0,"vis":true,"color":"D7D7D9","bCoef":0,"cMask":["wall"],"trait":"cornerflag"},{"v0":228,"v1":229,"curve":0,"vis":true,"color":"708a5a","bCoef":0,"cMask":["wall"],"x":717},{"v0":230,"v1":231,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"radius":20},{"v0":230,"v1":231,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"radius":20},{"v0":231,"v1":231,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"x":-1148,"radius":20},{"v0":230,"v1":232,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line","radius":20},{"v0":233,"v1":234,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"radius":20},{"v0":233,"v1":234,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"radius":20},{"v0":234,"v1":234,"curve":0,"vis":true,"color":"FA2E49","bCoef":0,"cMask":["wall"],"radius":20},{"v0":233,"v1":235,"vis":true,"color":"DEFE2E","bCoef":0,"cMask":["wall"],"trait":"line","radius":20},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":236,"v1":237,"y":-550},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":238,"v1":239,"y":-551},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":240,"v1":241,"y":-549},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":242,"v1":243,"y":-550},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":244,"v1":245,"y":-551},{"curve":0,"vis":true,"color":"718c5a","bCoef":0,"cMask":["wall"],"trait":"line","v0":246,"v1":247,"y":-549},{"v0":248,"v1":249,"curve":0,"vis":false,"color":"C7E6BD","bCoef":1,"cMask":["red"],"cGroup":["redKO"],"x":-287},{"v0":250,"v1":251,"curve":0,"vis":false,"color":"C7E6BD","bCoef":1,"cMask":["red"],"cGroup":["blueKO"],"x":-287,"_selected":true}],"goals":[{"p0":[-254.55999208099,117.7527404665],"p1":[-116.97872653684,97.313771485362],"team":"blue"},{"p0":[-251.01656861726,-122.39906339312],"p1":[-126.796047417,-98.816868090829],"team":"blue"},{"p0":[-129.67463570493,101.66457302557],"p1":[44.807692546658,3.9102016251533],"team":"blue"},{"p0":[-128.43944619643,-98.25224951048],"p1":[44.825869801857,1.6433473502359],"team":"blue"},{"p0":[-260,-120.3945364233],"p1":[-260,112.76350565941],"team":"red"}],"discs":[{"radius":5,"pos":[-250.08189694221,113.78424429218],"trait":"goalPost"},{"radius":5,"pos":[-249.84740512481,-121.21563871542],"trait":"goalPost"},{"radius":3,"invMass":0,"pos":[-360.31941066291,-149.32588582196],"color":"4a4e52"},{"radius":3,"invMass":0,"pos":[-359.61077971684,142.67496664629],"color":"4a4e52"},{"radius":1.5,"pos":[-251.6336058892,550.80404093126],"color":"13181C","trait":"cornerflag","curve":0},{"radius":1.5,"pos":[-249.55429723948,-549.17325861291],"color":"13181C","trait":"cornerflag","curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"gkArea":{"vis":false,"bCoef":1,"cMask":["blue"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]},"line":{"vis":true,"color":"C7E6BD","cMask":[]},"goalnet":{"vis":true,"bCoef":0.1,"color":"C7E6BD","cMask":["ball","red"]},"powerboost":{"vis":false,"bCoef":-2.7,"cMask":["ball"],"color":"C7E6BD"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"color":"FFFFFF"}},"planes":[{"normal":[-0.99999950216002,-0.00099783752086474],"dist":-560.03176574679,"bCoef":0},{"normal":[0.99999950216002,0.00099783752086474],"dist":-590.96823425321,"bCoef":0},{"normal":[0,1],"dist":-578,"bCoef":0,"trait":"ballArea"},{"normal":[0,-1],"dist":-586,"bCoef":0,"trait":"ballArea"},{"normal":[1,0],"dist":-317,"bCoef":0,"cMask":["ball"]}]}'
	var MediumStadium = '{"name":"Medium v 1 1 from HaxMaps","width":500,"height":250,"spawnDistance":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-450,"y":220,"trait":"ballArea"},{"x":-450,"y":70,"trait":"ballArea"},{"x":-450,"y":-70,"trait":"ballArea"},{"x":-450,"y":-220,"trait":"ballArea"},{"x":450,"y":220,"trait":"ballArea"},{"x":450,"y":80,"trait":"ballArea"},{"x":450,"y":-80,"trait":"ballArea"},{"x":450,"y":-220,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-460,"y":-80,"trait":"goalNet"},{"x":-480,"y":-60,"trait":"goalNet"},{"x":-480,"y":60,"trait":"goalNet"},{"x":-460,"y":80,"trait":"goalNet"},{"x":460,"y":-80,"trait":"goalNet"},{"x":480,"y":-60,"trait":"goalNet"},{"x":480,"y":60,"trait":"goalNet"},{"x":460,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-450,80],"p1":[-450,-80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"pos":[-450,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-450,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[450,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[450,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-220,"trait":"ballArea"},{"normal":[0,-1],"dist":-220,"trait":"ballArea"},{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-500,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var diez = '{"name":"10 MAN BY RAMBO html fix from HaxMaps","width":650,"height":650,"spawnDistance":170,"bg":{"type":"grass","width":650,"height":650,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":568,"y":90,"trait":"ballArea"},{"x":564,"y":104,"trait":"ballArea"},{"x":517,"y":247,"trait":"ballArea"},{"x":513,"y":261,"trait":"ballArea"},{"x":513,"y":261,"trait":"ballArea"},{"x":504,"y":273,"trait":"ballArea"},{"x":416,"y":395,"trait":"ballArea"},{"x":407,"y":407,"trait":"ballArea"},{"x":407,"y":407,"trait":"ballArea"},{"x":395,"y":416,"trait":"ballArea"},{"x":273,"y":504,"trait":"ballArea"},{"x":261,"y":513,"trait":"ballArea"},{"x":261,"y":513,"trait":"ballArea"},{"x":247,"y":517,"trait":"ballArea"},{"x":104,"y":564,"trait":"ballArea"},{"x":90,"y":568,"trait":"ballArea"},{"x":90,"y":568,"trait":"ballArea"},{"x":75,"y":568,"trait":"ballArea"},{"x":-75,"y":568,"trait":"ballArea"},{"x":-90,"y":568,"trait":"ballArea"},{"x":-90,"y":568,"trait":"ballArea"},{"x":-104,"y":564,"trait":"ballArea"},{"x":-247,"y":517,"trait":"ballArea"},{"x":-261,"y":513,"trait":"ballArea"},{"x":-261,"y":513,"trait":"ballArea"},{"x":-273,"y":504,"trait":"ballArea"},{"x":-395,"y":416,"trait":"ballArea"},{"x":-407,"y":407,"trait":"ballArea"},{"x":-407,"y":407,"trait":"ballArea"},{"x":-416,"y":395,"trait":"ballArea"},{"x":-504,"y":273,"trait":"ballArea"},{"x":-513,"y":261,"trait":"ballArea"},{"x":-513,"y":261,"trait":"ballArea"},{"x":-517,"y":247,"trait":"ballArea"},{"x":-564,"y":104,"trait":"ballArea"},{"x":-568,"y":90,"trait":"ballArea"},{"x":-568,"y":90,"trait":"ballArea"},{"x":-568,"y":75,"trait":"ballArea"},{"x":-568,"y":-75,"trait":"ballArea"},{"x":-568,"y":-90,"trait":"ballArea"},{"x":-568,"y":-90,"trait":"ballArea"},{"x":-564,"y":-104,"trait":"ballArea"},{"x":-517,"y":-247,"trait":"ballArea"},{"x":-513,"y":-261,"trait":"ballArea"},{"x":-513,"y":-261,"trait":"ballArea"},{"x":-504,"y":-273,"trait":"ballArea"},{"x":-416,"y":-395,"trait":"ballArea"},{"x":-407,"y":-407,"trait":"ballArea"},{"x":-407,"y":-407,"trait":"ballArea"},{"x":-395,"y":-416,"trait":"ballArea"},{"x":-273,"y":-504,"trait":"ballArea"},{"x":-261,"y":-513,"trait":"ballArea"},{"x":-261,"y":-513,"trait":"ballArea"},{"x":-247,"y":-517,"trait":"ballArea"},{"x":-104,"y":-564,"trait":"ballArea"},{"x":-90,"y":-568,"trait":"ballArea"},{"x":-90,"y":-568,"trait":"ballArea"},{"x":-75,"y":-568,"trait":"ballArea"},{"x":75,"y":-568,"trait":"ballArea"},{"x":90,"y":-568,"trait":"ballArea"},{"x":90,"y":-568,"trait":"ballArea"},{"x":104,"y":-564,"trait":"ballArea"},{"x":247,"y":-517,"trait":"ballArea"},{"x":261,"y":-513,"trait":"ballArea"},{"x":261,"y":-513,"trait":"ballArea"},{"x":273,"y":-504,"trait":"ballArea"},{"x":395,"y":-416,"trait":"ballArea"},{"x":407,"y":-407,"trait":"ballArea"},{"x":407,"y":-407,"trait":"ballArea"},{"x":416,"y":-395,"trait":"ballArea"},{"x":504,"y":-273,"trait":"ballArea"},{"x":513,"y":-261,"trait":"ballArea"},{"x":513,"y":-261,"trait":"ballArea"},{"x":517,"y":-247,"trait":"ballArea"},{"x":564,"y":-104,"trait":"ballArea"},{"x":568,"y":-90,"trait":"ballArea"},{"x":568,"y":-90,"trait":"ballArea"},{"x":568,"y":-75,"trait":"ballArea"},{"x":568,"y":75,"trait":"ballArea"},{"x":568,"y":90,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":33,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":34,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":40,"v1":41,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":42,"v1":43,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":44,"v1":47,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":48,"v1":49,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":50,"v1":51,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":52,"v1":55,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":56,"v1":57,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":58,"v1":59,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":60,"v1":63,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":64,"v1":65,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":66,"v1":67,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":68,"v1":71,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":72,"v1":73,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":74,"v1":75,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":76,"v1":79,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff3333","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ff6600","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"33ff33","cMask":[""]},{"v0":33,"v1":34,"trait":"decoration","vis":true,"color":"00dd00","cMask":[""]},{"v0":41,"v1":42,"trait":"decoration","vis":true,"color":"0000dd","cMask":[""]},{"v0":49,"v1":50,"trait":"decoration","vis":true,"color":"3333ff","cMask":[""]},{"v0":57,"v1":58,"trait":"decoration","vis":true,"color":"ff33ff","cMask":[""]},{"v0":65,"v1":66,"trait":"decoration","vis":true,"color":"dd00dd","cMask":[""]},{"v0":73,"v1":74,"trait":"decoration","vis":true,"color":"dd0000","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178},{"v0":33,"v1":34,"trait":"goalNet","curve":178},{"v0":41,"v1":42,"trait":"goalNet","curve":178},{"v0":49,"v1":50,"trait":"goalNet","curve":178},{"v0":57,"v1":58,"trait":"goalNet","curve":178},{"v0":65,"v1":66,"trait":"goalNet","curve":178},{"v0":73,"v1":74,"trait":"goalNet","curve":178}],"goals":[{"p0":[564,104],"p1":[517,247],"team":"red","vis":true},{"p0":[395,416],"p1":[273,504],"team":"red","vis":true},{"p0":[75,568],"p1":[-75,568],"team":"red","vis":true},{"p0":[-273,504],"p1":[-395,416],"team":"red","vis":true},{"p0":[-517,247],"p1":[-564,104],"team":"red","vis":true},{"p0":[-564,-104],"p1":[-517,-247],"team":"red","vis":true},{"p0":[-395,-416],"p1":[-273,-504],"team":"red","vis":true},{"p0":[-75,-568],"p1":[75,-568],"team":"red","vis":true},{"p0":[273,-504],"p1":[395,-416],"team":"red","vis":true},{"p0":[517,-247],"p1":[564,-104],"team":"red","vis":true}],"discs":[{"pos":[564,104],"trait":"goalPost"},{"pos":[517,247],"trait":"goalPost"},{"pos":[395,416],"trait":"goalPost"},{"pos":[273,504],"trait":"goalPost"},{"pos":[75,568],"trait":"goalPost"},{"pos":[-75,568],"trait":"goalPost"},{"pos":[-273,504],"trait":"goalPost"},{"pos":[-395,416],"trait":"goalPost"},{"pos":[-517,247],"trait":"goalPost"},{"pos":[-564,104],"trait":"goalPost"},{"pos":[-564,-104],"trait":"goalPost"},{"pos":[-517,-247],"trait":"goalPost"},{"pos":[-395,-416],"trait":"goalPost"},{"pos":[-273,-504],"trait":"goalPost"},{"pos":[-75,-568],"trait":"goalPost"},{"pos":[75,-568],"trait":"goalPost"},{"pos":[273,-504],"trait":"goalPost"},{"pos":[395,-416],"trait":"goalPost"},{"pos":[517,-247],"trait":"goalPost"},{"pos":[564,-104],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}'
	var nueve = '{"name":"9 MAN BY RAMBO html fix from HaxMaps","width":600,"height":600,"spawnDistance":170,"bg":{"type":"grass","width":600,"height":600,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":510,"y":90,"trait":"ballArea"},{"x":505,"y":104,"trait":"ballArea"},{"x":454,"y":245,"trait":"ballArea"},{"x":449,"y":259,"trait":"ballArea"},{"x":449,"y":259,"trait":"ballArea"},{"x":439,"y":271,"trait":"ballArea"},{"x":343,"y":386,"trait":"ballArea"},{"x":333,"y":397,"trait":"ballArea"},{"x":333,"y":397,"trait":"ballArea"},{"x":320,"y":405,"trait":"ballArea"},{"x":190,"y":480,"trait":"ballArea"},{"x":177,"y":487,"trait":"ballArea"},{"x":177,"y":487,"trait":"ballArea"},{"x":162,"y":490,"trait":"ballArea"},{"x":15,"y":516,"trait":"ballArea"},{"x":0,"y":518,"trait":"ballArea"},{"x":0,"y":518,"trait":"ballArea"},{"x":-15,"y":516,"trait":"ballArea"},{"x":-162,"y":490,"trait":"ballArea"},{"x":-177,"y":487,"trait":"ballArea"},{"x":-177,"y":487,"trait":"ballArea"},{"x":-190,"y":480,"trait":"ballArea"},{"x":-320,"y":405,"trait":"ballArea"},{"x":-333,"y":397,"trait":"ballArea"},{"x":-333,"y":397,"trait":"ballArea"},{"x":-343,"y":386,"trait":"ballArea"},{"x":-439,"y":271,"trait":"ballArea"},{"x":-449,"y":259,"trait":"ballArea"},{"x":-449,"y":259,"trait":"ballArea"},{"x":-454,"y":245,"trait":"ballArea"},{"x":-505,"y":104,"trait":"ballArea"},{"x":-510,"y":90,"trait":"ballArea"},{"x":-510,"y":90,"trait":"ballArea"},{"x":-510,"y":75,"trait":"ballArea"},{"x":-510,"y":-75,"trait":"ballArea"},{"x":-510,"y":-90,"trait":"ballArea"},{"x":-510,"y":-90,"trait":"ballArea"},{"x":-505,"y":-104,"trait":"ballArea"},{"x":-454,"y":-245,"trait":"ballArea"},{"x":-449,"y":-259,"trait":"ballArea"},{"x":-449,"y":-259,"trait":"ballArea"},{"x":-439,"y":-271,"trait":"ballArea"},{"x":-343,"y":-386,"trait":"ballArea"},{"x":-333,"y":-397,"trait":"ballArea"},{"x":-333,"y":-397,"trait":"ballArea"},{"x":-320,"y":-405,"trait":"ballArea"},{"x":-190,"y":-480,"trait":"ballArea"},{"x":-177,"y":-487,"trait":"ballArea"},{"x":-177,"y":-487,"trait":"ballArea"},{"x":-162,"y":-490,"trait":"ballArea"},{"x":-15,"y":-516,"trait":"ballArea"},{"x":0,"y":-518,"trait":"ballArea"},{"x":0,"y":-518,"trait":"ballArea"},{"x":15,"y":-516,"trait":"ballArea"},{"x":162,"y":-490,"trait":"ballArea"},{"x":177,"y":-487,"trait":"ballArea"},{"x":177,"y":-487,"trait":"ballArea"},{"x":190,"y":-480,"trait":"ballArea"},{"x":320,"y":-405,"trait":"ballArea"},{"x":333,"y":-397,"trait":"ballArea"},{"x":333,"y":-397,"trait":"ballArea"},{"x":343,"y":-386,"trait":"ballArea"},{"x":439,"y":-271,"trait":"ballArea"},{"x":449,"y":-259,"trait":"ballArea"},{"x":449,"y":-259,"trait":"ballArea"},{"x":454,"y":-245,"trait":"ballArea"},{"x":505,"y":-104,"trait":"ballArea"},{"x":510,"y":-90,"trait":"ballArea"},{"x":510,"y":-90,"trait":"ballArea"},{"x":510,"y":-75,"trait":"ballArea"},{"x":510,"y":75,"trait":"ballArea"},{"x":510,"y":90,"trait":"ballArea"}],"segments":[{"v0":0,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":5,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":6,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":13,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":14,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":21,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":22,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":29,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":30,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":37,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":38,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":40,"v1":43,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":44,"v1":45,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":46,"v1":47,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":48,"v1":51,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":52,"v1":53,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":54,"v1":55,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":56,"v1":59,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":60,"v1":61,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":62,"v1":63,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":64,"v1":67,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":68,"v1":69,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":70,"v1":71,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":5,"v1":6,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":13,"v1":14,"trait":"decoration","vis":true,"color":"ff7700","cMask":[""]},{"v0":21,"v1":22,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":29,"v1":30,"trait":"decoration","vis":true,"color":"55ff55","cMask":[""]},{"v0":37,"v1":38,"trait":"decoration","vis":true,"color":"00dd00","cMask":[""]},{"v0":45,"v1":46,"trait":"decoration","vis":true,"color":"00ffff","cMask":[""]},{"v0":53,"v1":54,"trait":"decoration","vis":true,"color":"6666ff","cMask":[""]},{"v0":61,"v1":62,"trait":"decoration","vis":true,"color":"0000dd","cMask":[""]},{"v0":69,"v1":70,"trait":"decoration","vis":true,"color":"ff00ff","cMask":[""]},{"v0":5,"v1":6,"trait":"goalNet","curve":178},{"v0":13,"v1":14,"trait":"goalNet","curve":178},{"v0":21,"v1":22,"trait":"goalNet","curve":178},{"v0":29,"v1":30,"trait":"goalNet","curve":178},{"v0":37,"v1":38,"trait":"goalNet","curve":178},{"v0":45,"v1":46,"trait":"goalNet","curve":178},{"v0":53,"v1":54,"trait":"goalNet","curve":178},{"v0":61,"v1":62,"trait":"goalNet","curve":178},{"v0":69,"v1":70,"trait":"goalNet","curve":178}],"goals":[{"p0":[439,271],"p1":[343,386],"team":"red","vis":true},{"p0":[162,490],"p1":[15,516],"team":"red","vis":true},{"p0":[-190,480],"p1":[-320,405],"team":"red","vis":true},{"p0":[-454,245],"p1":[-505,104],"team":"red","vis":true},{"p0":[-505,-104],"p1":[-454,-245],"team":"red","vis":true},{"p0":[-320,-405],"p1":[-190,-480],"team":"red","vis":true},{"p0":[15,-516],"p1":[162,-490],"team":"red","vis":true},{"p0":[343,-386],"p1":[439,-271],"team":"red","vis":true},{"p0":[510,-75],"p1":[510,75],"team":"red","vis":true}],"discs":[{"pos":[439,271],"trait":"goalPost"},{"pos":[343,386],"trait":"goalPost"},{"pos":[162,490],"trait":"goalPost"},{"pos":[15,516],"trait":"goalPost"},{"pos":[-190,480],"trait":"goalPost"},{"pos":[-320,405],"trait":"goalPost"},{"pos":[-454,245],"trait":"goalPost"},{"pos":[-505,104],"trait":"goalPost"},{"pos":[-505,-104],"trait":"goalPost"},{"pos":[-454,-245],"trait":"goalPost"},{"pos":[-320,-405],"trait":"goalPost"},{"pos":[-190,-480],"trait":"goalPost"},{"pos":[15,-516],"trait":"goalPost"},{"pos":[162,-490],"trait":"goalPost"},{"pos":[343,-386],"trait":"goalPost"},{"pos":[439,-271],"trait":"goalPost"},{"pos":[510,-75],"trait":"goalPost"},{"pos":[510,75],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var ocho = '{"name":"8 MAN BY RAMBO html fix from HaxMaps","width":500,"height":500,"spawnDistance":170,"bg":{"type":"grass","width":500,"height":500,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":452,"y":90,"trait":"ballArea"},{"x":447,"y":104,"trait":"ballArea"},{"x":389,"y":242,"trait":"ballArea"},{"x":384,"y":256,"trait":"ballArea"},{"x":384,"y":256,"trait":"ballArea"},{"x":373,"y":267,"trait":"ballArea"},{"x":267,"y":373,"trait":"ballArea"},{"x":256,"y":384,"trait":"ballArea"},{"x":256,"y":384,"trait":"ballArea"},{"x":242,"y":389,"trait":"ballArea"},{"x":104,"y":447,"trait":"ballArea"},{"x":90,"y":452,"trait":"ballArea"},{"x":90,"y":452,"trait":"ballArea"},{"x":75,"y":452,"trait":"ballArea"},{"x":-75,"y":452,"trait":"ballArea"},{"x":-90,"y":452,"trait":"ballArea"},{"x":-90,"y":452,"trait":"ballArea"},{"x":-104,"y":447,"trait":"ballArea"},{"x":-242,"y":389,"trait":"ballArea"},{"x":-256,"y":384,"trait":"ballArea"},{"x":-256,"y":384,"trait":"ballArea"},{"x":-267,"y":373,"trait":"ballArea"},{"x":-373,"y":267,"trait":"ballArea"},{"x":-384,"y":256,"trait":"ballArea"},{"x":-384,"y":256,"trait":"ballArea"},{"x":-389,"y":242,"trait":"ballArea"},{"x":-447,"y":104,"trait":"ballArea"},{"x":-452,"y":90,"trait":"ballArea"},{"x":-452,"y":90,"trait":"ballArea"},{"x":-452,"y":75,"trait":"ballArea"},{"x":-452,"y":-75,"trait":"ballArea"},{"x":-452,"y":-90,"trait":"ballArea"},{"x":-452,"y":-90,"trait":"ballArea"},{"x":-447,"y":-104,"trait":"ballArea"},{"x":-389,"y":-242,"trait":"ballArea"},{"x":-384,"y":-256,"trait":"ballArea"},{"x":-384,"y":-256,"trait":"ballArea"},{"x":-373,"y":-267,"trait":"ballArea"},{"x":-267,"y":-373,"trait":"ballArea"},{"x":-256,"y":-384,"trait":"ballArea"},{"x":-256,"y":-384,"trait":"ballArea"},{"x":-242,"y":-389,"trait":"ballArea"},{"x":-104,"y":-447,"trait":"ballArea"},{"x":-90,"y":-452,"trait":"ballArea"},{"x":-90,"y":-452,"trait":"ballArea"},{"x":-75,"y":-452,"trait":"ballArea"},{"x":75,"y":-452,"trait":"ballArea"},{"x":90,"y":-452,"trait":"ballArea"},{"x":90,"y":-452,"trait":"ballArea"},{"x":104,"y":-447,"trait":"ballArea"},{"x":242,"y":-389,"trait":"ballArea"},{"x":256,"y":-384,"trait":"ballArea"},{"x":256,"y":-384,"trait":"ballArea"},{"x":267,"y":-373,"trait":"ballArea"},{"x":373,"y":-267,"trait":"ballArea"},{"x":384,"y":-256,"trait":"ballArea"},{"x":384,"y":-256,"trait":"ballArea"},{"x":389,"y":-242,"trait":"ballArea"},{"x":447,"y":-104,"trait":"ballArea"},{"x":452,"y":-90,"trait":"ballArea"},{"x":452,"y":-90,"trait":"ballArea"},{"x":452,"y":-75,"trait":"ballArea"},{"x":452,"y":75,"trait":"ballArea"},{"x":452,"y":90,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":33,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":34,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":40,"v1":41,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":42,"v1":43,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":44,"v1":47,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":48,"v1":49,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":50,"v1":51,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":52,"v1":55,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":56,"v1":57,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":58,"v1":59,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":60,"v1":63,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ff6600","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"00ff00","cMask":[""]},{"v0":33,"v1":34,"trait":"decoration","vis":true,"color":"00ffff","cMask":[""]},{"v0":41,"v1":42,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":49,"v1":50,"trait":"decoration","vis":true,"color":"7700dd","cMask":[""]},{"v0":57,"v1":58,"trait":"decoration","vis":true,"color":"ff00ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178},{"v0":33,"v1":34,"trait":"goalNet","curve":178},{"v0":41,"v1":42,"trait":"goalNet","curve":178},{"v0":49,"v1":50,"trait":"goalNet","curve":178},{"v0":57,"v1":58,"trait":"goalNet","curve":178}],"goals":[{"p0":[447,104],"p1":[389,242],"team":"red","vis":true},{"p0":[242,389],"p1":[104,447],"team":"red","vis":true},{"p0":[-104,447],"p1":[-242,389],"team":"red","vis":true},{"p0":[-389,242],"p1":[-447,104],"team":"red","vis":true},{"p0":[-447,-104],"p1":[-389,-242],"team":"red","vis":true},{"p0":[-242,-389],"p1":[-104,-447],"team":"red","vis":true},{"p0":[104,-447],"p1":[242,-389],"team":"red","vis":true},{"p0":[389,-242],"p1":[447,-104],"team":"red","vis":true}],"discs":[{"pos":[447,104],"trait":"goalPost"},{"pos":[389,242],"trait":"goalPost"},{"pos":[242,389],"trait":"goalPost"},{"pos":[104,447],"trait":"goalPost"},{"pos":[-104,447],"trait":"goalPost"},{"pos":[-242,389],"trait":"goalPost"},{"pos":[-389,242],"trait":"goalPost"},{"pos":[-447,104],"trait":"goalPost"},{"pos":[-447,-104],"trait":"goalPost"},{"pos":[-389,-242],"trait":"goalPost"},{"pos":[-242,-389],"trait":"goalPost"},{"pos":[-104,-447],"trait":"goalPost"},{"pos":[104,-447],"trait":"goalPost"},{"pos":[242,-389],"trait":"goalPost"},{"pos":[389,-242],"trait":"goalPost"},{"pos":[447,-104],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var siete = '{"name":"7 MAN BY RAMBO html fix from HaxMaps","width":470,"height":470,"spawnDistance":170,"bg":{"type":"grass","width":470,"height":470,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":404,"y":0,"trait":"ballArea"},{"x":401,"y":15,"trait":"ballArea"},{"x":368,"y":161,"trait":"ballArea"},{"x":364,"y":175,"trait":"ballArea"},{"x":364,"y":175,"trait":"ballArea"},{"x":355,"y":187,"trait":"ballArea"},{"x":262,"y":304,"trait":"ballArea"},{"x":252,"y":316,"trait":"ballArea"},{"x":252,"y":316,"trait":"ballArea"},{"x":239,"y":323,"trait":"ballArea"},{"x":104,"y":388,"trait":"ballArea"},{"x":90,"y":394,"trait":"ballArea"},{"x":90,"y":394,"trait":"ballArea"},{"x":75,"y":394,"trait":"ballArea"},{"x":-75,"y":394,"trait":"ballArea"},{"x":-90,"y":394,"trait":"ballArea"},{"x":-90,"y":394,"trait":"ballArea"},{"x":-104,"y":388,"trait":"ballArea"},{"x":-239,"y":323,"trait":"ballArea"},{"x":-252,"y":316,"trait":"ballArea"},{"x":-252,"y":316,"trait":"ballArea"},{"x":-262,"y":304,"trait":"ballArea"},{"x":-355,"y":187,"trait":"ballArea"},{"x":-364,"y":175,"trait":"ballArea"},{"x":-364,"y":175,"trait":"ballArea"},{"x":-368,"y":161,"trait":"ballArea"},{"x":-401,"y":15,"trait":"ballArea"},{"x":-404,"y":0,"trait":"ballArea"},{"x":-404,"y":0,"trait":"ballArea"},{"x":-401,"y":-15,"trait":"ballArea"},{"x":-368,"y":-161,"trait":"ballArea"},{"x":-364,"y":-175,"trait":"ballArea"},{"x":-364,"y":-175,"trait":"ballArea"},{"x":-355,"y":-187,"trait":"ballArea"},{"x":-262,"y":-304,"trait":"ballArea"},{"x":-252,"y":-316,"trait":"ballArea"},{"x":-252,"y":-316,"trait":"ballArea"},{"x":-239,"y":-323,"trait":"ballArea"},{"x":-104,"y":-388,"trait":"ballArea"},{"x":-90,"y":-394,"trait":"ballArea"},{"x":-90,"y":-394,"trait":"ballArea"},{"x":-75,"y":-394,"trait":"ballArea"},{"x":75,"y":-394,"trait":"ballArea"},{"x":90,"y":-394,"trait":"ballArea"},{"x":90,"y":-394,"trait":"ballArea"},{"x":104,"y":-388,"trait":"ballArea"},{"x":239,"y":-323,"trait":"ballArea"},{"x":252,"y":-316,"trait":"ballArea"},{"x":252,"y":-316,"trait":"ballArea"},{"x":262,"y":-304,"trait":"ballArea"},{"x":355,"y":-187,"trait":"ballArea"},{"x":364,"y":-175,"trait":"ballArea"},{"x":364,"y":-175,"trait":"ballArea"},{"x":368,"y":-161,"trait":"ballArea"},{"x":401,"y":-15,"trait":"ballArea"},{"x":404,"y":0,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":33,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":34,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":40,"v1":41,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":42,"v1":43,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":44,"v1":47,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":48,"v1":49,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":50,"v1":51,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":52,"v1":55,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ff7700","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"00ff00","cMask":[""]},{"v0":33,"v1":34,"trait":"decoration","vis":true,"color":"00ffff","cMask":[""]},{"v0":41,"v1":42,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":49,"v1":50,"trait":"decoration","vis":true,"color":"ff00ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178},{"v0":33,"v1":34,"trait":"goalNet","curve":178},{"v0":41,"v1":42,"trait":"goalNet","curve":178},{"v0":49,"v1":50,"trait":"goalNet","curve":178}],"goals":[{"p0":[401,15],"p1":[368,161],"team":"red","vis":true},{"p0":[239,323],"p1":[104,388],"team":"red","vis":true},{"p0":[-104,388],"p1":[-239,323],"team":"red","vis":true},{"p0":[-368,161],"p1":[-401,15],"team":"red","vis":true},{"p0":[-355,-187],"p1":[-262,-304],"team":"red","vis":true},{"p0":[-75,-394],"p1":[75,-394],"team":"red","vis":true},{"p0":[262,-304],"p1":[355,-187],"team":"red","vis":true}],"discs":[{"pos":[401,15],"trait":"goalPost"},{"pos":[368,161],"trait":"goalPost"},{"pos":[239,323],"trait":"goalPost"},{"pos":[104,388],"trait":"goalPost"},{"pos":[-104,388],"trait":"goalPost"},{"pos":[-239,323],"trait":"goalPost"},{"pos":[-368,161],"trait":"goalPost"},{"pos":[-401,15],"trait":"goalPost"},{"pos":[-355,-187],"trait":"goalPost"},{"pos":[-262,-304],"trait":"goalPost"},{"pos":[-75,-394],"trait":"goalPost"},{"pos":[75,-394],"trait":"goalPost"},{"pos":[262,-304],"trait":"goalPost"},{"pos":[355,-187],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var seis = '{"name":"6 MAN BY RAMBO html fix from HaxMaps","width":420,"height":420,"spawnDistance":170,"bg":{"type":"grass","width":420,"height":420,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":336,"y":90,"trait":"ballArea"},{"x":328,"y":103,"trait":"ballArea"},{"x":253,"y":233,"trait":"ballArea"},{"x":246,"y":246,"trait":"ballArea"},{"x":246,"y":246,"trait":"ballArea"},{"x":233,"y":253,"trait":"ballArea"},{"x":103,"y":328,"trait":"ballArea"},{"x":90,"y":336,"trait":"ballArea"},{"x":90,"y":336,"trait":"ballArea"},{"x":75,"y":336,"trait":"ballArea"},{"x":-75,"y":336,"trait":"ballArea"},{"x":-90,"y":336,"trait":"ballArea"},{"x":-90,"y":336,"trait":"ballArea"},{"x":-103,"y":328,"trait":"ballArea"},{"x":-233,"y":253,"trait":"ballArea"},{"x":-246,"y":246,"trait":"ballArea"},{"x":-246,"y":246,"trait":"ballArea"},{"x":-253,"y":233,"trait":"ballArea"},{"x":-328,"y":103,"trait":"ballArea"},{"x":-336,"y":90,"trait":"ballArea"},{"x":-336,"y":90,"trait":"ballArea"},{"x":-336,"y":75,"trait":"ballArea"},{"x":-336,"y":-75,"trait":"ballArea"},{"x":-336,"y":-90,"trait":"ballArea"},{"x":-336,"y":-90,"trait":"ballArea"},{"x":-328,"y":-103,"trait":"ballArea"},{"x":-253,"y":-233,"trait":"ballArea"},{"x":-246,"y":-246,"trait":"ballArea"},{"x":-246,"y":-246,"trait":"ballArea"},{"x":-233,"y":-253,"trait":"ballArea"},{"x":-103,"y":-328,"trait":"ballArea"},{"x":-90,"y":-336,"trait":"ballArea"},{"x":-90,"y":-336,"trait":"ballArea"},{"x":-75,"y":-336,"trait":"ballArea"},{"x":75,"y":-336,"trait":"ballArea"},{"x":90,"y":-336,"trait":"ballArea"},{"x":90,"y":-336,"trait":"ballArea"},{"x":103,"y":-328,"trait":"ballArea"},{"x":233,"y":-253,"trait":"ballArea"},{"x":246,"y":-246,"trait":"ballArea"},{"x":246,"y":-246,"trait":"ballArea"},{"x":253,"y":-233,"trait":"ballArea"},{"x":328,"y":-103,"trait":"ballArea"},{"x":336,"y":-90,"trait":"ballArea"},{"x":336,"y":-90,"trait":"ballArea"},{"x":336,"y":-75,"trait":"ballArea"},{"x":336,"y":75,"trait":"ballArea"},{"x":336,"y":90,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":33,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":34,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":40,"v1":41,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":42,"v1":43,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":44,"v1":47,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ff7700","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"00ff00","cMask":[""]},{"v0":33,"v1":34,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":41,"v1":42,"trait":"decoration","vis":true,"color":"ff00ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178},{"v0":33,"v1":34,"trait":"goalNet","curve":178},{"v0":41,"v1":42,"trait":"goalNet","curve":178}],"goals":[{"p0":[328,103],"p1":[253,233],"team":"red","vis":true},{"p0":[75,336],"p1":[-75,336],"team":"red","vis":true},{"p0":[-253,233],"p1":[-328,103],"team":"red","vis":true},{"p0":[-328,-103],"p1":[-253,-233],"team":"red","vis":true},{"p0":[-75,-336],"p1":[75,-336],"team":"red","vis":true},{"p0":[253,-233],"p1":[328,-103],"team":"red","vis":true}],"discs":[{"pos":[328,103],"trait":"goalPost"},{"pos":[253,233],"trait":"goalPost"},{"pos":[75,336],"trait":"goalPost"},{"pos":[-75,336],"trait":"goalPost"},{"pos":[-253,233],"trait":"goalPost"},{"pos":[-328,103],"trait":"goalPost"},{"pos":[-328,-103],"trait":"goalPost"},{"pos":[-253,-233],"trait":"goalPost"},{"pos":[-75,-336],"trait":"goalPost"},{"pos":[75,-336],"trait":"goalPost"},{"pos":[253,-233],"trait":"goalPost"},{"pos":[328,-103],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var cinco = '{"name":"5 MAN BY RAMBO html fix from HaxMaps","width":360,"height":360,"spawnDistance":170,"bg":{"type":"grass","width":360,"height":360,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":291,"y":0,"trait":"ballArea"},{"x":287,"y":14,"trait":"ballArea"},{"x":240,"y":157,"trait":"ballArea"},{"x":236,"y":171,"trait":"ballArea"},{"x":236,"y":171,"trait":"ballArea"},{"x":223,"y":180,"trait":"ballArea"},{"x":102,"y":268,"trait":"ballArea"},{"x":90,"y":277,"trait":"ballArea"},{"x":90,"y":277,"trait":"ballArea"},{"x":75,"y":277,"trait":"ballArea"},{"x":-75,"y":277,"trait":"ballArea"},{"x":-90,"y":277,"trait":"ballArea"},{"x":-90,"y":277,"trait":"ballArea"},{"x":-102,"y":268,"trait":"ballArea"},{"x":-223,"y":180,"trait":"ballArea"},{"x":-236,"y":171,"trait":"ballArea"},{"x":-236,"y":171,"trait":"ballArea"},{"x":-240,"y":157,"trait":"ballArea"},{"x":-287,"y":14,"trait":"ballArea"},{"x":-291,"y":0,"trait":"ballArea"},{"x":-291,"y":0,"trait":"ballArea"},{"x":-287,"y":-14,"trait":"ballArea"},{"x":-240,"y":-157,"trait":"ballArea"},{"x":-236,"y":-171,"trait":"ballArea"},{"x":-236,"y":-171,"trait":"ballArea"},{"x":-223,"y":-180,"trait":"ballArea"},{"x":-102,"y":-268,"trait":"ballArea"},{"x":-90,"y":-277,"trait":"ballArea"},{"x":-90,"y":-277,"trait":"ballArea"},{"x":-75,"y":-277,"trait":"ballArea"},{"x":75,"y":-277,"trait":"ballArea"},{"x":90,"y":-277,"trait":"ballArea"},{"x":90,"y":-277,"trait":"ballArea"},{"x":102,"y":-268,"trait":"ballArea"},{"x":223,"y":-180,"trait":"ballArea"},{"x":236,"y":-171,"trait":"ballArea"},{"x":236,"y":-171,"trait":"ballArea"},{"x":240,"y":-157,"trait":"ballArea"},{"x":287,"y":-14,"trait":"ballArea"},{"x":291,"y":0,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":33,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":34,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":36,"v1":39,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"00ff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":33,"v1":34,"trait":"decoration","vis":true,"color":"ff00ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178},{"v0":33,"v1":34,"trait":"goalNet","curve":178}],"goals":[{"p0":[287,14],"p1":[240,157],"team":"red","vis":true},{"p0":[75,277],"p1":[-75,277],"team":"red","vis":true},{"p0":[-240,157],"p1":[-287,14],"team":"red","vis":true},{"p0":[-223,-180],"p1":[-102,-268],"team":"red","vis":true},{"p0":[102,-268],"p1":[223,-180],"team":"red","vis":true}],"discs":[{"pos":[287,14],"trait":"goalPost"},{"pos":[240,157],"trait":"goalPost"},{"pos":[75,277],"trait":"goalPost"},{"pos":[-75,277],"trait":"goalPost"},{"pos":[-240,157],"trait":"goalPost"},{"pos":[-287,14],"trait":"goalPost"},{"pos":[-223,-180],"trait":"goalPost"},{"pos":[-102,-268],"trait":"goalPost"},{"pos":[102,-268],"trait":"goalPost"},{"pos":[223,-180],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var cuatro = '{"name":"4 MAN BY RAMBO html fix from HaxMaps","width":300,"height":300,"spawnDistance":170,"bg":{"type":"grass","width":300,"height":300,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":217,"y":90,"trait":"ballArea"},{"x":207,"y":101,"trait":"ballArea"},{"x":101,"y":207,"trait":"ballArea"},{"x":90,"y":217,"trait":"ballArea"},{"x":90,"y":217,"trait":"ballArea"},{"x":75,"y":217,"trait":"ballArea"},{"x":-75,"y":217,"trait":"ballArea"},{"x":-90,"y":217,"trait":"ballArea"},{"x":-90,"y":217,"trait":"ballArea"},{"x":-101,"y":207,"trait":"ballArea"},{"x":-207,"y":101,"trait":"ballArea"},{"x":-217,"y":90,"trait":"ballArea"},{"x":-217,"y":90,"trait":"ballArea"},{"x":-217,"y":75,"trait":"ballArea"},{"x":-217,"y":-75,"trait":"ballArea"},{"x":-217,"y":-90,"trait":"ballArea"},{"x":-217,"y":-90,"trait":"ballArea"},{"x":-207,"y":-101,"trait":"ballArea"},{"x":-101,"y":-207,"trait":"ballArea"},{"x":-90,"y":-217,"trait":"ballArea"},{"x":-90,"y":-217,"trait":"ballArea"},{"x":-75,"y":-217,"trait":"ballArea"},{"x":75,"y":-217,"trait":"ballArea"},{"x":90,"y":-217,"trait":"ballArea"},{"x":90,"y":-217,"trait":"ballArea"},{"x":101,"y":-207,"trait":"ballArea"},{"x":207,"y":-101,"trait":"ballArea"},{"x":217,"y":-90,"trait":"ballArea"},{"x":217,"y":-90,"trait":"ballArea"},{"x":217,"y":-75,"trait":"ballArea"},{"x":217,"y":75,"trait":"ballArea"},{"x":217,"y":90,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":9,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":10,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":17,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":18,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":9,"v1":10,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":17,"v1":18,"trait":"decoration","vis":true,"color":"00ff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":9,"v1":10,"trait":"goalNet","curve":178},{"v0":17,"v1":18,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178}],"goals":[{"p0":[207,101],"p1":[101,207],"team":"red","vis":true},{"p0":[-101,207],"p1":[-207,101],"team":"red","vis":true},{"p0":[-207,-101],"p1":[-101,-207],"team":"red","vis":true},{"p0":[101,-207],"p1":[207,-101],"team":"red","vis":true}],"discs":[{"pos":[207,101],"trait":"goalPost"},{"pos":[101,207],"trait":"goalPost"},{"pos":[-101,207],"trait":"goalPost"},{"pos":[-207,101],"trait":"goalPost"},{"pos":[-207,-101],"trait":"goalPost"},{"pos":[-101,-207],"trait":"goalPost"},{"pos":[101,-207],"trait":"goalPost"},{"pos":[207,-101],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var tres = '{"name":"3 MAN BY RAMBO html fix from HaxMaps","width":300,"height":300,"spawnDistance":170,"bg":{"type":"grass","width":300,"height":300,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":168,"y":141,"trait":"ballArea"},{"x":168,"y":141,"trait":"ballArea"},{"x":38,"y":216,"trait":"ballArea"},{"x":38,"y":216,"trait":"ballArea"},{"x":38,"y":216,"trait":"ballArea"},{"x":38,"y":216,"trait":"ballArea"},{"x":-110,"y":190,"trait":"ballArea"},{"x":-110,"y":190,"trait":"ballArea"},{"x":-110,"y":190,"trait":"ballArea"},{"x":-110,"y":190,"trait":"ballArea"},{"x":-206,"y":75,"trait":"ballArea"},{"x":-206,"y":75,"trait":"ballArea"},{"x":-206,"y":75,"trait":"ballArea"},{"x":-206,"y":75,"trait":"ballArea"},{"x":-206,"y":-75,"trait":"ballArea"},{"x":-206,"y":-75,"trait":"ballArea"},{"x":-206,"y":-75,"trait":"ballArea"},{"x":-206,"y":-75,"trait":"ballArea"},{"x":-110,"y":-190,"trait":"ballArea"},{"x":-110,"y":-190,"trait":"ballArea"},{"x":-110,"y":-190,"trait":"ballArea"},{"x":-110,"y":-190,"trait":"ballArea"},{"x":38,"y":-216,"trait":"ballArea"},{"x":38,"y":-216,"trait":"ballArea"},{"x":38,"y":-216,"trait":"ballArea"},{"x":38,"y":-216,"trait":"ballArea"},{"x":168,"y":-141,"trait":"ballArea"},{"x":168,"y":-141,"trait":"ballArea"},{"x":168,"y":-141,"trait":"ballArea"},{"x":168,"y":-141,"trait":"ballArea"},{"x":219,"y":0,"trait":"ballArea"},{"x":219,"y":0,"trait":"ballArea"},{"x":219,"y":0,"trait":"ballArea"},{"x":219,"y":0,"trait":"ballArea"},{"x":168,"y":141,"trait":"ballArea"},{"x":168,"y":141,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":13,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":14,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":24,"v1":25,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":26,"v1":27,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":28,"v1":31,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":32,"v1":35,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"ff0000","cMask":[""]},{"v0":13,"v1":14,"trait":"decoration","vis":true,"color":"ffff00","cMask":[""]},{"v0":25,"v1":26,"trait":"decoration","vis":true,"color":"0000ff","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":13,"v1":14,"trait":"goalNet","curve":178},{"v0":25,"v1":26,"trait":"goalNet","curve":178}],"goals":[{"p0":[168,141],"p1":[38,216],"team":"red","vis":true},{"p0":[-206,75],"p1":[-206,-75],"team":"red","vis":true},{"p0":[38,-216],"p1":[168,-141],"team":"red","vis":true}],"discs":[{"pos":[168,141],"trait":"goalPost"},{"pos":[38,216],"trait":"goalPost"},{"pos":[-206,75],"trait":"goalPost"},{"pos":[-206,-75],"trait":"goalPost"},{"pos":[38,-216],"trait":"goalPost"},{"pos":[168,-141],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var dos = '{"name":"2 MAN BY RAMBO html fix from HaxMaps","width":250,"height":250,"spawnDistance":170,"bg":{"type":"grass","width":250,"height":250,"kickOffRadius":0,"cornerRadius":0,"borderRadius":0},"vertexes":[{"x":-173,"y":100,"trait":"ballArea"},{"x":-173,"y":75,"trait":"ballArea"},{"x":-173,"y":-75,"trait":"ballArea"},{"x":-173,"y":-100,"trait":"ballArea"},{"x":-173,"y":-100,"trait":"ballArea"},{"x":-152,"y":-113,"trait":"ballArea"},{"x":-22,"y":-187,"trait":"ballArea"},{"x":0,"y":-200,"trait":"ballArea"},{"x":0,"y":-200,"trait":"ballArea"},{"x":22,"y":-187,"trait":"ballArea"},{"x":152,"y":-112,"trait":"ballArea"},{"x":173,"y":-100,"trait":"ballArea"},{"x":173,"y":-100,"trait":"ballArea"},{"x":173,"y":-75,"trait":"ballArea"},{"x":173,"y":75,"trait":"ballArea"},{"x":173,"y":100,"trait":"ballArea"},{"x":173,"y":100,"trait":"ballArea"},{"x":152,"y":113,"trait":"ballArea"},{"x":22,"y":187,"trait":"ballArea"},{"x":0,"y":200,"trait":"ballArea"},{"x":0,"y":200,"trait":"ballArea"},{"x":-22,"y":187,"trait":"ballArea"},{"x":-152,"y":112,"trait":"ballArea"},{"x":-173,"y":100,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":2,"v1":3,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":4,"v1":7,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":8,"v1":11,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":12,"v1":13,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":14,"v1":15,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":16,"v1":19,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":20,"v1":23,"trait":"ballArea","vis":true,"color":"ffffff"},{"v0":1,"v1":2,"trait":"decoration","vis":true,"color":"992200","cMask":[""]},{"v0":13,"v1":14,"trait":"decoration","vis":true,"color":"002299","cMask":[""]},{"v0":1,"v1":2,"trait":"goalNet","curve":178},{"v0":13,"v1":14,"trait":"goalNet","curve":178}],"goals":[{"p0":[-173,75],"p1":[-173,-75],"team":"red","vis":true},{"p0":[173,-75],"p1":[173,75],"team":"red","vis":true}],"discs":[{"pos":[-173,75],"trait":"goalPost"},{"pos":[-173,-75],"trait":"goalPost"},{"pos":[173,-75],"trait":"goalPost"},{"pos":[173,75],"trait":"goalPost"}],"planes":[],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';
	var volley = '{"name":"ᴠᴏʟʟᴇʏʙᴀʟʟ  🏐","width":420,"height":200,"bg":{"type":"grass","color":"1DC5D0"},"vertexes":[{"x":-5,"y":20,"bCoef":0,"cMask":["ball"]},{"x":5,"y":20,"bCoef":0,"cMask":["ball"]},{"x":-3,"y":120,"bCoef":0,"cMask":["ball"]},{"x":100,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":100,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-100,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-100,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-385,"y":100,"cMask":[]},{"x":-400,"y":125,"cMask":[]},{"x":400,"y":125,"cMask":[]},{"x":385,"y":100,"cMask":[]},{"x":-70,"y":-50,"cMask":[]},{"x":70,"y":-50,"cMask":[]},{"x":3,"y":120,"bCoef":0,"cMask":["ball"]},{"x":-385,"y":103,"cMask":[]},{"x":385,"y":103,"cMask":[]},{"x":-387,"y":106,"cMask":[]},{"x":387,"y":106,"cMask":[]},{"x":-388,"y":109,"cMask":[]},{"x":388,"y":109,"cMask":[]},{"x":-391,"y":112,"cMask":[]},{"x":391,"y":112,"cMask":[]},{"x":-394,"y":115,"cMask":[]},{"x":394,"y":115,"cMask":[]},{"x":-396,"y":118,"cMask":[]},{"x":396,"y":118,"cMask":[]},{"x":-396,"y":121,"cMask":[]},{"x":396,"y":121,"cMask":[]},{"x":-396,"y":122,"cMask":[]},{"x":396,"y":122,"cMask":[]},{"x":3,"y":20,"bCoef":0,"cMask":["ball"]},{"x":0,"y":23,"bCoef":0,"cMask":["ball"]},{"x":100,"y":101,"cMask":[]},{"x":106,"y":124,"cMask":[]},{"x":-100,"y":101,"cMask":[]},{"x":-106,"y":124,"cMask":[]},{"x":-3,"y":20,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":0,"cMask":["ball"]},{"v0":3,"v1":4,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":5,"v1":6,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":0,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":1,"v1":12,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":8,"v1":9,"cMask":[],"color":"FFFFFF"},{"v0":10,"v1":7,"cMask":[],"color":"FFFFFF"},{"v0":15,"v1":14,"cMask":[],"color":"FDB279"},{"v0":17,"v1":16,"cMask":[],"color":"FDB279"},{"v0":19,"v1":18,"cMask":[],"color":"FDB279"},{"v0":21,"v1":20,"cMask":[],"color":"FDB279"},{"v0":23,"v1":22,"cMask":[],"color":"FDB279"},{"v0":25,"v1":24,"cMask":[],"color":"FDB279"},{"v0":27,"v1":26,"cMask":[],"color":"FDB279"},{"v0":29,"v1":28,"cMask":[],"color":"FDB279"},{"v0":8,"v1":7,"cMask":[],"color":"FFFFFF"},{"v0":10,"v1":9,"cMask":[],"color":"FFFFFF"},{"v0":32,"v1":33,"cMask":[],"color":"FFFFFF"},{"v0":34,"v1":35,"cMask":[],"color":"FFFFFF"}],"planes":[{"normal":[0,-1],"dist":-210,"bCoef":0,"cGroup":["ball"]},{"normal":[0,1],"dist":-50,"bCoef":-1,"cMask":["red"]},{"normal":[0,1],"dist":-50,"bCoef":-1,"cMask":["blue"]},{"normal":[0,-1],"dist":-125,"bCoef":0,"cMask":["red","blue","ball"]},{"normal":[1,0],"dist":0,"bCoef":0.1,"cMask":["blue"]},{"normal":[-1,0],"dist":0,"bCoef":0.1,"cMask":["red"]},{"normal":[1,0],"dist":-420,"bCoef":0.6,"cMask":["red","blue","ball"]},{"normal":[-1,0],"dist":-420,"bCoef":0.6,"cMask":["red","blue","ball"]},{"normal":[0,1],"dist":-199790,"bCoef":0,"cGroup":["ball"]},{"normal":[-1,0],"dist":-100000,"bCoef":0,"cGroup":["ball"]},{"normal":[1,0],"dist":-100000,"bCoef":0,"cGroup":["ball"]}],"goals":[{"p0":[0,114],"p1":[420,114],"team":"blue"},{"p0":[0,114],"p1":[-420,114],"team":"red"}],"discs":[{"bCoef":1,"invMass":0.9,"damping":0.98,"color":"FAD804","cMask":["wall"],"cGroup":["ball","kick","score"]},{"pos":[0,75],"radius":4,"bCoef":0,"invMass":0,"color":"2575B2","cMask":["red","blue","ball"]},{"pos":[0,85],"radius":4,"bCoef":0,"invMass":0,"color":"2575B2","cMask":["red","blue","ball"]},{"pos":[0,95],"radius":4,"bCoef":0,"invMass":0,"color":"2575B2","cMask":["red","blue","ball"]},{"pos":[0,105],"radius":4,"bCoef":0,"invMass":0,"color":"2575B2","cMask":["red","blue","ball"]},{"pos":[0,115],"radius":4,"bCoef":0,"invMass":0,"color":"2575B2","cMask":["red","blue","ball"]},{"pos":[0,66],"radius":3,"invMass":0,"cMask":["red","blue","ball"]},{"pos":[0,59],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,55],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,50],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,45],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,40],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,36],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,31],"radius":2,"color":"404040","cMask":["red","blue","ball"]},{"pos":[0,25],"radius":3,"invMass":0,"cMask":["red","blue","ball"]},{"pos":[0,-100000],"radius":100000,"bCoef":0,"invMass":60,"color":"transparent","cMask":["ball"]}],"playerPhysics":{"damping":0.85,"acceleration":0.5,"kickStrength":20},"ballPhysics":"disc0","spawnDistance":299,"joints":[{"d0":6,"d1":7,"length":3,"color":"EBEBEB","strength":0.3},{"d0":7,"d1":8,"length":3,"color":"EBEBEB","strength":0.3},{"d0":8,"d1":9,"length":3,"color":"EBEBEB","strength":0.3},{"d0":9,"d1":10,"length":3,"color":"EBEBEB","strength":0.3},{"d0":10,"d1":11,"length":3,"color":"EBEBEB","strength":0.3},{"d0":11,"d1":12,"length":3,"color":"EBEBEB","strength":0.3},{"d0":12,"d1":13,"length":3,"color":"EBEBEB","strength":0.3},{"d0":13,"d1":14,"length":3,"color":"EBEBEB","strength":0.3}],"redSpawnPoints":[[-350,77],[-167,77]],"blueSpawnPoints":[[350,77],[167,77]]}';
	var space = '{"name":"Spacebounce Official Map","width":900,"height":550,"bg":{"type":"hockey","width":550,"height":240},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":550,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-550,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-610,"y":-60,"bCoef":0.5,"cMask":["ball"]},{"x":-610,"y":60,"bCoef":0.5,"cMask":["ball"]},{"x":610,"y":-60,"bCoef":0.5,"cMask":["ball"]},{"x":610,"y":60,"bCoef":0.5,"cMask":["ball"]},{"x":0,"y":240,"cMask":[]},{"x":0,"y":-240,"cMask":[]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-121,"y":254,"cMask":[]},{"x":-121,"y":300,"cMask":[]},{"x":-87,"y":254,"cMask":[]},{"x":-87,"y":300,"cMask":[]},{"x":-120,"y":278,"cMask":[]},{"x":-88,"y":278,"cMask":[]},{"x":-52,"y":254,"cMask":[]},{"x":-69,"y":300,"cMask":[]},{"x":-35,"y":300,"cMask":[]},{"x":-60,"y":278,"cMask":[]},{"x":-43,"y":278,"cMask":[]},{"x":-17,"y":300,"cMask":[]},{"x":17,"y":254,"cMask":[]},{"x":-17,"y":254,"cMask":[]},{"x":17,"y":300,"cMask":[]},{"x":70,"y":257,"cMask":[]},{"x":38,"y":257,"cMask":[]},{"x":40,"y":277,"cMask":[]},{"x":67,"y":297,"cMask":[]},{"x":35,"y":296,"cMask":[]},{"x":65,"y":277,"cMask":[]},{"x":88,"y":257,"cMask":[]},{"x":88,"y":299,"cMask":[]},{"x":88,"y":277,"cMask":[]},{"x":119,"y":257,"cMask":[]},{"x":119,"y":277,"cMask":[]},{"x":119,"y":299,"cMask":[]}],"segments":[{"v0":17,"v1":19,"cMask":[],"color":"CCCCFF"},{"v0":19,"v1":18,"cMask":[],"color":"6B6B6B"},{"v0":18,"v1":16,"cMask":[],"color":"CCCCFF"},{"v0":1,"v1":2,"cMask":[],"color":"D0D0E8"},{"v0":5,"v1":6,"cMask":[],"color":"D0D0E8"},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D0D0E8"},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"D0D0E8"},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"D0D0E8"},{"v0":18,"v1":19,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"D0D0E8"},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D0D0E8"},{"v0":0,"v1":1,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":2,"v1":3,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":4,"v1":5,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":6,"v1":7,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":0,"v1":4,"bias":100,"cMask":["ball"],"color":"D0D0E8"},{"v0":3,"v1":7,"bias":-100,"cMask":["ball"],"color":"D0D0E8"},{"v0":1,"v1":13,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":12,"v1":13,"bCoef":0.5,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":12,"v1":2,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":15,"v1":5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":14,"v1":15,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"},{"v0":6,"v1":14,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"],"cGroup":["ball"],"color":"D0D0E8"}],"planes":[{"normal":[0,1],"dist":-550,"bCoef":0.1},{"normal":[0,-1],"dist":-550,"bCoef":0.1},{"normal":[1,0],"dist":-900,"bCoef":0.1},{"normal":[-1,0],"dist":-900,"bCoef":0.1},{"normal":[0,1],"dist":-247,"cMask":["ball"]},{"normal":[0,-1],"dist":-247,"cMask":["ball"]}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":8,"invMass":0,"color":"961515"},{"pos":[-550,-80],"radius":8,"invMass":0,"color":"961515"},{"pos":[550,80],"radius":8,"invMass":0,"color":"1E1666"},{"pos":[550,-80],"radius":8,"invMass":0,"color":"1E1666"},{"pos":[-566,76.5],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.8,61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.6,48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.4,36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.2,24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579,12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-578.8,0],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579,-12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.2,-24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.4,-36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.6,-48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-579.8,-61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-580,-74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[-566,-76.5],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[566,76.5],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.8,61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.6,48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.4,36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.2,24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579,12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[578.8,0],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579,-12],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.2,-24],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.4,-36],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.6,-48],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[579.8,-61],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[580,-74],"radius":0.01,"invMass":0,"damping":0.96,"color":"0","cMask":["ball"]},{"pos":[566,-76.5],"radius":0.01,"invMass":1.5,"damping":0.96,"color":"0","cMask":["ball"]}],"playerPhysics":{"bCoef":1.5,"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.9995},"ballPhysics":"disc0","spawnDistance":350,"joints":[{"d0":1,"d1":5,"length":16.3783393541592,"strength":0.1},{"d0":5,"d1":6,"length":14.221462653327892,"strength":0.1},{"d0":6,"d1":7,"length":13.001538370516007,"strength":0.1},{"d0":7,"d1":8,"length":13.001538370516004,"strength":0.1},{"d0":8,"d1":9,"length":12.001666550942,"strength":0.1},{"d0":9,"d1":10,"length":12.001666550941996,"strength":0.1},{"d0":10,"d1":11,"length":12.001666550942,"strength":0.1},{"d0":11,"d1":12,"length":12.001666550942,"strength":0.1},{"d0":12,"d1":13,"length":12.001666550942,"strength":0.1},{"d0":13,"d1":14,"length":12.001666550942,"strength":0.1},{"d0":14,"d1":15,"length":12.001666550941996,"strength":0.1},{"d0":15,"d1":16,"length":12.001666550942,"strength":0.1},{"d0":16,"d1":17,"length":13.001538370516004,"strength":0.1},{"d0":17,"d1":18,"length":13.001538370516007,"strength":0.1},{"d0":18,"d1":19,"length":14.221462653327892,"strength":0.1},{"d0":19,"d1":2,"length":16.3783393541592,"strength":0.1},{"d0":3,"d1":20,"length":16.3783393541592,"strength":0.1},{"d0":20,"d1":21,"length":14.221462653327892,"strength":0.1},{"d0":21,"d1":22,"length":13.001538370516007,"strength":0.1},{"d0":22,"d1":23,"length":13.001538370516004,"strength":0.1},{"d0":23,"d1":24,"length":12.001666550942,"strength":0.1},{"d0":24,"d1":25,"length":12.001666550941996,"strength":0.1},{"d0":25,"d1":26,"length":12.001666550942,"strength":0.1},{"d0":26,"d1":27,"length":12.001666550942,"strength":0.1},{"d0":27,"d1":28,"length":12.001666550942,"strength":0.1},{"d0":28,"d1":29,"length":12.001666550942,"strength":0.1},{"d0":29,"d1":30,"length":12.001666550941996,"strength":0.1},{"d0":30,"d1":31,"length":12.001666550942,"strength":0.1},{"d0":31,"d1":32,"length":13.001538370516004,"strength":0.1},{"d0":32,"d1":33,"length":13.001538370516007,"strength":0.1},{"d0":33,"d1":34,"length":14.221462653327892,"strength":0.1},{"d0":34,"d1":4,"length":16.3783393541592,"strength":0.1}],"redSpawnPoints":[[-350,0],[-350,60],[-350,-60],[-350,120],[-350,-120],[-605,0]],"blueSpawnPoints":[[350,0],[350,60],[350,-60],[350,120],[350,-120],[605,0]]}';
	var rxstadium = '{"name":"RXstadium 3.5","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"bCoef":5,"cMask":["ball"]},{"x":-370,"y":64,"bCoef":5,"cMask":["ball"]},{"x":-370,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":-370,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":370,"y":170,"bCoef":5,"cMask":["ball"]},{"x":370,"y":64,"bCoef":5,"cMask":["ball"]},{"x":370,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":370,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-370,"y":-60,"bCoef":20,"cMask":["red","blue","ball"]},{"x":-382,"y":-43,"bCoef":20,"cMask":["red","blue","ball"]},{"x":-382,"y":45,"bCoef":20,"cMask":["red","blue","ball"]},{"x":-369,"y":65,"bCoef":20,"cMask":["red","blue","ball"]},{"x":370,"y":-65,"bCoef":20,"cMask":["red","blue","ball"]},{"x":381,"y":-45,"bCoef":20,"cMask":["red","blue","ball"]},{"x":381,"y":43,"bCoef":20,"cMask":["red","blue","ball"]},{"x":370,"y":63,"bCoef":20,"cMask":["red","blue","ball"]},{"x":-45,"y":-32,"cMask":[]},{"x":-31,"y":44,"cMask":[]},{"x":7,"y":-19,"cMask":[]},{"x":-36,"y":7,"cMask":[]},{"x":11,"y":37,"cMask":[]},{"x":-3,"y":-28,"cMask":[]},{"x":16,"y":-8,"cMask":[]},{"x":55,"y":32,"cMask":[]},{"x":28,"y":35,"cMask":[]},{"x":44,"y":-16,"cMask":[]},{"x":370,"y":-70,"cMask":[]},{"x":370,"y":74,"cMask":["ball"]},{"x":-370,"y":72},{"x":-380,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":-383,"y":170,"bCoef":5,"cMask":["ball"]},{"x":-383,"y":64,"bCoef":5,"cMask":["ball"]},{"x":388,"y":-63,"bCoef":5,"cMask":["ball"]},{"x":387,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":389,"y":170,"bCoef":5,"cMask":["ball"]},{"x":395,"y":65,"bCoef":5,"cMask":["ball"]},{"x":-405,"y":-52,"bCoef":5,"cMask":["ball"]},{"x":-404,"y":-169,"bCoef":5,"cMask":["ball"]},{"x":-405,"y":169,"bCoef":5,"cMask":["ball"]},{"x":-404,"y":52,"bCoef":5,"cMask":["ball"]},{"x":405,"y":-60,"bCoef":5,"cMask":["ball"]},{"x":400,"y":-168,"bCoef":5,"cMask":["ball"]},{"x":402,"y":167,"bCoef":5,"cMask":["ball"]},{"x":397,"y":59,"bCoef":5,"cMask":["ball"]},{"x":376,"y":167,"bCoef":5,"cMask":["ball"]},{"x":381,"y":78,"bCoef":5,"cMask":["ball"]},{"x":376,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":382,"y":-169,"bCoef":5,"cMask":["ball"]},{"x":400,"y":-108,"bCoef":5,"cMask":["ball"]},{"x":391,"y":-173,"bCoef":5,"cMask":["ball"]},{"x":385,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":384,"y":-171,"bCoef":5,"cMask":["ball"]},{"x":402,"y":-61,"bCoef":5,"cMask":["ball"]},{"x":397,"y":-169,"bCoef":5,"cMask":["ball"]},{"x":373,"y":-65,"bCoef":5,"cMask":["ball"]},{"x":379,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":397,"y":-109,"bCoef":5,"cMask":["ball"]},{"x":388,"y":-174,"bCoef":5,"cMask":["ball"]},{"x":-392,"y":-65,"bCoef":5,"cMask":["ball"]},{"x":-393,"y":-172,"bCoef":5,"cMask":["ball"]},{"x":-375,"y":-62,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":-404,"y":-66,"bCoef":5,"cMask":["ball"]},{"x":-398,"y":-171,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":-110,"bCoef":5,"cMask":["ball"]},{"x":-389,"y":-175,"bCoef":5,"cMask":["ball"]},{"x":-386,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":-387,"y":-171,"bCoef":5,"cMask":["ball"]},{"x":-369,"y":-61,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":-169,"bCoef":5,"cMask":["ball"]},{"x":-398,"y":-65,"bCoef":5,"cMask":["ball"]},{"x":-392,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":-109,"bCoef":5,"cMask":["ball"]},{"x":-383,"y":-174,"bCoef":5,"cMask":["ball"]},{"x":-389,"y":167,"bCoef":5,"cMask":["ball"]},{"x":-395,"y":66,"bCoef":5,"cMask":["ball"]},{"x":-372,"y":170,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":76,"bCoef":5,"cMask":["ball"]},{"x":-401,"y":166,"bCoef":5,"cMask":["ball"]},{"x":-395,"y":61,"bCoef":5,"cMask":["ball"]},{"x":-377,"y":122,"bCoef":5,"cMask":["ball"]},{"x":-394,"y":77,"bCoef":5,"cMask":["ball"]},{"x":-386,"y":178,"bCoef":5,"cMask":["ball"]},{"x":-387,"y":71,"bCoef":5,"cMask":["ball"]},{"x":-369,"y":181,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":73,"bCoef":5,"cMask":["ball"]},{"x":-398,"y":177,"bCoef":5,"cMask":["ball"]},{"x":-392,"y":72,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":133,"bCoef":5,"cMask":["ball"]},{"x":-383,"y":68,"bCoef":5,"cMask":["ball"]},{"x":-386,"y":178,"bCoef":5,"cMask":["ball"]},{"x":-387,"y":71,"bCoef":5,"cMask":["ball"]},{"x":-369,"y":181,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":73,"bCoef":5,"cMask":["ball"]},{"x":-398,"y":177,"bCoef":5,"cMask":["ball"]},{"x":-392,"y":72,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":133,"bCoef":5,"cMask":["ball"]},{"x":-383,"y":68,"bCoef":5,"cMask":["ball"]},{"x":393,"y":168,"bCoef":5,"cMask":["ball"]},{"x":392,"y":61,"bCoef":5,"cMask":["ball"]},{"x":410,"y":171,"bCoef":5,"cMask":["ball"]},{"x":405,"y":63,"bCoef":5,"cMask":["ball"]},{"x":381,"y":167,"bCoef":5,"cMask":["ball"]},{"x":387,"y":62,"bCoef":5,"cMask":["ball"]},{"x":405,"y":123,"bCoef":5,"cMask":["ball"]},{"x":396,"y":58,"bCoef":5,"cMask":["ball"]},{"x":387,"y":172,"bCoef":5,"cMask":["ball"]},{"x":386,"y":65,"bCoef":5,"cMask":["ball"]},{"x":404,"y":175,"bCoef":5,"cMask":["ball"]},{"x":399,"y":67,"bCoef":5,"cMask":["ball"]},{"x":375,"y":171,"bCoef":5,"cMask":["ball"]},{"x":381,"y":66,"bCoef":5,"cMask":["ball"]},{"x":399,"y":127,"bCoef":5,"cMask":["ball"]},{"x":390,"y":62,"bCoef":5,"cMask":["ball"]},{"x":402,"y":-68,"bCoef":5,"cMask":["ball"]},{"x":397,"y":-176,"bCoef":5,"cMask":["ball"]},{"x":393,"y":-67,"bCoef":5,"cMask":["ball"]},{"x":392,"y":-174,"bCoef":5,"cMask":["ball"]},{"x":381,"y":-68,"bCoef":5,"cMask":["ball"]},{"x":387,"y":-173,"bCoef":5,"cMask":["ball"]},{"x":375,"y":-64,"bCoef":5,"cMask":["ball"]},{"x":386,"y":-170,"bCoef":5,"cMask":["ball"]},{"x":404,"y":-60,"bCoef":5,"cMask":["ball"]},{"x":399,"y":-168,"bCoef":5,"cMask":["ball"]},{"x":-369,"y":66,"bCoef":5,"cMask":["ball"]},{"x":-371,"y":170,"bCoef":5,"cMask":["ball"]},{"x":-371,"y":64,"bCoef":5,"cMask":["ball"]},{"x":375,"y":171,"bCoef":5,"cMask":["ball"]},{"x":381,"y":66,"bCoef":5,"cMask":["ball"]},{"x":383,"y":168,"bCoef":5,"cMask":["ball"]},{"x":389,"y":63,"bCoef":5,"cMask":["ball"]},{"x":-388,"y":177,"bCoef":5,"cMask":["ball"]},{"x":-382,"y":72,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":174,"bCoef":5,"cMask":["ball"]},{"x":-374,"y":69,"bCoef":5,"cMask":["ball"]},{"x":-386,"y":-63,"bCoef":5,"cMask":["ball"]},{"x":-380,"y":-168,"bCoef":5,"cMask":["ball"]},{"x":-378,"y":-66,"bCoef":5,"cMask":["ball"]},{"x":-372,"y":-171,"bCoef":5,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":5,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"bCoef":5,"vis":false,"cMask":["ball"],"color":"FF00"},{"v0":4,"v1":5,"bCoef":5,"vis":false,"cMask":["ball"],"color":"FF00"},{"v0":6,"v1":7,"bCoef":5,"vis":false,"cMask":["ball"],"color":"FF00"},{"v0":13,"v1":12,"bCoef":20,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue","ball"],"color":"FF0000"},{"v0":13,"v1":14,"bCoef":20,"cMask":["red","blue","ball"],"color":"FF0000"},{"v0":15,"v1":14,"bCoef":20,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue","ball"],"color":"FF0000"},{"v0":16,"v1":17,"bCoef":20,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue","ball"],"color":"FF"},{"v0":17,"v1":18,"bCoef":20,"cMask":["red","blue","ball"],"color":"FF"},{"v0":18,"v1":19,"bCoef":20,"curve":58.79210570988652,"curveF":1.775,"cMask":["red","blue","ball"],"color":"FF"},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":179.4652432731264,"curveF":0.004666666666666852,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":[],"color":"FFFFFF"},{"v0":20,"v1":22,"curve":96.35966023972848,"curveF":0.8947368421052629,"cMask":[],"color":"FFFFFF"},{"v0":22,"v1":23,"curve":116.94202392449317,"curveF":0.6134969325153375,"cMask":[],"color":"FFFFFF"},{"v0":23,"v1":24,"curve":14.961772359047355,"curveF":7.615384615384615,"cMask":[],"color":"FFFFFF"},{"v0":25,"v1":23,"cMask":[],"color":"FFFFFF"},{"v0":26,"v1":27,"cMask":[],"color":"FFFFFF"},{"v0":28,"v1":29,"curve":11.782941155585567,"curveF":9.690909090909098,"cMask":[],"color":"FFFFFF"},{"v0":7,"v1":30,"cMask":[]},{"v0":31,"v1":4,"cMask":["ball"]},{"v0":2,"v1":3},{"v0":33,"v1":34,"curve":82.35646818546887,"curveF":1.1431667516573178,"vis":false},{"v0":35,"v1":36,"curve":53.08257550561469,"curveF":2.0020754716981144,"vis":false},{"v0":38,"v1":37,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":40,"v1":39,"curve":19.656724651143115,"curveF":5.7723449001051526,"vis":false},{"v0":42,"v1":41,"curve":102.47926373235381,"curveF":0.8028824157389051,"vis":false},{"v0":44,"v1":43,"curve":102.47926373235381,"curveF":0.8028824157389051,"vis":false},{"v0":45,"v1":46,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":47,"v1":48,"curve":88.51837211634533,"curveF":1.0261994949494955,"vis":false},{"v0":50,"v1":49,"curve":49.27297764532706,"curveF":2.18051948051948,"vis":false},{"v0":51,"v1":52,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":53,"v1":54,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":56,"v1":55,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":57,"v1":58,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":59,"v1":60,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":61,"v1":62,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":64,"v1":63,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":65,"v1":66,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":67,"v1":68,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":69,"v1":70,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":72,"v1":71,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":73,"v1":74,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":75,"v1":76,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":77,"v1":78,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":80,"v1":79,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":81,"v1":82,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":83,"v1":84,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":85,"v1":86,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":88,"v1":87,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":89,"v1":90,"curve":65.60106552171794,"curveF":1.551664572864322,"vis":false},{"v0":91,"v1":92,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":93,"v1":94,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":96,"v1":95,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":97,"v1":98,"curve":24.301969754852024,"curveF":4.644415357766154,"vis":false},{"v0":99,"v1":100,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":101,"v1":102,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":104,"v1":103,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":105,"v1":106,"curve":41.69824038573799,"curveF":2.6257352941176473,"vis":false},{"v0":107,"v1":108,"curve":30.522012258863157,"curveF":3.6651829871414456,"vis":false},{"v0":109,"v1":110,"curve":73.1649912381328,"curveF":1.347360912981456,"vis":false},{"v0":112,"v1":111,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":113,"v1":114,"curve":41.69824038573799,"curveF":2.6257352941176473,"vis":false},{"v0":117,"v1":118,"curve":121.09593780885169,"curveF":0.5646680942184156,"vis":false},{"v0":119,"v1":120,"curve":88.51837211634533,"curveF":1.0261994949494955,"vis":false},{"v0":122,"v1":121,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":123,"v1":124,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":126,"v1":125,"curve":55.616132875722855,"curveF":1.8960216998191681,"vis":false},{"v0":127,"v1":128,"curve":41.69824038573799,"curveF":2.6257352941176473,"vis":false},{"v0":130,"v1":131},{"v0":132,"v1":133,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":134,"v1":135,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":136,"v1":137,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":138,"v1":139,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":140,"v1":141,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false},{"v0":142,"v1":143,"curve":12.665337483287459,"curveF":9.010779436152578,"vis":false}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-386,"bCoef":0.1},{"normal":[-1,0],"dist":-388,"bCoef":0.1}],"goals":[{"p0":[-370,66],"p1":[-370,-62],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-371,65],"radius":8,"bCoef":4,"invMass":0,"color":"FF0000","cMask":["red","blue","ball"]},{"pos":[-373,-60],"radius":8,"bCoef":4,"invMass":0,"color":"FF0000","cMask":["red","blue","ball"]},{"pos":[371,64],"radius":8,"bCoef":4,"invMass":0,"color":"FF","cMask":["red","blue","ball"]},{"pos":[370,-64],"radius":8,"bCoef":4,"invMass":0,"color":"FF","cMask":["red","blue","ball"]}],"playerPhysics":{},"ballPhysics":"disc0","spawnDistance":170}';
	var freekick = '{"name":"[㎕]ⓦ P.Cech Freekick","width":800,"height":400,"bg":{"type":"grass","width":700,"height":300,"kickOffRadius":1},"vertexes":[{"x":707.4444580078125,"y":-137.18519592285156,"cMask":["blue","ball"]},{"x":745.4444580078125,"y":-137.18519592285156},{"x":745.4444580078125,"y":123.81480407714844},{"x":707.4444580078125,"y":123.81480407714844,"cMask":["blue","ball"]},{"x":745.4444580078125,"y":123.81480407714844},{"x":724.4444580078125,"y":-136.18519592285156,"cMask":["wall"]},{"x":724.4444580078125,"y":122.81480407714844,"cMask":["wall"]},{"x":712.4444580078125,"y":-135.18519592285156,"cMask":["wall"]},{"x":712.4444580078125,"y":122.81480407714844,"cMask":["wall"]},{"x":736.4444580078125,"y":-137.18519592285156,"cMask":["wall"]},{"x":735.4444580078125,"y":121.81480407714844,"cMask":["wall"]},{"x":698.4444580078125,"y":-17.185195922851562,"cMask":["wall"]},{"x":744.4444580078125,"y":-17.185195922851562,"cMask":["wall"]},{"x":698.4444580078125,"y":29.185195922851562,"cMask":["wall"]},{"x":744.4444580078125,"y":29.185195922851562,"cMask":["wall"]},{"x":698.4444580078125,"y":-56.85186004638672,"cMask":["wall"]},{"x":742.4444580078125,"y":-56.85186004638672,"cMask":["wall"]},{"x":698.4444580078125,"y":68.85186004638672,"cMask":["wall"]},{"x":742.4444580078125,"y":68.85186004638672,"cMask":["wall"]},{"x":697.4444580078125,"y":-104.85186004638672,"cMask":["wall"]},{"x":745.4444580078125,"y":-104.85186004638672,"cMask":["wall"]},{"x":697.4444580078125,"y":116.85186004638672},{"x":745.4444580078125,"y":116.85186004638672},{"x":699.4444580078125,"y":-84.85186004638672,"cMask":["wall"]},{"x":742.4444580078125,"y":-84.85186004638672,"cMask":["wall"]},{"x":699.4444580078125,"y":96.85186004638672,"cMask":["wall"]},{"x":742.4444580078125,"y":96.85186004638672,"cMask":["wall"]},{"x":700.4444580078125,"y":-35.85186004638672,"cMask":["wall"]},{"x":745.4444580078125,"y":-35.85186004638672,"cMask":["wall"]},{"x":700.4444580078125,"y":47.85186004638672,"cMask":["wall"]},{"x":745.4444580078125,"y":47.85186004638672,"cMask":["wall"]},{"x":699.4444580078125,"y":5.148139953613281,"cMask":["wall"]},{"x":744.4444580078125,"y":5.148139953613281,"cMask":["wall"]},{"x":699.4444580078125,"y":10.851860046386719},{"x":744.4444580078125,"y":10.851860046386719},{"x":698.4444580078125,"y":-170.18519592285156,"cMask":["blue"]},{"x":619.4444580078125,"y":-170.18519592285156,"cMask":["blue"]},{"x":698.4444580078125,"y":164.18519592285156,"cMask":["blue"]},{"x":619.4444580078125,"y":164.18519592285156,"cMask":["blue"]},{"x":619.4444580078125,"y":9.814804077148438,"cMask":["blue"]},{"x":619.4444580078125,"y":2.1851959228515625,"cMask":["blue"]},{"x":696.4444580078125,"y":-206.18519592285156,"cMask":["red"]},{"x":547.4444580078125,"y":-206.18519592285156,"cMask":["red"]},{"x":696.4444580078125,"y":207.18519592285156},{"x":547.4444580078125,"y":207.18519592285156,"cMask":["red"]},{"x":548.4444580078125,"y":207.25925827026367,"cMask":["red"]},{"x":667.4444580078125,"y":-300.18519592285156},{"x":698.4444580078125,"y":-270.18519592285156},{"x":667.4444580078125,"y":300.18519592285156},{"x":698.4444580078125,"y":270.18519592285156},{"x":546.4444580078125,"y":-106.85186004638672,"cMask":["red"]},{"x":545.4444580078125,"y":83.14813995361328,"cMask":["red"]},{"x":575.4444580078125,"y":6.148139953613281,"cMask":["red"]},{"x":589.4444580078125,"y":6.148139953613281,"cMask":["red"]},{"x":-700.3333339691162,"y":-300.8518600463867},{"x":700.4444580078125,"y":-299.8518600463867,"cMask":["red"]},{"x":-700.3333339691162,"y":300.8518600463867},{"x":700.4444580078125,"y":299.8518600463867,"cMask":["red"]},{"x":700.4444580078125,"y":19.037036895751953,"cMask":["red"]},{"x":-700.4444580078125,"y":13.037036895751953},{"x":700.4444580078125,"y":-7.037036895751953,"cMask":["red"]},{"x":-700.4444580078125,"y":-13.037036895751953},{"x":83.4444580078125,"y":-81.07407760620117,"bCoef":-5,"cMask":["ball"]},{"x":94.4444580078125,"y":-61.07407760620117,"bCoef":-5,"cMask":["ball"]},{"x":86.4444580078125,"y":92.07407760620117,"bCoef":-5,"cMask":["ball"]},{"x":94.4444580078125,"y":71.07407760620117,"bCoef":-5,"cMask":["ball"]},{"x":398.4444580078125,"y":-141.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":398.4444580078125,"y":151.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":392.4444580078125,"y":-172.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":395.4444580078125,"y":178.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":95.4444580078125,"y":-25.074077606201172,"bCoef":-4,"cMask":["ball"]},{"x":95.4444580078125,"y":-1.0740776062011719,"bCoef":-4,"cMask":["ball"]},{"x":95.4444580078125,"y":26.074077606201172,"bCoef":-4,"cMask":["ball"]},{"x":95.4444580078125,"y":2.074077606201172,"bCoef":-4,"cMask":["ball"]},{"x":396.4444580078125,"y":-49.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":396.4444580078125,"y":50.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":395.4444580078125,"y":-80.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":395.4444580078125,"y":81.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":216.4444580078125,"y":-215.07407760620117,"cMask":["red"]},{"x":219.4444580078125,"y":217.92592239379883,"cMask":["red"]},{"x":-463.7777786254883,"y":-167.9629669189453,"cMask":["blue"]},{"x":-444.7777786254883,"y":-167.9629669189453,"cMask":["blue"]},{"x":-463.7777786254883,"y":-130.9629669189453,"cMask":["blue"]},{"x":-447.7777786254883,"y":-130.9629669189453,"cMask":["blue"]},{"x":-447.7777786254883,"y":-157.9629669189453,"cMask":["blue"]},{"x":-451.7777786254883,"y":-139.9629669189453,"cMask":["blue"]},{"x":-444.7777786254883,"y":-143.9629669189453,"cMask":["blue"]},{"x":-437.7777786254883,"y":-143.9629669189453,"cMask":["blue"]},{"x":-436.7777786254883,"y":-154.9629669189453,"cMask":["blue"]},{"x":-427.7777786254883,"y":-138.9629669189453,"cMask":["blue"]},{"x":-414.7777786254883,"y":-145.9629669189453,"cMask":["blue"]},{"x":-419.7777786254883,"y":-155.9629669189453,"cMask":["blue"]},{"x":-427.7777786254883,"y":-151.9629669189453,"cMask":["blue"]},{"x":-415.7777786254883,"y":-139.9629669189453,"cMask":["blue"]},{"x":-413.7777786254883,"y":-169.9629669189453,"cMask":["blue"]},{"x":-400.7777786254883,"y":-168.9629669189453,"cMask":["blue"]},{"x":-400.7777786254883,"y":-130.9629669189453,"cMask":["blue"]},{"x":-412.7777786254883,"y":-130.9629669189453,"cMask":["blue"]},{"x":-354.7777786254883,"y":-170.9629669189453,"cMask":["blue"]},{"x":-354.7777786254883,"y":-137.9629669189453,"cMask":["blue"]},{"x":-315.7777786254883,"y":-174.9629669189453,"cMask":["blue"]},{"x":-315.7777786254883,"y":-140.9629669189453,"cMask":["blue"]},{"x":-315.7777786254883,"y":-159.9629669189453,"cMask":["blue"]},{"x":-292.7777786254883,"y":-144.9629669189453,"cMask":["blue"]},{"x":-292.7777786254883,"y":-139.9629669189453,"cMask":["blue"]},{"x":-253.77777862548828,"y":-179.9629669189453,"cMask":["blue"]},{"x":-253.77777862548828,"y":-140.9629669189453,"cMask":["blue"]},{"x":-241.77777862548828,"y":-179.9629669189453,"cMask":["blue"]},{"x":-226.77777862548828,"y":-179.9629669189453,"cMask":["blue"]},{"x":-240.77777862548828,"y":-142.9629669189453,"cMask":["blue"]},{"x":-225.77777862548828,"y":-140.9629669189453,"cMask":["blue"]},{"x":-240.77777862548828,"y":-162.9629669189453,"cMask":["blue"]},{"x":-230.77777862548828,"y":-162.9629669189453,"cMask":["blue"]},{"x":-195.77777862548828,"y":-181.9629669189453,"cMask":["blue"]},{"x":-195.77777862548828,"y":-145.9629669189453,"cMask":["blue"]},{"x":-177.77777862548828,"y":-178.9629669189453,"cMask":["blue"]},{"x":-177.77777862548828,"y":-143.9629669189453,"cMask":["blue"]},{"x":-177.77777862548828,"y":-161.9629669189453,"cMask":["blue"]},{"x":-163.77777862548828,"y":-161.9629669189453,"cMask":["blue"]},{"x":-162.77777862548828,"y":-179.9629669189453,"cMask":["blue"]},{"x":-162.77777862548828,"y":-141.9629669189453,"cMask":["blue"]},{"x":-362.7777786254883,"y":-161.9629669189453,"cMask":["blue"]},{"x":-359.7777786254883,"y":-148.9629669189453,"cMask":["blue"]},{"x":-353.7777786254883,"y":-160.9629669189453,"cMask":["blue"]},{"x":-351.7777786254883,"y":-149.9629669189453,"cMask":["blue"]},{"x":-344.7777786254883,"y":-161.9629669189453,"cMask":["blue"]},{"x":95.4444580078125,"y":-4.8518524169921875,"cMask":["ball"]},{"x":94.4444580078125,"y":-60.85185241699219,"bCoef":-3,"cMask":["ball"]},{"x":95.4444580078125,"y":-28.851852416992188,"bCoef":-3,"cMask":["ball"]},{"x":95.4444580078125,"y":29.148147583007812,"bCoef":-3,"cMask":["ball"]},{"x":94.4444580078125,"y":69.14814758300781,"bCoef":-3,"cMask":["ball"]},{"x":80.4444580078125,"y":99.14814758300781,"cMask":["ball"]},{"x":1.4444580078125,"y":219.1481475830078,"cMask":["red","blue"]},{"x":-0.5555419921875,"y":-212.18519592285156,"cMask":["ball"]},{"x":81.4444580078125,"y":-86.18519592285156,"cMask":["ball"]},{"x":698.4444580078125,"y":293.9259223937988,"bCoef":3,"cMask":["red","blue"]},{"x":-0.5555419921875,"y":-220.92592239379883,"bCoef":3,"cMask":["red","blue"]},{"x":698.4444580078125,"y":-293.9259223937988,"bCoef":3,"cMask":["red","blue"]},{"x":399.22222900390625,"y":-116.07407760620117,"bCoef":-1,"cMask":["ball"]},{"x":399.22222900390625,"y":121.03704071044922,"bCoef":-1,"cMask":["ball"]},{"x":698.2222290039062,"y":-212.62963485717773}],"segments":[{"v0":0,"v1":1,"cMask":["blue","ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"color":"FFFFFF"},{"v0":3,"v1":4,"cMask":["blue","ball"],"color":"FFFFFF"},{"v0":5,"v1":6,"cMask":["wall"],"color":"FFFFFF"},{"v0":7,"v1":8,"cMask":["wall"],"color":"FFFFFF"},{"v0":9,"v1":10,"cMask":["wall"],"color":"FFFFFF"},{"v0":11,"v1":12,"cMask":["wall"],"color":"FFFFFF"},{"v0":13,"v1":14,"cMask":["wall"],"color":"FFFFFF"},{"v0":15,"v1":16,"cMask":["wall"],"color":"FFFFFF"},{"v0":17,"v1":18,"cMask":["wall"],"color":"FFFFFF"},{"v0":19,"v1":20,"cMask":["wall"],"color":"FFFFFF"},{"v0":23,"v1":24,"cMask":["wall"],"color":"FFFFFF"},{"v0":25,"v1":26,"cMask":["wall"],"color":"FFFFFF"},{"v0":27,"v1":28,"cMask":["wall"],"color":"FFFFFF"},{"v0":29,"v1":30,"cMask":["wall"],"color":"FFFFFF"},{"v0":31,"v1":32,"cMask":["wall"],"color":"FFFFFF"},{"v0":35,"v1":36,"cMask":["blue"],"color":"FFFFFF"},{"v0":37,"v1":38,"cMask":["blue"],"color":"FFFFFF"},{"v0":36,"v1":39,"cMask":["blue"],"color":"FFFFFF"},{"v0":38,"v1":40,"cMask":["blue"],"color":"FFFFFF"},{"v0":41,"v1":42,"cMask":["red"],"color":"FFFFFF"},{"v0":43,"v1":44,"cMask":["red"],"color":"FFFFFF"},{"v0":42,"v1":45,"cMask":["red"],"color":"FFFFFF"},{"v0":47,"v1":46,"curve":89.99999999999999,"curveF":1.0000000000000002,"color":"FFFFFF"},{"v0":48,"v1":49,"curve":89.99999999999999,"curveF":1.0000000000000002,"color":"FFFFFF"},{"v0":51,"v1":50,"curve":130,"curveF":0.4663076581549986,"cMask":["red"],"color":"FFFFFF"},{"v0":53,"v1":52,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red"],"color":"FFFFFF"},{"v0":52,"v1":53,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red"],"color":"FFFFFF"},{"v0":54,"v1":55,"color":"FFFFFF"},{"v0":56,"v1":57,"color":"FFFFFF"},{"v0":55,"v1":58,"cMask":["red"],"color":"FFFFFF"},{"v0":54,"v1":59,"color":"FFFFFF"},{"v0":57,"v1":60,"cMask":["red"],"color":"FFFFFF"},{"v0":56,"v1":61,"color":"FFFFFF"},{"v0":62,"v1":63,"bCoef":-5,"cMask":["ball"],"color":"FFFFFF"},{"v0":64,"v1":65,"bCoef":-5,"cMask":["ball"],"color":"FFFFFF"},{"v0":63,"v1":66,"bCoef":-1,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":67,"v1":65,"bCoef":-1,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":62,"v1":68,"bCoef":-1,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":69,"v1":64,"bCoef":-1,"curve":59.99999999999999,"curveF":1.7320508075688774,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":70,"v1":71,"bCoef":-4,"cMask":["ball"],"color":"FFFFFF"},{"v0":72,"v1":73,"bCoef":-4,"cMask":["ball"],"color":"FFFFFF"},{"v0":71,"v1":74,"bCoef":-1,"curve":20,"curveF":5.671281819617709,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":75,"v1":73,"bCoef":-1,"curve":20,"curveF":5.671281819617709,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":70,"v1":76,"bCoef":-1,"curve":20,"curveF":5.671281819617709,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":77,"v1":72,"bCoef":-1,"curve":20,"curveF":5.671281819617709,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":78,"v1":79,"curve":134.87984981065242,"curveF":0.41544250032615626,"vis":false,"cMask":["red"],"color":"FFFFFF"},{"v0":80,"v1":81,"cMask":["blue"]},{"v0":80,"v1":82,"cMask":["blue"]},{"v0":82,"v1":83,"cMask":["blue"]},{"v0":84,"v1":85,"cMask":["blue"]},{"v0":84,"v1":86,"cMask":["blue"]},{"v0":86,"v1":87,"cMask":["blue"]},{"v0":87,"v1":88,"cMask":["blue"]},{"v0":89,"v1":90,"cMask":["blue"]},{"v0":90,"v1":91,"cMask":["blue"]},{"v0":91,"v1":92,"cMask":["blue"]},{"v0":92,"v1":93,"cMask":["blue"]},{"v0":94,"v1":95,"cMask":["blue"]},{"v0":95,"v1":96,"cMask":["blue"]},{"v0":96,"v1":97,"cMask":["blue"]},{"v0":98,"v1":99,"curve":180,"curveF":6.123233995736766e-17,"cMask":["blue"]},{"v0":99,"v1":98,"curve":180,"curveF":6.123233995736766e-17,"cMask":["blue"]},{"v0":100,"v1":101,"cMask":["blue"]},{"v0":100,"v1":102,"curve":-157.38013505194704,"curveF":-0.2000000000001137,"cMask":["blue"]},{"v0":103,"v1":104,"cMask":["blue"]},{"v0":106,"v1":105,"curve":165.38848093337833,"curveF":0.12820512820512836,"cMask":["blue"]},{"v0":107,"v1":108,"cMask":["blue"]},{"v0":107,"v1":109,"cMask":["blue"]},{"v0":109,"v1":110,"cMask":["blue"]},{"v0":111,"v1":112,"cMask":["blue"]},{"v0":114,"v1":113,"curve":159.42765763449012,"curveF":0.18148148148149348,"cMask":["blue"]},{"v0":115,"v1":116,"cMask":["blue"]},{"v0":117,"v1":118,"cMask":["blue"]},{"v0":119,"v1":120,"cMask":["blue"]},{"v0":121,"v1":122,"cMask":["blue"]},{"v0":122,"v1":123,"cMask":["blue"]},{"v0":123,"v1":124,"cMask":["blue"]},{"v0":124,"v1":125,"cMask":["blue"]},{"v0":127,"v1":128,"bCoef":-3,"cMask":["ball"],"color":"FFFFFF"},{"v0":129,"v1":130,"bCoef":-3,"cMask":["ball"],"color":"FFFFFF"},{"v0":131,"v1":132,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":133,"v1":134,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":132,"v1":133,"bCoef":-1,"curve":29.999999999999996,"curveF":3.7320508075688776,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":132,"v1":135,"bCoef":3,"vis":false,"cMask":["red","blue"],"color":"FF"},{"v0":136,"v1":137,"bCoef":3,"vis":false,"cMask":["red","blue"],"color":"FF"},{"v0":128,"v1":76,"bCoef":-1,"curve":29.999999999999996,"curveF":3.7320508075688776,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":127,"v1":138,"bCoef":-1,"curve":29.999999999999996,"curveF":3.7320508075688776,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":77,"v1":129,"bCoef":-1,"curve":29.999999999999996,"curveF":3.7320508075688776,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":139,"v1":130,"bCoef":-1,"curve":29.999999999999996,"curveF":3.7320508075688776,"vis":false,"cMask":["ball"],"color":"FF"},{"v0":43,"v1":4,"vis":false,"color":"FFFFFF"},{"v0":1,"v1":140,"vis":false,"color":"FFFFFF"}],"planes":[],"goals":[{"p0":[700.4444580078125,-128.18519592285156],"p1":[700.4444580078125,118.81480407714844],"team":"blue"},{"p0":[702.4444580078125,-216.18519592285156],"p1":[1.4444580078125,-213.18519592285156],"team":"red"},{"p0":[701.4444580078125,208.92592239379883],"p1":[-0.5555419921875,222.92592239379883],"team":"red"},{"p0":[699.4444580078125,-216.18519592285156],"p1":[699.4444580078125,-144.18519592285156],"team":"red"},{"p0":[698.4444580078125,131.81480407714844],"p1":[698.4444580078125,280.9259223937988],"team":"red"},{"p0":[376.22222900390625,-48.96295928955078],"p1":[376.22222900390625,49.03704071044922],"team":"red"},{"p0":[81.55557250976562,-91.07407760620117],"p1":[-23.444427490234375,-91.07407760620117],"team":"red"},{"p0":[81.55557250976562,100.07407760620117],"p1":[-23.444427490234375,100.07407760620117],"team":"red"},{"p0":[-23.666656494140625,-94.96295928955078],"p1":[-22.666656494140625,100.03704071044922],"team":"red"},{"p0":[415.22222900390625,-42.96295928955078],"p1":[415.22222900390625,39.03704071044922],"team":"red"}],"discs":[{"radius":8,"cGroup":["ball","kick","score"]},{"pos":[699.4444580078125,-135.07407760620117],"radius":7,"bCoef":1,"invMass":0},{"pos":[700.4444580078125,123.92592239379883],"radius":7,"bCoef":1,"invMass":0},{"pos":[397.4444580078125,-42.18519592285156],"radius":15,"bCoef":3,"invMass":0,"color":"FF"},{"pos":[397.4444580078125,-8.185195922851562],"radius":15,"bCoef":3,"invMass":0,"color":"FF"},{"pos":[397.4444580078125,25.814804077148438],"radius":15,"bCoef":3,"invMass":0,"color":"FF"}],"playerPhysics":{"acceleration":0.2,"kickingAcceleration":0.25,"kickStrength":8},"ballPhysics":"disc0","spawnDistance":650}';
	var dosball = '{"name":"2ball classic","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"cMask":["ball"]},{"x":-370,"y":64,"cMask":["ball"]},{"x":-370,"y":-64,"cMask":["ball"]},{"x":-370,"y":-170,"cMask":["ball"]},{"x":370,"y":170,"cMask":["ball"]},{"x":370,"y":64,"cMask":["ball"]},{"x":370,"y":-64,"cMask":["ball"]},{"x":370,"y":-170,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":64,"bCoef":0.1,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"pos":[0,5],"cGroup":["ball","kick","score"]},{"pos":[-370,64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-370,-64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[370,64],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[370,-64],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[0,-5],"cGroup":["ball","kick","score"]}],"playerPhysics":{},"ballPhysics":"disc0","cameraFollow":"player","spawnDistance":170,"kickOffReset":"full"}';
	var tresball = '{"name":"3ball Medium","width":510,"height":235,"bg":{"type":"grass","width":460,"height":205,"kickOffRadius":80},"vertexes":[{"x":-460,"y":205,"cMask":["ball"]},{"x":-460,"y":80,"cMask":["ball"]},{"x":-460,"y":-80,"cMask":["ball"]},{"x":-460,"y":-205,"cMask":["ball"]},{"x":460,"y":205,"cMask":["ball"]},{"x":460,"y":80,"cMask":["ball"]},{"x":460,"y":-80,"cMask":["ball"]},{"x":460,"y":-205,"cMask":["ball"]},{"x":0,"y":235,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-235,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-470,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-490,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-490,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-470,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":470,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":490,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":490,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":470,"y":80,"bCoef":0.1,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-205,"cMask":["ball"]},{"normal":[0,-1],"dist":-205,"cMask":["ball"]},{"normal":[0,1],"dist":-235,"bCoef":0.1},{"normal":[0,-1],"dist":-235,"bCoef":0.1},{"normal":[1,0],"dist":-510,"bCoef":0.1},{"normal":[-1,0],"dist":-510,"bCoef":0.1}],"goals":[{"p0":[-460,80],"p1":[-460,-80],"team":"red"},{"p0":[460,80],"p1":[460,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-460,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-460,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[460,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[460,-80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[0,-10],"cGroup":["ball","kick","score"]},{"pos":[0,10],"cGroup":["ball","kick","score"]}],"playerPhysics":{},"ballPhysics":"disc0","cameraFollow":"player","spawnDistance":260,"kickOffReset":"full"}';
	var deathball = '{"name":"Deathball from HaxMaps","width":650,"height":340,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":9,"cornerRadius":150,"goalLine":160},"vertexes":[{"x":-392,"y":-40,"bCoef":0.5,"cMask":["red","ball"]},{"x":-425,"y":-20,"bCoef":0.5,"cMask":["red","ball"]},{"x":-425,"y":20,"bCoef":0.5,"cMask":["red","ball"]},{"x":-392,"y":40,"bCoef":0.5,"cMask":["red","ball"]},{"x":392,"y":-40,"bCoef":0.5,"cMask":["blue","ball"]},{"x":425,"y":-20,"bCoef":0.5,"cMask":["blue","ball"]},{"x":425,"y":20,"bCoef":0.5,"cMask":["blue","ball"]},{"x":392,"y":40,"bCoef":0.5,"cMask":["blue","ball"]},{"x":-400,"y":-240,"bCoef":0.5,"cMask":["ball"]},{"x":-550,"y":-90,"bCoef":0.5,"cMask":["ball"]},{"x":-550,"y":90,"bCoef":0.5,"cMask":["ball"]},{"x":-400,"y":240,"bCoef":0.5,"cMask":["ball"]},{"x":400,"y":-240,"bCoef":0.5,"cMask":["ball"]},{"x":550,"y":-90,"bCoef":0.5,"cMask":["ball"]},{"x":550,"y":90,"bCoef":0.5,"cMask":["ball"]},{"x":400,"y":240,"bCoef":0.5,"cMask":["ball"]},{"x":-398,"y":-238,"bCoef":-5,"cMask":["red","blue"]},{"x":-548,"y":-88,"bCoef":-5,"cMask":["red","blue"]},{"x":-548,"y":88,"bCoef":-5,"cMask":["red","blue"]},{"x":-398,"y":238,"bCoef":-5,"cMask":["red","blue"]},{"x":398,"y":-238,"bCoef":-5,"cMask":["red","blue"]},{"x":548,"y":-88,"bCoef":-5,"cMask":["red","blue"]},{"x":548,"y":88,"bCoef":-5,"cMask":["red","blue"]},{"x":398,"y":238,"bCoef":-5,"cMask":["red","blue"]},{"x":-650,"y":-90,"bCoef":0.5,"cMask":["red","ball"]},{"x":-650,"y":90,"bCoef":0.5,"cMask":["red","ball"]},{"x":650,"y":-90,"bCoef":0.5,"cMask":["blue","ball"]},{"x":650,"y":90,"bCoef":0.5,"cMask":["blue","ball"]}],"segments":[{"v0":1,"v1":0,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","ball"],"color":"5555FF"},{"v0":1,"v1":2,"bCoef":0.5,"cMask":["red","ball"],"color":"5555FF"},{"v0":3,"v1":2,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","ball"],"color":"5555FF"},{"v0":4,"v1":5,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["blue","ball"],"color":"FF5555"},{"v0":5,"v1":6,"bCoef":0.5,"cMask":["blue","ball"],"color":"FF5555"},{"v0":6,"v1":7,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["blue","ball"],"color":"FF5555"},{"v0":0,"v1":3,"bCoef":0.5,"vis":false,"cMask":["red"],"color":"5555FF"},{"v0":4,"v1":7,"bCoef":0.5,"vis":false,"cMask":["blue"],"color":"FF5555"},{"v0":9,"v1":24,"bCoef":0.5,"cMask":["blue","ball"],"color":"FF5555"},{"v0":10,"v1":25,"bCoef":0.5,"cMask":["blue","ball"],"color":"FF5555"},{"v0":13,"v1":26,"bCoef":0.5,"cMask":["red","ball"],"color":"5555FF"},{"v0":14,"v1":27,"bCoef":0.5,"cMask":["red","ball"],"color":"5555FF"},{"v0":9,"v1":8,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"]},{"v0":11,"v1":10,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"]},{"v0":12,"v1":13,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"]},{"v0":14,"v1":15,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["ball"]},{"v0":17,"v1":16,"bCoef":-5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue"],"color":"FF00"},{"v0":19,"v1":18,"bCoef":-5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue"],"color":"FF00"},{"v0":20,"v1":21,"bCoef":-5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue"],"color":"FF00"},{"v0":22,"v1":23,"bCoef":-5,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["red","blue"],"color":"FF00"},{"v0":16,"v1":20,"bCoef":-5,"cMask":["red","blue"],"color":"FF00"},{"v0":19,"v1":23,"bCoef":-5,"cMask":["red","blue"],"color":"FF00"},{"v0":9,"v1":8,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["red","blue"]},{"v0":11,"v1":10,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["red","blue"]},{"v0":12,"v1":13,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["red","blue"]},{"v0":14,"v1":15,"bCoef":0.5,"curve":89.99999999999999,"curveF":1.0000000000000002,"vis":false,"cMask":["red","blue"]},{"v0":8,"v1":12,"bCoef":0.5,"vis":false,"cMask":["red","blue"]},{"v0":11,"v1":15,"bCoef":0.5,"vis":false,"cMask":["red","blue"]}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":0.5,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"bCoef":0.5,"cMask":["ball"]},{"normal":[1,0],"dist":-550,"bCoef":0.5,"cMask":["ball"]},{"normal":[-1,0],"dist":-550,"bCoef":0.5,"cMask":["ball"]},{"normal":[0,1],"dist":-340,"bCoef":0.01},{"normal":[0,-1],"dist":-340,"bCoef":0.01},{"normal":[1,0],"dist":-650,"bCoef":0.01},{"normal":[-1,0],"dist":-650,"bCoef":0.01}],"goals":[{"p0":[-390,40],"p1":[-390,-40],"team":"red"},{"p0":[390,40],"p1":[390,-40],"team":"blue"}],"discs":[{"radius":8,"bCoef":0.01,"invMass":1.5,"color":"FFBB00","cGroup":["ball","kick","score"]},{"pos":[-550,90],"radius":4,"bCoef":0.1,"invMass":0,"color":"FF5555"},{"pos":[-550,-90],"radius":4,"bCoef":0.1,"invMass":0,"color":"FF5555"},{"pos":[550,90],"radius":4,"bCoef":0.1,"invMass":0,"color":"5555FF"},{"pos":[550,-90],"radius":4,"bCoef":0.1,"invMass":0,"color":"5555FF"},{"pos":[-390,40],"radius":4,"bCoef":0.1,"invMass":0,"color":"AAAAAA"},{"pos":[-390,-40],"radius":4,"bCoef":0.1,"invMass":0,"color":"AAAAAA"},{"pos":[390,40],"radius":4,"bCoef":0.1,"invMass":0,"color":"AAAAAA"},{"pos":[390,-40],"radius":4,"bCoef":0.1,"invMass":0,"color":"AAAAAA"}],"playerPhysics":{"bCoef":3,"kickStrength":-0.8},"ballPhysics":"disc0","spawnDistance":510}';
	var survivalroom = '{"name":"Survival Room | Leo","width":420,"height":300,"bg":{"type":"hockey"},"vertexes":[{"x":-307,"y":-306,"bCoef":99999999,"cMask":["red","blue"]},{"x":-307,"y":306,"bCoef":99999999,"cMask":["red","blue"]},{"x":-298,"y":298,"bCoef":-99999999,"cMask":["red","blue"]},{"x":-298,"y":-298,"bCoef":-99999999,"cMask":["red","blue"]},{"x":307,"y":-306,"bCoef":99999999,"cMask":["red","blue"]},{"x":307,"y":306,"bCoef":99999999,"cMask":["red","blue"]},{"x":298,"y":298,"bCoef":-99999999,"cMask":["red","blue"]},{"x":298,"y":-298,"bCoef":-99999999,"cMask":["red","blue"]},{"x":-75,"y":0,"bCoef":0,"cMask":["wall"],"cGroup":["red","blue"]},{"x":75,"y":0,"bCoef":0,"cMask":["wall"],"cGroup":["red","blue"]},{"x":0,"y":-75,"bCoef":0,"cMask":["wall"],"cGroup":["red","blue"]},{"x":0,"y":75,"bCoef":0,"cMask":["wall"],"cGroup":["red","blue"]},{"x":0,"y":298.1,"bCoef":-99999999,"cMask":["ball"]},{"x":0,"y":-298.1,"bCoef":-99999999,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":99999999,"cMask":["red","blue"]},{"v0":2,"v1":3,"bCoef":-99999999,"cMask":["red","blue"]},{"v0":4,"v1":5,"bCoef":99999999,"cMask":["red","blue"]},{"v0":6,"v1":7,"bCoef":-99999999,"cMask":["red","blue"]},{"v0":5,"v1":1,"bCoef":99999999,"cMask":["red","blue"]},{"v0":0,"v1":4,"bCoef":99999999,"cMask":["red","blue"]},{"v0":3,"v1":13,"bCoef":-99999999,"cMask":["red","blue"]},{"v0":13,"v1":7,"bCoef":-99999999,"cMask":["red","blue"]},{"v0":2,"v1":12,"bCoef":-99999999,"cMask":["red","blue"]},{"v0":12,"v1":6,"bCoef":-99999999,"cMask":["red","blue"]}],"planes":[{"normal":[-1,0],"dist":-18000,"bCoef":0,"cMask":["red","blue"]},{"normal":[1,0],"dist":-18000,"bCoef":0,"cMask":["red","blue"]},{"normal":[0,1],"dist":-340,"bCoef":0,"cMask":["red","blue"]},{"normal":[0,-1],"dist":-340,"bCoef":0,"cMask":["red","blue"]}],"goals":[],"discs":[{"radius":0,"invMass":0,"cMask":[],"cGroup":["ball","kick","score"]},{"pos":[0,8430],"speed":[0,-0.1],"radius":8000,"bCoef":99999999,"invMass":1e-307,"damping":1,"color":"0","cMask":["red","blue"],"cGroup":["wall"]},{"pos":[0,-8430],"speed":[0,0.1],"radius":8000,"bCoef":99999999,"invMass":1e-307,"damping":1,"color":"0","cMask":["red","blue"],"cGroup":["wall"]},{"pos":[-8430,0],"speed":[0.1,0],"radius":8000,"bCoef":99999999,"invMass":1e-307,"damping":1,"color":"0","cMask":["red","blue"],"cGroup":["wall"]},{"pos":[8430,0],"speed":[-0.1,0],"radius":8000,"bCoef":99999999,"invMass":1e-307,"damping":1,"color":"0","cMask":["red","blue"],"cGroup":["wall"]}],"playerPhysics":{"bCoef":1.4,"invMass":1e+307,"damping":0.99,"acceleration":0.03,"kickingAcceleration":0.03,"kickingDamping":0.99,"kickStrength":0},"ballPhysics":"disc0","spawnDistance":150}';
	var collisionracing = '{"name":"Collision team racing 9 by MC  from HaxMaps","width":420,"height":4920,"spawnDistance":40,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0},"vertexes":[{"bCoef":0.25,"cMask":["red","blue"],"x":-120,"y":255,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-150,"y":220,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-150,"y":-250,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":150,"y":-250,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":150,"y":220,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":120,"y":255,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-15,"y":-4650,"curve":38},{"bCoef":0.25,"cMask":["red","blue"],"x":15,"y":-4650,"curve":-38},{"bCoef":0,"cMask":["red","blue"],"x":-15,"y":-4840.77786255,"curve":90},{"bCoef":0,"cMask":["red","blue"],"x":45,"y":-4900.77786255,"curve":90},{"bCoef":0.1,"cMask":["red","blue"],"x":400,"y":-4900.77786255,"curve":-180},{"bCoef":0.1,"cMask":["red","blue"],"x":400,"y":-4870.77786255,"curve":-180},{"bCoef":0,"cMask":["red","blue"],"x":45,"y":-4870.77786255,"curve":-90},{"bCoef":0,"cMask":["red","blue"],"x":15,"y":-4840.77786255,"curve":-90},{"bCoef":0.1,"cMask":["wall"],"x":-148,"y":100,"color":"ff0000"},{"bCoef":0.1,"cMask":["wall"],"x":-1,"y":100,"color":"ff0000"},{"bCoef":0.1,"cMask":["wall"],"x":1,"y":100,"color":"0000ff"},{"bCoef":0.1,"cMask":["wall"],"x":148,"y":100,"color":"0000ff"},{"bCoef":-3,"cMask":["red","blue"],"x":-15,"y":-4702.77786255,"color":"ff0000"},{"bCoef":-3,"cMask":["red","blue"],"x":15,"y":-4702.77786255,"color":"ff0000"},{"bCoef":0.1,"cMask":["wall"],"x":-148,"y":97,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":-1,"y":97,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":-148,"y":103,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":-1,"y":103,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":1,"y":97,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":148,"y":97,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":1,"y":103,"color":"ffffff"},{"bCoef":0.1,"cMask":["wall"],"x":148,"y":103,"color":"ffffff"},{"bCoef":0.1,"cMask":["ball"],"x":-15,"y":-4690.77786255,"vis":false},{"bCoef":0.1,"cMask":["ball"],"x":-15,"y":-4740.77786255,"vis":false,"curve":-180},{"bCoef":0.1,"cMask":["ball"],"x":15,"y":-4690.77786255},{"bCoef":0.1,"cMask":["ball"],"x":15,"y":-4740.77786255,"curve":180},{"bCoef":0,"cMask":["ball"],"x":150,"y":-4740.77786255,"curve":180},{"bCoef":0,"cMask":["ball"],"x":180,"y":-4740.77786255,"curve":-180},{"bCoef":0,"cMask":["ball"],"x":180,"y":-4696.22218323,"curve":-180},{"bCoef":0,"cMask":["ball"],"x":150,"y":-4696.22218323,"curve":-180},{"cMask":["red","blue"],"x":-15,"y":-4710.77786255,"vis":true},{"cMask":["red","blue"],"x":15,"y":-4710.77786255,"vis":true},{"bCoef":-3,"cMask":["red","blue"],"x":-26,"y":-4600.77786255,"color":"ff0000"},{"bCoef":-3,"cMask":["red","blue"],"x":26,"y":-4600.77786255,"color":"ff0000"},{"cMask":["red","blue"],"x":-23,"y":-4608.77786255,"vis":true},{"cMask":["red","blue"],"x":23,"y":-4608.77786255,"vis":true},{"bCoef":0.25,"cMask":["red","blue"],"x":60,"y":-210,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":60,"y":-170,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-1850.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-1750.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-1750.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-1850.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-1890.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-1990.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-1990.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-1890.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-1784.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-1684.22241211,"curve":-50},{"bCoef":0.25,"cMask":["red","blue"],"x":-45,"y":-1630.22241211,"curve":-50},{"bCoef":0.25,"cMask":["red","blue"],"x":-45,"y":-1580,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":45,"y":-1630.22241211,"curve":50},{"bCoef":0.25,"cMask":["red","blue"],"x":45,"y":-1580,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-1784.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-1684.22241211,"curve":50},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2048.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-1948.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2048.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-1948.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-2261.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-2161.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-2161.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-2261.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-2301.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-2401.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-2401.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-2301.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-2195.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2095.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-2195.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2095.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2459.44458008,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-2359.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2459.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-2359.44458008,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-2690.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-2590.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-2590.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-2690.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-2730.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-2830.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-2830.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-2730.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-2624.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2524.00024414,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-2624.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2524.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2888.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-2788.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2888.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-2788.00024414,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-3101.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-3001.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-3001.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-3101.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-3141.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":20,"y":-3241.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-20,"y":-3241.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-3141.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-3035.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-2935.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-3035.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-2935.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-105,"y":-3268.22241211,"curve":-45},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-3199.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":105,"y":-3268.22241211,"curve":-45},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-3199.22241211,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-75,"y":-3340,"curve":-45},{"bCoef":0.25,"cMask":["red","blue"],"x":75,"y":-3340,"curve":-45},{"bCoef":0.25,"cMask":["blue"],"x":78,"y":-3310.22241211},{"bCoef":0.25,"cMask":["red"],"x":-78,"y":-3310.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":-200,"y":-1920.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":-200,"y":-1810.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":200,"y":-1920.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":200,"y":-1810.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":-200,"y":-2760.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":-200,"y":-2650.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":200,"y":-2760.22241211},{"bCoef":3.7,"cMask":["red","blue"],"x":200,"y":-2650.22241211},{"bCoef":0.25,"cMask":["red","blue"],"x":-60,"y":-210,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-60,"y":-170,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-270,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-100,"y":-270,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-100,"y":-300,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-130,"y":-300,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-150,"y":-320,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-150,"y":-390,"curve":-40},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-270,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":100,"y":-270,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":100,"y":-300,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":130,"y":-300,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":150,"y":-320,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":150,"y":-390,"curve":40},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-305,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-265,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":60,"y":-360,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":60,"y":-400,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-60,"y":-360,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-60,"y":-400,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-75,"y":-560,"curve":-35},{"bCoef":0.25,"cMask":["red","blue"],"x":-75,"y":-1270,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":75,"y":-560,"curve":-45},{"bCoef":0.25,"cMask":["red","blue"],"x":75,"y":-1270,"curve":90},{"bCoef":0.25,"cMask":["blue"],"x":2,"y":-707.666381836,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":2,"y":-625,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":22,"y":-600,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":73,"y":-600,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":22,"y":-727.666381836,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":73,"y":-727.666381836,"color":"ff0000"},{"bCoef":0.25,"cMask":["red"],"x":-2,"y":-707.666381836,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-2,"y":-625,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-22,"y":-600,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-73,"y":-600,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-22,"y":-727.666381836,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-73,"y":-727.666381836,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":2,"y":-955,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":2,"y":-875,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":22,"y":-855,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":73,"y":-855,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":22,"y":-975,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":73,"y":-975,"color":"0000ff"},{"bCoef":0.25,"cMask":["blue"],"x":-2,"y":-955,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":-2,"y":-875,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":-22,"y":-855,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":-73,"y":-855,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":-22,"y":-975,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":-73,"y":-975,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":2,"y":-1225,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":2,"y":-1125,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":22,"y":-1105,"curve":-90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":73,"y":-1105,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":22,"y":-1245,"curve":90,"color":"ff0000"},{"bCoef":0.25,"cMask":["blue"],"x":73,"y":-1245,"color":"ff0000"},{"bCoef":0.25,"cMask":["red"],"x":-2,"y":-1225,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-2,"y":-1125,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-22,"y":-1105,"curve":90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-73,"y":-1105,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-22,"y":-1245,"curve":-90,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-73,"y":-1245,"color":"0000ff"},{"bCoef":0.25,"cMask":["red","blue"],"x":-132,"y":-450,"curve":-40},{"bCoef":0.25,"cMask":["red","blue"],"x":-87,"y":-515,"curve":-35},{"bCoef":0.25,"cMask":["red","blue"],"x":132,"y":-450,"curve":40},{"bCoef":0.25,"cMask":["red","blue"],"x":87,"y":-515,"curve":-35},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-465,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-505,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-95,"y":-1290,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":-230,"y":-1290,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-225,"y":-1390,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":225,"y":-1390,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":225,"y":-1430,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-225,"y":-1430,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":95,"y":-1290,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":230,"y":-1290,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-95,"y":-1530,"curve":-90},{"bCoef":0.25,"cMask":["red","blue"],"x":-230,"y":-1530,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":95,"y":-1530,"curve":90},{"bCoef":0.25,"cMask":["red","blue"],"x":230,"y":-1530,"curve":180},{"bCoef":0.25,"cMask":["red"],"x":95,"y":-1388},{"bCoef":0.25,"cMask":["red"],"x":95,"y":-1432},{"bCoef":0.25,"cMask":["blue"],"x":-95,"y":-1388},{"bCoef":0.25,"cMask":["blue"],"x":-95,"y":-1432},{"bCoef":0.25,"cMask":["red","blue"],"x":-95,"y":-4185,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":-270,"y":-4300,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-200,"y":-4385,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":200,"y":-4385,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":180,"y":-4405,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":-180,"y":-4405,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":95,"y":-4185,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":270,"y":-4300,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-137,"y":-4487,"curve":-180},{"bCoef":0.25,"cMask":["red","blue"],"x":137,"y":-4487,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-75,"y":-4150,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":75,"y":-4150,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3410,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3370,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3580,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3620,"curve":180},{"bCoef":0.25,"cMask":["blue"],"x":-75,"y":-3495},{"bCoef":0.25,"cMask":["red"],"x":0,"y":-3495,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":75,"y":-3495,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":-75,"y":-3705,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":0,"y":-3705,"color":"0000ff"},{"bCoef":0.25,"cMask":["blue"],"x":75,"y":-3705,"color":"ff0000"},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3790,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3830,"curve":180},{"bCoef":0.25,"cMask":["blue"],"x":-75,"y":-3905},{"bCoef":0.25,"cMask":["red"],"x":0,"y":-3905,"color":"0000ff"},{"bCoef":0.25,"cMask":["red"],"x":75,"y":-3905,"color":"0000ff"},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-4030,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":0,"y":-3990,"curve":180},{"bCoef":0.25,"cMask":["red","blue"],"x":-40,"y":-4285,"curve":-55},{"bCoef":0.25,"cMask":["red","blue"],"x":40,"y":-4285,"curve":-55},{"bCoef":0.25,"cMask":["red","blue"],"x":40,"y":-4315,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":-40,"y":-4315,"curve":55},{"bCoef":0.25,"cMask":["red","blue"],"x":-40,"y":-4580,"curve":37},{"bCoef":0.25,"cMask":["red","blue"],"x":40,"y":-4580,"curve":-37},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-4500,"curve":37},{"bCoef":0.25,"cMask":["red","blue"],"x":-70,"y":-4475,"curve":120},{"bCoef":0.25,"cMask":["red","blue"],"x":-97,"y":-4458,"curve":120},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-4500,"curve":-37},{"bCoef":0.25,"cMask":["red","blue"],"x":70,"y":-4475,"curve":-120},{"bCoef":0.25,"cMask":["red","blue"],"x":97,"y":-4458,"curve":-120},{"bCoef":7,"cMask":["red","blue"],"x":-67,"y":-4335},{"bCoef":7,"cMask":["red","blue"],"x":67,"y":-4335}],"segments":[{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":0,"v1":1,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":1,"v1":2,"x":-150},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":3,"v1":4,"x":150},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":4,"v1":5,"curve":90},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":6,"v1":8,"x":-15},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":8,"v1":9,"curve":90},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":9,"v1":10,"y":-4310},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":11,"v1":12,"y":-4280},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":12,"v1":13,"curve":-90},{"color":"303030","bCoef":0,"cMask":["red","blue"],"v0":13,"v1":7,"x":15},{"bCoef":0.1,"cMask":["wall"],"v0":14,"v1":15,"color":"ff0000","y":100},{"bCoef":0.1,"cMask":["wall"],"v0":16,"v1":17,"color":"0000ff","y":100},{"color":"ff0000","bCoef":-3,"cMask":["red","blue"],"v0":18,"v1":19,"y":-4112},{"bCoef":0.1,"cMask":["wall"],"v0":20,"v1":21,"color":"ffffff","y":97},{"bCoef":0.1,"cMask":["wall"],"v0":22,"v1":23,"color":"ffffff","y":103},{"bCoef":0.1,"cMask":["wall"],"v0":24,"v1":25,"color":"ffffff","y":97},{"bCoef":0.1,"cMask":["wall"],"v0":26,"v1":27,"color":"ffffff","y":103},{"bCoef":0.1,"cMask":["ball"],"v0":28,"v1":29,"vis":false,"x":-15},{"vis":false,"bCoef":0.1,"cMask":["ball"],"v0":30,"v1":31,"x":15},{"vis":false,"bCoef":0,"cMask":["ball"],"v0":33,"v1":34,"x":180},{"vis":false,"bCoef":0,"cMask":["ball"],"v0":32,"v1":35,"x":150},{"vis":false,"bCoef":0,"cMask":["ball"],"v0":35,"v1":34,"y":-5775,"curve":-180},{"vis":false,"bCoef":0.1,"cMask":["ball"],"v0":31,"v1":32,"curve":180,"y":-4150},{"vis":false,"bCoef":0.1,"cMask":["ball"],"v0":33,"v1":29,"curve":-180,"y":-4150},{"vis":true,"color":"0000ff","cMask":["red","blue"],"v0":36,"v1":37,"y":-4120},{"color":"303030","bCoef":0.1,"cMask":["red","blue"],"v0":11,"v1":10,"curve":-180,"x":400},{"color":"ff0000","bCoef":-3,"cMask":["red","blue"],"v0":38,"v1":39,"y":-4010},{"vis":true,"color":"0000ff","cMask":["red","blue"],"v0":40,"v1":41,"y":-4018},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":42,"v1":43,"x":60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":43,"v1":42,"x":60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":44,"v1":45},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":45,"v1":46,"curve":-90,"y":-2320},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":46,"v1":47},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":47,"v1":48,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":48,"v1":49},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":49,"v1":50,"curve":-90,"y":-2560},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":50,"v1":51},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":51,"v1":44,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":52,"v1":53},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":54,"v1":55,"x":-45},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":54,"v1":53,"curve":-50},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":56,"v1":57,"x":45},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":58,"v1":59},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":56,"v1":59,"curve":50},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":60,"v1":61},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":61,"v1":52,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":62,"v1":63},{"curve":-90,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":58,"v1":63},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":64,"v1":65},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":65,"v1":66,"curve":-90,"y":-2320},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":66,"v1":67},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":67,"v1":68,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":68,"v1":69},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":69,"v1":70,"curve":-90,"y":-2560},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":70,"v1":71},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":71,"v1":64,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":72,"v1":73},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":74,"v1":75},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":76,"v1":77},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":77,"v1":72,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":78,"v1":79},{"curve":-90,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":74,"v1":79},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":75,"v1":62,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":60,"v1":73,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":80,"v1":81},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":81,"v1":82,"curve":-90,"y":-2320},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":82,"v1":83},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":83,"v1":84,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":84,"v1":85},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":85,"v1":86,"curve":-90,"y":-2560},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":86,"v1":87},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":87,"v1":80,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":88,"v1":89},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":90,"v1":91},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":92,"v1":93},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":93,"v1":88,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":94,"v1":95},{"curve":-90,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":90,"v1":95},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":96,"v1":97},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":97,"v1":98,"curve":-90,"y":-2320},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":98,"v1":99},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":99,"v1":100,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":100,"v1":101},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":101,"v1":102,"curve":-90,"y":-2560},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":102,"v1":103},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":103,"v1":96,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":104,"v1":105},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":106,"v1":107},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":108,"v1":109},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":109,"v1":104,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":110,"v1":111},{"curve":-90,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":106,"v1":111},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":107,"v1":94,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":92,"v1":105,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":89,"v1":76,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":91,"v1":78,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":108,"v1":112,"curve":-45},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":113,"v1":110,"curve":-45},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":53,"v1":45},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":60,"v1":50},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":66,"v1":75},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":69,"v1":78},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":89,"v1":81},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":92,"v1":86},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":98,"v1":107},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":101,"v1":114},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":46,"v1":59},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":49,"v1":62},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":73,"v1":65},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":76,"v1":70},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":82,"v1":91},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":85,"v1":94},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":105,"v1":97},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":102,"v1":115},{"color":"ffffff","bCoef":3.7,"cMask":["red","blue"],"v0":116,"v1":117,"x":-200},{"color":"ffffff","bCoef":3.7,"cMask":["red","blue"],"v0":118,"v1":119,"x":200},{"color":"ffffff","bCoef":3.7,"cMask":["red","blue"],"v0":120,"v1":121,"x":-200},{"color":"ffffff","bCoef":3.7,"cMask":["red","blue"],"v0":122,"v1":123,"x":200},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":0,"v1":5},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":124,"v1":125,"x":-60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":125,"v1":124,"x":-60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":2,"v1":126,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":126,"v1":127,"y":-270},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":127,"v1":128,"x":-100,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":128,"v1":129,"y":-300},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":129,"v1":130,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":130,"v1":131,"x":-150},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":3,"v1":132,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":132,"v1":133,"y":-270},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":133,"v1":134,"x":100,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":134,"v1":135,"y":-300},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":135,"v1":136,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":136,"v1":137,"x":150},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":138,"v1":139,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":139,"v1":138,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":140,"v1":141,"x":60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":141,"v1":140,"x":60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":142,"v1":143,"x":-60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":143,"v1":142,"x":-60,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":144,"v1":145,"x":-75},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":146,"v1":147,"x":75},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":148,"v1":149,"x":2},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":149,"v1":150,"curve":-90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":150,"v1":151,"y":-600},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":148,"v1":152,"curve":90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":152,"v1":153,"y":-4170},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":154,"v1":155,"x":-2},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":155,"v1":156,"curve":90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":156,"v1":157,"y":-600},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":154,"v1":158,"curve":-90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":158,"v1":159,"y":-4170},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":160,"v1":161,"x":2},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":161,"v1":162,"curve":-90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":162,"v1":163,"y":-855},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":160,"v1":164,"curve":90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":164,"v1":165,"y":-975},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":166,"v1":167,"x":-2},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":167,"v1":168,"curve":90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":168,"v1":169,"y":-855},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":166,"v1":170,"curve":-90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":170,"v1":171,"y":-975},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":172,"v1":173,"x":2},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":173,"v1":174,"curve":-90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":174,"v1":175,"y":-1105},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":172,"v1":176,"curve":90},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":176,"v1":177,"y":-1245},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":178,"v1":179,"x":-2},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":179,"v1":180,"curve":90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":180,"v1":181,"y":-1105},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":178,"v1":182,"curve":-90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":182,"v1":183,"y":-1245},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":184,"v1":185},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":184,"v1":131,"curve":-40},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":185,"v1":144,"curve":-35},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":186,"v1":187},{"curve":-35,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":146,"v1":187},{"curve":40,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":186,"v1":137},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":188,"v1":189,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":189,"v1":188,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":190,"v1":191,"y":-1290},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":192,"v1":193,"y":-1390},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":193,"v1":194,"x":225,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":194,"v1":195,"y":-1430},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":195,"v1":192,"x":-225,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":196,"v1":197,"y":-1290},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":190,"v1":145,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":147,"v1":196,"curve":90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":198,"v1":199,"y":-1530},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":200,"v1":201,"y":-1530},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":199,"v1":191,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":201,"v1":197,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":198,"v1":55,"curve":-90},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":200,"v1":57,"curve":90},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":196,"v1":202,"x":95},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":200,"v1":203,"x":95},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":190,"v1":204,"x":-95},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":198,"v1":205,"x":-95},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":206,"v1":207,"y":-4185},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":209,"v1":210,"x":225,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":211,"v1":208,"x":-225,"curve":-180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":212,"v1":213,"y":-4185},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":214,"v1":207,"curve":-180,"x":-230},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":215,"v1":213,"curve":180,"x":230},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":112,"v1":216,"x":-75},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":113,"v1":217,"x":75},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":206,"v1":216,"curve":55},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":217,"v1":212,"curve":55},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":218,"v1":219,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":219,"v1":218,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":220,"v1":221,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":221,"v1":220,"x":0,"curve":180},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":222,"v1":223,"y":-3495},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":223,"v1":224,"y":-3495},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":225,"v1":226,"y":-3705},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":226,"v1":227,"y":-3705},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":228,"v1":229,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":229,"v1":228,"x":0,"curve":180},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":230,"v1":231,"y":-3905},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":231,"v1":232,"y":-3905},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":233,"v1":234,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":234,"v1":233,"x":0,"curve":180},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":208,"v1":235},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":235,"v1":236,"y":-4285,"curve":-55},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":236,"v1":209},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":210,"v1":237},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":237,"v1":238,"y":-4315,"curve":55},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":238,"v1":211},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":6,"v1":239,"curve":38},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":7,"v1":240,"curve":-38},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":241,"v1":242,"x":-70},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":242,"v1":243,"curve":120},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":243,"v1":214},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":241,"v1":239,"curve":37},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":244,"v1":245,"x":70},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":245,"v1":246,"curve":-120},{"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":246,"v1":215},{"curve":-37,"color":"303030","bCoef":0.25,"cMask":["red","blue"],"v0":244,"v1":240},{"color":"ffffff","bCoef":7,"cMask":["red","blue"],"v0":247,"v1":248,"y":-4335},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":206,"v1":235},{"color":"0000ff","bCoef":0.25,"cMask":["red"],"v0":243,"v1":247},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":236,"v1":212},{"color":"ff0000","bCoef":0.25,"cMask":["blue"],"v0":246,"v1":248}],"goals":[],"discs":[{"radius":10,"cMask":["ball"],"damping":1,"speed":[0,-4.05],"pos":[0,2350],"invMass":1.0e-12,"bCoef":0.1,"color":"0000ff"},{"radius":60,"invMass":0,"pos":[-85,-4645.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]},{"radius":60,"invMass":0,"pos":[85,-4645.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]},{"radius":60,"invMass":0,"pos":[-85,-4685.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]},{"radius":60,"invMass":0,"pos":[85,-4685.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]},{"radius":60,"invMass":0,"pos":[-85,-4725.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]},{"radius":60,"invMass":0,"pos":[85,-4725.77786255],"color":"ffffffff","bCoef":0.25,"cMask":["red","blue"],"damping":0,"cGroup":["ball"]}],"planes":[{"normal":[0,-1],"dist":-255,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","dist":100,"normal":[0,1]},{"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","dist":-150,"normal":[1,0]},{"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","dist":-1,"normal":[-1,0]},{"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","dist":-1,"normal":[1,0]},{"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","dist":-150,"normal":[-1,0]},{"bCoef":0.1,"cMask":["red","blue"],"dist":-4901,"normal":[0,1]},{"bCoef":0.1,"cMask":["red","blue"],"dist":-4123.04888559,"normal":[0.14,0.219876366616]},{"bCoef":0.1,"cMask":["red","blue"],"dist":-3177.90693426,"normal":[0.14,0.119876366616]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"ballPhysics":{"cMask":["wall","ball"],"damping":1,"radius":15,"bCoef":0.1,"color":"ff0000"},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.985,"acceleration":0.09,"kickingAcceleration":0.07,"kickingDamping":0.984,"kickStrength":0}}';

	let connections = []

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
		if (players.length == 0) { 
			room.stopGame(); 
		} // No players left, do nothing.
		if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
		if (adminPublic) {
			room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
		}
		else{
			if (confirmedPlayers.length > 0) {
				room.setPlayerAdmin(confirmedPlayers[0], true);
			}	 // Give admin to the first non admin confirmed player
		}
	}
	function initPlayerStats(player) {
	}
	function NumeroUnoFun(player) { // !1
		room.sendAnnouncement('🔢  𝟭         ౹         𝟏          𝟷          𝟣         １         ߗ1𐰯¹₁⥠↿˥⒈         𝟏        𝟷𐰯 І        Ι         Ӏ        ᅵ        𝗹        ।         ⅂        𐐑        ⓵        ①         ➀         ➊          para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
	}
	function NumeroDosFun(player) { // !1
		room.sendAnnouncement('🔢  𝟮        Ƨ        2️⃣        ౽        ੨        ૨        ২        २        ௨        𝟐        ２        2        ᒿ        𝟤        ᒾ        ²        ₂        շ        𝟸        ᘖ        𝟚        Ձ        ⒉    �����   ƻ        Չ        Զ        ϩ        ⓶        ②        ➁        ❷        ㈃        ⒛ para más ve a https://tell.wtf', player.id, 0xc23b22, "normal", 0);
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

	function swapKitFun(player){
		if (player.admin == true) {
			if (room.getScores() == null) {
				tempAngle = redAngle
				tempColors = redColors
				redAngle = blueAngle
				redColors = blueColors
				blueAngle = tempAngle
				blueColors = tempColors
				room.setTeamColors(1, redAngle, redColors[0], [redColors[1], redColors[2], redColors[3]]);
				room.setTeamColors(2, blueAngle, blueColors[0], [blueColors[1], blueColors[2], blueColors[3]]);
				room.sendAnnouncement(room., player.id, 0xc23b22, "normal", 0
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
			return true;
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
	function pushMuteFun(player, message){ // !mute Anddy

		// Prevent somebody to talk in the room (uses the nickname, not the id)
		// need to be admin
		if (player.admin == true){
			if (!(mutedPlayers.includes(message.substr(6)))) mutedPlayers.push(message.substr(6));
		}
	}
	
	var isRoomMuted = false;
	function UnmuteAll(player, message){ // !mute Anddy
		// Prevent somebody to talk in the room (uses the nickname, not the id)
		// need to be admin
		if (player.admin == true){
			isRoomMuted = false;
			mutedPlayers = [];
			room.sendChat("[💬] " + player.name + " ha desmuteado a todos los jugadores.");
		}
	}  
	 
	function gotMutedFun(player){
		if (mutedPlayers.includes(player.name)){
			return true;
		}
	}
	function unmuteFun(player, message){ // !unmute Anddy
		// Allow somebody to talk if he has been muted
		// need to be admin
		if (player.admin == true){
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
            var players = room.getPlayerList().filter((player) => player.id != 0);
            if (players.find((player) => player.admin) == null) { 
                room.setPlayerAdmin(player.id, true)
            }
			if (stats.hasOwnProperty(account.username)) { }
			else { 
                stats[account.username] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"]; 
            }
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
		updateAdmins();
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

	// IPS SUPERADMINS
	const IpSuperAdmin = ["3138362E3136382E3132362E313337"]; //RX
	//CUENTAS//
	accounts.push({username: "RX.",password: "lucresi"});
	accounts.push({username: "Panda",password: "hax321+"});
	accounts.push({username: "DeBruyne",password: "rxlabebémáslinda123"});
	accounts.push({username: "wonej0 ",password: "OA2020"});
	accounts.push({username: "Maux",password: "8NCLE"});
	accounts.push({username: "Spy",password: "34332"});
	accounts.push({username: "DIEGO",password: "obesos123"});
	accounts.push({username: "Cheema",password: "jJYW6e"});
	accounts.push({username: "Sagg",password: "Rr8b5P"});
	accounts.push({username: "BryanCisf",password: "brayan123"});
	accounts.push({username: "Warrior",password: "LOLQUEPENALUCHO"});
	accounts.push({username: "Zed",password: "cortex"});
	accounts.push({username: "Real",password: "keys27"});
	accounts.push({username: "caslu",password: "gkEB62"});
	accounts.push({username: "Cali",password: "calculadora"});
	accounts.push({username: "Teastro",password: "2ZdAbY"});
	accounts.push({username: "Superzombot",password: "Luiscarpro"});
	accounts.push({username: "Dorlan",password: "poetapabon"});
	accounts.push({username: "Radi",password: "raditeo"});
	accounts.push({username: "Caralhooo",password: "4H9fmQ"}); 
	accounts.push({username: "Paula",password: "empanadaa1000"}); 
	accounts.push({username: "wz",password: "mrp2q8"}); 
	accounts.push({username: "lorenzi",password: "ysQ9bF"});
	accounts.push({username: "Zarco",password: "LDS"});
	accounts.push({username: "Arjen",password: "7Ev6WE"});
	accounts.push({username: "ABECE",password: "s9eQBe"});
	accounts.push({username: "Ginomasterxd",password: "ginito2020"});
	accounts.push({username: "benitoca",password: "vR6z3V"});
	accounts.push({username: "Nasz",password: "NkL8QA"});
	accounts.push({username: "Dida",password: "3Knwxk"});
	accounts.push({username: "webo",password: "v22081850"});
	accounts.push({username: "Valderrama",password: "valde123"});
	accounts.push({username: "Hardem",password: "XFL7zs"});
	accounts.push({username: "N e u r.",password: "rL9jmc"});
	accounts.push({username: "cech",password: "FLc9TM"});
	accounts.push({username: "Mateo",password: "chimuelito"});
	accounts.push({username: "Zerrrinho",password: "Pg2aHf"});
	accounts.push({username: "Savant",password: "6AqCyJ"});
	accounts.push({username: "Mecha",password: "21radicrescan"});
	accounts.push({username: "MatiGMS",password: "Masterisc0"});
	accounts.push({username: "Bogota",password: "GkpY8H"});
	accounts.push({username: "4R DA SQUAW",password: "Lq7Jnd"});
	accounts.push({username: "hydro",password: "5RGHgU"});
	accounts.push({username: "Beckham",password: "N3xnnJ"});
	accounts.push({username: "Teofilo",password: "Daniel12345"});
	accounts.push({username: "Guajira",password: "a5YG8r"});
	accounts.push({username: "Chevy",password: "kfFx7S"});
	accounts.push({username: "PINGUANO",password: "15869"});
	accounts.push({username: "Ace",password: "7B0L2Q"});
	accounts.push({username: "Michi",password: "holaquehace"});
	accounts.push({username: "mondaman",password: "aguacate"});
	accounts.push({username: "Veinz",password: "bryanesmalgm"});
	accounts.push({username: "Heimer",password: "DQ6dk"});
	accounts.push({username: "Trust",password: "XKIUV"});
	accounts.push({username: "Raptor",password: "iYQM7"});
	accounts.push({username: "CAPO",password: "lastravaganza"});
	accounts.push({username: "Ace",password: "N2grr"});
	accounts.push({username: "Taylor",password: "PlqoW"});
	accounts.push({username: "iiAqozi",password: "0987776661666366626"});
	accounts.push({username: "Xela",password: "Colombia"});
	accounts.push({username: "ElPsyCongroo",password: "SIN PASS"});
	accounts.push({username: "Halal",password: "4PYQC3"});
	accounts.push({username: "0range",password: "teXsv"});
	accounts.push({username: "Brunexx",password: "Brunexx"});
	accounts.push({username: "DiMort",password: "nvg14"});
	accounts.push({username: "Islandes",password: "N4b53"});
	accounts.push({username: "Cafuu",password: "iCafu"});
	accounts.push({username: "Pesus",password: "10658888"});
	accounts.push({username: "RaZe_Hammer",password: "Rito"});
	accounts.push({username: "Spirxl",password: "67098123"});
	accounts.push({username: "Frist",password: "iuqnX"});
	accounts.push({username: "Flight",password: "o7sgH"});
	accounts.push({username: "Rodrigool",password: "jWxuE"});
	accounts.push({username: "Dani",password: "pEtfA"});
	accounts.push({username: "Agally27",password: "UhpkR"});
	accounts.push({username: "Coco",password: "dohaeris"});
	accounts.push({username: "Carter",password: "fEtyw"});
	accounts.push({username: "Messidabest",password: "QLuxe"});
	accounts.push({username: "James Harden",password: "sJoy8"});
	accounts.push({username: "Hammer",password: "2n2PJ"});
	accounts.push({username: "Macaron",password: "cIY20"});
	accounts.push({username: "Ratchet",password: "ZMRrJ"});
	accounts.push({username: "Bergwey",password: "g4tSJ"});
	accounts.push({username: "Morita",password: "ho5x0"});
	accounts.push({username: "PapuGomez",password: "MptKe"});
	accounts.push({username: "Rocko",password: "CsxjY"});
	accounts.push({username: "Xao",password: "AsbGV"});
	accounts.push({username: "Salah",password: "cPXoA"});
	accounts.push({username: "Pesus",password: "10658888"});
	accounts.push({username: "Patriotz",password: "penis"});
	accounts.push({username: "Komari",password: "CRysX"});
	accounts.push({username: "Cowtinge",password: "OV3mP"});
	accounts.push({username: "Mac/Musa",password: "TKA2q"});
	accounts.push({username: "Hax",password: "dKMgE"});
	accounts.push({username: "Juan Mata",password: "iVPfj"});
	accounts.push({username: "AdamaT",password: "6Rghf"});
	accounts.push({username: "LucasPaquetá",password: "63FF04"});
	accounts.push({username: "9ine",password: "D32C35"});
	accounts.push({username: "Bennett",password: "10E269"});
	accounts.push({username: "itam",password: "2A1C5A"});
	accounts.push({username: "juank87",password: "995B15"});
	accounts.push({username: "Coxzito",password: "9BEC7D"});
	accounts.push({username: "bastimelo",password: "F5BD13"});
	accounts.push({username: "xCharles",password: "E72261"});
	accounts.push({username: "bonecollector",password: "B5CFBA"});
	accounts.push({username: "bronnyjames",password: "918652"});
	accounts.push({username: "Ale",password: "CC2B2B"});

	var commands = {
		// Command that doesnt need to know players attributes.
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
		"!Lgars661": adminFun,
		// Command that need to know if a player is admin
		"!swap": swapFun,
		"!swapkits": swapKitFun,
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
		"!unmuteall" : UnmuteAll,
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
		}

		//BAN SPAMMERS//
		if (message.includes("ఌ") || message.includes("甈") || message.includes("㐷") || message.includes("怅") || message.includes("瘪") || message.includes("⑸") || message.includes("㬆") || message.includes("権") || message.includes("怜") || message.includes("∯") || message.includes("㤒") || message.includes("䉊") || message.includes("匊") || message.includes("ᙻ") || message.includes("ൽ") || message.includes("爂") || message.includes("爇") || message.includes("त") || message.includes("権") || message.includes("怜") || message.includes("∯") || message.includes("㤒") || message.includes("BOT HPTA") || message.includes("眮") || message.includes("㤮") || message.includes("㵧") || message.includes("間") || message.includes("謝") || message.includes("奶") || message.includes("如") || message.includes("失") || message.includes("好") || message.includes("莖") || message.includes("治") || message.includes("帶") || message.includes("陰") || message.includes("KKKKKKKKKKK") || message.includes("歐") || message.includes("多") || message.includes("蘇") || message.includes("林") || message.includes("蘇") || message.includes("歐") || message.includes("kkkkkkk")) {
			room.kickPlayer(player.id, "BOOOOM💥 NO SPAM NEGGE.", true);
			return false; // The message won't be displayed
		} if (message.includes("bot hpta")) {
			room.kickPlayer(player.id, "Su mamita.", false);
			return true; // The message won't be displayed
		}
		//ESTADIOS//
		if (message == "!rs" && player.admin) {
			room.setCustomStadium(real);
		} else if (message == "!classic" && player.admin) {
			room.setDefaultStadium("Classic");
		} else if (message == "!medium" && player.admin) {
			room.setCustomStadium(MediumStadium);
		} else if (message == "!pensred" && player.admin) {
			room.setCustomStadium(penred);
		} else if (message == "!pensblue" && player.admin) {
			room.setCustomStadium(penblue);
		} else if (message == "!minirs" && player.admin) {
			room.setCustomStadium(minirs);
		} else if (message == "!10man" && player.admin) {
			room.setCustomStadium(diez);
		}else if (message == "!9man" && player.admin) {
			room.setCustomStadium(nueve);
		} else if (message == "!8man" && player.admin) {
			room.setCustomStadium(ocho);
		} else if (message == "!7man" && player.admin) {
			room.setCustomStadium(siete);
		} else if (message == "!6man" && player.admin) {
			room.setCustomStadium(seis);
		} else if (message == "!5man" && player.admin) {
			room.setCustomStadium(cinco);
		} else if (message == "!4man" && player.admin) {
			room.setCustomStadium(cuatro);
		} else if (message == "!3man" && player.admin) {
			room.setCustomStadium(tres);
		} else if (message == "!2man" && player.admin) {
			room.setCustomStadium(dos);
		} else if (message == "!volley" && player.admin) {
			room.setCustomStadium(volley);
		} else if (message == "!space" && player.admin) {
			room.setCustomStadium(space);
		} else if (message == "!rx1" && player.admin) {
			room.setCustomStadium(rxstadium);
		} else if (message == "!2ball" && player.admin) {
			room.setCustomStadium(dosball);
		} else if (message == "!3ball" && player.admin) {
			room.setCustomStadium(tresball);
		} else if (message == "!freekick" && player.admin) {
			room.setCustomStadium(freekick);
		} else if (message == "!deathball" && player.admin) {
			room.setCustomStadium(deathball);
		} else if (message == "!colracing" && player.admin) {
			room.setCustomStadium(collisionracing);
		} else if (message == "!mapas") {
			room.sendAnnouncement("[💬] 𝐒𝐎́𝐋𝐎 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍: Elige entre los siguientes mapas: | !medium,  !rs, !pensblue, !pensred y !minirs | !juegos", null, 0xfdfd96, 'bold', 0);
		} else if (message == "!juegos") {
			room.sendAnnouncement("𝐀𝐃𝐌𝐈𝐍𝐒: Elige entre los siguientes juegos: | !#man | !volley | !space | !autism ", null, 0xfdfd96, 'bold', 0);
		} else if (message == "!#man") {
			room.sendAnnouncement("!9man, !8man, !7man, !6man, !5man, !4man, !3man, !2man.", null, 0xfdfd96, "normal", 0);
		} else if (message == "!autism") {
			room.sendAnnouncement("!rx1 | !2ball| !3ball| !freekick| !deathball| !colracing", null, 0xfdfd96, "normal", 0);
			//UNIFORMES//
		} else if (message == "!camisetas") {
			room.sendAnnouncement("!superliga | !laliga | !seriea | !brasileño | !premier | !ligabet | !champions | !paises | !FCH", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!superliga") {
			room.sendAnnouncement("𝚂𝚄𝙿𝙴𝚁𝙻𝙸𝙶𝙰: | !����𝐎𝐂 | !𝐑𝐈𝐕 | !𝐒𝐋𝐎 | !𝐑𝐀𝐂 | !𝐂𝐀𝐈 | !𝐀𝐋𝐃 | !𝐆𝐈𝐌 | !𝐍𝐎𝐁 | !𝐂𝐄𝐍 | !𝐃𝐘𝐉", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!laliga") {
			room.sendAnnouncement("𝙻𝙰𝙻𝙸𝙶𝙰: | !𝐀𝐓𝐌 | !𝐁𝐀𝐑 | !𝐑𝐌𝐀 ", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!seriea") {
			room.sendAnnouncement("𝚂𝙴𝚁𝙸𝙴 𝙰: | !𝐈𝐍𝐓 | !𝐌𝐈𝐋 | !JUV | !ROM | !NAP | !ATA", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!brasileño") {
			room.sendAnnouncement("𝙲𝙰𝙼𝙿𝙴𝙾𝙽𝙰𝚃𝙾 𝙱𝚁𝙰𝚂𝙸𝙻𝙴𝙽̃𝙾: | !𝐂𝐑𝐔 | !𝐏𝐀𝐋 | !𝐆𝐑𝐄 | !FLU | !FLA", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!premier") {
			room.sendAnnouncement("𝙿𝚁𝙴𝙼𝙸𝙴𝚁 𝙻𝙴𝙰𝙶𝚄𝙴: | !𝐓𝐎𝐓 | !𝐋𝐈𝐕 | !MAU | !MAC | !ARS | !CHE", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!ligabet") {
			room.sendAnnouncement("LIGA BET PLAY COLOMBIA: | !𝐂𝐀𝐋 | !AME | !NAC | !MED | !JUN | !SAN | !MLL | !BUC | !TOL", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!champions") {
			room.sendAnnouncement("CHAMPIONS: | !BVB | !BAY | !LEI | !PSG | !LYO | !AJA | !POR | !BEN | !GAL | !BRU", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!paises") {
			room.sendAnnouncement("𝙿𝙰𝙸𝚂𝙴𝚂: | !𝐀𝐑𝐆 | !𝐁𝐑𝐀 | !𝐂𝐇𝐈 | !𝐔𝐑𝐔 | !𝐂𝐎𝐋 | !VZL | !𝐅𝐑𝐀 | !𝐂𝐑𝐎 | !ALE | !ESP | !PGL", player.id, 0xfdfd96, "normal", 0);
		} else if (message == "!FCH") {
			room.sendAnnouncement("TEMP 1: | !KRA | !KAM| !JUG | !LIO | !FUR | !DEV", player.id, 0xfdfd96, "normal", 0);

		}else if (message == "!KRA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("kra/titular/red | kra/titular/blue | kra/alternativa/red |kra/alternativa/blue");
		}else if (message == "!DOJ") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("doj/titular/red | doj/titular/blue | doj/alternativa/red |doj/alternativa/blue");
		}else if (message == "!JUG") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("jug/titular/red | jug/titular/blue | jug/alternativa/red |jug/alternativa/blue");
		}else if (message == "!LIO") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("lio/titular/red | lio/titular/blue | lio/alternativa/red |lio/alternativa/blue");
		}else if (message == "!FUR") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("fur/titular/red | fur/titular/blue | fur/alternativa/red |fur/alternativa/blue");
		}else if (message == "!DEV") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("dev/titular/red | dev/titular/blue | dev/alternativa/red |dev/alternativa/blue");
		}else if (message == "!KAM") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("kam/titular/red | kam/titular/blue | kam/alternativa/red |kam/alternativa/blue");


		}else if (message == "!RIV") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("riv/titular/red | riv/titular/blue | riv/alternativa/red |riv/alternativa/blue");
		} else if (message == "riv/titular/red" && player.admin == true) {
			room.setTeamColors(1, 35, 0x000000, [0xFFFFFF, 0xFF0000, 0xFFFFFF]);
		} else if (message == "riv/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 35, 0x000000, [0xFFFFFF, 0xFF0000, 0xFFFFFF]);
		} else if (message == "riv/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 35, 0xFFFFFF, [0x550099, 0x460086]);
		} else if (message == "riv/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 35, 0xFFFFFF, [0x550099, 0x460086]);
		} else if (message == "!BOC") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("boc/titular/red | boc/titular/blue | boc/alternativa/red |boc/alternativa/blue");
		} else if (message == "boc/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0x1C304C, 0xFFD322, 0x1C304C]);
		} else if (message == "boc/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0x1C304C, 0xFFD322, 0x1C304C]);
		} else if (message == "boc/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
		} else if (message == "boc/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
		} else if (message == "!SLO") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("slo/titular/red | slo/titular/blue ");
		} else if (message == "slo/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0x3E3B4E, 0xFE4143, 0x3E3B4E]);
		} else if (message == "slo/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0x3E3B4E, 0xFE4143, 0x3E3B4E]);
		} else if (message == "!RAC") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("rac/titular/red | rac/titular/blue ");
		} else if (message == "rac/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x000000, [0x05BCFF, 0xFFFFFF, 0x05BCFF]);
		} else if (message == "rac/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x000000, [0x05BCFF, 0xFFFFFF, 0x05BCFF]);
		} else if (message == "!CAI") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("cai/titular/red | cai/titular/blue ");
		} else if (message == "cai/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xB90101]);
		} else if (message == "cai/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xB90101]);
		} else if (message == "!ALD") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ald/titular/red | ald/titular/blue ");
		} else if (message == "ald/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x000000, [0x005F30, 0xFFE800]);
		} else if (message == "ald/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x000000, [0x005F30, 0xFFE800]);
		} else if (message == "!GIM") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("gim/titular/red | gim/titular/blue | gim/alternativa/red |gim/alternativa/blue");
		} else if (message == "gim/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xC2C2C2, [0xFFFFFF, 0x000040, 0xFFFFFF]);
		} else if (message == "gim/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xC2C2C2, [0xFFFFFF, 0x000040, 0xFFFFFF]);
		} else if (message == "gim/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xCCCCCC, [0x000040, 0xFFFFFF, 0x000040]);
		} else if (message == "gim/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xCCCCCC, [0x000040, 0xFFFFFF, 0x000040]);
		} else if (message == "!NOB") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("nob/titular/red | nob/titular/blue");
		} else if (message == "nob/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0x000000, 0xFF0404]);
		} else if (message == "nob/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0x000000, 0xFF0404]);
		} else if (message == "!CEN") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("cen/titular/red | cen/titular/blue | cen/alternativa/red | cen/alternativa/blue");
		} else if (message == "cen/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0xFFD700, 0x000040, 0xFFD700]);
		} else if (message == "cen/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0xFFD700, 0x000040, 0xFFD700]);
		} else if (message == "cen/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0x1a2b41, [0xFDAE05]);
		} else if (message == "cen/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0x1a2b41, [0xFDAE05]);
		} else if (message == "!DYJ") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("dyj/titular/red | dyj/titular/blue");
		} else if (message == "dyj/titular/red" && player.admin == true) {
			room.setTeamColors(1, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
		} else if (message == "dyj/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
		}
		else if (message == "!ATM") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("atm/titular/red | atm/titular/blue | atm/alternativa/red | atm/alternativa/blue");
		} else if (message == "atm/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x0202a2, [0xFF0000, 0xFFFFFF, 0xFF0000]);
		} else if (message == "atm/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x0202a2, [0xFF0000, 0xFFFFFF, 0xFF0000]);
		} else if (message == "atm/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x282e6c, [0x88CFEC]);
		} else if (message == "atm/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x282e6c, [0x88CFEC]);
		} else if (message == "!BAR") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("bar/titular/red | bar/titular/blue | bar/alternativa/red | bar/alternativa/blue");
		} else if (message == "bar/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xfbc000, [0x001F64, 0xA40920, 0x001F64]);
		} else if (message == "bar/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xfbc000, [0x001F64, 0xA40920, 0x001F64]);
		} else if (message == "bar/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x001b77, [0xCFFF47]);
		} else if (message == "bar/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x001b77, [0xCFFF47]);
		} else if (message == "!RMA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("rma/titular/red | rma/titular/blue");
		} else if (message == "rma/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xB5AE4A, [0xFFFFFF, 0xFFFFFF, 0xFFFFFF]);
		} else if (message == "rma/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xB5AE4A, [0xFFFFFF, 0xFFFFFF, 0xFFFFFF]);
		}
		else if (message == "!INT") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("int/titular/red | int/titular/blue | int/alternativa/red | int/alternativa/blue");
		} else if (message == "int/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0x0555CE, 0x000000, 0x0555CE]);
		} else if (message == "int/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0x0555CE, 0x000000, 0x0555CE]);
		} else if (message == "int/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x000000, [0x1EDBCF]);
		} else if (message == "int/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x000000, [0x1EDBCF]);
		} else if (message == "!MIL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("mil/titular/red | mil/titular/blue");
		} else if (message == "mil/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0xCE0000, 0x000000, 0xCE0000]);
		} else if (message == "mil/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0xCE0000, 0x000000, 0xCE0000]);
		} else if (message == "!JUV") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("juv/titular/red | juv/titular/blue");
		} else if (message == "juv/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFF05EE, [0xFFFFFF, 0x000000]);
		} else if (message == "juv/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFF05EE, [0xFFFFFF, 0x000000]);
		} else if (message == "!ROM") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("rom/titular/red | rom/titular/blue");
		} else if (message == "rom/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFAA2B, [0x8F1111]);
		} else if (message == "rom/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFAA2B, [0x8F1111]);
		} else if (message == "!NAP") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("nap/titular/red | nap/titular/blue");
		} else if (message == "nap/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0x2660FF]);
		} else if (message == "nap/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0x2660FF]);
		} else if (message == "!ATA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ata/titular/red | ata/titular/blue");
		} else if (message == "ata/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0x2660FF, 0x000000, 0x2660FF]);
		} else if (message == "ata/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0x2660FF, 0x000000, 0x2660FF]);
		}
		else if (message == "!CRU") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("cru/titular/red | cru/titular/blue | cru/alternativa/red | cru/alternativa/blue");
		} else if (message == "cru/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x0000FF]);
		} else if (message == "cru/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0x0000FF]);
		} else if (message == "cru/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x2727AA, [0xC3C3C3]);
		} else if (message == "cru/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x2727AA, [0xC3C3C3]);
		} else if (message == "!PAL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("pal/titular/red | pal/titular/blue");
		} else if (message == "pal/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x003F00]);
		} else if (message == "pal/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0x003F00]);
		} else if (message == "!GRE") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("gre/titular/red | gre/titular/blue");
		} else if (message == "gre/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0x19A2FF, 0x000000, 0x19A2FF]);
		} else if (message == "gre/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0x19A2FF, 0x000000, 0x19A2FF]);
		} else if (message == "!FLU") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("flu/titular/red | flu/titular/blue");
		} else if (message == "flu/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0x098200, 0xC20006, 0x098200]);
		} else if (message == "flu/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0x098200, 0xC20006, 0x098200]);
		} else if (message == "!FLA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("fla/titular/red | fla/titular/blue");
		} else if (message == "fla/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0xD40606, 0x000000, 0xD40606]);
		} else if (message == "fla/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0xD40606, 0x000000, 0xD40606]);
		}
		else if (message == "!TOT") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("tot/titular/red | tot/titular/blue | tot/alternativa/red | tot/alternativa/blue");
		} else if (message == "tot/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
		} else if (message == "tot/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
		} else if (message == "tot/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
		} else if (message == "tot/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
		} else if (message == "!LIV") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("liv/titular/red | liv/titular/blue | liv/alternativa/red | liv/alternativa/blue");
		} else if (message == "liv/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xA5191A]);
		} else if (message == "liv/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xA5191A]);
		} else if (message == "liv/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xec0109, [0xDDE1E4]);
		} else if (message == "liv/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xec0109, [0xDDE1E4]);
		} else if (message == "!MAU") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("mau/titular/red | mau/titular/blue | mau/alternativa/red | mau/alternativa/blue");
		} else if (message == "mau/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x000000, [0xD10000]);
		} else if (message == "mau/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x000000, [0xD10000]);
		} else if (message == "mau/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x000000, [0xC3CC74]);
		} else if (message == "mau/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xe000000, [0xC3CC74]);
		} else if (message == "!MAC") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("mac/titular/red | mac/titular/blue | mac/alternativa/red | mac/alternativa/blue");
		} else if (message == "mac/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x580D91, [0x14BACC]);
		} else if (message == "mac/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x580D91, [0x14BACC]);
		} else if (message == "mac/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xF7FF00, [0x000000]);
		} else if (message == "mac/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xeF7FF00, [0x000000]);
		} else if (message == "!ARS") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ars/titular/red | ars/titular/blue | ars/alternativa/red | ars/alternativa/blue");
		} else if (message == "ars/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "ars/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "ars/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xE5FF00, [0x2C2773]);
		} else if (message == "ars/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xeE5FF00, [0x2C2773]);
		} else if (message == "!CHE") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("che/titular/red | che/titular/blue | che/alternativa/red | che/alternativa/blue");
		} else if (message == "che/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x1C1A63]);
		} else if (message == "che/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0x1C1A63]);
		} else if (message == "che/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x1C1A63, [0xFFFFFF]);
		} else if (message == "che/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xe1C1A63, [0xFFFFFF]);
		}
		else if (message == "!CAL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("cal/titular/red | cal/titular/blue");
		} else if (message == "cal/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0x098C28, 0x098C28, 0XFFFFFF]);
		} else if (message == "cal/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0x098C28, 0x098C28, 0XFFFFFF]);
		} else if (message == "!AME") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ame/titular/red | ame/titular/blue");
		} else if (message == "ame/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "ame/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "!NAC") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("nac/titular/red | nac/titular/blue");
		} else if (message == "nac/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0x000000, [0x0AC90A, 0xFFFFFF, 0x0AC90A]);
		} else if (message == "nac/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0x000000, [0x0AC90A, 0xFFFFFF, 0x0AC90A]);
		} else if (message == "!MED") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("med/titular/red | med/titular/blue");
		} else if (message == "med/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0xDE2828, 0x260F99]);
		} else if (message == "med/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0xDE2828, 0x260F99]);
		} else if (message == "!JUN") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("jun/titular/red | jun/titular/blue");
		} else if (message == "jun/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0x0D0DFF, [0xFF0505, 0xFFFFFF, 0xFF0505]);
		} else if (message == "jun/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0x0D0DFF, [0xFF0505, 0xFFFFFF, 0xFF0505]);
		} else if (message == "!SAN") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("san/titular/red | san/titular/blue");
		} else if (message == "san/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xFF0000, 0xFF0000, 0xFFFFFF]);
		} else if (message == "san/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xFF0000, 0xFF0000, 0xFFFFFF]);
		} else if (message == "!MLL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("mll/titular/red | mll/titular/blue");
		} else if (message == "mll/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x00005E]);
		} else if (message == "mll/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0x00005E]);
		} else if (message == "!BUC") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("buc/titular/red | buc/titular/blue");
		} else if (message == "buc/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0x000000, [0x1E8C11, 0xF7FF00, 0x1E8C11]);
		} else if (message == "buc/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0x000000, [0x1E8C11, 0xF7FF00, 0x1E8C11]);
		} else if (message == "!TOL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("tol/titular/red | tol/titular/blue");
		} else if (message == "tol/titular/red" && player.admin == true) {
			room.setTeamColors(1, 50, 0x000000, [0x870D0D, 0xFFF27A, 0x870D0D]);
		} else if (message == "tol/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 50, 0x000000, [0x870D0D, 0xFFF27A, 0x870D0D]);
		}
		else if (message == "!BVB") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("bvb/titular/red | bvb/titular/blue");
		} else if (message == "bvb/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x000000, [0xF7FF00]);
		} else if (message == "bvb/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x000000, [0xF7FF00]);
		} else if (message == "!BAY") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("bay/titular/red | bay/titular/blue");
		} else if (message == "bay/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0xFF0000, 0xAB0000, 0xFF0000]);
		} else if (message == "bay/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0xF7FF00, 0xAB0000, 0xFF0000]);
		} else if (message == "!LEI") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("lei/titular/red | lei/titular/blue");
		} else if (message == "lei/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFF0000, [0xFFFFFF]);
		} else if (message == "lei/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFF0000, [0xFFFFFF]);
		} else if (message == "!PSG") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("psg/titular/red | psg/titular/blue");
		} else if (message == "psg/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFF0000, [0x050091, 0xFFFFFF, 0x050091]);
		} else if (message == "psg/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFF0000, [0x050091, 0xFFFFFF, 0x050091]);
		} else if (message == "!AJA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("aja/titular/red | aja/titular/blue");
		} else if (message == "aja/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xB8B5B5, [0xFFFFFF, 0xFF0000, 0xFFFFFF]);
		} else if (message == "aja/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xB8B5B5, [0xFFFFFF, 0xFF0000, 0xFFFFFF]);
		} else if (message == "!POR") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("por/titular/red | por/titular/blue");
		} else if (message == "por/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0x000000, [0x0011AB, 0xFFFFFF, 0x0011AB]);
		} else if (message == "por/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0x000000, [0x0011AB, 0xFFFFFF, 0x0011AB]);
		} else if (message == "!BEN") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ben/titular/red | ben/titular/blue");
		} else if (message == "ben/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0xE60000]);
		} else if (message == "ben/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0xE60000]);
		} else if (message == "!GAL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("gal/titular/red | gal/titular/blue");
		} else if (message == "gal/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0xFF8B17, 0xC42121]);
		} else if (message == "gal/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0xFF8B17, 0xC42121]);
		} else if (message == "!LYO") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("lyo/titular/red | lyo/titular/blue");
		} else if (message == "lyo/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0x00109C, [0xFF0808, 0xFFFFFF, 0xFFFFFF]);
		} else if (message == "lyo/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0x00109C, [0xFF0808, 0xFFFFFF, 0xFFFFFF]);
		} else if (message == "!BRU") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("bru/titular/red | bru/titular/blue | bru/alternativa/red | bru/alternativa/blue");
		} else if (message == "bru/titular/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0x000033, 0x167ED9, 0x000033]);
		} else if (message == "bru/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0x000033, 0x167ED9, 0x000033]);
		} else if (message == "bru/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 0, 0xFFFFFF, [0x820A42]);
		} else if (message == "bru/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 0, 0xFFFFFF, [0x820A42]);
		}
		else if (message == "!ARG") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("arg/titular/red | arg/titular/blue");
		} else if (message == "arg/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x02050C, [0xFFFFFF, 0x9DCEFF, 0xFFFFFF]);
		} else if (message == "arg/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x02050C, [0xFFFFFF, 0x9DCEFF, 0xFFFFFF]);
		} else if (message == "!BRA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("bra/titular/red | bra/titular/blue");
		} else if (message == "bra/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x008000, [0xF9DF00]);
		} else if (message == "bra/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x008000, [0xF9DF00]);
		} else if (message == "!CHI") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("chi/titular/red | chi/titular/blue");
		} else if (message == "chi/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "chi/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0xFF0000]);
		} else if (message == "!URU") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("uru/titular/red | uru/titular/blue");
		} else if (message == "uru/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0x000000, [0x8FBEFF, 0x7FB5FF]);
		} else if (message == "uru/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0x000000, [0x8FBEFF, 0x7FB5FF]);
		} else if (message == "!COL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("col/titular/red | col/titular/blue | col/alternativa/blue | col/alternativa/blue");
		} else if (message == "col/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x11007D, [0xEBE300]);
		} else if (message == "col/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x11007D, [0xEBE300]);
		} else if (message == "col/alternativa/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xEBE300, [0x11007D]);
		} else if (message == "col/alternativa/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xEBE300, [0x11007D]);
		} else if (message == "!VZL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("vzl/titular/red | vzl/titular/blue");
		} else if (message == "vzl/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0xFFFFFF, [0x82151C]);
		} else if (message == "vzl/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0xFFFFFF, [0x82151C]);
		} else if (message == "!FRA") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("fra/titular/red | fra/titular/blue");
		} else if (message == "fra/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0xFFFFFF, [0x4980CE, 0x404455, 0x404455]);
		} else if (message == "fra/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0xFFFFFF, [0x4980CE, 0x404455, 0x404455]);
		} else if (message == "!CRO") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("cro/titular/red | cro/titular/blue");
		} else if (message == "cro/titular/red" && player.admin == true) {
			room.setTeamColors(1, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
		} else if (message == "cro/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
		} else if (message == "!ALE") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("ale/titular/red | ale/titular/blue");
		} else if (message == "ale/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xFFFFFF, [0x000000, 0xFF0505, 0xFFF700]);
		} else if (message == "ale/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xFFFFFF, [0x000000, 0xFF0505, 0xFFF700]);
		} else if (message == "!ESP") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("esp/titular/red | esp/titular/blue");
		} else if (message == "esp/titular/red" && player.admin == true) {
			room.setTeamColors(1, 90, 0xF7E600, [0xD10606, 0xD10606, 0x00035E]);
		} else if (message == "esp/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 90, 0xF7E600, [0xD10606, 0xD10606, 0x00035E]);
		} else if (message == "!PGL") {
			room.sendAnnouncement("Puedes elegir entre:")
			room.sendAnnouncement("pgl/titular/red | pgl/titular/blue");
		} else if (message == "pgl/titular/red" && player.admin == true) {
			room.setTeamColors(1, 180, 0x156124, [0xD10606]);
		} else if (message == "pgl/titular/blue" && player.admin == true) {
			room.setTeamColors(2, 180, 0x156124, [0xD10606]);
		}
		switch (message) {
			// Kamikaze
			case "kam/titular/red":
				room.setTeamColors(1, 360, 0xFFFFFF, [0x0D0D0D, 0xFFA200, 0xFFA200]);
				break;
			case "kam/titular/blue":
				room.setTeamColors(2, 360, 0xFFFFFF, [0x0D0D0D, 0xFFA200, 0xFFA200]);
				break;
			case "kam/alternativa/red":
				room.setTeamColors(1, 134, 0x080A05, [0xFFFFFF, 0xFFAD1F, 0xF2F7FF]);
				break;
			case "kam/alternativa/blue":
				room.setTeamColors(2, 134, 0x080A05, [0xFFFFFF, 0xFFAD1F, 0xF2F7FF]);
				break;
			// Phoenix
			case "pho/titular/red":
				redAngle = 65
				redColors = ["0x" + "FFFFFF", "0x" + "FF8000", "0x" + "FFAA00", "0x" + "FFD500"]
				room.setTeamColors(1, redAngle, redColors[0], [redColors[1], redColors[2], redColors[3]]);  
				break;
			case "pho/titular/blue":
				room.setTeamColors(2, 60, 0xFFFFFF, [0xFF4000, 0xC04040, 0xA04060]);
				break;
			case "pho/alternativa/red":
				room.setTeamColors(1, 60, 0xFFFFFF, [0x0040FF, 0x4040C0, 0x6040A0]);
				break;
			case "pho/alternativa/blue":
				room.setTeamColors(2, 60, 0xFFFFFF, [0x0040FF, 0x4040C0, 0x6040A0]);
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
				room.setTeamColors(1, 90, 0xFFFFFF, [0x002240, 0x005196, 0x002240]); 
				break;
			case "lio/titular/blue":
				room.setTeamColors(2, 90, 0xFFFFFF, [0x002240, 0x005196, 0x002240]);
				break;
			case "lio/alternativa/red":
				room.setTeamColors(1, 0, 0xFFFFFF, [0xC40000]);
				break;
			case "lio/alternativa/blue":
				room.setTeamColors(2, 0, 0xFFFFFF, [0xC40000]);
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
				room.setTeamColors(1, 60, 0xE3CE49, [0xFF0000, 0xDE0000, 0xD10000]);  
				break;
			case "dev/titular/blue":
				room.setTeamColors(2, 60, 0xE3CE49, [0xFF0000, 0xDE0000, 0xD10000]);
				break;
			case "dev/alternativa/red":
				room.setTeamColors(1, 90, 0xFF0000, [0xFFFFFF, 0xFFFFFF, 0xFFFFFF]);
				break;
			case "dev/alternativa/blue":
				room.setTeamColors(2, 90, 0xFF0000, [0xFFFFFF, 0xFFFFFF, 0xFFFFFF]);
				break;
		   }
			if (message == "ME VOY") {
			room.kickPlayer(player.id, "BOOOOM💥", false);


		} else if (message == "!confirmar") {
			room.sendAnnouncement(" Para confirmar, escribe a RX#5494 en https://discordapp.com/", null, 0xcb99c9, 'bold', 0);
		} else if (message == "!discord") {
			room.sendAnnouncement("                                                           ░▒█▀▀▄░▀▄░▄▀ ", null, 0x9250FD, "normal", 0)
			room.sendAnnouncement("                                                           ░▒█▄▄▀░░▒█░░", null, 0x8466FD, "normal", 0)
			room.sendAnnouncement("                                                           ░▒█░▒█░▄▀▒▀▄        ", null, 0x8466FD, "normal", 0)
			room.sendAnnouncement("                                                                  𝐏𝐨𝐭𝐭𝐬 𝐇𝐨𝐬𝐭 ", null, 0x7B73FD, "normal", 0);
			room.sendAnnouncement("                      💬 Ú𝒏𝒆𝒕𝒆 𝒂𝒍 𝑫𝒊𝒔𝒄𝒐𝒓𝒅 𝒅𝒆𝒍 𝒉𝒐𝒔𝒕. ➡ https://discord.gg/tzAXKbG ⬅", null, 0xF6FF43, "normal", 0);
		}   
		else if (message == "!tabla") {
		room.sendAnnouncement(" https://tinyurl.com/TemporadaDos ", null, 0xcb99c9, 'bold', 0);
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
				if (account == undefined && account1 == undefined) { room.sendAnnouncement("GK Equipo Rojo: " + gk[0].name + ", GK Equipo Azul: " + gk[1].name, null, 0xfdfd96, "normal", 0) }
				else if (account !== undefined && account1 == undefined) { room.sendAnnouncement("GK Equipo Rojo: " + gk[0].name + "[" + account.username + "]" + ", GK Equipo Azul: " + gk[1].name, null, 0xfdfd96, "normal", 0) }
				else if (account == undefined && account1 !== undefined) { room.sendAnnouncement("GK Equipo Rojo: " + gk[0].name + ", GK Equipo Azul: " + gk[1].name + "[" + account1.username + "]", null, 0xfdfd96, "normal", 0) }
				else { room.sendAnnouncement("GK Equipo Rojo: " + gk[0].name + "[" + account.username + "]" + ", GK Equipo Azul: " + gk[1].name + "[" + account1.username + "]", null, 0xfdfd96, "normal", 0) };
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
			room.sendAnnouncement("⚽ Gol de " + whoTouchedBall[0].name + "[" + account.username + "]" +
				assist + ownGoal + " al [" +
				time + "] Para  " + team_name(team), null, 0xfdfd96, "normal", 0);
			room.sendAnnouncement("Total: " + team_color(1) + " " +
				boldedNumber(room.getScores().red) + " - " + boldedNumber(room.getScores().blue) + " " + team_color(2), null, 0xfdfd96, "normal", 0);
			if (ownGoal != "") {
				stats[account.username][4] += 1;
			} else {
				stats[account.username][0] += 1;
			}
		}
		else {
			room.sendAnnouncement("⚽ GOL Marcado por: " + whoTouchedBall[0].name +
				assist + ownGoal + " al [" +
				time + "] para  " + team_name(team), null, 0xfdfd96, "normal", 0);
			room.sendAnnouncement("Total: " + team_color(1) + " " +
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
		if (scores.red > scores.blue) {
			players = room.getPlayerList()
			eloDelta = updateElo(redTeam, blueTeam, 1, 0);
			updateWinLoseStats(redTeam, blueTeam);
			updateWinLoseStreakStats(redTeam, blueTeam);
			for (i = players.length - 1; i > 0; i--) {
				if (players[i].team == 2) {
					room.setPlayerTeam(players[i].id, 0);
				}
			}
		}
		else {
			players = room.getPlayerList()
			eloDelta = updateElo(redTeam, blueTeam, 0, 1);
			updateWinLoseStats(blueTeam, redTeam);
			updateWinLoseStreakStats(blueTeam, redTeam);
			for (i = players.length - 1; i > 0; i--) {
				if (players[i].team == 1) {
					room.setPlayerTeam(players[i].id, 0);
				}
			}
		}
		room.sendAnnouncement("Goles marcados. ⚽:", null, 0xfdfd96, "normal", 0)
		for (var [key, value] of scorers) { // key: name of the player, value: time of the goal
			room.sendAnnouncement(key + " " + value[1] + value[2] + ": " + value[0], null, 0xfdfd96, "normal", 0);
		}
		room.sendAnnouncement("El valor del partido fue " + Math.abs(eloDelta) + " puntos. [ELO Sólo son válidos en partidos 3vs3!]", null, 0xfdfd96, "normal", 0)
		teamPossFun();
		room.stopGame();
		saveStatsFun();
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
		let conn = connections.find(a => a[1] === player.conn);
		if (conn) {
			room.kickPlayer(player.id, "𝚂𝙾́𝙻𝙾 𝚄𝙽 𝙹𝚄𝙶𝙰𝙳𝙾𝚁 𝙿𝙾𝚁 𝙸𝙿 ❌", false);
		}
		else {
			connections.push([player.id, player.conn]);
		}
		clonekick(player);
		playerName = player.name.replace(/ /g, "_");
		room.sendAnnouncement("[📶] IBienvenid@! @" + playerName + " Para ver los comandos escribe: !help, !adminhelp, !rankhelp", null, 0x95d853, 'bold', 0);
		room.sendAnnouncement("[📶] @" + playerName + " 🚨 Inscripciones de la segunda temporada abiertas en, ve a inscribirte https://discord.gg/tzAXKbG. 🚨", null, 0x95d853, 'bold', 0);
		room.sendAnnouncement("[📶] @" + playerName + " --> Para confirmar, escribe a RX#5494 en https://discordapp.com/", player.id, 0xcb99c9, 'bold', 0);
		room.sendAnnouncement("[📶] Escribe | !tabla | para entrar a la página de la liga.", null, 0x8bb9dd, 'bold', 0);
		room.sendAnnouncement("[📶] IP del jugador: " + player.conn, null, 0x8bb9dd, 'bold', 0);
		var players = room.getPlayerList();
		var adminNumber = 0;
		for (var i = 0; i < players.length; i++) {
			if (players[i].admin) {
				adminNumber++;
			}
		}
		if (adminNumber < 2) {
			if (adminPublic){
				room.setPlayerAdmin(players[1].id, true);
			}
		}
	}
	room.onPlayerLeave = function(player) {
		(player.id);
		connections = connections.filter(a => a[0] !== player.id);
		var players = room.getPlayerList();
		var adminNumber = 0;
		for (var i = 0; i < players.length; i++) {
			if (players[i].admin) {
				adminNumber++;
			}
		}
		if (adminNumber < 2) {
			if(adminPublic){
				room.setPlayerAdmin(players[1].id, true);
			}
		}
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
					lastCall = "[⚽] Sᴀǫᴜᴇ ᴅᴇ ᴀʀᴄᴏ";
					room.sendAnnouncement("[⚽] Sᴀǫᴜᴇ ᴅᴇ ᴀʀᴄᴏ");
				}
				else if (ballPosition.x > stadiumWidth && lastTeamTouched == Team.BLUE || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.RED) {
					room.sendAnnouncement("[🚩] ᴄᴏʀɴᴇʀ");
					lastCall = "[🚩] ᴄᴏʀɴᴇʀ";
				}
				else {
					isBallKickedOutside = false;
					room.sendAnnouncement(lastTeamTouched == Team.RED ? "[𝐋𝐀𝐓] ʟᴀᴛᴇʀᴀʟ ᴘᴀʀᴀ ᴇʟ 𝐁𝐋𝐔𝐄 🔵" : "[𝐋𝐀𝐓] ʟᴀᴛᴇʀᴀʟ ᴘᴀʀᴀ ᴇʟ 𝐑𝐄𝐃 🔴");
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
				if (players[i].team != lastTeamTouched && players[i].team != lastCall && lastCall != "[🚩] ᴄᴏʀɴᴇʀ" && lastCall != "[⚽] Sᴀǫᴜᴇ ᴅᴇ ᴀʀᴄᴏ") {
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
					room.sendAnnouncement("🚨 𝐋𝐍𝐄𝐀 - " + lineCrossedPlayers[j].name + " {" + lineCrossedPlayers[j].times + "}");
					found = true;
				}
			}
			if (!found) {
				lineCrossedPlayers.push({
					name: playersNotInLine[i],
					times: 1,
					punished: false
				});
				room.sendAnnouncement("🚨 𝐋𝐈𝐍𝐄𝐀 - " + playersNotInLine[i] + " {1}");
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
					room.sendAnnouncement("⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼Á𝚂 𝙰𝚃𝚁𝙰𝚂 ⚠");
					trigger = true;
					wrongThrowPosition = true;
				}
				if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
					backMSG = false;
					room.sendAnnouncement("⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼Á𝚂 𝙰𝙳𝙴𝙻𝙰𝙽𝚃𝙴 ⚠");
					trigger = true;
					wrongThrowPosition = true;
				}
			}
			if (lastCall == "2") {
				if ((ballPosition.x - exitingPos > throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
					backMSG = false;
					room.sendAnnouncement("⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝙳𝙴𝙻𝙰𝙽𝚃𝙴 ⚠");
					trigger = true;
					wrongThrowPosition = true;
				}
				if ((ballPosition.x - exitingPos < -throwInLeeway) && backMSG == true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20))) {
					backMSG = false;
					room.sendAnnouncement("⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝚃𝚁𝙰𝚂 ⚠");
					trigger = true;
					wrongThrowPosition = true;
				}
			}
		}
		if (lastCall == "2" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
			room.sendAnnouncement("AHÍ ESTÁ BIEN 👍");
			trigger = false;
			wrongThrowPosition = false;
			backMSG = true;
		}
		if (lastCall == "1" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x) < throwInLeeway - 20) {
			room.sendAnnouncement("AHÍ ESTÁ BIEN 👍");
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
				room.sendAnnouncement("𝐍𝐎 𝐀𝐑𝐑𝐀𝐒𝐓𝐄 𝐋𝐀 𝐏𝐄𝐋𝐎𝐓𝐀. 𝐒𝐀𝐐𝐔𝐄 𝐁𝐈𝐄𝐍");
			}
			if (lastCall == "1") {
				room.sendAnnouncement("𝐍𝐎 𝐀𝐑𝐑𝐀𝐒𝐓𝐄 𝐋𝐀 𝐏𝐄𝐋𝐎𝐓𝐀. 𝐒𝐀𝐐𝐔𝐄 𝐁𝐈𝐄𝐍");
			}
			isBallKickedOutside == false;
		} else if (boolCrossing && string != lastCall && (lastCall == "1" || lastCall == "2")) {
			//room.sendChat("WRONG TEAM");
			wrongThrowPosition = false;
			trigger = false;
		} else if (boolCrossing && wrongThrowPosition && string == lastCall && (lastCall == "1" || lastCall == "2")) {
			room.sendAnnouncement("Lugar equivocado");
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
