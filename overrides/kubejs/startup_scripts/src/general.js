TFCEvents.registerFoodTrait((event) => {
	event.registerTraitWithTooltip(0.25, 'kubejs:fried');
});

BlockEvents.modification((e) => {
	//e.modify(/tfc:rock.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:dirt.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:ore.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	//e.modify(/tfc:wood\/log.*/, block => {
	//    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 0.5//0.75
	//})
	e.modify(/.*unbored.*/, (block) => {
		block.destroySpeed =
			Block.getBlock(block.id).defaultDestroyTime() * 0.25; //0.75
	});

	e.modify(/.*concrete.*/, (block) => {
		block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() * 2;
	});

	e.modify(/.*brick.*/, (block) => {
		block.destroySpeed =
			Block.getBlock(block.id).defaultDestroyTime() * 1.25;
	});

	e.modify('amethyst_cluster', (block) => {
		block.requiresTool = true;
		block.destroySpeed =
			Block.getBlock('minecraft:obsidian').defaultDestroyTime();
	});

	e.modify('amethyst_block', (block) => {
		block.requiresTool = true;
		block.destroySpeed =
			Block.getBlock('minecraft:obsidian').defaultDestroyTime();
	});

});

StartupEvents.init(() => {
	Platform.mods.kubejs.name = 'Sulidae';
});

TFCEvents.birthdays((event) => {
	event.add('march', 24, 'Atobá');
	event.add('february', 2, 'Albatroz');
});

const $HitResultType = Java.loadClass(
	'net.minecraft.world.phys.HitResult$Type'
);

const $RocketEntity = Java.loadClass('top.ribs.scguns.entity.projectile.RocketEntity')

ForgeEvents.onEvent('top.ribs.scguns.event.GunProjectileHitEvent', (event) => {
	/**@type {Internal.Projectile} */
	let projectile = event.projectile;

	/**@type {Internal.BlockHitResult} */
	let rayTrace = event.getRayTrace();

	/**@type {Internal.Level} */
	let level = projectile.getLevel();

	if (rayTrace.getType() === $HitResultType.BLOCK) {
		let block = level.getBlock(rayTrace.getBlockPos());
	    let dir = rayTrace.getDirection().getOpposite();

		if (block.hasTag('createbigcannons:spark_effect_on_impact')) {
			let pos = rayTrace.getBlockPos();
			level.runCommandSilent(
				`particle tfc:spark ${pos.x} ${pos.y} ${pos.z} ${dir.x} ${dir.y} ${dir.z} 0.5 100 force`
			);
            
            //level.runCommandSilent(`playsound tfc:block.anvil.hit block @a ${pos.x} ${pos.y} ${pos.z} 1 ${Math.random()*1.5+0.5} 0`)
		}
	}
});
