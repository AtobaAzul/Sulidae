//Register new items here.

const registryDef = {
    //pistol_barrel: {name: "Pistol Barrel"},
    //musket_barrel: {name: "Musket Barrel"},
    musket_ball: {name: "Musket Balls"},

    chromite_powder: {name: "Chromite Powder"},
    unfired_andesite_alloy: {name: "Unfired Cerametal"},
    chromium_wire: {name: "Chromium Wire"},
    unfinished_distillation_controller: {name: "Unfinished Distillation Controller"},
    unfinished_oil_scanner: {name: "Unfinished Oil Detector"},
    empty_fuel_can: {name: "Empty Fuel Package", tags: ["create:upright_on_belt"]},
    diesel_fuel_can: {name: "Packaged Diesel", tags: ["create:upright_on_belt"]},
    gasoline_fuel_can: {name: "Packaged Gasoline", tags: ["create:upright_on_belt"]},
    biodiesel_fuel_can: {name: "Packaged Biodiesel", tags: ["create:upright_on_belt"]},
    ethanol_fuel_can: {name: "Packaged Ethanol", tags: ["create:upright_on_belt"]},

    unfinished_gun_parts: {name: "Unfinished Gun Parts"},

    handheld_mortar: {name: "Handheld Mortar", unstackable: true, maxDamage: 100},
    autocannon: {name: "Handheld Autocannon", unstackable: true, maxDamage: 100},

    rocket_fuel: {name: "Rocket Fuel"},
    wood_pulp: {name: "Wood Pulp"},
    washed_wood_pulp: {name: "Washed Wood Pulp"},
    scrap: {name: "Unknown Metal Scrap"},

    horse_relic: {name: "Horse Relic"},
    humanlike_relic: {name: "Human-like Relic"},
    rusty_sword: {name: "Rusty Copper Sword"},

}

/**
 * @param {Registry.Item} event - The event object to create the item with.
 * @param {string} name - The name of the item.
 * @param {Object} def - The definition of the item.
 * @param {boolean} def.unstackable - Whether the item is unstackable.
 * @param {number} def.maxDamage - The maximum damage the item can take.
 * @param {string} def.name - Actual naem of the item.
 * @return {Internal.BuilderBase<Internal.Item>} The created item.
 */
function registerItem(event, name, def) {
    let item = event.create(name).displayName(def.name)
    
    if (def.tags){
        def.tags.forEach((tag) => {
            item.tag(tag)
        })
    }
    if (def.unstackable) {
        item.unstackable();
    }
    
    if (def.maxDamage) {
        item.maxDamage(def.maxDamage);
    }
    if (def.whatever) {
        item.craftin
    }
    return item
}

StartupEvents.registry('item', (event) => {

    for (const [name, def] of Object.entries(registryDef)) {
        registerItem(event, name, def);
    }

    /*let item = event.create('umbrella')
    item.displayName("Umbrella")
    item.unstackable()
    item.maxDamage(100)
    item.modelJson('kubejs:item/umbrella.json')*/

    //Musket part registry.
    /*event.create('pistol_barrel').displayName('Pistol Barrel');
    event.create('musket_barrel').displayName('Musket Barrel');
    event.create('musket_ball').displayName('Musket Balls');
    event.create('chromite_powder').displayName('Chromite Powder');
    event.create('unfired_andesite_alloy').displayName("Unfired Cerametal");
    event.create('chromium_wire').displayName("Chromium Wire");
    event.create('copper_bullet').displayName('Copper Bullet')
    event.create('unfinished_distillation_controller').displayName('Unfinished Distillation Controller')
    event.create('unfinished_oil_scanner').displayName('Unfinished Oil Detector')

    event.create('handheld_mortar').displayName("Handheld Mortar").unstackable().maxDamage(100);

    event.create('autocannon').displayName("Handheld Autocannon").unstackable().maxDamage(100);*/
});


