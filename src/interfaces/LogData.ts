export interface LogData {
    time: string;
    protocol: string;
    msg: string;
    priority: number;
    src_ip: string;
    src_port: string | number;
    dst_ip: string;
    dst_port: string | number;
}