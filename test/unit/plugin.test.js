import Vue from 'vue'
import RangedatePicker from '@/RangedatePicker.vue'

const today = new Date()

describe('RangedatePicker', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(RangedatePicker)
    vm = new Constructor({
      propsData: {
        configs: {
          dateRange: {
            start: today,
            end: today
          }
        }
      }
    })
    vm.$mount()
  })

  describe('loads default dates', () => {
    it('todays date should be selected', () => {
      console.log('test is running')
      assert(vm.dateRange.start === today, 'You should be equal!!')
      assert(vm.dateRange.end === today, 'You should be equal!!')
    })
  })
})

