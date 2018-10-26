import Vue from 'vue'
import RangedatePicker from '@/RangedatePicker.vue'

const startDate = new Date()
const endDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)

describe('RangedatePicker', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(RangedatePicker)
    vm = new Constructor({
      propsData: {
        configs: {
          dateRange: {
            start: startDate,
            end: endDate
          }
        }
      }
    })
    vm.$mount()
  })

  describe('loads default dates', () => {
    it('todays date should be selected', () => {
      console.log('test is running')
      assert(vm.dateRange.start === startDate, 'Start date should be equal.')
      assert(vm.dateRange.end === endDate, 'End date should be equal.')
    })
  })
})

