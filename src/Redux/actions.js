export function add_items(title="blabla") {
    return {
        type: "ADD_ITEM",
        title
    }
}

export function remove_items(title="blabla") {
    return {
        type: "REMOVE_ITEM",
        title
    }
}

export function change_stage(title="blabla") {
    return {
        type: "CHANGE_STAGE",
        title
    }
}

export function display_todo(Do= true) {
    return {
        type: "_TODO"
    }
}

export function display_done(Do= true) {
    return {
        type: "_DONE"
    }
}

export function display_all() {
    return {
        type: "_ALL"
    }
}