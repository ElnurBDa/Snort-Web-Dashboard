import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Group justify="center" mt="xl">
      <Button color={colorScheme === 'light' ? 'green' : 'pink'} onClick={toggleColorScheme}>Make {colorScheme === 'light' ? 'Dark' : 'Light'}</Button>
    </Group>
  );
}
