# JS Rubik's Cube Solver

This library is an implementation of the standard beginner algorithm layer-by-layer to solve a Rubik's Cube.

The input cube must be in a matrix, something like:

```
    0    1   2  3   4   5   6    7  8    9  10   11
0    [00, 00, 00, 01, 02, 03, 00, 00, 00, 00, 00, 00],
1    [00, 00, 00, 04, 05, 06, 00, 00, 00, 00, 00, 00],
2    [00, 00, 00, 07, 08, 09, 00, 00, 00, 00, 00, 00],
3    [10, 11, 12, 19, 20, 21, 28, 29, 30, 37, 38, 39],
4    [13, 14, 15, 22, 23, 24, 31, 32, 33, 40, 41, 42],
5    [16, 17, 18, 25, 26, 27, 34, 35, 36, 43, 44, 45],
6    [00, 00, 00, 46, 47, 48, 00, 00, 00, 00, 00, 00],
7    [00, 00, 00, 49, 50, 51, 00, 00, 00, 00, 00, 00],
8    [00, 00, 00, 52, 53, 54, 00, 00, 00, 00, 00, 00]
```

Some examples are in the index.js file.


Alexandre PALO
Georgia Institute Of Technology (Atlanta, USA) & Arts et Métiers ParisTech (Paris, FRANCE)
@2017

