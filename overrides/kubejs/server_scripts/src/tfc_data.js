TFCEvents.data((event) => {
    //food
	event.foodItem('minecraft:golden_apple', (food) => {
		food.hunger(3);
		food.saturation(3);
		food.protein(5);
		food.fruit(5);
		food.grain(5);
		food.vegetables(5);
		food.dairy(5);
	});

    //size
    event.itemSize('minecraft:gunpowder', 'small', 'very_light');

    //damage resistances
	event.itemDamageResistance('scguns:adrien_helm', 30, 2, 2);
	event.itemDamageResistance('scguns:adrien_chestplate', 50, 2, 2);

    //item heat
	for (const [metal, heat] of Object.entries(POWDER_HEAT_DEFS)) {
		event.itemHeat(`tfc:powder/${metal}`, heat, null, null);
		event.itemHeat(`kubejs:${metal}_powder_block`, heat, null, null);
	}
	event.itemHeat(`kubejs:chromite_powder`, 1.143, null, null);
	event.itemHeat(`kubejs:chromite_powder_block`, 1.143, null, null);
	event.itemHeat('kubejs:scrap', 2.0, 240, 320);
	event.itemHeat('kubejs:unfired_andesite_alloy', 0.5, null, null);
	event.itemHeat('create:andesite_alloy', 0.5, null, null);
	event.itemHeat('createbigcannons:recoil_spring', 1.429, 924, 1232);
	event.itemHeat('createbigcannons:steel_scrap', 0.171, 924, 1232);
	event.itemHeat('createbigcannons:cast_iron_nugget', 1.143, 921, 1228);
	event.itemHeat('createbigcannons:bronze_scrap', 0.171, 570, 760);

    //fuel
    event.fuel('thermal:coal_coke', 1415, 2200, 1)

    //lamp fuel
    event.lampFuel('thermal:creosote', '#tfc:lamps', 8000)
    event.lampFuel('kubejs:kerosene', '#tfc:lamps', 16000)
});
