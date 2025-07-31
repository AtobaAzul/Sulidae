ServerEvents.recipes((event) => {
    event.remove({ input: /.*chainmail.*/, not: { type: 'smithing_trim' } });
    event.remove({ output: /.*chainmail.*/, not: { type: 'smithing_trim' } });

    event.shaped('chainmail_helmet', ['CRC', 'C C'], {
        C: 'tfc:metal/chain/steel',
        R: 'tfc:metal/sheet/steel',
    });

    event.shaped('chainmail_leggings', ['CRC', 'C C', 'C C'], {
        C: 'tfc:metal/chain/steel',
        R: 'tfc:metal/sheet/steel',
    });

    event.shaped('chainmail_chestplate', ['R R', 'CCC', 'CCC'], {
        C: 'tfc:metal/chain/steel',
        R: 'tfc:metal/rod/steel',
    });

    event.shaped('4x tnt', ['FNF', 'NFN', 'FNF'], { F: 'tfc:powder/flux', N: 'scguns:nitro_powder' })

    event.remove({ id: 'tfc:crafting/vanilla/ladder' })

    event.remove({ output: 'minecraft:copper_block' })
    event.remove({ output: 'minecraft:gold_block' })
});
