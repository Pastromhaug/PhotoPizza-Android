/**
 * Created by perandre on 08.08.16.
 */

export const UPDATE_GROUPS = 'UPDATE_GROUPS';
export function actionUpdateGroups(group) {
    return {type: UPDATE_GROUPS, group: group}
}