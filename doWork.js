


var items = [
  ["step", "צעד"],
 ["turtle", "צב"],
 ["monkey", "קוף"],
 ["turn", "פנה"],
 ["times", "פעמים"],
 ["turnTo", "פנה_אל"],
 ["rightTurn", "פנה_ימינה"],
 ["leftTurn", "פנה_שמאלה"],
 ["left", "שמאלה"],
 ["right", "ימינה"],
 ["banana", "בננה"],
 ["walk", "לך"],
 ["up", "מעלה"],
 ["down", "מטה"],
 ["crocodile", "תנין"],
 ["ant", "נמלה"],
 ["rat", "עכברוש"],
 ["hippo", "היפו"],
 ["gorilla", "גורילה"],
 ["frog", "צפרדע"], 
 ["for", "עבור"], 
 ["if", "אם"], 
 ["move", "זוז"], 
 ["key", "הקלדה"], 
 ["on", "על"], 
 ["grab", "לתפוס"], 
 ["toss", "זרוק"], 
 ["onclick", "בלחיצה"], 
 ["equals", "שווה"], 
 ["bridge", "גשר"],
 ["in", "בתוך"],

["distanceTo","המרחק_אל"],

["say","אמור"],

["banans","בננות"],

["crocodiles","תנינים"],

["turtles","צבים"],

["Hello","שלום"],

["Boo!","בו!"],

 ["bush","שיח"],

["island","אי"],

["bushes","שיחים"],

["islands","איים"],

 ["tinySwamp","ביצה"],

["tinySwamps","ביצים"],

["beaver","בונה"],

["beavers","בונים"],

 ["in","בתוך"],

["Hi","הי"],

["raft","רפסודה"],

["drop","הנח"],

["match","גפרור"],

["pile","ערמה"],

["matches","גפרורים"],

["goto","לך_אל"],

["collect","אסוף"],

["function","פונקציה"],

["gotoall","לך_אל_כולם"],

["getAndReturn","לך_ותחזור"],

["allTurtlesStep","כל_הצבים_לצעוד"],

["until","עד_ש"],

["near","קרוב"],

["yes","כן"],

["no","לא"],

["chase","רדוף"],

 ["ants","נמלים"],

["cat","חתול"],

["sleeping","ישן"],

["wait","חכה"],

["safecollect","אסוף"],

["goat","עז"],

["goats","עזים"],

["hit","הכה"],

["frozen","קפואה"],

["Brrr…","בררר"],

["green","ירוק"],

["yellow","צהוב"],

["else","אחרת"],

["breakBanana","שבור_בננה"],

["eatBanana","אכול_בננה"],

["bear","דב"],

["bears","דובים"],

["tiger","טיגריס"],

["and","וגם"],

["waitForSafety","חכה_עד_שבטוח"],

["playing","משחק"],

["or","או"],

["waitfor","חכה_עד_ש"],

["penguin","פניגווין"],

["penguins","פינגווינים"],

["hasGlasses","יש_משקפיים"],

["hasBowTie","יש_עניבה"],

["rotten","רקוב"],

["not","לא"],

["health","בריאות"],

["gorilla","גורילה"],

["healthZone","אזור_בריאות"],

["gotoNearestHealth","לך_לאזור_בריאות_הקרוב"],

["return","חזור"],

["example","דוגמא"],

["yummy","טעים"],

["healthy","בריא"],

["injured","פצוע"],

["safeFrom","בטוח_מ"],

["negative","שלילי"],

["positive","חיובי"],

["foo","פו.."],

["crow","עורב"],

["watching","צופה"],

["safe","בטוח"],

["onKey","כשלוחצים"],

["potion","שיקוי"],

["gate","שער"],

["onMouseMove","כשהעכבר_זז"],

["pos","מיקום_העכבר"],

["bat","עטלף"],

["setX","Xקבע_מיקום_על_ציר"],

["setY","Yקבע_מיקום_על_ציר"],

["onClick","בלחיצת_עכבר"],

["mover","מזיז"],

["onMouseMove","כשהעכבר_זז"],

["coconut","קוקוס"],

["hippos","היפופוטמים"],

 ["walkTimes","לך_כך_פעמים"],

["uTurn","הסתובב_אחורה"],

["walkBack","לך_אחורה"],

["carousel","קרוסלה"],

["turnOneDegree","פנה_מעלה_אחת"],

["facing","פונה_אל"],

["carousels","קרוסלות"],

["lasers","לייזרים"],

["laser","לייזר"],

["direction","כיוון"],

["directions","כיוונים"],

["asteroid","אסטרואיד"],

["asteroids","אסטרואידים"],

["moveArr","מערך_תזוזה"],

["clear","פנוי"],

["push","דחוף"],

["on","פועל"],

["caught","נתפסה"],

["off","כבוי"],

["while","כל_עוד"]
	
];

var direction = 0;

document.getElementById("play-btn").onclick=function() { 
	direction = 1;
	changeLang();
	try {
		runCode();
	}catch(e){}
	window.setInterval(function() { direction = 0;}, 1000);
}

function changeLang() {
	var class_names = ["ace_keyword","ace_identifier"];
	for (x=0;x<class_names.length;x++) {
  	  	for (i=0;i<document.getElementsByClassName(class_names[x]).length;i++) {
  			for(j=0;j<items.length;j++) {
	  		  if (document.getElementsByClassName(class_names[x])[i].innerHTML === items[j][direction])	
	 			  document.getElementsByClassName(class_names[x])[i].innerHTML = items[j][Math.abs(direction - 1)]
		  }
	  }
  }
}
window.setInterval(changeLang, 1000);

for (i=0;i<document.getElementsByClassName("method-text").length;i++) {
  	for(j=0;j<items.length;j++) {
 	 	if (document.getElementsByClassName("method-text")[i].innerHTML.trim() === items[j][direction])	
 			document.getElementsByClassName("method-text")[i].innerHTML = items[j][Math.abs(direction - 1)]
	}
	
}








