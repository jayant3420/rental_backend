"use strict"

class CommonHelper {
   /**
   * Method: sendSuccess
   * Purpose: resonse formate create
   * @param {*} res
   * @param {*} status
   * @param {*} response
   * @response {*} http response
   */
    sendSuccess = (res, status, statusCode, message = null, data, total = null) => {
        let resData = { success: status, data: data };
        if(total) {
            resData = Object.assign(resData, {total: total})
        }
        if(message) {
            resData = Object.assign(resData, {
                message: typeof message === 'string' ? res.__(message) : res.__(message.key, message.value)
            });
        }
        res.status(statusCode).json(resData);
    }

    /**
   * Method: sendError
   * Purpose: error response formate
   * @param {*} res
   * @param {*} status
   * @param {*} response
   * @response {*} http response
   */
    sendError = (res, status, statusCode, message, data = []) => {
        res.status(statusCode).json({
            success: status,
            message: typeof message === 'string' ? res.__(message) : res.__(message.key, message.value),
            data: data
        });
    }
}

module.exports.CommonHelper = new CommonHelper();