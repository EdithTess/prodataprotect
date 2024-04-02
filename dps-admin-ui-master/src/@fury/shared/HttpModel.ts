export interface DataServiceError {
    message: string;
    path: string;
    value: string;
    code?: string;
    values?: string[];
}
