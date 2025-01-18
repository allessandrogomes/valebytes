/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { IoMdMenu } from "react-icons/io";
import Typography from '@mui/material/Typography';
import StartButton from '../StartButton';
import { Link } from 'react-scroll'
import { FaWhatsapp } from "react-icons/fa";

interface Props {
    windowContainer?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {

    const { windowContainer } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: '10px', backgroundColor: '#021526', height: '100%', py: '20px' }}>
            <Box sx={{ width: "170px" }}>
                <img src="/images/valebytes-logo-transparent.png" alt="Logo ValeBytes" />
            </Box>
            <Divider />
            <nav className="flex justify-center w-full mt-1.5">
                <ul className="flex flex-col gap-10 text-base font-medium">
                    <li>
                        <Link to="inicio" role="button" aria-label="Scroll to respective Section" spy smooth duration={50} className="text-color2 cursor-pointer">Início</Link>
                    </li>
                    <li>
                        <Link to="projetos" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Projetos</Link>
                    </li>
                    <li>
                        <Link to="diferenciais" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Diferenciais</Link>
                    </li>
                    <li>
                        <Link to="sobre" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Sobre</Link>
                    </li>
                    <li>
                        <Link to="contato" role="button" aria-label="Scroll to respective Section" spy smooth offset={-100} duration={50} className="text-color2 cursor-pointer">Contato</Link>
                    </li>
                </ul>
            </nav>
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, gap: "50px", alignItems: "center", color: "#FFFFFF", flexDirection: "column" }}>
                <StartButton />
                <a target='_blank' href="https://www.google.com/">
                    <FaWhatsapp style={{ color: "#2DD36B" }} size={35} />
                </a>
            </Box>
        </Box>
    );

    const container = windowContainer !== undefined ? () => windowContainer().document.body : undefined;

    return (
        <header className="fixed z-[999] flex w-full h-[80px] justify-center mb-[150px]">
            <div className="flex justify-evenly items-center w-full text-xl font-medium">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <IoMdMenu />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: 'block', width: '160px' }}
                >
                    <img src="/images/valebytes-logo-transparent.png" alt="Logo ValeBytes" />
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <nav className="flex w-full mt-1.5">
                        <ul className="flex gap-10 text-base font-medium list-no-mobile">
                            <li>
                                <Link to="inicio" role="button" aria-label="Scroll to respective Section" spy smooth duration={50} className="text-color2 cursor-pointer">Início</Link>
                            </li>
                            <li>
                                <Link to="projetos" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Projetos</Link>
                            </li>
                            <li>
                                <Link to="diferenciais" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Diferenciais</Link>
                            </li>
                            <li>
                                <Link to="sobre" role="button" aria-label="Scroll to respective Section" spy smooth offset={-200} duration={50} className="text-color2 cursor-pointer">Sobre</Link>
                            </li>
                            <li>
                                <Link to="contato" role="button" aria-label="Scroll to respective Section" spy smooth offset={-100} duration={50} className="text-color2 cursor-pointer">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: "center", color: "#FFFFFF" }}>
                    <StartButton />
                    <a target='_blank' href="https://www.google.com/">
                        <FaWhatsapp style={{ position: "relative", left: "30px", color: "#2DD36B" }} size={35} />
                    </a>
                </Box>
            </div>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </header>
    );
}
