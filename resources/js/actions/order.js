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
