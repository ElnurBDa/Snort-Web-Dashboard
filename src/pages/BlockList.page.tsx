import { BlockIpTable } from "@/components/BlockIpTable/BlockIpTable";
import { blockListDate } from "@/data";
import { Box } from "@mantine/core";

export function BlockListPage() {
  return (
    <Box m={30}>
    <BlockIpTable data={blockListDate}/>
    </Box>
  );
}
