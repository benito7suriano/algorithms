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
