import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}<br/>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'pink' }}>
          Snort-Web-Dashboard
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This web dashboard is designed for detecting and blocking Snort alerts. It provides a user-friendly interface to manage and monitor Snort intrusion detection system. To get started, please select a page from the sidebar.
      </Text>
    </>
  );
}
