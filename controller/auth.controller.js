"use strict"
const { CommonHelper } = require("../utils/common-helper")
const Constant = require("../config/constant");

class AuthController {
    /**
     * Method: testing
     * Purpose: Testing
     * @param {*} req
     * @param {*} res
     * @returns 
     */
    testing = async (req, res) => {
        try {
            return CommonHelper.sendSuccess(res, true, Constant.STATUS_CODE.HTTP_200_OK, "DATABASE.RECORD_FETCH", [])
        } catch (e) {
            console.log("testing catch error ===>>>", e)
            return CommonHelper.sendError(res, false, Constant.STATUS_CODE.HTTP_400_BAD_REQUEST, "DATABASE.SOMETHING_WENT_WRONG", []);
        }
    }
}

module.exports = new AuthController()