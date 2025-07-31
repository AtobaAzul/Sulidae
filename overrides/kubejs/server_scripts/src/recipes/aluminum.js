ServerEvents.recipes(e => {
    //BASIC RECIPES

    e.recipes.tfc.heating('kubejs:metal/ingot/aluminum', 1485.0).resultFluid(Fluid.of('kubejs:molten_aluminum', 100));
    e.recipes.tfc.heating('kubejs:metal/double_ingot/aluminum', 1485.0).resultFluid(Fluid.of('kubejs:molten_aluminum', 200));
    e.recipes.tfc.heating('kubejs:metal/sheet/aluminum', 1485.0).resultFluid(Fluid.of('kubejs:molten_aluminum', 200));
    e.recipes.tfc.heating('kubejs:metal/double_sheet/aluminum', 1485.0).resultFluid(Fluid.of('kubejs:molten_aluminum', 400));
    e.recipes.tfc.welding('kubejs:metal/double_ingot/aluminum', 'kubejs:metal/ingot/aluminum', 'kubejs:metal/ingot/aluminum');
    e.recipes.tfc.welding('kubejs:metal/double_sheet/aluminum', 'kubejs:metal/sheet/aluminum', 'kubejs:metal/sheet/aluminum');
    e.recipes.tfc.anvil('kubejs:metal/sheet/aluminum', 'kubejs:metal/ingot/aluminum', ['hit_any', 'hit_any', 'hit_any']).tier(5);

    e.shapeless('kubejs:metal/double_ingot/aluminum', [
        'kubejs:metal/ingot/aluminum',
        'kubejs:metal/ingot/aluminum',
        'tfc:powder/flux',
        'createbigcannons:cannon_welder',
    ])
        .damageIngredient('createbigcannons:cannon_welder')
        .id('welding_aluminum_double_ingot_manual_only');
        
        e.shapeless('kubejs:metal/double_sheet/aluminum', [
            'kubejs:metal/sheet/aluminum',
            'kubejs:metal/sheet/aluminum',
            'tfc:powder/flux',
            'createbigcannons:cannon_welder',
        ])
            .damageIngredient('createbigcannons:cannon_welder')
            .id('welding_aluminum_double_sheet_manual_only');
            
    e.recipes.create
        .sequenced_assembly(
            ['kubejs:metal/double_ingot/aluminum'],
            'kubejs:metal/ingot/aluminum',
            [
                e.recipes.createDeploying(Item.of('kubejs:metal/ingot/aluminum'), [
                    Ingredient.of('kubejs:metal/ingot/aluminum'),
                    'tfc:powder/flux',
                ]),
                e.recipes.createDeploying(Item.of('kubejs:metal/ingot/aluminum'), [
                    Ingredient.of('kubejs:metal/ingot/aluminum'),
                    Ingredient.of('kubejs:metal/ingot/aluminum'),
                ]),
                e.recipes
                    .createDeploying(Item.of('kubejs:metal/ingot/aluminum'), [
                        Ingredient.of('kubejs:metal/ingot/aluminum'),
                        'createbigcannons:cannon_welder',
                    ])
                    .keepHeldItem(),
            ]
        )
        .transitionalItem(Ingredient.of('kubejs:metal/ingot/aluminum'))
        .loops(1);

        e.recipes.create
        .sequenced_assembly(
            ['kubejs:metal/double_sheet/aluminum'],
            'kubejs:metal/sheet/aluminum',
            [
                e.recipes.createDeploying(Item.of('kubejs:metal/sheet/aluminum'), [
                    Ingredient.of('kubejs:metal/sheet/aluminum'),
                    'tfc:powder/flux',
                ]),
                e.recipes.createDeploying(Item.of('kubejs:metal/sheet/aluminum'), [
                    Ingredient.of('kubejs:metal/sheet/aluminum'),
                    Ingredient.of('kubejs:metal/sheet/aluminum'),
                ]),
                e.recipes
                    .createDeploying(Item.of('kubejs:metal/sheet/aluminum'), [
                        Ingredient.of('kubejs:metal/sheet/aluminum'),
                        'createbigcannons:cannon_welder',
                    ])
                    .keepHeldItem(),
            ]
        )
        .transitionalItem(Ingredient.of('kubejs:metal/sheet/aluminum'))
        .loops(1);

        e.recipes.tfc.casting('kubejs:metal/ingot/aluminum', 'tfc:ceramic/ingot_mold', Fluid.of('kubejs:molten_aluminum', 100), 0.1);
        e.recipes.tfc.casting('kubejs:metal/ingot/aluminum', 'tfc:ceramic/fire_ingot_mold', Fluid.of('kubejs:molten_aluminum', 100), 0.01);

        //PROCESSING

        e.recipes.create.mixing(Fluid.of('kubejs:kaolinite_mixture', 50), ['tfc:powder/kaolinite', Fluid.of('tfc:lye', 250)]).superheated()
        e.custom({
			type: 'createdieselgenerators:distillation',
			ingredients: [
				{
					fluid: `kubejs:kaolinite_mixture`,
					amount: 100,
				},
			],
			heatRequirement: 'heated',
			processingTime: 100,
			results: [	
                {
                    fluid: 'kubejs:alumina_slurry',
                    amount: 75
                },
                {
					fluid: 'create:potion',
					nbt: {
						Bottle: 'REGULAR',
						Potion: "minecraft:thick",
					},
					amount: 25,
				}
			],
		})

        e.recipes.tfc.pot([], Fluid.of('kubejs:alumina_slurry', 100), 300, 500).itemOutput('kubejs:alumina_powder')
        e.recipes.create.mixing(['kubejs:alumina_powder'], [Fluid.of('kubejs:alumina_slurry', 100)]).heated()
        e.recipes.tfc.blast_furnace(Fluid.of('kubejs:molten_aluminum', 1), 'tfc:ore/cryolite', Fluid.of('kubejs:molten_alumina', 1))
        e.recipes.tfc.heating('kubejs:alumina_powder', 1328).resultFluid(Fluid.of('kubejs:molten_alumina', 100));
})

//Alumina powder heat stuff

TFCEvents.data((event) => {
    event.itemHeat('kubejs:alumina_powder', 2.857, 921, 1228);
})