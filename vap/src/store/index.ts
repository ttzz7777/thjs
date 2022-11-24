import { atom, selector } from 'recoil'

export const COUNT = atom({
  key: 'Count',
  default: '123',
})

export const COUNT_GET = selector({
  key: 'Count_Get',
  get: ({ get }) => {
    const count = get(COUNT)

    return count.length
  },
})
