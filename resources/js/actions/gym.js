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

export function updateCoach(gymId, coachId, data) {
    return {
        type: ActionTypes.UPDATE_COACH,
        payload: {
            request: {
                method: 'patch',
                url: '/gym/' + gymId + '/coach/' + coachId,
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

export function resetCoachPwd($gymId, $coachId) {
    return {
        type: ActionTypes.RESET_COACH_PWD,
        payload: {
            request: {
                url: '/gym/' + $gymId + '/coach/' + $coachId + '/reset',
            }
        }
    }
}

export function resendInvite($gymId, $coachId) {
    return {
        type: ActionTypes.RESEND_INVITE_COACH,
        payload: {
            request: {
                url: '/gym/' + $gymId + '/coach/' + $coachId + '/invite',
            }
        }
    }
}


/********LOAD CUSTOMER*********/
export function loadCustomer(gymId, extra = null) {
    const params = extra ? extra : {}
    return {
        type: ActionTypes.LOAD_CUSTOMER,
        payload: {
            request: {
                url: '/gym/' + gymId + '/customer',
                params
            }
        }
    };
}

/********LOAD CUSTOMER HOTMAP*********/
export function loadCustomerHotmap(gymId, extra = null) {
    const params = extra ? extra : {}
    return {
        type: ActionTypes.LOAD_CUSTOMER_HOTMAP,
        payload: {
            request: {
                url: '/gym/' + gymId + '/hotmap',
                params
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

export function updateSchedule(gymId, scheduleId, data) {
    return {
        type: ActionTypes.UPDATE_SCHEDULE,
        payload: {
            request: {
                method: 'patch',
                url: '/gym/' + gymId + '/schedule/' + scheduleId,
                data
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

export function LoadGymScheduleTomorrow(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_SCHEDULE_TOMORROW,
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

export function updateCustomerBodyData(userId, id, data) {
    return {
        type: ActionTypes.UPDATE_CUSTOMER_DATA,
        payload: {
            request: {
                method: 'patch',
                url: '/user/' + userId + '/bodydata/' + id,
                data
            }
        }
    };
}

export function deleteCustomerBodyData(userId, id) {
    return {
        type: ActionTypes.DELETE_CUSTOMER_DATA,
        payload: {
            request: {
                method: 'delete',
                url: '/user/' + userId + '/bodydata/' + id,
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

export function loadDianpingSummary(gymId, params) {
    return {
        type: ActionTypes.LOAD_DIANPING_SUMMARY,
        payload: {
            request: {
                url: '/gym/' + gymId + '/dianping',
                params
            }
        }
    };
}

export function loadStatistics(gymId, params) {
    return {
        type: ActionTypes.LOAD_STATISTICS,
        payload: {
            request: {
                url: '/gym/' + gymId + '/statistics',
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

export function payReimbursement(gymId, reimbursementId) {
    return {
        type: ActionTypes.PAY_REIMBURSEMENT,
        payload: {
            request: {
                url: '/gym/' + gymId + '/reimbursement/' + reimbursementId + '/pay',
            }
        }
    }
}

/********Salary*********/

export function loadGymSalary(gymId, params) {
    return {
        type: ActionTypes.LOAD_GYM_SALARY,
        payload: {
            request: {
                url: '/gym/' + gymId + '/salaryreceipt',
                params
            }
        }
    }
}

export function paySalary(gymId, receiptId, data={}) {
    return {
        type: ActionTypes.PAY_SALARY,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/salaryreceipt/' + receiptId + '/pay',
                data
            }
        }
    }
}

export function updateCustomerProfile(gymId, customerId, data)
{
    return {
        type: ActionTypes.UDPATE_CUSTOMER_PROFILE,
        payload: {
            request: {
                method: 'patch',
                url: `/gym/${gymId}/customer/${customerId}`,
                data
            }
        }
    }
}

export function updateSalaryReceipt(gymId, data) {
    return {
        type: ActionTypes.UPDATE_SALARY_RECEIPT,
        payload: {
            request: {
                method: 'patch',
                url: '/gym/' + gymId + '/salaryreceipt/' + data.id,
                data
            }
        }
    }
}

export function loadGymSalarySetting(gymId) {
    return {
        type: ActionTypes.LOAD_GYM_SALARY_SETTING,
        payload: {
            request: {
                url: '/gym/' + gymId + '/salarysetting',
            }
        }
    }
}

export function updateGymSalarySetting(gymId, data) {
    return {
        type: ActionTypes.UPDATE_GYM_SALARY_SETTING,
        payload: {
            request: {
                method: 'patch',
                url: '/gym/' + gymId + '/salarysetting/' + data.id,
                data
            }
        }
    }
}


/********Csv Data Import*********/
export function csvDataImport(gymId, data) {
    return {
        type: ActionTypes.CSV_DATA_IMPORT,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/csv/',
                data
            }
        }
    }
}

export function authDianping(gymId, code) {
    return {
        type: ActionTypes.AUTH_DIANPING,
        payload: {
            request: {
                method: 'post',
                url: '/gym/' + gymId + '/bind/',
                data: { code }
            }
        }
    }
}

export function loadMonthcourseByCustomerType(gymId, params) {
    return {
        type: ActionTypes.LOAD_MONTH_COURSE_BY_CUSTOMER_TYPE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/chart/monthcoursebycustomertype',
                params
            }
        }
    }
}

export function loadMonthSaleByType(gymId, params) {
    return {
        type: ActionTypes.LOAD_MONTH_SALE_BY_TYPE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/chart/monthsalebytype',
                params
            }
        }
    }
}

export function loadMonthActiveByType(gymId, params) {
    return {
        type: ActionTypes.LOAD_MONTH_ACTIVE_BY_TYPE,
        payload: {
            request: {
                url: '/gym/' + gymId + '/chart/monthactivebytype',
                params
            }
        }
    }
}