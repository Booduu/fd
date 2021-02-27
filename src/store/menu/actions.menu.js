export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = (bool) => {
    return {
        type: TOGGLE_MENU,
        bool,
    }
}