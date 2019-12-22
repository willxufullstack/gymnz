import * as ActionTypes from '../actions/actionTypes'

import i18N from '../lang'

const L = i18N('GymRedux')

const initState = {
    // data
    coaches: [],
    schedules: [],
    accounting: [],
    reimbursements: [],
    salarySettings: [],
    salaryReceipts: [],
    report: {
        orders: [],
        scheduleCountByMonthPerCoach: [],
        scheduleCountByCoach: [],
        scheduleCountByCustomer: [],
        scheduleCountByDate: [],
        scheduleCountByMonthPerCoachOfYear: {},
        scheduleCountAnaylseCustomer: [],
        summary: {
            orderCount: 0,
            scheduleCount: 0,
            orderPrice: 0
        }
    },
    customers: [],
    customerPage: {
        customerBalance: { total: 0, booked: 0 },
        orders: [],
        coachesSlots: [],
        pendingSchedule: null,
        schedules: {
            booked: [],
            finished: []
        },
        bodyData: [],
        photos: [],
        bodyDataOptions: []
    },

    // dialogue
    showNewCoach: false,
    showNewOrder: false,

    // status and message
    loading: false,
    errorMsg: '',
    successMsg: ''
}

const NonAction = { type: 'NO_ACTION' }

const gym = (state = initState, action = NonAction) => {
    switch (action.type) {
        case ActionTypes.SHOW_NEW_COACH:
            return Object.assign({}, state, { showNewCoach: true })
        case ActionTypes.CANCEL_NEW_COACH:
            return Object.assign({}, state, { showNewCoach: false })

        case ActionTypes.SHOW_NEW_ORDER:
            return Object.assign({}, state, { showNewOrder: true })
        case ActionTypes.CANCEL_NEW_ORDER:
            return Object.assign({}, state, { showNewOrder: false })

        case ActionTypes.LOAD_CUSTOMER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_CUSTOMER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                customers: action.payload.data
            })
        case ActionTypes.LOAD_CUSTOMER_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load customer list failed, please refresh the page',
                loading: false
            })

        case ActionTypes.LOAD_COACH:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_COACH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                coaches: action.payload.data
            })
        case ActionTypes.LOAD_COACH_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load coach list failed, please refresh the page',
                loading: false
            })

        case ActionTypes.LOAD_GROUPED_CUSTOMER_BODY_DATA:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GROUPED_CUSTOMER_BODY_DATA_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.bodyData = action.payload.data
            return Object.assign({}, state, { loading: false, customerPage })
        }
        case ActionTypes.LOAD_GROUPED_CUSTOMER_BODY_DATA_FAIL:
            return Object.assign({}, state, {
                errorMsg:
                    'Load customer body data failed, please refresh the page',
                loading: false
            })
        case ActionTypes.DELETE_COACH:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.DELETE_COACH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'Coach Deleted',
                coaches: state.coaches.filter(function(el) {
                    return el.id !== action.payload.data.id
                })
            })
        case ActionTypes.DELETE_COACH_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Delete coach failed, please try again',
                loading: false
            })

        case ActionTypes.RESET_COACH_PWD:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.RESET_COACH_PWD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'Coach password has been reset to 00000000'
            })
        case ActionTypes.RESET_COACH_PWD_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Reset coach password failed, please try again',
                loading: false
            })

        case ActionTypes.CREATE_COACH:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_COACH_SUCCESS:
            return Object.assign({}, state, {
                showNewCoach: false,
                loading: false,
                successMsg: 'Coach added',
                coaches: [...state.coaches, action.payload.data]
            })
        case ActionTypes.CREATE_COACH_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Create coach failed, please try again',
                loading: false
            })

        case ActionTypes.PAY_SALARY:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.PAY_SALARY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'salary payment has been proceed'
            })
        case ActionTypes.PAY_SALARY_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'pay salary failed',
                loading: false
            })

        case ActionTypes.UPDATE_SALARY_RECEIPT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.UPDATE_SALARY_RECEIPT_SUCCESS:
            return Object.assign({}, state, {
                salaryReceipts: state.salaryReceipts.map(r =>
                    r.id === action.payload.data.id ? action.payload.data : r
                ),
                loading: false,
                successMsg: 'adjustment has been proceed'
            })
        case ActionTypes.UPDATE_SALARY_RECEIPT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'adjustment save failed',
                loading: false
            })

        case ActionTypes.LOAD_GYM_SALARY:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SALARY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                salaryReceipts: action.payload.data
            })
        case ActionTypes.LOAD_GYM_SALARY_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'load salary data failed',
                loading: false
            })

        case ActionTypes.LOAD_GYM_SALARY_SETTING:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SALARY_SETTING_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                salarySettings: action.payload.data
            })
        case ActionTypes.LOAD_GYM_SALARY_SETTING_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'load salary settings data failed',
                loading: false
            })

        case ActionTypes.UPDATE_GYM_SALARY_SETTING:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.UPDATE_GYM_SALARY_SETTING_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                salarySettings: state.salarySettings.map(s =>
                    s.id === action.payload.data.id ? action.payload.data : s
                )
            })
        case ActionTypes.UPDATE_GYM_SALARY_SETTING_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'upload salary settings data failed',
                loading: false
            })

        case ActionTypes.LOAD_GYM_ACCOUNTING:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_ACCOUNTING_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                accounting: action.payload.data
            })
        case ActionTypes.LOAD_GYM_ACCOUNTING_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'load accounting data failed',
                loading: false
            })

        case ActionTypes.LOAD_GYM_REIMBURSEMENT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_REIMBURSEMENT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                reimbursements: action.payload.data
            })
        case ActionTypes.LOAD_GYM_REIMBURSEMENT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'load reimbursement data failed',
                loading: false
            })

        case ActionTypes.CREATE_ACCOUNTING_ROW:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_ACCOUNTING_ROW_SUCCESS: {
            let accounting = [action.payload.data, ...state.accounting]
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'accounting record added',
                accounting
            })
        }
        case ActionTypes.CREATE_ACCOUNTING_ROW_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Create accounting recording failed',
                loading: false
            })
        case ActionTypes.CLOSE_ERR_MSG:
            return Object.assign({}, state, {
                errorMsg: ''
            })
        case ActionTypes.CLOSE_SUCCESS_MSG:
            return Object.assign({}, state, {
                successMsg: ''
            })

        case ActionTypes.CREATE_ORDER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                showNewOrder: false,
                successMsg: L.orderCreateSuccess
            })
        case ActionTypes.CREATE_ORDER_FAIL:
            return Object.assign({}, state, {
                errorMsg: L.orderCreateFail,
                loading: false
            })

        case ActionTypes.REFUND_ORDER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.REFUND_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'Refund order successed'
            })
        case ActionTypes.REFUND_ORDER_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Refund order failed, please try again',
                loading: false
            })

        case ActionTypes.SPLIT_ORDER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.SPLIT_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: '拆分订单成功'
            })
        case ActionTypes.SPLIT_ORDER_FAIL:
            return Object.assign({}, state, {
                errorMsg: '拆分订单失败，请重试',
                loading: false
            })


        case ActionTypes.MODIFY_ORDER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.MODIFY_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'Modify order successed'
            })
        case ActionTypes.MODIFY_ORDER_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Modify order failed, please try again',
                loading: false
            })


        case ActionTypes.PAY_REIMBURSEMENT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.PAY_REIMBURSEMENT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                reimbursements: state.reimbursements.filter(
                    r => r.id !== action.payload.data.id
                ),
                successMsg: 'Reimbursement payment successed'
            })
        case ActionTypes.PAY_REIMBURSEMENT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Pay reimbursement failed, please try again',
                loading: false
            })

        case ActionTypes.CREATE_REIMBURSEMENT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_REIMBURSEMENT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                reimbursements: [action.payload.data, ...state.reimbursements],
                successMsg: 'Create reimbursement successed'
            })
        case ActionTypes.CREATE_REIMBURSEMENT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Create reimbursement failed, please try again',
                loading: false
            })

        case ActionTypes.BATCH_CREATE_CUSTOMER_DATA:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.BATCH_CREATE_CUSTOMER_DATA_SUCCESS:
            return Object.assign({}, state, {
                successMsg: 'data saved',
                loading: false
            })
        case ActionTypes.BATCH_CREATE_CUSTOMER_DATA_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Save data failed, please try again',
                loading: false
            })

        case ActionTypes.UPDATE_CUSTOMER_DATA:
        case ActionTypes.UPDATE_CUSTOMER_DATA_SUCCESS:
            // do nothing
            return state
        case ActionTypes.UPDATE_CUSTOMER_DATA_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Update data failed, please try again'
            })

        case ActionTypes.DELETE_CUSTOMER_DATA:
        case ActionTypes.DELETE_CUSTOMER_DATA_SUCCESS:
            // do nothing
            return state
        case ActionTypes.DELETE_CUSTOMER_DATA_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Delete data failed, please try again'
            })

        case ActionTypes.CREATE_CUSTOMER_PHOTO:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_CUSTOMER_PHOTO_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            })
        case ActionTypes.CREATE_CUSTOMER_PHOTO_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Save photo failed, please try again',
                loading: false
            })

        case ActionTypes.LOAD_BODY_DATA_OPTIONS:
            return state
        case ActionTypes.LOAD_BODY_DATA_OPTIONS_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.bodyDataOptions = action.payload.data
            return Object.assign({}, state, {
                customerPage
            })
        }
        case ActionTypes.LOAD_BODY_DATA_OPTIONS_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load predefined body data options failed'
            })

        case ActionTypes.LOAD_GYM_AVAILABLE_SLOT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_AVAILABLE_SLOT_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.coachesSlots = action.payload.data
            return Object.assign({}, state, {
                customerPage,
                loading: false
            })
        }
        case ActionTypes.LOAD_GYM_AVAILABLE_SLOT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load gym timetable failed',
                loading: false
            })

        case ActionTypes.LOAD_CUSTOMER_COURSE_BALANCE:
            // do nothing
            return state
        case ActionTypes.LOAD_CUSTOMER_COURSE_BALANCE_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.customerBalance = action.payload.data
            return Object.assign({}, state, { customerPage })
        }
        case ActionTypes.LOAD_CUSTOMER_COURSE_BALANCE_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load customer balance failed'
            })

        case ActionTypes.LOAD_CUSTOMER_ORDERS:
            // do nothing
            return state
        case ActionTypes.LOAD_CUSTOMER_ORDERS_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.orders = action.payload.data
            return Object.assign({}, state, { customerPage })
        }
        case ActionTypes.LOAD_CUSTOMER_ORDERS_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load customer orders failed'
            })

        case ActionTypes.LOAD_CUSTOMER_PHOTOS:
            // do nothing
            return state
        case ActionTypes.LOAD_CUSTOMER_PHOTOS_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.photos = action.payload.data
            return Object.assign({}, state, { customerPage })
        }
        case ActionTypes.LOAD_CUSTOMER_PHOTOS_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load customer photos failed'
            })

        case ActionTypes.UPDATE_PENDING_SCHEDULE: {
            let customerPage = { ...state.customerPage }
            customerPage.pendingSchedule = action.data
            return Object.assign({}, state, { customerPage })
        }

        case ActionTypes.DELETE_SCHEDULE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.DELETE_SCHEDULE_SUCCESS: {
            let customerPage = { ...state.customerPage }
            let { id } = action.payload.data

            customerPage.schedules.booked = customerPage.schedules.booked.filter(
                s => s.id !== id
            )
            customerPage.schedules.finished = customerPage.schedules.finished.filter(
                s => s.id !== id
            )

            // update unfinished
            customerPage.customerBalance.booked =
                customerPage.schedules.booked.length

            return Object.assign({}, state, {
                customerPage,
                successMsg: L.scheduleDeleteSuccess,
                loading: false
            })
        }
        case ActionTypes.DELETE_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: L.scheduleDeleteFail
            })

        case ActionTypes.COMPLETE_SCHEDULE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.COMPLETE_SCHEDULE_SUCCESS: {
            let customerPage = { ...state.customerPage }
            let completed = action.payload.data

            customerPage.schedules.booked = customerPage.schedules.booked.filter(
                s => s.id !== completed.id
            )
            customerPage.schedules.finished.push(completed)

            // update unfinished
            customerPage.customerBalance.booked =
                customerPage.schedules.booked.length

            return Object.assign({}, state, {
                customerPage,
                successMsg: L.scheduleCompleteSuccess,
                loading: false
            })
        }
        case ActionTypes.COMPLETE_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: L.scheduleCompleteFail
            })

        case ActionTypes.CREATE_SCHEDULE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CREATE_SCHEDULE_SUCCESS: {
            let updatedSelectedCustomer = { ...state.customerPage }
            let { start, end, coach_id } = action.payload.data
            updatedSelectedCustomer.coachesSlots.forEach(c => {
                if (c.id === coach_id) {
                    c.available = c.available.filter(h => h < start || h > end)
                }
            })
            // clear pendingSchedule when save successfully
            updatedSelectedCustomer.pendingSchedule = null
            // add booked count
            updatedSelectedCustomer.customerBalance.booked++
            // add booked schedule
            updatedSelectedCustomer.schedules.booked.push(action.payload.data)

            return Object.assign({}, state, {
                customerPage: updatedSelectedCustomer,
                successMsg: L.scheduleCreateSuccess,
                loading: false
            })
        }
        case ActionTypes.CREATE_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: L.scheduleCreateFail
            })

        case ActionTypes.LOAD_CUSTOMER_SCHEDULE:
            // do nothing
            return state
        case ActionTypes.LOAD_CUSTOMER_SCHEDULE_SUCCESS: {
            let customerPage = { ...state.customerPage }
            customerPage.schedules.booked = action.payload.data.filter(
                s => s.status === 1
            )
            customerPage.schedules.finished = action.payload.data.filter(
                s => s.status === 2
            )
            return Object.assign({}, state, { customerPage })
        }
        case ActionTypes.LOAD_CUSTOMER_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Load gym schedule failed'
            })

        case ActionTypes.LOAD_GYM_SCHEDULE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SCHEDULE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                schedules: action.payload.data
            })
        case ActionTypes.LOAD_GYM_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym schedule failed'
            })

        case ActionTypes.LOAD_GYM_SUMMARY:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SUMMARY_SUCCESS: {
            let report = { ...state.report }
            report.summary = action.payload.data
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_GYM_SUMMARY_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym summary failed'
            })

        case ActionTypes.LOAD_GYM_ORDERS:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_ORDERS_SUCCESS: {
            let report = { ...state.report }
            report.orders = action.payload.data
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_GYM_ORDERS_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym orders failed'
            })
        case ActionTypes.LOAD_GYM_SCHEDULE_COUNT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SCHEDULE_COUNT_SUCCESS: {
            let report = { ...state.report }
            // analyse
            if(action.payload.config.params.analyse === 'customer'){
                report.scheduleCountAnaylseCustomer = action.payload.data
                return Object.assign({}, state, { loading: false, report })
            }
            // count
            switch (action.payload.config.params.count) {
                case 'coach_id,year(date),month(date)':
                    report.scheduleCountByMonthPerCoach = action.payload.data
                    break
                case 'coach_id':
                    report.scheduleCountByCoach = action.payload.data
                    break
                case 'customer_id':
                    report.scheduleCountByCustomer = action.payload.data
                    break
                case 'coach_id,date':
                    report.scheduleCountByDate = action.payload.data
                    break
                case 'coach_id,month(date)':
                    const {data} = action.payload
                    let grouped = []
                    data.forEach(row => {
                        const name = row.coach.user.name
                        const month = row['month(date)']
                        if(!grouped[row.coach.user.name]) {
                            grouped[name] = []
                        }
                        grouped[name][month] = row.course_amount
                    })
                    report.scheduleCountByMonthPerCoachOfYear = grouped
                    break;
            }
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_GYM_SCHEDULE_COUNT_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym orders failed'
            })

        default:
            return state
    }
}

export default gym
