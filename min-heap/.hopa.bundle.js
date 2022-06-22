'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var getLeftChild = function getLeftChild(i) {
  return i * 2;
};

var getRightChild = function getRightChild(i) {
  return i * 2 + 1;
};

var getParent = function getParent(i) {
  return Math.floor(i / 2);
};

var MinHeap = /*#__PURE__*/function () {
  // initialize heap as an array.
  // 'null' at position 0.
  function MinHeap() {
    _classCallCheck(this, MinHeap);

    this.heap = [null];
  } // swap two elements in an array.


  _createClass(MinHeap, [{
    key: "swap",
    value: function swap(indexOne, indexTwo) {
      var _ref = [this.heap[indexTwo], this.heap[indexOne]];
      this.heap[indexOne] = _ref[0];
      this.heap[indexTwo] = _ref[1];
    } // peeks at the root element.

  }, {
    key: "peek",
    value: function peek() {
      return this.heap[1];
    } // insert node to the heap.

  }, {
    key: "insert",
    value: function insert(num) {
      this.heap.push(num);

      if (this.heap.length > 2) {
        if (this.heap.length === 3 && this.heap[1] > this.heap[2]) {
          this.swap(1, 2);
        }

        var i = this.heap.length - 1;
        var parent = getParent(i);

        while (this.heap[i] <= this.heap[parent] && i > 1) {
          this.swap(i, parent);
          i = parent;
          parent = getParent(i);
        }
      }
    } // extract node from the heap.

  }, {
    key: "extract",
    value: function extract() {
      var smallest = this.peek();
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1, 1);
      var i = 1;
      var left = getLeftChild(i);
      var right = getRightChild(i);

      while (this.heap[left] && this.heap[right]) {
        if (this.heap[left] <= this.heap[right]) {
          this.swap(i, left);
          i = left;
        } else if (this.heap[right] <= this.heap[left]) {
          this.swap(i, right);
          i = right;
        }

        left = getLeftChild(i);
        right = getRightChild(i);
      }

      return smallest;
    }
  }]);

  return MinHeap;
}();

var minHeap = new MinHeap();
console.log(minHeap.heap);
minHeap.insert(6);
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(2);
console.log(minHeap.heap);
var minVal = minHeap.extract();
console.log(minHeap.heap, '|', 'min value:', minVal);
minVal = minHeap.extract();
console.log(minHeap.heap, '|', 'min value:', minVal);
minVal = minHeap.extract();
console.log(minHeap.heap, '|', 'min value:', minVal);
minVal = minHeap.extract();
console.log(minHeap.heap, '|', 'min value:', minVal);
minVal = minHeap.extract();
console.log(minHeap.heap, '|', 'min value:', minVal);
