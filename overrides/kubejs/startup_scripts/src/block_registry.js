
StartupEvents.registry('block', (event) => {
    POWDERS.forEach((powder) => {
        let name = powder.replace(/_([a-z])/g, (match, char) => {
            return ` ${char.toUpperCase()}`;
        });
        let upperFirst = name.charAt(0).toUpperCase() + name.slice(1);
        event
            .create(`${powder}_powder_block`, 'falling')
            .hardness(0.5)
            .resistance(2)
            .opaque(true)
            .tagBlock('minecraft:valid_spawn')
            .tagBlock('firmalife:pipe_replaceable')
            .tagBlock('minecraft:mineable/shovel')
            .tagBlock('tfc:can_carve')
            .tagBlock('tfc:can_landslide')
            .displayName(`Block of ${upperFirst} Powder`)
            .mapColor('sand')
            .sandSoundType();
    });

    let oil_shales = ['shale', 'claystone', 'phyllite', 'slate'];

    oil_shales.forEach((name) => {
        let upperFirst = name.charAt(0).toUpperCase() + name.slice(1);

        event
            .create('oil_' + name)
            .hardness(1.5)
            .resistance(4)
            .opaque(true)
            .tag('forge:ores/oil_shale')
            .tag('c:ores')
            .tag('forge:ores')
            .tagBlock('tfc:can_trigger_collapse')
            .tagBlock('tfc:prospectable')
            .tagBlock('tfc:can_collapse')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('tfc:can_start_collapse')
            .tagBlock('tfc:monster_spawns_on')
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('tfc:powderkeg_breaking_blocks')
            .tagBlock('tfc:rock/ores')
            .tagBlock('precisionprospecting:prospectable_mineral')
            .stoneSoundType()
            .displayName('Oil ' + upperFirst)
            .mapColor('deepslate');
    });
});
