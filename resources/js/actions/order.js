import * as ActionTypes from './actionTypes'

export function createOrder(data) {
    return {
        type: ActionTypes.CREATE_ORDER,
        payload: {
            request:{
                method: 'post',
                url:'/gym/' + data.gym + '/order',
                data
            }
        }
    }
}

export function refundOrder(order, data) {
    return {
        type: ActionTypes.REFUND_ORDER,
        payload: {
            request:{
                method: 'post',
                url:'/gym/' + order.gym_id + '/order/' + order.id + '/refund',
                data
            }
        }
    }
}

export function modifyOrder(order, data) {
    return {
        type: ActionTypes.MODIFY_ORDER,
        payload: {
            request:{
                method: 'patch',
                url:'/gym/' + order.gym_id + '/order/' + order.id,
                data
            }
        }
    }
}

export function splitOrder(order, data) {
    return {
        type: ActionTypes.SPLIT_ORDER,
        payload: {
            request:{
                method: 'post',
                url:'/gym/' + order.gym_id + '/order/' + order.id + '/split',
                data
            }
        }
    }
}