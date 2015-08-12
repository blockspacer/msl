﻿/**
 * Copyright (c) 2012-2014 Netflix, Inc.  All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
describe("Arrays", function () {

    describe("Arrays$concat", function () {

        it("empty", function () {
            var result = Arrays$concat([
            ]);
            expect(result).toEqual(new Uint8Array([]));
        });

        it("one array", function () {
            var result = Arrays$concat([
                new Uint8Array([1, 2, 3])
            ]);
            expect(result).toEqual(new Uint8Array([1, 2, 3]));
        });

        it("multiple arrays", function () {
            var result = Arrays$concat([
                new Uint8Array([1, 2, 3]),
                new Uint8Array([4, 5, 6, 7]),
                new Uint8Array([11])
            ]);
            expect(result).toEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 11]));
        });

    });

});