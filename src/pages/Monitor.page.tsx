import { useState, useEffect } from 'react';
import { Box, Loader } from '@mantine/core';
import { LogTable } from '../components/LogTable/LogTable';

const waitData = {
    time: "wait",
    protocol: "wait",
    msg: "wait",
    priority: 1,
    src_ip: "wait",
    src_port: "wait",
    dst_ip: "wait",
    dst_port: "wait"
}

export function MonitorPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_API+'alerts')
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);
  

  return (
    <Box m={30}>
      {loading ? <Loader/> : <LogTable data={data || [waitData]} />}
    </Box>
  );
}
