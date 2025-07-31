
StartupEvents.registry('fluid', (event) => {
    for (const [flower, color] of Object.entries(BREW_COLORS)) {
        let name = flower.replace(/_([a-z])/g, (match, char) => {
            return ` ${char.toUpperCase()}`;
        });
        name = name.charAt(0).toUpperCase() + name.slice(1);

        event
            .create(flower + '_brew')
            .tag('tfc:drinkables')
            .tag('tfc:any_drinkables')
            .tag('tfc:usable_in_pot')
            .tag('tfc:usable_in_jug')
            .tag('tfc:usable_in_barrel')
            .tag('kubejs:flower_brew')

            .thinTexture(color)
            .displayName(name + ' Brew')
            .noBucket()
            .noBlock();
    }

    event.create('kerosene').stillTexture('kubejs:fluid/kerosene_still').flowingTexture('kubejs:fluid/kerosene_flow').displayName("Kerosene").bucketColor(Color.AQUA);

    event.create('sugarcane_juice').thinTexture('DARK_GREEN').displayName("Sugarcane Juice").bucketColor(Color.DARK_GREEN);
});
