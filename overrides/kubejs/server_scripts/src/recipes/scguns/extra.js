// priority: 50

ServerEvents.recipes((e) => {
	e.shaped('4x scguns:grenade', ['A', 'B', 'C'], {
		A: 'tfc:metal/sheet/zinc',
		B: 'scguns:nitro_powder',
		C: '#forge:rods/wooden',
	});

	e.shapeless('4x scguns:molotov_cocktail', [
		'4x #firmalife:empty_wine_bottles',
		'kubejs:ethanol_fuel_can',
		['#tfc:sewing_light_cloth', '#tfc:sewing_dark_cloth'],
	]);

	e.custom({
		type: 'tfc:knapping',
		knapping_type: 'tfc:leather',
		pattern: [' XXX ', 'X   X', 'XXXXX', 'XXXXX', 'XXXXX'],
		result: {
			item: 'scguns:empty_casing_pouch',
		},
	});

	let ammo_boxes = [
		'scguns:pistol_ammo_box',
		'scguns:rifle_ammo_box',
		'scguns:shotgun_ammo_box',
		'scguns:rocket_ammo_box',
	];

	ammo_boxes.forEach((ammo_box) => {
		e.recipes.tfc.anvil(ammo_box, 'firmalife:metal/sheet/stainless_steel', [
			'bend_last',
			'bend_second_last',
			'bend_third_last',
		]);

		ADDED_ANVIL_RECIPES.push([
			ammo_box,
			'firmalife:metal/sheet/stainless_steel',
			4,
		]);
	});

	e.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('scguns:iron_bayonet').copyForgingBonus(),
		[' A', 'B '],
		{
			A: 'tfc:metal/sword_blade/wrought_iron',
			B: '#tfc:lumber',
		},
		0,
		1
	);

	e.shaped('scguns:light_grip', ['ABA'], {
		A: 'firmaciv:copper_bolt',
		B: 'minecraft:leather',
	});
	e.shaped('scguns:vertical_grip', ['ABA', ' C ', ' D '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:wood/lumber/acacia',
		C: 'tfc:metal/rod/steel',
		D: 'afc:rubber_bar',
	});
	e.shaped('scguns:wooden_stock', ['AAB', 'AA '], {
		A: 'tfc:wood/lumber/acacia',
		B: 'firmaciv:copper_bolt',
	});
	e.shaped('scguns:medium_scope', [' A ', ' B ', ' C '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:lens',
		C: 'tfc:metal/sheet/steel',
	});

	e.shaped('scguns:weighted_stock', ['ABC', 'AA '], {
		A: 'tfc:wood/lumber/acacia',
		B: 'tfc:metal/sheet/steel',
		C: 'tfc:metal/rod/steel',
	});
	e.shaped('scguns:long_scope', [' A ', 'BCB', ' A '], {
		A: 'firmaciv:copper_bolt',
		B: 'tfc:lens',
		C: 'tfc:metal/sheet/steel',
	});
	e.shaped('scguns:light_stock', ['AAA', 'A  '], {
		A: 'tfc:metal/rod/steel',
	});

	e.shaped('scguns:extended_barrel', [' A ', 'BCB', ' A '], {
		A: 'firmaciv:copper_bolt',
		B: 'scguns:gun_barrel',
		C: 'tfc:metal/sheet/steel',
	});
	e.shapeless('scguns:muzzle_brake', [
		'scguns:heavy_gun_barrel',
		'#tfc:saws',
	]).damageIngredient('#tfc:saws', 10);

	e.shaped('scguns:adrien_leggings', ['ABA', 'C C', 'D D'], {
		A: 'firmaciv:copper_bolt',
		B: 'kubejs:metal/double_sheet/mangalloy',
		C: 'kubejs:reinforced_synthetic_fabric',
		D: 'kubejs:metal/sheet/mangalloy',
	});
	e.shaped('scguns:adrien_boots', ['A A', 'BCB'], {
		A: 'kubejs:reinforced_synthetic_fabric',
		B: 'kubejs:metal/sheet/mangalloy',
		C: 'firmaciv:copper_bolt',
	});
	e.shaped('scguns:adrien_chestplate', ['A A', 'BCB', 'DAD'], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'kubejs:reinforced_synthetic_fabric',
		C: 'kubejs:metal/double_sheet/mangalloy',
		D: 'firmaciv:copper_bolt',
	});
	e.shaped('scguns:adrien_helm', ['AAA', 'BCB'], {
		A: 'kubejs:metal/sheet/mangalloy',
		B: 'kubejs:reinforced_synthetic_fabric',
		C: 'firmaciv:copper_bolt',
	});
	e.recipes.create.milling('quark:moss_paste', ['tfc:plant/moss']);

	e.shapeless('4x scguns:basic_poultice', [
		'quark:moss_paste',
		['tfc:unrefined_paper', 'paper'],
	]);
	e.shapeless('4x scguns:honey_sulfur_poultice', [
		'quark:moss_paste',
		'paper',
		'firmalife:raw_honey',
		'tfc:powder/sulfur',
	]);
	e.shapeless('scguns:honey_sulfur_poultice', [
		'scguns:basic_poultice',
		'firmalife:raw_honey',
		'tfc:powder/sulfur',
	]);
	e.shaped('scguns:anthralite_respirator', ['ABA', 'CDC', ' E '], {
		A: 'tfc:lens',
		B: 'tfc:metal/sheet/black_steel',
		C: 'afc:rubber_bar',
		D: 'tfc:powder/charcoal',
		E: '#tfc:high_quality_cloth',
	});
	e.shaped('scguns:silencer', [' A ', 'BCB', ' A '], {
		A: ['#tfc:sewing_dark_cloth', '#tfc:sewing_light_cloth'],
		B: 'afc:rubber_bar',
		C: 'firmalife:metal/sheet/stainless_steel',
	});

	e.shaped('scguns:basic_turret', [' A ', ' B ', 'CDC'], {
		A: 'scguns:m3_carabine',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/double_sheet/black_steel',
		D: 'thermal:machine_frame',
	});
	e.shaped('scguns:auto_turret', ['ABA', ' C ', 'DED'], {
		A: 'scguns:greaser_smg',
		B: 'create:shaft',
		C: 'create:precision_mechanism',
		D: 'tfc:metal/double_sheet/black_steel',
		E: 'thermal:machine_frame',
	});
	e.shaped('scguns:shotgun_turret', [' A ', ' B ', 'CDC'], {
		A: 'scguns:combat_shotgun',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/double_sheet/black_steel',
		D: 'thermal:machine_frame',
	});
    	e.shaped('scguns:sniper_turret', [' A ', ' B ', 'CDC'], {
		A: 'scguns:iron_spear',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/double_sheet/black_steel',
		D: 'thermal:machine_frame',
	});

	e.shapeless('scguns:enemy_log', ['minecraft:book', 'minecraft:red_dye']);

	e.shapeless('scguns:team_log', ['minecraft:purple_dye', 'minecraft:book']);
	e.shaped('scguns:hostile_turret_targeting_module', ['A', 'B'], {
		A: 'kubejs:circuit',
		B: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:turret_targeting_module', ['A', 'B'], {
		A: 'kubejs:circuit',
		B: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:player_turret_targeting_module', ['A', 'B'], {
		A: 'kubejs:circuit',
		B: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:shell_catcher_turret_module', ['A', 'B'], {
		A: 'minecraft:hopper',
		B: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:fire_rate_turret_module', ['AAA', ' B '], {
		A: 'createaddition:copper_spool',
		B: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:range_turret_module', ['A', 'B', 'C'], {
		A: 'tfc:metal/double_sheet/cast_iron',
		B: 'simpleradio:transmitting_module',
		C: 'simpleradio:receiving_module',
	});
	e.shaped('scguns:damage_turret_module', ['ABA', ' C '], {
		A: 'create:andesite_alloy',
		B: 'kubejs:rocket_fuel',
		C: 'tfc:metal/sheet/cast_iron',
	});
	e.shaped('scguns:ammo_turret_module', ['A', 'B'], {
		A: 'scguns:ammo_box',
		B: 'tfc:metal/sheet/cast_iron',
	});

	e.shapeless('6x scguns:sandbag', [
		'#minecraft:sand',
		['#tfc:sewing_light_cloth', '#tfc:sewing_dark_cloth'],
	]);
});
