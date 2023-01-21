export const ACTION_TYPES = {
    CHANGE_VIEW: 'CHANGE_VIEW',
    GLOBAL_CHANGE_VIEW_STATUS: 'GLOBAL_CHANGE_VIEW_STATUS'
};

export const changeView = (view) => {
    return {
        type: ACTION_TYPES.CHANGE_VIEW,
        view
    }
}
export const changeViewStatus = (viewStatus) => {
    return {
        type: ACTION_TYPES.GLOBAL_CHANGE_VIEW_STATUS,
        viewStatus
    }
}