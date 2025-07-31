//Firmaciv
//removing nagivation tools since we have journeymap. Sorry Aleki.

ServerEvents.recipes((event) => {
	event.remove({ mod: 'alekiships' });

    CIV_REMOVE.forEach((recipe) => {
        event.remove({ id: 'firmaciv:'+recipe });
    });

	event.recipes.create
		.sequenced_assembly(
            //less efficiency!
			['3x firmaciv:copper_bolt'],
			'tfc:metal/ingot/copper',
			[
				event.recipes.create.cutting(
					'tfc:metal/ingot/copper',
					'tfc:metal/ingot/copper'
				),
			]
		)
		.transitionalItem('tfc:metal/ingot/copper')
		.loops(5);
});
