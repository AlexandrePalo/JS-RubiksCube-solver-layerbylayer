import { U, Uc, L, Lc, F, Fc, R, Rc, B, Bc, D, Dc } from './transformations'

let cube = [
  [0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0],
  [10, 11, 12, 19, 20, 21, 28, 29, 30, 37, 38, 39],
  [13, 14, 15, 22, 23, 24, 31, 32, 33, 40, 41, 42],
  [16, 17, 18, 25, 26, 27, 34, 35, 36, 43, 44, 45],
  [0, 0, 0, 46, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 49, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 52, 53, 54, 0, 0, 0, 0, 0, 0]
]

const cubeAfterU = [
  [0, 0, 0, 16, 13, 10, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0],
  [52, 11, 12, 19, 20, 21, 28, 29, 1, 39, 42, 45],
  [53, 14, 15, 22, 23, 24, 31, 32, 2, 38, 41, 44],
  [54, 17, 18, 25, 26, 27, 34, 35, 3, 37, 40, 43],
  [0, 0, 0, 46, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 49, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 36, 33, 30, 0, 0, 0, 0, 0, 0]
]

const cubeAfterUc = [
  [0, 0, 0, 30, 33, 36, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 8, 9, 0, 0, 0, 0, 0, 0],
  [3, 11, 12, 19, 20, 21, 28, 29, 54, 43, 40, 37],
  [2, 14, 15, 22, 23, 24, 31, 32, 53, 44, 41, 38],
  [1, 17, 18, 25, 26, 27, 34, 35, 52, 45, 42, 39],
  [0, 0, 0, 46, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 49, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 10, 13, 16, 0, 0, 0, 0, 0, 0]
]

const cubeAfterL = [
  [0, 0, 0, 19, 2, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 22, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 25, 8, 9, 0, 0, 0, 0, 0, 0],
  [12, 15, 18, 46, 20, 21, 28, 29, 30, 37, 38, 7],
  [11, 14, 17, 49, 23, 24, 31, 32, 33, 40, 41, 4],
  [10, 13, 16, 52, 26, 27, 34, 35, 36, 43, 44, 1],
  [0, 0, 0, 45, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 39, 53, 54, 0, 0, 0, 0, 0, 0]
]

const cubeAfterLc = [
  [0, 0, 0, 45, 2, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 42, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 39, 8, 9, 0, 0, 0, 0, 0, 0],
  [16, 13, 10, 1, 20, 21, 28, 29, 30, 37, 38, 52],
  [17, 14, 11, 4, 23, 24, 31, 32, 33, 40, 41, 49],
  [18, 15, 12, 7, 26, 27, 34, 35, 36, 43, 44, 46],
  [0, 0, 0, 19, 47, 48, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 22, 50, 51, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 25, 53, 54, 0, 0, 0, 0, 0, 0]
]

test('transformation U', () => {
  expect(U(cube)).toEqual(cubeAfterU)
})
test('transformation Uc', () => {
  expect(Uc(cube)).toEqual(cubeAfterUc)
})

test('transformation L', () => {
  expect(L(cube)).toEqual(cubeAfterL)
})

test('transformation Lc', () => {
  expect(Lc(cube)).toEqual(cubeAfterLc)
})
