import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    keys,
    Button,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './LogTable.module.css';
import {LogData} from "../../interfaces/LogData";

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: LogData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query))
    );
}

function sortData(
    data: LogData[],
    payload: { sortBy: keyof LogData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].toString().localeCompare(a[sortBy].toString());
            }

            return a[sortBy].toString().localeCompare(b[sortBy].toString());
        }),
        payload.search
    );
}

export function LogTable({data}: {data: LogData[]}) {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof LogData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof LogData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const blockIp = (ip:string, msg:any) => {
        fetch(import.meta.env.VITE_BACKEND_API+'block', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ip, msg }),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };

    const rows = sortedData.map((row, index) => (
        <Table.Tr key={index}>
            <Table.Td>{row.time}</Table.Td>
            <Table.Td>{row.protocol}</Table.Td>
            <Table.Td>{row.msg}</Table.Td>
            <Table.Td>{row.priority}</Table.Td>
            <Table.Td>{row.src_ip}</Table.Td>
            <Table.Td>{row.src_port}</Table.Td>
            <Table.Td>{row.dst_ip}</Table.Td>
            <Table.Td>{row.dst_port}</Table.Td>
            <Table.Td>
                <Button color="red" onClick={() => blockIp(row.src_ip, row)}>
                    Block IP
                </Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'time'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('time')}
                        >
                            Time
                        </Th>
                        <Th
                            sorted={sortBy === 'protocol'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('protocol')}
                        >
                            Protocol
                        </Th>
                        <Th
                            sorted={sortBy === 'msg'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('msg')}
                        >
                            Message
                        </Th>
                        <Th
                            sorted={sortBy === 'priority'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('priority')}
                        >
                            Priority
                        </Th>
                        <Th
                            sorted={sortBy === 'src_ip'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('src_ip')}
                        >
                            Source IP
                        </Th>
                        <Th
                            sorted={sortBy === 'src_port'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('src_port')}
                        >
                            Source Port
                        </Th>
                        <Th
                            sorted={sortBy === 'dst_ip'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('dst_ip')}
                        >
                            Destination IP
                        </Th>
                        <Th
                            sorted={sortBy === 'dst_port'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('dst_port')}
                        >
                            Destination Port
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(data[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}