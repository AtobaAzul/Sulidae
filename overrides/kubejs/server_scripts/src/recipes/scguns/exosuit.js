ServerEvents.recipes((event) => {
	event.shaped('scguns:exo_suit_helmet', ['ABA', 'C C'], {
		A: 'tfc:metal/sheet/black_steel',
		B: 'kubejs:tungsten_carbide_parts',
		C: 'tfc:metal/rod/black_steel',
	});
	event.shaped('scguns:exo_suit_chestplate', ['A A', 'BCB', 'ABA'], {
		A: 'tfc:metal/rod/black_steel',
		B: 'tfc:metal/sheet/black_steel',
		C: 'kubejs:tungsten_carbide_parts',
	});
	event.shaped('scguns:exo_suit_leggings', ['ABA', 'C C', 'C C'], {
		A: 'tfc:metal/sheet/black_steel',
		B: 'kubejs:tungsten_carbide_parts',
		C: 'tfc:metal/rod/black_steel',
	});
	event.shaped('scguns:exo_suit_boots', [ 'A A', 'BCB'], {
		A: 'tfc:metal/rod/black_steel',
		B: 'tfc:metal/sheet/black_steel',
		C: 'kubejs:tungsten_carbide_parts',
	});

	event.shaped('scguns:night_vision_module', ['ABC', ' D ', ' E '], {
		A: 'createaddition:gold_spool',
		B: 'kubejs:circuit',
		C: 'kubejs:plastic',
		D: 'tfc:pure_phosphorus',
		E: 'tfc:lens',
	});
	event.shaped('scguns:shock_absorber', [' A ', 'BCB'], {
		A: 'kubejs:circuit',
		B: 'kubejs:metal/rod/mangalloy',
		C: 'createbigcannons:recoil_spring',
	});
	event.shaped('scguns:tension_spring', [' A ', 'BCB', ' C '], {
		A: 'kubejs:circuit',
		B: 'kubejs:metal/sheet/mangalloy',
		C: 'createbigcannons:recoil_spring',
	});
	event.shaped('scguns:rabbit_module', ['AB ', 'CD ', ' D '], {
		A: 'kubejs:metal/rod/mangalloy',
		B: 'kubejs:circuit',
		C: 'createbigcannons:recoil_spring',
		D: 'kubejs:metal/sheet/mangalloy',
	});
	event.shaped('scguns:jetpack_module', ['ABA', 'CDC', 'E E'], {
		A: 'kubejs:circuit',
		B: 'kubejs:plastic',
		C: 'createdieselgenerators:canister',
		D: 'kubejs:metal/double_sheet/carotine_steel',
		E: 'tfc:metal/tuyere/black_steel',
	});
	event.shaped('scguns:exo_suit_core', [' A ', 'BCD', ' A '], {
		A: 'kubejs:metal/sheet/carotine_steel',
		B: 'kubejs:circuit',
		C: 'scguns:energy_core',
		D: 'createaddition:gold_spool',
	});
	event.shaped('scguns:target_tracker_module', ['ABA', 'CDC', ' E '], {
		A: 'kubejs:circuit',
		B: 'kubejs:metal/sheet/mangalloy',
		C: 'tfc:lens',
		D: 'thermal:laser_diode',
		E: 'kubejs:plastic',
	});
	event.shaped('scguns:advanced_exo_suit_core', ['ABC', 'DEC', 'ABC'], {
		A: 'createaddition:capacitor',
		B: 'kubejs:metal/sheet/titanium',
		C: 'createaddition:gold_spool',
		D: 'kubejs:circuit',
		E: 'scguns:exo_suit_core',
	});
	event.shaped('scguns:pauldron', [' A ', 'ABB', ' B '], {
		A: 'kubejs:metal/sheet/carotine_steel',
		B: 'kubejs:plastic',
	});
	event.shaped('scguns:heavy_pauldron', [' A ', 'ABB', ' B '], {
		A: 'kubejs:metal/double_sheet/carotine_steel',
		B: 'kubejs:plastic',
	});
	event.shaped('scguns:armor_plate', [' A ', 'ABA', ' A '], {
		A: 'kubejs:metal/sheet/carotine_steel',
		B: 'kubejs:plastic',
	});
	event.shaped('scguns:heavy_armor_plate', [' A ', 'ABA', ' A '], {
		A: 'kubejs:metal/double_sheet/carotine_steel',
		B: 'kubejs:plastic',
	});
	event.shaped('scguns:gas_mask_module', [' A ', 'BCB', ' D '], {
		A: 'kubejs:circuit',
		B: 'kubejs:plastic',
		C: 'tfc:powder/charcoal',
		D: '#tfc:high_quality_cloth',
	});
	event.shaped('scguns:rebreather_module', [' A ', 'BCB', ' D '], {
		A: 'kubejs:circuit',
		B: 'tfc:metal/rod/gold',
		C: '#tfc:high_quality_cloth',
		D: 'kubejs:metal/sheet/mangalloy',
	});
});
