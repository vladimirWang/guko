/*
 * @Author: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @Date: 2024-03-17 14:53:57
 * @LastEditors: wangxiaoyu006 wangxiaoyu006@chinasofti.com
 * @LastEditTime: 2024-03-17 17:19:28
 * @FilePath: /guko/src/store/person.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand'
function sleep(ms = 2000) {
  return new Promise((r) => {
    setTimeout(() => {
      r(undefined)
    }, ms)
  })
}

type State = {
  id: number
  username: string
}

type Action = {
  // updateUsername: (value: State['username']) => void
  updateUserInfo: (value: State) => void
  // updateLastName: (value: State['lastName']) => void
  // asyncUpdateFirstName: (value: State['lastName']) => void
}

export const useUserStore = create<State & Action>((set) => ({
  username: '',
  id: -1,
  // lastName: '',
  updateUserInfo: (userInfo) => {
    // set(() => ({ firstName }))
    set(userInfo)
  },
  // updateLastName: (lastName) => {
  //   set(() => ({ lastName }))
  // },
  // asyncUpdateFirstName: async (firstName) => {
  //   await sleep()
  //   set({ firstName })
  // },
}))
