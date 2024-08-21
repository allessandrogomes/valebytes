import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { IoMdMenu } from "react-icons/io";
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import StartButton from '../StartButton';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: '10px', backgroundColor: '#00284b', height: '100%', py: '20px' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Image src="/images/valebytes-logo-white.webp" width={120} height={45} alt="Logo ValeBytes" />
            </Typography>
            <Divider />
            <nav className="flex justify-center w-full mt-1.5">
                <ul className="flex flex-col gap-10 text-base font-medium">
                    <li>
                        <Link href="#inicio" className="text-secondary cursor-pointer">Início</Link>
                    </li>
                    <li>
                        <Link href="#projetos" className="text-secondary cursor-pointer">Projetos</Link>
                    </li>
                    <li>
                        <Link href="#diferenciais" className="text-secondary cursor-pointer">Diferenciais</Link>
                    </li>
                    <li>
                        <Link href="#sobre" className="text-secondary cursor-pointer">Sobre</Link>
                    </li>
                    <li>
                        <Link href="#contato" className="text-secondary cursor-pointer">Contato</Link>
                    </li>
                </ul>
            </nav>
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, gap: "50px", alignItems: "center", color: "#2DD36B", flexDirection: "column" }}>
                <StartButton />
                <Link target='_blank' href="https://www.google.com/">
                    <FaWhatsapp size={35} />
                </Link>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <header className="fixed z-[999] flex w-full h-[80px] justify-center mb-[150px] bg-[#00284b]">
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
                    sx={{ display: 'block', width: '120px' }}
                >
                    <Image src="/images/valebytes-logo-white.webp" width={120} height={45} alt="Logo ValeBytes" />
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <nav className="flex w-full mt-1.5">
                        <ul className="flex gap-10 text-base font-medium">
                            <li>
                                <Link href="#inicio" className="text-secondary cursor-pointer">Início</Link>
                            </li>
                            <li>
                                <Link href="#projetos" className="text-secondary cursor-pointer">Projetos</Link>
                            </li>
                            <li>
                                <Link href="#diferenciais" className="text-secondary cursor-pointer">Diferenciais</Link>
                            </li>
                            <li>
                                <Link href="#sobre" className="text-secondary cursor-pointer">Sobre</Link>
                            </li>
                            <li>
                                <Link href="#contato" className="text-secondary cursor-pointer">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: "center", color: "#2DD36B" }}>
                    <StartButton />
                    <Link target='_blank' href="https://www.google.com/">
                        <FaWhatsapp style={{ position: "relative", left: "30px" }} size={35} />
                    </Link>
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
