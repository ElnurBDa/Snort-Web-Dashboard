import { Box } from "@mantine/core";
import { LogTable } from "../components/LogTable/LogTable";
import {data} from "../data"

export function MonitorPage() {
  return (
    <Box m={30}>
        <LogTable data={data}/>
    </Box>
  );
}
