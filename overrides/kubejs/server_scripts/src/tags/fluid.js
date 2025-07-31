const usableInAllBuckets = ['createdieselgenerators:plant_oil', 'thermal:creosote'];
const usableInMetalBuckets = [
	'createdieselgenerators:crude_oil',
	'createdieselgenerators:ethanol',
	'createdieselgenerators:gasoline',
	'createdieselgenerators:biodiesel',
	'createdieselgenerators:diesel',
	'kubejs:kerosene',
];
const usableInBarrels = ['createdieselgenerators:plant_oil'];
const usableInPot = ['createdieselgenerators:plant_oil'];
const usableInJug = ['createdieselgenerators:plant_oil'];

ServerEvents.tags('fluid', (event) => {
	usableInAllBuckets.forEach((fluid) => {
		event.add('tfc:usable_in_wooden_bucket', fluid);
		event.add('tfc:usable_in_red_steel_bucket', fluid);
		event.add('tfc:usable_in_blue_steel_bucket', fluid);
		event.add('tfc:usable_in_barrel', fluid);
	});

	usableInMetalBuckets.forEach((fluid) => {
		event.add('tfc:usable_in_red_steel_bucket', fluid);
		event.add('tfc:usable_in_blue_steel_bucket', fluid);
	});

	usableInBarrels.forEach((fluid) => {
		event.add('tfc:usable_in_barrel', fluid);
	});

	usableInPot.forEach((fluid) => {
		event.add('tfc:usable_in_pot', fluid);
	});

    usableInJug.forEach((fluid) => {
        event.add('tfc:usable_in_jug', fluid);
    });

    event.add('ptfc_utils:can_evaporate', 'kubejs:kerosene');
    event.add('ptfc_utils:can_evaporate', 'createdieselgenerators:gasoline');
});
