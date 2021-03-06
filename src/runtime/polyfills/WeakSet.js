// Copyright 2014 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {WeakMap} from './WeakMap';

export class WeakSet {
  constructor(iterable, allowNonExtensibleObjects = false) {
    this.weakmap_ = new WeakMap();
    this.allowNonExtensibleObjects = allowNonExtensibleObjects;
    if (iterable) {
      for(var value of iterable) {
        this.add(value);
      }
    }
  }
  
  get allowNonExtensibleObjects() {
    return this.weakmap_.allowNonExtensibleObjects;
  }
  
  set allowNonExtensibleObjects(v) {
    this.weakmap_.allowNonExtensibleObjects = v; //true makes map O(N) and leaky
  }

  add(value) {
    this.weakmap_.set(value, true);
  }
  
  has(value) {
    return this.weakmap_.has(value);
  }
  
  delete(value) {
    this.weakmap_.delete(value);
  }
  
  clear() {
    this.weakmap_.clear();
  }
}
