const leftChild = i => i * 2
const rightChild = i => i * 2 + 1
const parent = i => Math.floor(i / 2)

// initialize heap as an empty array.
class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  // swaps two elements in an array.
  swap (indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]]
  }

  // peeks at the root element.
  peek () {
    return this.heap[1]
  }

  // insert node to the heap.
  insert (num) {
    this.heap.push(num)
    if(this.heap.length > 2) {
      let idx = this.heap.length - 1
      while(this.heap[idx] > this.heap[parent(idx)]) {
        if(idx >= 1) {
          this.swap(idx, parent(idx))
          if(parent(idx) > 1) {
            idx = parent(idx)
          } else {
            break
          }
        }
      }
    }
  }

  // extract node from the heap.
  extract () {
    let largest = this.heap[1]
    if(this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)
      if(this.heap.length === 3) {
        if(this.heap[1] > this.heap[2]) {
          this.swap(1,2)
        }
        return largest
      }
      let i = 1
      let left = leftChild(i)
      let right = rightChild(i)
      while(this.heap[i] <= this.heap[left] || this.heap[i] <=this.heap[right]) {
        if(this.heap[left] > this.heap[right]) {
          this.swap(i, left)
          i = left
        } else {
          this.swap(i, right)
          i = right
        }
        left = leftChild(i)
        right = rightChild(i)
        if(this.heap[left] === undefined || this.heap[right] === undefined) {
          break
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1,1)
    } else {
      return null
    }
    return largest
  }
}

const maxheap = new MaxHeap()
maxheap.insert(1)
maxheap.insert(3)
maxheap.insert(4)
maxheap.insert(10)
console.log(maxheap.heap)
