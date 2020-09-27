import * as ActionTypes from '../actions/actionTypes'

import i18N from '../lang'

const L = i18N('GymRedux')

const initState = {
    // data
    coaches: [],
    schedules: [],
    schedulesTomorrow: [],
    accounting: [],
    reimbursements: [],
    salarySettings: [],
    salaryReceipts: [],
    dianpingShopList: [],
    hotmap: {},
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
        },
        dianping: [],
        statistics: [],

        monthCourseByCustomerType: {},
        monthSaleByType: {},
        monthActiveByType: {},

        customerWithDate: []
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

        case ActionTypes.LOAD_CUSTOMER_WITH_DATE:
            return state;
        case ActionTypes.LOAD_CUSTOMER_WITH_DATE_SUCCESS: {
            let report = { ...state.report }
            report.customerWithDate = action.payload.data
            return Object.assign({}, state, {
                loading: false,
                report
            })
        }
        case ActionTypes.LOAD_CUSTOMER_WITH_DATE_FAIL:
            return Object.assign({}, state, {
                errorMsg: '加载客户列表失败',
                loading: false
            })
        case ActionTypes.LOAD_CUSTOMER_HOTMAP:
            return state
        case ActionTypes.LOAD_CUSTOMER_HOTMAP_SUCCESS:
            return Object.assign({}, state, {
                hotmap: action.payload.data
            })
        case ActionTypes.LOAD_CUSTOMER_HOTMAP_FAIL:
            return Object.assign({}, state, {
                errorMsg: '加载客户Hotmap失败'
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
                errorMsg: '加载教练列表失败',
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
                successMsg: '密码已重置为 00000000'
            })
        case ActionTypes.RESET_COACH_PWD_FAIL:
            return Object.assign({}, state, {
                errorMsg: '重置密码失败',
                loading: false
            })

        case ActionTypes.RESEND_INVITE_COACH:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.RESEND_INVITE_COACH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: '邀请已重新发送'
            })
        case ActionTypes.RESEND_INVITE_COACH_FAIL:
            return Object.assign({}, state, {
                errorMsg: '发送邀请失败',
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

        case ActionTypes.UPDATE_COACH:
            return state
        case ActionTypes.UPDATE_COACH_SUCCESS:
            return Object.assign({}, state, {
                showNewCoach: false,
                successMsg: '保存成功'
            })
        case ActionTypes.UPDATE_COACH_FAIL:
            return Object.assign({}, state, {
                errorMsg: '保存失败'
            })

        case ActionTypes.PAY_SALARY:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.PAY_SALARY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                salaryReceipts: state.salaryReceipts.map(r =>
                    r.id === action.payload.data.id ? action.payload.data : r
                ),
                successMsg: '支付成功'
            })
        case ActionTypes.PAY_SALARY_FAIL:
            return Object.assign({}, state, {
                errorMsg: '支付失败',
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
                successMsg: '已保存'
            })
        case ActionTypes.UPDATE_SALARY_RECEIPT_FAIL:
            return Object.assign({}, state, {
                errorMsg: '保存失败',
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

        case ActionTypes.UDPATE_CUSTOMER_PROFILE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.UDPATE_CUSTOMER_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: '信息已保存',
                customers: state.customers.map(s =>
                    s.id === action.payload.data.id ? action.payload.data : s
                )
            })
        case ActionTypes.UDPATE_CUSTOMER_PROFILE_FAIL:
            return Object.assign({}, state, {
                errorMsg: '更新用户资料失败',
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

        case ActionTypes.CSV_DATA_IMPORT:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.CSV_DATA_IMPORT_SUCCESS:
            return Object.assign({}, state, {
                successMsg: 'CSV data loading finished',
                loading: false
            })
        case ActionTypes.CSV_DATA_IMPORT_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'upload CSV data failed',
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

        case ActionTypes.DELETE_ORDER:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.DELETE_ORDER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'delete order successed'
            })
        case ActionTypes.DELETE_ORDER_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'delete order failed, please try again',
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
                reimbursements: state.reimbursements.map(r =>
                    r.id === action.payload.data.id ? action.payload.data : r
                ),
                successMsg: '保存成功'
            })
        case ActionTypes.PAY_REIMBURSEMENT_FAIL:
            return Object.assign({}, state, {
                errorMsg: '保存失败',
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
        case ActionTypes.UPDATE_SCHEDULE:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.UPDATE_SCHEDULE_SUCCESS:
            return Object.assign({}, state, { loading: false })
        case ActionTypes.UPDATE_SCHEDULE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: '修改日程失败'
            })

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

        case ActionTypes.LOAD_GYM_SCHEDULE_TOMORROW:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_GYM_SCHEDULE_TOMORROW_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                schedulesTomorrow: action.payload.data
            })
        case ActionTypes.LOAD_GYM_SCHEDULE_TOMORROW_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym schedule tomorrow failed'
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
                errorMsg: '加载统计数据失败'
            })

        case ActionTypes.LOAD_DIANPING_SUMMARY:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_DIANPING_SUMMARY_SUCCESS: {
            let report = { ...state.report }
            report.dianping = action.payload.data
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_DIANPING_SUMMARY_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: '查询点评数据失败'
            })

        case ActionTypes.LOAD_STATISTICS:
            return Object.assign({}, state, { loading: true })
        case ActionTypes.LOAD_STATISTICS_SUCCESS: {
            let report = { ...state.report }
            report.statistics = action.payload.data
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_STATISTICS_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: '查询课程库存数据失败'
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
            if (action.payload.config.params.analyse === 'customer') {
                report.scheduleCountAnaylseCustomer = action.payload.data
                return Object.assign({}, state, { loading: false, report })
            }
            // count
            switch (action.payload.config.params.count) {
                case 'coach_id,year(date),month(date),customer_id':
                    report.scheduleCountByMonthPerCoach = action.payload.data
                    // calc live time each row
                    report.scheduleCountByMonthPerCoach.forEach(row => {
                        const date1 = new Date(
                            row['year(date)'] +
                                '-' +
                                row['month(date)'] +
                                '-' +
                                '01'
                        )
                        const date2 = new Date(row.customer.created_at)
                        const diffTime = Math.abs(date1 - date2)
                        const diffDays = Math.ceil(
                            diffTime / (1000 * 60 * 60 * 24)
                        )
                        row.year = row['year(date)']
                        row.month = row['month(date)']
                        row.liveDays = diffDays
                    })
                    break
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
                    const { data } = action.payload
                    let grouped = []
                    data.forEach(row => {
                        const name = row.coach.user.name
                        const month = row['month(date)']
                        if (!grouped[row.coach.user.name]) {
                            grouped[name] = []
                        }
                        grouped[name][month] = 0
                        grouped[name][month] += row.course_amount
                    })
                    report.scheduleCountByMonthPerCoachOfYear = grouped
                    break
                default:
                    console.log(
                        'unknown group:',
                        action.payload.config.params.count
                    )
                    break
            }
            return Object.assign({}, state, { loading: false, report })
        }
        case ActionTypes.LOAD_GYM_SCHEDULE_COUNT_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: 'Load gym orders failed'
            })

        case ActionTypes.AUTH_DIANPING:
            return Object.assign({}, state, {
                loading: true
            })
        case ActionTypes.AUTH_DIANPING_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                dianpingShopList: action.payload.data
            })

        case ActionTypes.AUTH_DIANPING_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errorMsg: '查询店铺列表失败'
            })

        case ActionTypes.LOAD_MONTH_COURSE_BY_CUSTOMER_TYPE:
            return state
        case ActionTypes.LOAD_MONTH_COURSE_BY_CUSTOMER_TYPE_SUCCESS: {
            let report = {
                ...state.report,
                monthCourseByCustomerType: action.payload.data
            }
            return Object.assign({}, state, {
                report
            })
        }
        case ActionTypes.LOAD_MONTH_COURSE_BY_CUSTOMER_TYPE_FAIL:
            return Object.assign({}, state, {
                errorMsg: '加载失败'
            })

        case ActionTypes.LOAD_MONTH_SALE_BY_TYPE:
            return state
        case ActionTypes.LOAD_MONTH_SALE_BY_TYPE_SUCCESS: {
            let report = {
                ...state.report,
                monthSaleByType: action.payload.data
            }
            return Object.assign({}, state, {
                report
            })
        }
        case ActionTypes.LOAD_MONTH_SALE_BY_TYPE_FAIL:
            return Object.assign({}, state, {
                errorMsg: '加载失败'
            })

        case ActionTypes.LOAD_MONTH_ACTIVE_BY_TYPE:
            return state
        case ActionTypes.LOAD_MONTH_ACTIVE_BY_TYPE_SUCCESS: {
            let report = {
                ...state.report,
                monthActiveByType: action.payload.data
            }
            return Object.assign({}, state, {
                report
            })
        }
        case ActionTypes.LOAD_MONTH_ACTIVE_BY_TYPE_FAIL:
            return Object.assign({}, state, {
                errorMsg: '加载失败'
            })
        default:
            return state
    }
}

export default gym
