import Vue from 'vue'
import RangedatePicker from '@/RangedatePicker.vue'
import { shallowMount } from '@vue/test-utils'

const startDate = new Date()
const endDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)

describe('RangedatePicker', () => {
  describe('loads dates', () => {
    it('todays date should be selected', () => {
      const wrapper = shallowMount(RangedatePicker, {
        propsData: {
          configs: {
            dateRange: {
              start: startDate,
              end: endDate
            }
          }
        }
      })
      assert(wrapper.vm.$data.dateRange.start === startDate, 'Start date should be equal.')
      assert(wrapper.vm.$data.dateRange.end === endDate, 'End date should be equal.')
    })

    it('prop should update dates', () => {
      const testConfig = {
        dateRange: {
          start: startDate,
          end: endDate
        }
      }

      const wrapper = shallowMount(RangedatePicker)
      wrapper.setProps({ configs: testConfig })
      console.log(wrapper.vm)
      assert(wrapper.vm.$data.dateRange.start === startDate, 'Start date should be equal.')
      assert(wrapper.vm.$data.dateRange.end === endDate, 'End date should be equal.')
    })
  })
})

