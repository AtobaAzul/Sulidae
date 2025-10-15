ServerEvents.highPriorityData((event) => {
	event.addJson('sulidae:caravans/variation/caravan', {
		cooldown: 12000,
		leader: {
			type: 'minecraft:pillager',
		},
		members: [
			{
				type: 'minecraft:pillager',
				count: 7,
			},
			{
				type: 'tfc:donkey',
				cargo: 'sulidae:caravans/cargo/main',
				count: 4,
			},
		],
	});

	event.addJson('sulidae:caravans/placement/test_caravan', {
		weight: 1000,
		biomes: '#sulidae:has_caravan',
		pools: [
			{
				weight: 2,
				variations: [
					{
						variation: 'sulidae:caravan',
						weight: 5,
					},
				],
			},
		],
	});

	event.addJson('sulidae:loot_tables/caravans/cargo/main', {
		type: 'minecraft:chest',
		pools: [],
	});
});

ServerEvents.tags('worldgen/biome', (event) => {
	event.add('sulidae:has_caravan', [
		'tfc:canyons',
		'tfc:low_canyons',
		'tfc:hills',
		'tfc:shore',
		'tfc:plains',
		'tfc:plateau',
		'tfc:badlands',
		'tfc:lowlands',
		'tfc:highlands',
		'tfc:tidal_flats',
		'tfc:old_mountains',
		'tfc:inverted_badlands',
	]);
});

const caravan_loot = {
	resources: [
		{
			num: [5, 7],
			loot: [
				'tfc:ore/bituminous_coal',
				'tfc:ore/cinnabar',
				'tfc:ore/graphite',
				'tfc:ore/pyrite',
				'tfc:ore/cryolite',
				'tfc:ore/sulfur',
				'kubejs:manganite_chunk',
				'kubejs:kaolinite',
				'tfc:ore/halite',
			],
		},
		{
			num: [10, 15],
			loot: [
				'tfc:powder/hematite',
				'tfc:powder/native_copper',
				'tfc:powder/native_gold',
				'tfc:powder/sphalerite',
				'tfc:powder/native_silver',
			],
		},
		{
			num: [10, 15],
			loot: [
				'lithiccoins:blank_coin/gold',
				'lithiccoins:blank_coin/silver',
				'lithiccoins:blank_coin/copper',
			],
		},
	],
	supplies: [
		{
			num: [11, 17],
			loot: [
				'minecraft:gunpowder',
				'minecraft:leather',
				'scguns:standard_bullet',
				'scguns:small_brass_casing',
				'scguns:medium_brass_casing',
				'scguns:compact_advanced_round',
				'scguns:advanced_round',
				'createbigcannons:gunpowder_pinch',
			],
		},
		{
			num: [3, 7],
			loot: [
				'tfc:powder/salt',
				'firmalife:food/hardtack',
				'scguns:honey_sulfur_poultice',
			],
		},
	],
};

function lerp(start, stop, amount) {
	return start + (stop - start) * amount;
}

LootJS.modifiers((e) => {
	e.addLootTableModifier('sulidae:caravans/cargo/main')
		.addWeightedLoot([3, 9], false, [
			'9x tfc:powder/salt',
			'11x firmalife:food/hardtack',
			'7x scguns:honey_sulfur_poultice',
			'11x minecraft:gunpowder',
			'5x minecraft:leather',
			'19x scguns:standard_bullet',
			'15x scguns:small_brass_casing',
			'13x scguns:medium_brass_casing',
			'24x scguns:compact_advanced_round',
			'8x scguns:advanced_round',
			'31x createbigcannons:gunpowder_pinch',
			'7x lithiccoins:blank_coin/gold',
			'9x lithiccoins:blank_coin/silver',
			'7x lithiccoins:blank_coin/copper',
			'25x tfc:powder/hematite',
			'29x tfc:powder/native_copper',
			'21x tfc:powder/native_gold',
			'25x tfc:powder/sphalerite',
			'21x tfc:powder/native_silver',
			'10x tfc:ore/bituminous_coal',
			'11x tfc:ore/cinnabar',
			'12x tfc:ore/graphite',
			'13x tfc:ore/pyrite',
			'14x tfc:ore/cryolite',
			'15x tfc:ore/sulfur',
			'16x kubejs:manganite_chunk',
			'17x kubejs:kaolinite',
			'19x tfc:ore/halite',
		])
		.randomChance(0.1)
		.addLoot('thermal:laser_diode');

	e.addEntityLootModifier('pillager').addAlternativesLoot(
		LootEntry.of('lithiccoins:blank_coin/gold', 1).when((c) =>
			c.randomChance(0.33)
		),
		LootEntry.of('lithiccoins:blank_coin/silver', 2).when((c) =>
			c.randomChance(0.33)
		),
		LootEntry.of('lithiccoins:blank_coin/copper', 4).when((c) =>
			c.randomChance(0.33)
		)
	);
});

//force forge:spawn_type: "PATROL" to spawn with oak chest (donkeys) and always with guns (pillagers)

EntityEvents.spawned('tfc:donkey', (event) => {
	//let the normal nbt data initialize
	let entity = event.entity;
	let spawn_type = entity.getNbt().get('forge:spawn_type');
	let nbt = JsonIO.toObject(NBT.toJson(entity.nbt));

	if (spawn_type == 'PATROL') {
		//fixing items in horseshoe slot, adding chest

		nbt.familiarity = 0.2;
		nbt.chestItem = { id: 'tfc:wood/chest/oak', Count: 1 };
		//FUCK YOU GAME
		event.server.runCommandSilent(
			`data modify entity ${entity.getUuid()} familiarity set value 0.2`
		);

		if (nbt.HorseshoesItem) {
			nbt.HorseshoesItem = {};
			delete nbt.HorseshoesItem;
		}

		if (nbt.HorsemanLeadItem) {
			nbt.HorsemanLeadItem = {};
			delete nbt.HorsemanLeadItem;
		}

		entity.setNbt(NBT.toTag(nbt));
	}
});

let pillager_guns = [
	'scguns:pax',
	'scguns:winnie',
	'scguns:winnie_millend',
	'scguns:saketini',
	'scguns:saketini_ironport',
];

let vindicator_guns = [
	'scguns:trenchur',
	'scguns:greaser_smg',
	'scguns:m3_carabine',
];

EntityEvents.spawned('minecraft:pillager', (event) => {
	let entity = event.entity;
	let spawn_type = entity.getNbt().get('forge:spawn_type');

	if (spawn_type == 'PATROL') {
		entity.tags.add('MobGunner');
		entity.tags.add('ProgressionGunner');
	}
});

EntityEvents.spawned('minecraft:vindicator', (event) => {
	let entity = event.entity;
	let spawn_type = entity.getNbt().get('forge:spawn_type');

	if (spawn_type == 'PATROL') {
		entity.tags.add('MobGunner');
		entity.tags.add('ProgressionGunner');
	}
});


PlayerEvents.advancement('tfc:story/steel_age', event => {
    event.server.runCommandSilent(`scguns progression set ${event.player.name.string} frontier`)
})

PlayerEvents.advancement('tfc:story/black_steel', event => {
    event.server.runCommandSilent(`scguns progression set ${event.player.name.string} iron`)
})

PlayerEvents.advancement('tfc:story/blue_steel', event => {
    event.server.runCommandSilent(`scguns progression set ${event.player.name.string} diamond_steel`)
})

PlayerEvents.advancement('tfc:story/red_steel', event => {
    event.server.runCommandSilent(`scguns progression set ${event.player.name.string} diamond_steel`)
})

ServerEvents.tags('item', event => {
    event.add('scguns:frontier_gun_tier', '#tfc:metal_item/steel')
    event.add('scguns:iron_gun_tier', '#tfc:metal_item/black_steel')
    event.add('scguns:diamond_steel_gun_tier', ['#tfc:metal_item/blue_steel', '#tfc:metal_item/red_steel'])
})