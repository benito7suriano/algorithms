const leftChild = (i) => i * 2
const rightChild = (i) => i * 2 + 1
const parent = (i) => Math.floor(i / 2)

// initialize heap as an empty array.
class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  // swaps two elements in an array.
  // n: number of elements that are being swapped.
  // O(n) time complexity.
  // O(n) space complexity, one variable for each element swapped.
  swap(indexOne, indexTwo) {
    ;[this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ]
  }

  // peeks at the root element.
  // O(1) time complexity.
  peek() {
    return this.heap[1]
  }

  // insert node to the heap.
  // n: number of nodes.
  // O(log(n)): we need one swap at each level of the tree.
  // Total # of swaps would be equal to height of heap tree.
  // Side note: if inserting an element takes log(n) time, building the whole tree takes O(n*log(n)).
  // There's an algorithm that can build a heap in O(n) time: https://www.growingwiththeweb.com/data-structures/binary-heap/build-heap-proof/
  // The height of balanced complete tree with 'n' number of nodes is log(n).
  // O(n) space: the array to store the heap is 'n' spaces big.
  insert(num) {
    this.heap.push(num)
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1
      while (this.heap[idx] > this.heap[parent(idx)]) {
        if (idx >= 1) {
          this.swap(idx, parent(idx))
          if (parent(idx) > 1) {
            idx = parent(idx)
          } else {
            break
          }
        }
      }
    }
  }

  // extract node from the heap.
  // n: number of nodes.
  // O(log(n)): we need one swap at each level of the tree.
  // Total # of swaps would be equal to height of heap tree.
  // The height of balanced complete tree with 'n' number of nodes is log(n).
  // O(n) space: the array to store the heap is 'n' spaces big.
  extract() {
    let largest = this.heap[1]
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          this.swap(1, 2)
        }
        return largest
      }
      let i = 1
      let left = leftChild(i)
      let right = rightChild(i)
      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left] > this.heap[right]) {
          this.swap(i, left)
          i = left
        } else {
          this.swap(i, right)
          i = right
        }
        left = leftChild(i)
        right = rightChild(i)
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
    } else {
      return null
    }
    return largest
  }
}
