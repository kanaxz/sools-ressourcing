const mixer = require('../../../core/shared/mixer')
const RessourceOwner = require('./RessourceOwner')

module.exports = mixer.mixin([RessourceOwner], (base) => {
  return class RessourceGroupMixin extends base {
   
  }
})