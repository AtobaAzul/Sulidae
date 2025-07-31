
ServerEvents.recipes((event) => {
	event.addedRecipes.forEach(
		 (/** @type {$RecipeJS} */ recipe) => {
            if (recipe.json.get('type') == 'tfc:pot') {
            }
        }
	);
});
