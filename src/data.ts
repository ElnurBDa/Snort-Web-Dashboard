const data1 = "12/18-15:40:24.705120  [*] [1:100001:1] ICMP Ping Detected [*] [Priority: 0] {ICMP} 192.168.8.154 -> 192.168.8.142"
const data1JSON = {
    time: "12/18-15:40:24.705120",
    protocol: "ICMP",
    msg: "ICMP Ping Detected",
    priority: 0,
    src_ip: "192.168.8.154",
    src_port:"",
    dst_ip: "192.168.8.142",
    dst_port:""
}
const data2 = "12/18-20:48:20.448903  [**] [1:10003:1] TCP Connection Attempt Detected [**] [Priority: 0] {TCP} 192.168.152.1:10427 -> 192.168.152.130:22"
const data2JSON = {
    time: "12/18-20:48:20.448903",
    protocol: "TCP",
    msg: "TCP Connection Attempt Detected",
    priority: 0,
    src_ip: "192.168.152.1",
    src_port: 10427,
    dst_ip: "192.168.152.130",
    dst_port: 22
}
import { LogData } from "./interfaces/LogData";

export const data: LogData[] = [
    {
        time: "12/18-15:40:24.705120",
        protocol: "ICMP",
        msg: "ICMP Ping Detected",
        priority: 0,
        src_ip: "192.168.8.154",
        src_port:"",
        dst_ip: "192.168.8.142",
        dst_port:""
    }, 
    {
        time: "12/18-20:48:20.448903",
        protocol: "TCP",
        msg: "TCP Connection Attempt Detected",
        priority: 0,
        src_ip: "192.168.152.1",
        src_port: 10427,
        dst_ip: "192.168.152.130",
        dst_port: 22
    },
    {
        time: "12/19-09:15:10.123456",
        protocol: "UDP",
        msg: "UDP Packet Detected",
        priority: 1,
        src_ip: "192.168.10.10",
        src_port: 5000,
        dst_ip: "192.168.10.20",
        dst_port: 8000
    },
    {
        time: "12/19-12:30:45.987654",
        protocol: "TCP",
        msg: "HTTP Request Blocked",
        priority: 2,
        src_ip: "192.168.20.50",
        src_port: 8080,
        dst_ip: "192.168.20.100",
        dst_port: 80
    }
];
import { BlockIpData } from "./interfaces/BlockIpData";

export const blockListDate: BlockIpData[] = [
    {
        time: "12/19-09:15:10.123456",
        ip: "192.168.20.50",
        msg: "HTTP Request Blocked"
    }, 
    {
        time: "12/19-12:30:45.987654",
        ip: "192.168.10.10",
        msg: "UDP Packet Detected"
    }
]