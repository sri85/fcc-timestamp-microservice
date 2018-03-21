'use strict';

const moment = require('moment');

class DateChecker{

    /**
     *
     * @param timestamp
     * @returns {boolean}
     */
    verifyTimestamp(timestamp) {
        const pattern = new RegExp('^\\d+$');

        if (!this.isInputInvalid(timestamp) && this.isNumber(timestamp)){
            return pattern.test(timestamp);
        }
    }

    /**
     *
     * @param timestamp
     * @returns {string}
     */

    humanizeDate(timestamp){
        if (!(this.isInputInvalid(timestamp))){
            return moment.unix(timestamp).format('LL')
        }
    }

    /**
     *
     * @param date
     * @returns {number}
     */

    unixifyDate(date){
        if(!(this.isInputInvalid(date))){
            return  moment(date).unix();
        }
    }

    /**
     *
     * @param date
     * @returns {boolean}
     */

    isDateValid(date){
        if(!this.isInputInvalid(date)){
            return moment(date).isValid();
        }
    }

    /**
     * Checks if the input is null or undefined
     * @param input
     * @returns {boolean}
     */


    isInputInvalid(input){

        return (input === null || input === undefined)

    }

    isNumber(input){

        return typeof (input) === "number"

    }
}

module.exports = new DateChecker();