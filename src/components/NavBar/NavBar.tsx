import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import { IconHome, IconAnalyze, IconList } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const data = [
    { link: '/', label: 'Home', icon: IconHome },
    { link: '/monitor', label: 'Monitor', icon: IconAnalyze },
    { link: '/blocklist', label: 'Block List', icon: IconList },
];

export function NavBar({active_page}:{active_page:string}) {
    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active_page || undefined}
            href={item.link}
            key={item.label}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <Code fw={700}>Snort-Web-Dashboard</Code>
                    <Code fw={700}>v1.0.2</Code>
                </Group>
                {links}
                <Group className={classes.footer} justify="space-between">
                    <ColorSchemeToggle />
                </Group>
            </div>
        </nav>
    );
}