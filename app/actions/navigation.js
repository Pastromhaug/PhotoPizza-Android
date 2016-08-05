/**
 * Created by perandre on 05.08.16.
 */

export const PUSH_ROUTE = 'PUSH_ROUTE';
export function actionPush (route) {
    return { type: PUSH_ROUTE, route}
}
export const POP_ROUTE = 'POP_ROUTE';
export function actionPop () {
    return {type: POP_ROUTE}
}