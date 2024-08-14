const managementSetup = require('../../../management/shared/setup')
const UserMixin = require('./UserMixin')
const GroupMixin = require('./GroupMixin')

managementSetup.user.push(UserMixin)
managementSetup.group.push(GroupMixin)