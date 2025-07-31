//FUCKING REFURBUSHED RELEASED

console.info('loaded recipes/furniture.js');

ServerEvents.recipes((e) => {
	e.remove({ mod: 'refurbished_furniture' });
	e.remove({ output: /everycomp:rfm.*/ });

	WOOD_TYPES.forEach((type) => {
		//toilet
		e.shaped(`everycomp:rfm/tfc/${type}_toilet`, ['A ', 'BA', 'BB'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#minecraft:terracotta',
		});

		//basin
		e.shaped(`everycomp:rfm/tfc/${type}_basin`, ['ABA', 'CCC', ' C '], {
			A: `tfc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//bath tub
		e.shaped(`everycomp:rfm/tfc/${type}_bath`, ['CBC', 'CCC', 'AAA'], {
			A: `tfc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//sink
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_sink`,
			['CBC', 'CCC', 'AAA'],
			{
				C: `tfc:wood/lumber/${type}`,
				B: 'firmalife:metal/sheet/stainless_steel',
				A: '#minecraft:terracotta',
			}
		);

		//chairs
		e.shaped(`everycomp:rfm/tfc/${type}_chair`, ['A  ', 'AAA', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//table
		e.shaped(`everycomp:rfm/tfc/${type}_table`, ['AAA', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//desk
		e.shaped(`everycomp:rfm/tfc/${type}_desk`, ['AAA', 'A A', 'A A'], {
			A: `tfc:wood/lumber/${type}`,
		});

		//drawer
		e.shaped(`2x everycomp:rfm/tfc/${type}_drawer`, ['AAA', 'ABA', 'AAA'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#forge:chests/wooden',
		});

		//kitchen cabinetry
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_cabinetry`,
			['AAA', 'AAA', 'BBB'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
			}
		);

		//kitchen drawer
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_drawer`,
			['AAA', 'ACA', 'BBB'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
				C: '#forge:chests/wooden',
			}
		);

		//kitchen storage cabinet
		e.shaped(
			`everycomp:rfm/tfc/${type}_kitchen_storage_cabinet`,
			['AAA', 'BBB', 'CCC'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
				C: '#minecraft:terracotta',
			}
		);

		//wooden storage cabinet
		e.shaped(
			`everycomp:rfm/tfc/${type}_storage_cabinet`,
			['AAA', 'BBB', 'AAA'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
			}
		);

		//lattice fence
		e.shaped(`everycomp:rfm/tfc/${type}_lattice_fence`, ['ABA', 'BAB'], {
			A: `tfc:wood/lumber/${type}`,
			B: '#forge:rods/wooden',
		});

		//lattice fence gate
		e.shaped(
			`everycomp:rfm/tfc/${type}_lattice_fence_gate`,
			['BAB', 'ABA'],
			{
				A: `tfc:wood/lumber/${type}`,
				B: '#forge:rods/wooden',
			}
		);

		//mailbox
		e.shaped(`everycomp:rfm/tfc/${type}_mail_box`, [' A ', 'ABA', ' C '], {
			A: `tfc:wood/planks/${type}`,
			B: '#forge:chests/wooden',
			C: `tfc:wood/lumber/${type}`,
		});
	});

	AFC_WOOD_TYPES.forEach((type) => {
		//toilet
		e.shaped(`everycomp:rfm/afc/${type}_toilet`, ['A ', 'BA', 'BB'], {
			A: `afc:wood/lumber/${type}`,
			B: '#minecraft:terracotta',
		});

		//basin
		e.shaped(`everycomp:rfm/afc/${type}_basin`, ['ABA', 'CCC', ' C '], {
			A: `afc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//bath tub
		e.shaped(`everycomp:rfm/afc/${type}_bath`, ['CBC', 'CCC', 'AAA'], {
			A: `afc:wood/lumber/${type}`,
			B: 'firmalife:metal/sheet/stainless_steel',
			C: '#minecraft:terracotta',
		});

		//sink
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_sink`,
			['CBC', 'CCC', 'AAA'],
			{
				C: `afc:wood/lumber/${type}`,
				B: 'firmalife:metal/sheet/stainless_steel',
				A: '#minecraft:terracotta',
			}
		);

		//chairs
		e.shaped(`everycomp:rfm/afc/${type}_chair`, ['A  ', 'AAA', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//table
		e.shaped(`everycomp:rfm/afc/${type}_table`, ['AAA', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//desk
		e.shaped(`everycomp:rfm/afc/${type}_desk`, ['AAA', 'A A', 'A A'], {
			A: `afc:wood/lumber/${type}`,
		});

		//drawer
		e.shaped(`2x everycomp:rfm/afc/${type}_drawer`, ['AAA', 'ABA', 'AAA'], {
			A: `afc:wood/lumber/${type}`,
			B: '#forge:chests/wooden',
		});

		//kitchen cabinetry
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_cabinetry`,
			['AAA', 'AAA', 'BBB'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
			}
		);

		//kitchen drawer
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_drawer`,
			['AAA', 'ACA', 'BBB'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#minecraft:terracotta',
				C: '#forge:chests/wooden',
			}
		);

		//kitchen storage cabinet
		e.shaped(
			`everycomp:rfm/afc/${type}_kitchen_storage_cabinet`,
			['AAA', 'BBB', 'CCC'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
				C: '#minecraft:terracotta',
			}
		);

		//wooden storage cabinet
		e.shaped(
			`everycomp:rfm/afc/${type}_storage_cabinet`,
			['AAA', 'BBB', 'AAA'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:chests/wooden',
			}
		);

		//lattice fence
		e.shaped(`everycomp:rfm/afc/${type}_lattice_fence`, ['ABA', 'BAB'], {
			A: `afc:wood/lumber/${type}`,
			B: '#forge:rods/wooden',
		});

		//lattice fence gate
		e.shaped(
			`everycomp:rfm/afc/${type}_lattice_fence_gate`,
			['BAB', 'ABA'],
			{
				A: `afc:wood/lumber/${type}`,
				B: '#forge:rods/wooden',
			}
		);

		//mailbox
		e.shaped(`everycomp:rfm/afc/${type}_mail_box`, [' A ', 'ABA', ' C '], {
			A: `afc:wood/planks/${type}`,
			B: '#forge:chests/wooden',
			C: `afc:wood/lumber/${type}`,
		});
	});

	//stool
	e.shaped('refurbished_furniture:white_stool', [' A ', 'BCB'], {
		A: '#tfc:high_quality_cloth',
		B: '#tfc:lumber',
		C: 'tfc:thatch',
	});

	//sofa
	e.shaped('refurbished_furniture:white_sofa', ['A A', 'CAC', 'BBB'], {
		A: '#tfc:high_quality_cloth',
		B: '#tfc:lumber',
		C: 'tfc:thatch',
	});

	e.remove({ id: /refurbished_furniture:.*_stool_from_dyeing/ });
	e.remove({ id: /refurbished_furniture:.*_sofa_from_dyeing/ });

	e.shaped('refurbished_furniture:post_box', [' A ', 'A A', 'BBB'], {
		A: 'tfc:metal/double_sheet/blue_steel',
		B: 'tfc:metal/sheet/steel',
	});
});

let limit = [];

limit.forEach((item) => {
	TFCEvents.limitContainer(item, (event) => {
		event.limit('large');
	});
});
