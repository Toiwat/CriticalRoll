angular.module('CriticalRoll').service('RuletipsService', function ($ionicPopup, $filter) {

	this.ruletips = [
		{
			"title": "RULETIP-SECTION-DAMAGE",
			"rules": [
				"OBJECT-DAMAGE",
				"NONLETHAL-DAMAGE",
				"STATUS-NEGATIVE-LEVEL"
			]
		},
		{
			"title": "RULETIP-SECTION-SAVES",
			"rules": [
				"UNTIL-HEALED",
				"SAVE-CRITICAL",
				"SAVE-FUMBLE"
			]
		},
		{
			"title": "RULETIP-SECTION-ABILITY",
			"rules": [
				"ABILITY-DAMAGE",
				"ABILITY-DRAIN",
				"ABILITY-STR",
				"ABILITY-DEX",
				"ABILITY-CON",
				"ABILITY-INT",
				"ABILITY-WIS",
				"ABILITY-CHA"
			]
		},
		{
			"title": "RULETIP-SECTION-STATUS",
			"rules": [
				"STATUS-BLEED",
				"STATUS-BLINDED",
				"STATUS-CONFUSED",
				"STATUS-DAZED",
				"STATUS-DAZZLED",
				"STATUS-DEAFENED",
				"STATUS-ENTANGLED",
				"STATUS-EXHAUSTED",
				"STATUS-FATIGUED",
				"STATUS-FLAT-FOOTED",
				"STATUS-FRIGHTENED",
				"STATUS-INCORPOREAL",
				"STATUS-INVISIBLE",
				"STATUS-NAUSEATED",
				"STATUS-PRONE",
				"STATUS-SHAKEN",
				"STATUS-SICKENED",
				"STATUS-STAGGERED",
				"STATUS-STUNNED",
				"STATUS-UNCONSCIOUS",
				"STATUS-PETRIFIED"
			]
		}
	];

	this.openRuletip = function (ruletipType) {

		$ionicPopup.alert({
			title: $filter('translate')(ruletipType + "-TITLE"),
			template: $filter('translate')(ruletipType + "-TEXT")
		});
	};

});