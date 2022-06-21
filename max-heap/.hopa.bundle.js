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

var leftChild = function leftChild(i) {
  return i * 2;
};

var rightChild = function rightChild(i) {
  return i * 2 + 1;
};

var parent = function parent(i) {
  return Math.floor(i / 2);
}; // initialize heap as an empty array.


var MaxHeap = /*#__PURE__*/function () {
  function MaxHeap() {
    _classCallCheck(this, MaxHeap);

    this.heap = [null];
  } // swaps two elements in an array.


  _createClass(MaxHeap, [{
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
        var idx = this.heap.length - 1;

        while (this.heap[idx] > this.heap[parent(idx)]) {
          if (idx >= 1) {
            this.swap(idx, parent(idx));

            if (parent(idx) > 1) {
              idx = parent(idx);
            } else {
              break;
            }
          }
        }
      }
    } // extract node from the heap.

  }, {
    key: "extract",
    value: function extract() {
      var largest = this.heap[1];

      if (this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);

        if (this.heap.length === 3) {
          if (this.heap[1] > this.heap[2]) {
            this.swap(1, 2);
          }

          return largest;
        }

        var i = 1;
        var left = leftChild(i);
        var right = rightChild(i);

        while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
          if (this.heap[left] > this.heap[right]) {
            this.swap(i, left);
            i = left;
          } else {
            this.swap(i, right);
            i = right;
          }

          left = leftChild(i);
          right = rightChild(i);

          if (this.heap[left] === undefined || this.heap[right] === undefined) {
            break;
          }
        }
      } else if (this.heap.length === 2) {
        this.heap.splice(1, 1);
      } else {
        return null;
      }

      return largest;
    }
  }]);

  return MaxHeap;
}();

var maxheap = new MaxHeap();
maxheap.insert(1);
maxheap.insert(3);
maxheap.insert(4);
maxheap.insert(10);
console.log(maxheap.heap);
