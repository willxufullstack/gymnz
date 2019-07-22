import * as ActionTypes from './actionTypes'


/********BANNER*********/
export function closeErrMsg() {
    return {
        type: ActionTypes.CLOSE_ERR_MSG,
    }
}

export function closeSuccessMsg() {
    return {
        type: ActionTypes.CLOSE_SUCCESS_MSG,
    }
}

/********COACH*********/
export function showNewCoach() {
    return {
        type: ActionTypes.SHOW_NEW_COACH
    }
}
export function cancelNewCoach() {
    return {
        type: ActionTypes.CANCEL_NEW_COACH
    }
}

/********ORDER*********/
export function showNewOrder() {
    return {
        type: ActionTypes.SHOW_NEW_ORDER
    }
}
export function cancelNewOrder() {
    return {
        type: ActionTypes.CANCEL_NEW_ORDER
    }
}

/********COACH*********/
export function loadCoach(gymId) {
    return {
        type: ActionTypes.LOAD_COACH,
        payload: {
            request: {
                url: '/gym/' + gymId + '/coach'
            }
        }
    }
}

export function createCoach(gymId, data) {
    return {
        type: ActionTypes.CREATE_COACH,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/coach',
                data
            }
        }
    }
}

export function deleteCoach($gymId, $coachId) {
    return {
        type: ActionTypes.DELETE_COACH,
        payload: {
            request: {
                method: 'DELETE',
                url: '/gym/' + $gymId + '/coach/' + $coachId,
            }
        }
    }
}

/********LOAD CUSTOMER*********/
export function loadCustomer(gymId) {
    return {
        type: ActionTypes.LOAD_CUSTOMER,
        payload: {
            request: {
                url: '/gym/' + gymId + '/customer'
            }
        }
    };
}

/********WORKLOAD*********/
// params = { date: '20190203'}
export function loadAvailableSlotByDate(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_AVAILABLE_SLOT,
        payload: {
            request: {
                url: '/gym/' + gymId + '/available',
                params,
            }
        }
    };
}

export function loadWorkload(gymId, date) {

}

/********SCHEDULE*********/
export function updatePendingSchedule(data) {
    return {
        type: ActionTypes.UPDATE_PENDING_SCHEDULE,
        data,
    }
}

export function createSchedule(gymId, data) {
    return {
        type: ActionTypes.CREATE_SCHEDULE,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/schedule',
                data,
            }
        }
    };
}

export function deleteSchedule(gymId, scheduleId) {
    return {
        type: ActionTypes.DELETE_SCHEDULE,
        payload: {
            request: {
                method: 'delete',
                url: '/gym/' + gymId + '/schedule/' + scheduleId,
            }
        }
    };
}

export function completeSchedule(gymId, scheduleId) {
    return {
        type: ActionTypes.COMPLETE_SCHEDULE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/schedule/' + scheduleId + '/complete',
            }
        }
    };
}

export function LoadGymSchedule(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_SCHEDULE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/schedule',
                params
            }
        }
    };
}

export function LoadCustomerSchedule(gymId, params) {
    return {
        type: ActionTypes.LOAD_CUSTOMER_SCHEDULE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/schedule',
                params
            }
        }
    };
}

/********CUSTOMER DETAIL*********/
export function loadCustomerBalance(userId, params) {
    return {
        type: ActionTypes.LOAD_CUSTOMER_COURSE_BALANCE,
        payload: {
            request: {
                url: '/user/' + userId + '/coursebalance',
                params
            }
        }
    };
}

export function loadCustomerOrders(userId, params) {
    return {
        type: ActionTypes.LOAD_CUSTOMER_ORDERS,
        payload: {
            request: {
                url: '/user/' + userId + '/order',
                params
            }
        }
    };
}

export function batchCreateCustomerBodyData(userId, batch) {
    return {
        type: ActionTypes.BATCH_CREATE_CUSTOMER_DATA,
        payload: {
            request: {
                method: 'post',
                url: '/user/' + userId + '/bodydata',
                data: { batch }
            }
        }
    };
}

export function loadGroupedCustomerBodyData(userId) {
    return {
        type: ActionTypes.LOAD_GROUPED_CUSTOMER_BODY_DATA,
        payload: {
            request: {
                url: '/user/' + userId + '/bodydata',
                params: { group: 1 }
            }
        }
    };
}

export function loadCustomerBodyDataOptions() {
    return {
        type: ActionTypes.LOAD_BODY_DATA_OPTIONS,
        payload: {
            request: {
                url: '/bodydata/predefined',
            }
        }
    };
}

export function createCustomerPhoto(user, url) {
    return {
        type: ActionTypes.CREATE_CUSTOMER_PHOTO,
        payload: {
            request: {
                method: 'post',
                url: '/user/' + user + '/photo',
                data: { url, user }
            }
        }
    }
}

export function deleteCustomerPhoto(user, id) {
    return {
        type: ActionTypes.DELETE_CUSTOMER_PHOTO,
        payload: {
            request: {
                method: 'delete',
                url: '/user/' + user + '/photo/' + id,
            }
        }
    }
}

export function loadCustomerPhotos(user) {
    return {
        type: ActionTypes.LOAD_CUSTOMER_PHOTOS,
        payload: {
            request: {
                url: '/user/' + user + '/photo',
            }
        }
    }
}

/********REPORT*********/
export function loadGymOrders(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_ORDERS,
        payload: {
            request: {
                url: '/gym/' + gymId + '/order',
                params
            }
        }
    };
}

export function loadGymSummary(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_SUMMARY,
        payload: {
            request: {
                url: '/gym/' + gymId + '/summary',
                params
            }
        }
    };
}

export function loadGymScheduleCount(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_SCHEDULE_COUNT,
        payload: {
            request: {
                url: '/gym/' + gymId + '/schedule',
                params
            }
        }
    };
}

/********Accounting*********/
export function createAccountingRow(gymId, data) {
    return {
        type: ActionTypes.CREATE_ACCOUNTING_ROW,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/accounting',
                data
            }
        }
    }
}

export function loadGymAccounting(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_ACCOUNTING,
        payload: {
            request: {
                url: '/gym/' + gymId + '/accounting',
                params
            }
        }
    }
}

export function createReimbursement(gymId, data) {
    return {
        type: ActionTypes.CREATE_REIMBURSEMENT,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/reimbursement',
                data
            }
        }
    }
}

export function loadGymReimbursement(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_REIMBURSEMENT,
        payload: {
            request: {
                url: '/gym/' + gymId + '/reimbursement',
                params
            }
        }
    }
}
