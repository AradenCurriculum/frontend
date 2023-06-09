import { i18n } from '@/locale'
import { TableColumnData } from '@arco-design/web-vue'
import { computed } from 'vue'
import { bytesToSize } from './format'

const userlistColumns = computed(() => {
  const columns: TableColumnData[] = [
    {
      title: '#',
      slotName: 'index',
      width: 96
    },
    {
      title: i18n.global.t('userManage.userlist.column.username'),
      dataIndex: 'username'
    },
    {
      title: i18n.global.t('userManage.userlist.column.email'),
      dataIndex: 'email'
    },
    {
      title: i18n.global.t('userManage.userlist.column.role'),
      dataIndex: 'role',
      width: 96
    },
    {
      title: i18n.global.t('userManage.userlist.column.registerTime'),
      dataIndex: 'registerTime',
      render({ record }) {
        return `${new Date(record.registerTime).toLocaleString()}`
      }
    },
    {
      title: i18n.global.t('userManage.userlist.column.loginTime'),
      dataIndex: 'loginTime',
      render({ record }) {
        return `${new Date(record.loginTime).toLocaleString()}`
      }
    },
    {
      title: i18n.global.t('userManage.userlist.column.operation'),
      slotName: 'operation',
      width: 96
    }
  ]
  columns.forEach((v) => (v.align = 'center'))
  return columns
})

const inviteCodeColumns = computed(() => {
  const columns: TableColumnData[] = [
    {
      title: '#',
      slotName: 'index',
      width: 96
    },
    {
      title: i18n.global.t('userManage.invitelist.column.code'),
      dataIndex: 'code',
      width: 360
    },
    {
      title: i18n.global.t('userManage.invitelist.column.owner'),
      dataIndex: 'owner'
    },
    {
      title: i18n.global.t('userManage.invitelist.column.role'),
      dataIndex: 'role'
    },
    {
      title: i18n.global.t('userManage.invitelist.column.used'),
      dataIndex: 'used',
      slotName: 'used'
    },
    {
      title: i18n.global.t('userManage.invitelist.column.operation'),
      slotName: 'operation',
      width: 96
    }
  ]
  columns.forEach((v) => (v.align = 'center'))
  return columns
})

const logListColumns = computed(() => {
  const columns: TableColumnData[] = [
    {
      title: i18n.global.t('logManage.columns.filename'),
      dataIndex: 'filename'
    },
    {
      title: i18n.global.t('logManage.columns.size'),
      dataIndex: 'size',
      render({ record }) {
        return `${bytesToSize(record.size)}`
      }
    },
    {
      title: i18n.global.t('logManage.columns.updated'),
      dataIndex: 'updated',
      render({ record }) {
        return `${new Date(record.updated).toLocaleString()}`
      }
    },
    {
      title: i18n.global.t('logManage.columns.operations'),
      slotName: 'operation'
    }
  ]
  columns.forEach((v) => (v.align = 'center'))
  return columns
})

const fileListColumns = computed(() => {
  const columns: TableColumnData[] = [
    {
      title: i18n.global.t('filelist.columns.name'),
      dataIndex: 'name',
      slotName: 'filename'
    },
    {
      title: i18n.global.t('filelist.columns.size'),
      dataIndex: 'size',
      width: 80,
      render({ record }) {
        return record.size === 0 ? '-' : `${bytesToSize(record.size)}`
      }
    },
    {
      title: i18n.global.t('filelist.columns.updatedAt'),
      dataIndex: 'updatedAt',
      width: 180,
      render({ record }) {
        return `${new Date(record.updatedAt).toLocaleString()}`
      }
    },
    {
      title: i18n.global.t('filelist.columns.operations'),
      slotName: 'operation',
      width: 256
    }
  ]
  return columns
})

export { userlistColumns, inviteCodeColumns, logListColumns, fileListColumns }
