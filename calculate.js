//variables
var textDefault = document.getElementById("paragraph1");
var textDerived = document.getElementById("paragraph2");
var sliderStrength = document.getElementById("slider1");
var sliderDefense = document.getElementById("slider2");
var sliderMagic = document.getElementById("slider3");
var boxWeaponDamage = document.getElementById("box1");

//para.id = "" or para.setAttribute("id", "idname")

//styling
textDefault.style.fontSize = "18px";
textDefault.style.color = "Blue";
textDerived.style.fontSize = "18px";
textDerived.style.color = "Red";

setInterval(function calculate() {
	var strength = sliderStrength.value;
	var defense = sliderDefense.value;
	var magic = sliderMagic.value;
	var weaponDamage = boxWeaponDamage.value;

/*	=THE OLD DAMAGE & HEALTH
	//Damage
		if (strength <= 6) {
			var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * 0.175
				)
			);
		} else if (strength == 7) {
			var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * 0.17
				)
			);
		}
		else if (strength == 8) {
			var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * 0.169
				)
			);
		}
		else if (strength == 9) {
			var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * 0.168
				)
			);
		}
		else {
			var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * 0.167
				)
			);
		};

	//Health
		if (defense <= 5) {
			var health = 75 + (defense * 5) + (strength * 2);
		} else {
			var health = 75 + (defense * defense) + (strength * 2);
		};
*/
	//Damage
		var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * (0.17 - strength*4/1000)
				)
			);
	//Magic Damage
		var damageMagic = Math.ceil(
				Math.pow(
					weaponDamage, magic * (0.17 - magic*4/1000)
				)
			);
	//Health
		var health = 45 + (defense * defense) + (strength * 4) + (magic * 2);	
	//Stamina
	//var stamina = ((+strength) + (+defense) + (+magic)) *6;
		var stamina = 45 + (strength * strength) + (defense * 4) + (magic * 2);
	//Mana
		var mana = 65 + (magic * magic) + (magic * 2);	

/* =Points thing
		//level up will automatically add points to derived stats
		//and skill points can be used to manualy add
		//more points to stats
		//low base stat = slower derived stat growth when leveling up
		//example: health will grow slower if defense is low.
			var pointsText = document.getElementById("points");
			var points = 2 + (5 - strength) + (5 - defense);
			pointsText.innerHTML = "Lvl Points: " + points;
*/

		textDefault.innerHTML = 
			"Default Stats: " +
			"<br>"+ 
			"Strength = " + strength + 
			"<br>"+ 
			" Defense = " + defense +
			"<br>" + 
			" Magic = " + magic + 
			"<br>"+ 
			" Weapon Damage " + weaponDamage;
		textDerived.innerHTML = 
			"Derived Stats: " +
			"<br>" + 
			"Health = " + health + 
			"<br>" + 
			" Stamina = " + stamina +
			"<br>" + 
			"Mana = " + mana + 
			"<br>" + 
			" Damage = " + damage +
			"<br>" + 
			" Magic Damage = " + damageMagic;
}, 50);

//Make a description of what the stats does
// Ex. Defense gets you more HP and blocks incoming damage
//Some techniques and spells require certain amount of skills
//so if your magic is low, you won't be able to use the awesome Grand Wizard spells.