export default (component, lang = 'zh') => {
    return Lang[component][lang]
}

const Lang = {
    Routes: {
        zh: {
            dashboard: '总览',
            customer: '客户',
            finance: '财务'
        },
        en: {
            dashboard: 'Dashboard',
            customer: 'Customer',
            finance: 'Accounting'
        }
    },
    Utils: {
        zh: {
            normal: '进行中',
            refunded: '已退款',
            unknown: '未知'
        },
        en: {
            normal: 'Normal',
            refrunded: 'Refunded',
            unknown: 'Unknown'
        }
    },
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
    Scheduling: {
        zh: {
            save: '保存',
            noCoach: '没有找到教练'
        },
        en: {
            save: 'Save',
            noCoach: 'No available coach found'
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
    CustomerPhotoSection: {
        zh: {
            uploadFail: '图片上传失败',
            delete: '删除',
            deleteConfirm: '确定要删除照片吗？',
            add: '添加'
        },
        en: {
            uploadFail: 'Upload image failed',
            delete: 'Delete',
            deleteConfirm: 'Are you sure to delete the photo?',
            add: 'Add'
        }
    },
    CustomerDataSection: {
        zh: {
            date: '日期',
            value: '数值',
            edit: '编辑 ',
            add: '添加',
            addFull: '添加一组数据'
        },
        en: {
            date: 'Date',
            value: 'Value',
            edit: 'Edit',
            add: 'Add',
            addFull: 'ADD FULL DATA'
        }
    },
    Customer: {
        zh: {
            refund: '退款',
            amount: '金额',
            reason: '原因',
            refundSubTitle: '请填写退款详细信息',
            price: '价格',
            bookedTotal: '已约/总计',
            coach: '教练',
            created: '创建时间',
            status: '状态',
            action: '操作',
            date: '日期',
            time: '时间',
            noUnfinished: '没有未完成的课程',
            cancel: '取消',
            complete: '完成',
            unfinished: '未完成',
            cancelConfirm: '确定要取消该课程吗？',
            book: '预约',
            orders: '订单',
            data: '数据',
            photo: '照片'
        },
        en: {
            refund: 'Refund',
            amount: 'Amount',
            reason: 'Reason',
            refundSubTitle: 'Please fill the detail information for the refund',
            price: 'Price',
            bookedTotal: 'Booked/Total',
            coach: 'Coach',
            created: 'Created',
            status: 'Status',
            action: 'Action',
            date: 'Date',
            time: 'Time',
            noUnfinished: 'No unfinished schedule',
            cancel: 'Cancel',
            complete: 'Complete',
            unfinished: 'Unfinished',
            cancelConfirm: 'Are you sure to cancel the schedule?',
            book: 'Book',
            orders: 'Orders',
            data: 'Data',
            photo: 'Photo'
        }
    },
    Customers: {
        zh: {
            customers: '客户',
            name: '姓名',
            sex: '性别',
            phone: '电话',
            female: '女',
            male: '男',
            emptyDataSourceMessage: '没有数据',
            searchTooltip: '搜索',
            searchPlaceholder: '姓名/电话'
        },
        en: {
            customers: 'Customers',
            name: 'Name',
            sex: 'Sex',
            phone: 'Phone',
            female: 'F',
            male: 'M',
            emptyDataSourceMessage: 'No records to display',
            searchTooltip: 'search',
            searchPlaceholder: 'Name/Phone'
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
    },
    SalarySummary: {
        zh: {
            payConfirm: '确定完成支付了吗？',
            name: '姓名',
            amount: '金额',
            baseTax: '底薪 - 社保',
            course: '课程数量',
            adjustment: '调整金额',
            comments: '备注',
            pay: '支付'
        },
        en: {
            payConfirm: 'Have you finished the payment?',
            name: 'Name',
            amount: 'Amount',
            baseTax: 'Base - Tax',
            course: 'Course',
            adjustment: 'Adjustment',
            comments: 'Comments',
            pay: 'Pay'
        }
    },
    AccountingPage: {
        zh: {
            finance: '财务',
            salary: '工资',
            reimbursement: '报销',
            accounting: '收支',
            salarySetting: '工资设置'
        },
        en: {
            finance: 'Finance',
            salary: 'Salary',
            reimbursement: 'Reimbursement',
            accounting: 'Accounting',
            salarySetting: 'Salary Setting'
        }
    },
    Reimbursement: {
        zh: {
            createReimbursement: '新的报销',
            owner: '报销人',
            category: '分类',
            amount: '金额',
            detail: '详情',
            payConfirm: '确定完成支付了吗？',
            operator: '操作人',
            time: '时间',
            pay: '支付',
            reimbursement: '报销'
        },
        en: {
            createReimbursement: 'Create Reimbursement',
            owner: 'Owner',
            category: 'Category',
            amount: 'Amount',
            detail: 'Detail',
            payConfirm: 'Have you finished the payment?',
            operator: 'Operator',
            time: 'Time',
            pay: 'Pay',
            reimbursement: 'Reimbursement'
        }
    },
    Accounting: {
        zh: {
            newIncome: '新的收入',
            newExpenditure: '新的支出',
            category: '分类',
            amount: '金额',
            detail: '详情',
            operator: '操作人',
            time: '时间',
            pay: '支付',
            income: '收入',
            expenditure: '支出'
        },
        en: {
            newIncome: 'New Income',
            newExpenditure: 'New Expenditure',
            category: 'Category',
            amount: 'Amount',
            detail: 'Detail',
            operator: 'Operator',
            time: 'Time',
            pay: 'Pay',
            income: 'Income',
            expenditure: 'Expenditure'
        }
    },
    SalarySetting: {
        zh: {
            salarySetting: '工资设置',
            name: '姓名',
            base: '底薪',
            courseFixed: '课提(固定)',
            coursePercent: '课提(%)',
            salePercent: '销提(%)',
            tax: '社保'
        },
        en: {
            salarySetting: 'Salary Setting',
            name: 'Name',
            base: 'Base',
            courseFixed: 'Course(Fixed)',
            coursePercent: 'Course(%)',
            salePercent: 'Sale(%)',
            tax: 'Tax'
        }
    }
}
