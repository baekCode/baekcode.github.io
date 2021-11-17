import { TList } from '../components/category/types';

export const listSorter = (list:TList[]) => {
  return list.sort(([keyA,valueA],[keyB,valueB]) => {
    if(valueA < valueB) return 1
    if(valueA > valueB) return -1
    if(keyA.toUpperCase() < keyB.toUpperCase()) return -1
    if(keyA.toUpperCase() > keyB.toUpperCase()) return 1
    return 0
  })
}