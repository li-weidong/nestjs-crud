"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(data) {
        return {
            status: 0,
            msg: 'success',
            data,
        };
    }
    static successWithData(data, message = 'success') {
        return {
            status: 0,
            msg: message,
            data,
        };
    }
    static error(data) {
        return {
            status: 1,
            msg: 'error',
            data,
        };
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.model.js.map