// /** Lines below are already loaded in /test/helpers/entry.js
// import Vue from 'vue'
// import plugin from './index'
// import 'babel-polyfill' // promise and etc ...
//
// Vue.config.productionTip = false
// Vue.use(plugin)
//
// window.Vue = Vue
// Vue.config.debug = true
// */

import VueRangeDatePicker from './RangedatePicker.vue'

const startDate = new Date()
const endDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)

new window.Vue({
  el: 'app',
  data: {
    configs: {
      dateRange: {
        start: startDate,
        end: endDate
      }
    }
  },
  template: `<div id="demo">
<div>
<strong>Full form</strong>
<vue-rangedate-picker :configs="configs"></vue-rangedate-picker>
</div>
<div style="height: 300px">
<strong>Compact (mobile)</strong>
<vue-rangedate-picker compact="true"></vue-rangedate-picker>
</div>
</div>`,
  components: { VueRangeDatePicker }
})
