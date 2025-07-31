//cba to do propper lootjs version

ServerEvents.highPriorityData((event) => {
	event.addJson('supplementaries:loot_tables/blocks/ash', {
		type: 'minecraft:block',
		pools: [
			{
				rolls: 1.0,
				bonus_rolls: 0.0,
				entries: [
					{
						type: 'minecraft:alternatives',
						children: [
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '1',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 1.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '2',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 2.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '3',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 3.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '4',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 4.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '5',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 5.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '6',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 6.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								conditions: [
									{
										condition:
											'minecraft:block_state_property',
										block: 'supplementaries:ash',
										properties: {
											layers: '7',
										},
									},
								],
								functions: [
									{
										function: 'minecraft:set_count',
										count: 7.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
							{
								type: 'minecraft:item',
								functions: [
									{
										function: 'minecraft:set_count',
										count: 8.0,
										add: false,
									},
									{
										function: 'minecraft:explosion_decay',
									},
								],
								name: 'tfc:powder/wood_ash',
							},
						],
					},
				],
			},
		],
	});
});

LootJS.modifiers((e) => {
	e.addLootTableModifier('minecraft:archaeology/trail_ruins_common')
		.removeLoot(/.*/)
		.addWeightedLoot(
			[1, 2],
			[
				'minecraft:archer_pottery_sherd',
				'minecraft:arms_up_pottery_sherd',
				'minecraft:plenty_pottery_sherd',
				'minecraft:prize_pottery_sherd',
				'minecraft:blade_pottery_sherd',
				'minecraft:brewer_pottery_sherd',
				'minecraft:sheaf_pottery_sherd',
				'minecraft:shelter_pottery_sherd',
				'minecraft:burn_pottery_sherd',
				'minecraft:danger_pottery_sherd',
				'minecraft:skull_pottery_sherd',
				'minecraft:snort_pottery_sherd',
				'minecraft:explorer_pottery_sherd',
				'minecraft:friend_pottery_sherd',
				'minecraft:heart_pottery_sherd',
				'minecraft:heartbreak_pottery_sherd',
				'minecraft:howl_pottery_sherd',
				'scguns:medium_brass_casing',
				'scguns:small_brass_casing',
				'firmalife:pottery_sherd',
				'tfccanes:walking_cane',
				'tfc:ceramic/jug',
				'quark:dirty_shard',
				'minecraft:mourner_pottery_sherd',
				'minecraft:miner_pottery_sherd',
				'minecraft:angler_pottery_sherd',
                'kubejs:scrap',
                'kubejs:horse_relic',
                'kubejs:humanlike_relic',
                'kubejs:rusty_sword'

			]
		).damage([0.05, 0.33]);

	e.addLootTableModifier('minecraft:archaeology/trail_ruins_rare')
		.removeLoot(/.*/)
		.addWeightedLoot(
			[1, 2],
			[
				'tfc:metal/ingot/copper',
				'tfc:metal/ingot/bismuth',
				'tfc:gem/topaz',
				'tfc:gem/sapphire',
				'tfc:gem/emerald',
				'tfc:gem/ruby',
				
				'tfc:metal/lamp/copper',
				'tfc:gem/amethyst',
				'tfc:gem/diamond',
				'tfc:gem/opal',
				'create:andesite_alloy',
				'tfc:metal/ingot/bismuth_bronze',
				'tfc:metal/ingot/bronze',
				'tfc:metal/ingot/gold',
				'tfc:metal/sword/bronze',
				'tfc:metal/sword/bismuth_bronze',
				'tfc:metal/sword/black_bronze',
				'tfc:metal/mace/black_bronze',
				'tfc:metal/mace/bronze',
				'tfc:metal/mace/copper',
                'kubejs:horse_relic',
                'kubejs:humanlike_relic'
			]
		)
		.damage([0.05, 0.1]);
});
