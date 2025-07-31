// priority: 0

// Visit the wiki for more info - https://kubejs.com/

JEIEvents.information((event) => {
	event.addFluid(Ingredient.of('#kubejs:flower_brew'), [
		'Can be Distilled to extract the pure effect.',
	]);
});

JEIEvents.hideItems((event) => {
	REMOVED_ITEMS.forEach((item) => {
		console.info('hiding ' + item);
		event.hide(item);
	});
});

JEIEvents.hideFluids((event) => {
    REMOVED_FLUIDS.forEach((fluid) => {
        console.info('hiding ' + fluid);
        event.hide(fluid);
    });
})

ClientEvents.lang('en_us', (event) => {    
	event.renameBlock('minecraft:gravel', 'Debris');
	event.renameBlock('minecraft:suspicious_gravel', 'Suspicious Debris');
    event.renameBlock('createlowheated:basic_burner', 'Burner')  //TODO rename other references

    event.renameItem('immersive_aircraft:hull_reinforcement', "Lightweight Hull")
});
