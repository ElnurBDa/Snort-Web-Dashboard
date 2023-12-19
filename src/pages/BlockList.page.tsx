import { useState, useEffect } from 'react';
import { BlockIpTable } from "@/components/BlockIpTable/BlockIpTable";
import { Box, Loader } from "@mantine/core";

const waitData = {
  time: "wait",
  ip: "wait",
  msg: {}
}

export function BlockListPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_API+'block')
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const newData = data.blockList.map((row:any) => {
        return {
          time: row.time,
          ip: row.ip,
          msg: JSON.stringify(row.msg)
        }
      })
      setData(newData)
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);
  
  return (
    <Box m={30}>
    {loading ? <Loader/> : <BlockIpTable data={data || [waitData]}/>}
    </Box>
  );
}
