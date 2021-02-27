export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const openDialog = (name, data) => {
    console.log('dialogopen', name, data)
    return {
        type: OPEN_DIALOG,
        name,
        data,
    }
}

export const closeDialog = (data) => {
    return {
        type: CLOSE_DIALOG,
    }
}