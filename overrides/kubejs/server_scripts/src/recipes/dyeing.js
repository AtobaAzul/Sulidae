ServerEvents.recipes((event) => {
    NONWHITE_COLORS.forEach((colour) => {
        //seats
        event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'create:seats',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `create:${colour}_seat`,
            },
            duration: 1000,
        });

        //stools
        event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'refurbished_furniture:stools',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `refurbished_furniture:${colour}_stool`,
            },
            duration: 1000,
        });

         //sofa
         event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'refurbished_furniture:sofas',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `refurbished_furniture:${colour}_sofa`,
            },
            duration: 1000,
        });
        //toolboxes

        //toolbox recipes are datagenned, oof.

        //valve handles

        event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'create:valve_handles',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `create:${colour}_valve_handle`,
            },
            duration: 1000,
        });

        //flags
        event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'supplementaries:flags',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `supplementaries:flag_${colour}`,
            },
            duration: 1000,
        });

        //presents
        event.custom({
            type: 'tfc:barrel_sealed',
            input_item: {
                ingredient: {
                    tag: 'supplementaries:presents',
                },
            },
            input_fluid: {
                ingredient: `tfc:${colour}_dye`,
                amount: 25,
            },
            output_item: {
                item: `supplementaries:present_${colour}`,
            },
            duration: 1000,
        });
    });

    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'supplementaries:presents',
            },
        },
        input_fluid: {
            ingredient: 'tfc:lye',
            amount: 25,
        },
        output_item: {
            item: 'supplementaries:present_white',
        },
        duration: 1000,
    });
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'create:valve_handles',
            },
        },
        input_fluid: {
            ingredient: 'tfc:lye',
            amount: 25,
        },
        output_item: {
            item: 'create:orange_valve_handle',
        },
        duration: 1000,
    });
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'create:seats',
            },
        },
        input_fluid: {
            ingredient: 'tfc:lye',
            amount: 25,
        },
        output_item: {
            item: 'create:white_seat',
        },
        duration: 1000,
    });

    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'refurbished_furniture:sofas',
            },
        },
        input_fluid: {
            ingredient: 'tfc:lye',
            amount: 25,
        },
        output_item: {
            item: 'refurbished_furniture:white_sofa',
        },
        duration: 1000,
    }); event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'refurbished_furniture:stools',
            },
        },
        input_fluid: {
            ingredient: 'tfc:lye',
            amount: 25,
        },
        output_item: {
            item: 'refurbished_furniture:white_stool',
        },
        duration: 1000,
    });
});
