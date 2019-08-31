export default (component, lang = 'zh') => {
    return Lang[component][lang]
}

const Lang = {
    CustomerSelectionDialogue: {
        zh: {
            search: '请输入拼音首字母',
            schedule: '预约'
        },
        en: {
            search: 'Search',
            schedule: 'Schedule'
        }
    },
    Confirmation: {
        zh: {
            confirmation: '确认',
            cancel: '取消',
            ok: '是的'
        },
        en: {
            confirmation: 'Confirmation',
            cancel: 'Cancel',
            ok: 'OK'
        }
    },
    GymRedux: {
        zh: {
            scheduleCreateSuccess: '日程已保存',
            scheduleCreateFail: '日程保存失败',
            scheduleCompleteSuccess: '日程已完成',
            scheduleCompleteFail: '日程完成失败',
            scheduleDeleteSuccess: '日程已取消',
            scheduleDeleteFail: '日程取消失败',
            orderCreateSuccess: '订单已保存',
            orderCreateFail: '订单保存失败'
        },
        en: {
            scheduleCreateSuccess: 'Create schedule successed',
            scheduleCreateFail: 'Create schedule failed',
            scheduleCompleteSuccess: 'Complete schedule successed',
            scheduleCompleteFail: 'Complete Schedule failed',
            scheduleDeleteSuccess: 'Schedule has been canceled',
            scheduleDeleteFail: 'Delete schedule failed',
            orderCreateSuccess: 'Create order successed',
            orderCreateFail: 'Create order failed, please try again'
        }
    },
    Routes: {
        zh: {
            dashboard: '总览'
        },
        en: {
            dashboard: 'Dashboard'
        }
    },
    CreateNewDialogue: {
        zh: {
            cancel: '取消',
            save: '保存'
        },
        en: {
            cancel: 'Cancel',
            save: 'Save'
        }
    },
    Dashboard: {
        zh: {
            cancel: '取消',
            done: '完成',
            cancelConfirm: '确定要取消该日程吗 ?',
            doneConfirm: '确定要完成该日程吗 ？',
            customerName: '姓名',
            sex: '性别',
            phone: '电话',
            price: '价格',
            amount: '课程数量',
            duration: '有效期 (月)',
            coach: '教练',
            female: '女',
            male: '男',
            createOrder: '新建订单'
        },
        en: {
            cancel: 'CANCEL',
            done: 'DONE',
            cancelConirm: 'Are you sure to cancel the schedule ?',
            doneConfirm: 'Are you sure to complete the schedule ?',
            customerName: 'Customer Name',
            sex: 'Sex',
            phone: 'Phone',
            price: 'Price',
            amount: 'Amount',
            duration: 'Duration (month)',
            coach: 'Coach',
            female: 'Female',
            male: 'Male',
            createOrder: 'CreateOrder'
        }
    }
}
