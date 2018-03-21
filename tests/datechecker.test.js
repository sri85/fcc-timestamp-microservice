'use strict';

const { expect } = require('chai');
const datechecker = require('../dateChecker');

describe("Date Checker test suite", () => {

    it("verifyTimestamp returns true when a number is passed as an input", () => {
        expect(datechecker.verifyTimestamp(123)).to.equal(true);
    });
    it("verifyTimestamp returns undefined when a non number is passed as an input", () => {
        expect(datechecker.verifyTimestamp("123")).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a null is passed as an input",  () => {
        expect(datechecker.verifyTimestamp(null)).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a undefined is passed as an input",() => {
        expect(datechecker.verifyTimestamp(undefined)).to.equal(undefined);
    });
    it("verifyTimestamp returns undefined when a string is passed as an input", () => {
        expect(datechecker.verifyTimestamp("test")).to.equal(undefined);
    });
    it("humanizeDate returns undefined when a null is passed as an input", () => {
        expect(datechecker.humanizeDate(null)).to.equal(undefined);
    });
    it("humanizeDate returns undefined when a null is passed as an input", () =>{
        expect(datechecker.humanizeDate(undefined)).to.equal(undefined);
    });
    it("humanizeDate returns a natural date when a valid timestamp is passed as an input ",() =>{
        expect(datechecker.humanizeDate("1450137600")).to.equal("December 15, 2015");
    });
    it("humanizeDate returns Invalid date when a invalid date is passed ", () => {
        expect(datechecker.humanizeDate("ab")).to.equal("Invalid date");
    });
    it("unixifydate returns unixify date when a unit timestamp date is passed ",() => {
        expect(datechecker.unixifyDate("December 15, 2015")).to.equal(1450137600);
    });
    it("unixifydate returns undefined date when an invalid date is passed ",() => {
        expect(datechecker.unixifyDate("ab")).to.be.NaN;
    });
    it("isDateValid returns false date when an invalid date is passed ",() => {
        expect(datechecker.isDateValid("ab")).to.be.equal(false);
    });
    it("isDateValid returns false date when an invalid date is passed ",() => {
        expect(datechecker.isDateValid("December 15, 2015")).to.be.equal(true);
    });
    it("isNumber returns true  when an invalid date is passed ",() => {
        expect(datechecker.isNumber(1)).to.be.equal(true);
    });
    it("isNumber returns false  when an string is passed ",() => {
        expect(datechecker.isNumber("1")).to.be.equal(false);
    });
    it("isNumber returns false  when an string is passed ",() => {
        expect(datechecker.isInputInvalid(null)).to.be.equal(true);
    });
    it("isNumber returns false  when an string is passed ",() => {
        expect(datechecker.isInputInvalid(undefined)).to.be.equal(true);
    });
});