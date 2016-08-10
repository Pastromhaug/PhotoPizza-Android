/**
 * Created by perandre on 08.08.16.
 */

export const UPDATE_GROUP_IDS = 'UPDATE_GROUP_IDS';
export function actionUpdateGroupIds(groupIds) {
    return {type: UPDATE_GROUP_IDS, groupIds: groupIds}
}