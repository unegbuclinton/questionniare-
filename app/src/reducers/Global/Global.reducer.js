import { ACTION_TYPES } from '../../actions/Global/Global.actions';
import { VIEWS } from '../../actions/Global/Global.constants';

const initialState = {
    view: VIEWS.companies,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_VIEW: {
            const { view } = action;
            return {
                ...state,
                view: view
            }
        }
        default:
            return state;
    }
}