'use strict';

const { expect } = require('chai');
const datechecker = require('../dateChecker');

describe("Date Checker test suite", function() {

    it("verifyTimestamp returns true when a number is passed as an input", function() {
        expect(datechecker.verifyTimestamp(123)).to.equal(true);
    });
    it("verifyTimestamp returns undefined when a non number is passed as an input",function () {
        expect(datechecker.verifyTimestamp("123")).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a null is passed as an input",function () {
        expect(datechecker.verifyTimestamp(null)).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a undefined is passed as an input",function(){
        expect(datechecker.verifyTimestamp(undefined)).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a string is passed as an input",function () {
        expect(datechecker.verifyTimestamp("test")).to.equal(undefined);
    });
    it("humanizeDate returns undefined when a null is passed as an input",function () {
        expect(datechecker.humanizeDate(null)).to.equal(undefined);
    });
    it("humanizeDate returns undefined when a null is passed as an input",function () {
        expect(datechecker.humanizeDate(undefined)).to.equal(undefined);
    });
    it("humanizeDate returns a natural date when a valid timestamp is passed as an input ",function(){
        expect(datechecker.humanizeDate("1450137600")).to.equal("December 15, 2015");
    });
    it("humanizeDate returns Invalid date when a invalid date is passed ",function () {
        expect(datechecker.humanizeDate("ab")).to.equal("Invalid date");
    });
});