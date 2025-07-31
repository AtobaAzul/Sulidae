ServerEvents.tags('block', (e) => {
	//e.add('tfcambiental:hot_stuff', 'createlowheated:basic_burner')

	e.add('tfc:forge_insulation', 'tfc:charcoal_forge');
	e.add('tfc:forge_insulation', 'tfc:charcoal_pile');
	e.add('tfc:forge_insulation', /tfc:rock\/.*_stairs/);
	e.add('tfc:forge_invisible_whitelist', 'create:fluid_tank');

	e.add('scguns:fragile', '#supplementaries:brick_breakable');
	e.add('scguns:fragile', '#supplementaries:brick_breakable_recursive');
	e.add('scguns:fragile', '#supplementaries:bomb_breakable');
	e.add('scguns:fragile', /tfc:rock\/spike.*/);
	e.add('scguns:fragile', 'tfc:calcite');
	e.add('scguns:fragile', 'tfc:icicle');
    e.add('scguns:fragile', /createaddition:.*connector.*/);
    e.add('scguns:fragile', /.*window.*/);

    //e.add('scguns:fragile', /.*/)
    e.add('minecraft:snow_layer_cannot_survive_on', /.*asphalt.*/);
    e.add('minecraft:snow_layer_cannot_survive_on', /.*rock\/road.*/);

    e.add('firmalife:greenhouse_full_walls', ['create:encased_fluid_pipe']);

    e.remove('tfc:can_landslide', 'gravel')

    e.add('createbigcannons:spark_effect_on_impact', /.*metal\/block.*/)

    e.add('tfc:scraping_surface', /.*rfm.*table/)
    e.add('tfc:scraping_surface', /.*rfm.*desk/)
    e.add('tfc:metal_plated_blocks', ['firmalife:metal/block/chromium', 'firmalife:metal/block/stainless_steel'])

});
