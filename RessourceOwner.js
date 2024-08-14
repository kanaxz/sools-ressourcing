const mixer = require('../core/shared/mixer')
const ModelMixin = require('sools-modeling/types/ModelMixin')

module.exports = mixer.mixin([ModelMixin], (base) => {
  return class RessourceOwner extends base { }
})
  .define({
    name: 'ressourceOwner'
  })