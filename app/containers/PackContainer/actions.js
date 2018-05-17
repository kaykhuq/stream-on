/*
 *
 * PackContainer actions
 *
 */

import {
    LOAD_PACK,
    ADD_PACK,
    EDIT_PACK,
    DELETE_PACK,
    SEARCH
} from './constants';
import callApi from '../../utils/apiHelper';

// export function loadPacksRequest() {
//     return dispatch => {
//         return callApi('packs', 'GET', null).then(res => {
//             dispatch(loadPacks(res.data));
//             // console.log(res.data);
//         });
//     };
// }

export function loadPacks(packs) {
    return {
        type: LOAD_PACK,
        packs
    };
}

export function addPACK(pack) {
    return {
        type: ADD_PACK,
        pack
    };
}

export function editPACK() {
    return {
        type: EDIT_PACK,
        pack
    };
}

export function deletePACK() {
    return {
        type: DELETE_PACK,
        pack
    };
}
export function search(keyword) {
    return {
        type: SEARCH,
        keyword
    }
}

