ServerEvents.tags('item', (e) => {
    e.add('createlowheated:burner_starters', 'tfc:firestarter')
    e.add('tfc:starts_fires_with_durability', 'createdieselgenerators:lighter');

    CHROMITE_POWDER_TAGS.forEach((tag) => {
        e.add(tag, 'kubejs:chromite_powder');
    });

    METAL_POWDERS.forEach((metal) => {
        e.add('kubejs:metal_powders', metal);
    });

    CHAINS.forEach((chain) => {
        e.add('kubejs:chains', chain);
    });

    STONE_DEFS.forEach((stone) => {
        e.add('kubejs:copper_deposit', `tfc:deposit/native_copper/${stone}`);
        e.add('kubejs:silver_deposit', `tfc:deposit/native_silver/${stone}`);
        e.add('kubejs:gold_deposit', `tfc:deposit/native_gold/${stone}`);
        e.add('kubejs:tin_deposit', `tfc:deposit/cassiterite/${stone}`);
    });

    METAL_BARS.forEach((bar) => {
        e.add('kubejs:metal_bars', bar);
    });


    e.add('tfc:deals_piercing_damage', ['musketmod:musket_with_bayonet', 'musketmod:musket', 'musketmod:pistol']);
    e.add('tfc:deals_piercing_damage', AVAILABLE_GUNS)
    e.add('tfc:usable_on_tool_rack', AVAILABLE_GUNS)
    //e.remove('c:cast_iron_ingots', 'tfc:metal/ingot/cast_iron')
    //e.removeAllTagsFrom('createbigcannons:cast_iron_ingot')

    //e.remove('c:cast_iron_ingots', 'minecraft:iron_ingot')
    //e.removeAllTagsFrom('minecraft:iron_ingot')

    e.add('firmalife:butterfly_grass_mutants', SPICES);
    e.add('createbigcannons:nitropowder', 'scguns:nitro_powder')
    e.remove('createbigcannons:nitropowder', 'createbigcannons:nitropowder')

    e.add('tfc:axes_that_log', 'thermal:flux_saw')

    USABLE_ON_TOOL_RACK.forEach((tool) => {
        e.add('tfc:usable_on_tool_rack', tool);
    });

    

    e.add('map_atlases:sticky_crafting_items', 'tfc:glue')

    e.add('createbigcannons:gas_masks', 'scguns:anthralite_respirator')

    e.remove('sns:allowed_in_ore_sack', /.*/)

    e.add('quark:seed_pouch_holdable', '#tfc:seeds')

    e.add('tfc:bladed_axles', /.*bladed_axle.*/)

    e.add('tfc:metal_plated_blocks', ['firmalife:metal/block/chromium', 'firmalife:metal/block/stainless_steel'])

    e.add('tfc:metal_item/chromium', 'firmalife:metal/item/chromium')
    e.add('tfc:metal_item/stainless_steel', 'firmalife:metal/item/stainless_steel')

    e.add('everycomp:chests', /everycomp:.*_chest.*/)

    e.add('forge:rods/wooden', 'minecraft:bamboo')

    e.remove('tfc:powders', ['minecraft:blaze_powder', 'minecraft:glowstone_dust'])
});


