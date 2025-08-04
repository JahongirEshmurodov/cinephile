import { create } from 'zustand'

const usePopular = create((set) => ({
  movie: [],
  tv:[],
  getPopular: (data,type) => set({[type]:data})
}))
export default usePopular