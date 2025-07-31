console.info('loaded worldgen/ore_gen.js');

ServerEvents.tags('worldgen/placed_feature', (event) => {
	event.add('tfc:in_biome/veins', 'tfc:vein/normal_oil_shale');
	event.add('tfc:in_biome/veins', 'tfc:vein/rich_oil_shale');
	event.add('tfc:in_biome/veins', 'tfc:vein/rich_oil_shale_ocean');
});

ServerEvents.tags('worldgen/biome', (event) => {
	event.add('createdieselgenerators:oil_biomes', '#tfc:is_ocean');
});

//global modifier for all ores for them to be rarer and bigger.

ServerEvents.highPriorityData((event) => {
	let biomeJsonFolder = global.readJsonFolderFromMod(
		'data',
		'tfc',
		'worldgen',
		(rl) => rl.path.contains('worldgen/biome')
	);
	for (let [datapath, _json] of Object.entries(biomeJsonFolder)) {
		_json = JsonIO.toObject(_json);
		console.info(_json);
		console.info(datapath);
		console.info(_json.creature_spawn_probability);
		_json.creature_spawn_probability =
			_json.creature_spawn_probability + 0.07;
		console.info(_json.creature_spawn_probability);

		event.addJson(datapath, _json);
	}

	let oreJsonFolder = global.readJsonFolderFromMod(
		'data',
		'tfc',
		'worldgen',
		(rl) => rl.path.contains('configured_feature/vein')
	);

	for (let [datapath, _json] of Object.entries(oreJsonFolder)) {
		_json = JsonIO.toObject(_json);

		_json.config.rarity = _json.config.rarity * 16;
		_json.config.density = _json.config.density * 0.8;

		if (_json.config.density > 1) {
			_json.config.density = 1;
		}

		if (_json.config.size) {
			_json.config.size = _json.config.size * 3;
		}

		if (_json.config.radius) {
			_json.config.radius = _json.config.radius * 3;
		}

		if (_json.config.indicator) {
			_json.config.indicator.rarity =
				_json.config.indicator.rarity * 0.75;
			_json.config.indicator.depth = _json.config.indicator.depth * 2;
		}

		event.addJson(datapath, _json);
	}

	let jsonFolder2 = global.readJsonFolderFromMod(
		'data',
		'firmalife',
		'worldgen',
		(rl) => rl.path.contains('configured_feature/vein')
	);

	for (let [datapath, _json] of Object.entries(jsonFolder2)) {
		_json = JsonIO.toObject(_json);

		_json.config.rarity = _json.config.rarity * 16;
		_json.config.density = _json.config.density * 0.8;

		if (_json.config.density > 1) {
			_json.config.density = 1;
		}

		if (_json.config.size) {
			_json.config.size = _json.config.size * 3;
		}

		if (_json.config.radius) {
			_json.config.radius = _json.config.radius * 3;
		}

		if (_json.config.indicator) {
			_json.config.indicator.rarity =
				_json.config.indicator.rarity * 0.75;
			_json.config.indicator.depth = _json.config.indicator.depth * 2;
		}

		event.addJson(datapath, _json);
	}
});
