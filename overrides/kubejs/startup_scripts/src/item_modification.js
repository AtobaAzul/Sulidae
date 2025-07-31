const filled_fuel_cans = [
    'diesel_fuel_can',
    'gasoline_fuel_can',
    'biodiesel_fuel_can',
    'ethanol_fuel_can'
]

ItemEvents.modification((event) => {
    event.modify('gunpowder', (item) => {
        item.setMaxStackSize(32);
    });
    event.modify('tfc:ore/bituminous_coal', (item) => {
        item.burnTime = 16000;
    });


    filled_fuel_cans.forEach((name) => {
        event.modify('kubejs:' + name, item => {
            item.burnTime = 32000
            item.setCraftingRemainder('kubejs:empty_fuel_can')
        })
    })
});
