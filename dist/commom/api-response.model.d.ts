export declare class ApiResponse {
    static success(data: any): {
        status: number;
        msg: string;
        data: any;
    };
    static successWithData(data: any, message?: string): {
        status: number;
        msg: string;
        data: any;
    };
    static error(data: any): {
        status: number;
        msg: string;
        data: any;
    };
}
