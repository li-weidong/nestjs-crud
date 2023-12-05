// api-response.model.ts
export class ApiResponse {
    static success(data: any) {
      return {
        status: 0,
        msg: 'success',
        data,
      };
    }
  
    static successWithData(data: any, message: string = 'success') {
      return {
        status: 0,
        msg: message,
        data,
      };
    }
  
    static error(data: any) {
      return {
        status: 1,
        msg: 'error',
        data,
      };
    }
  }
  