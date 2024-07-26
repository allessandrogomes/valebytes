import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { IoMdMenu } from "react-icons/io";
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import StartButton from '../StartButton';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Image src="/images/logo-1.png" width={160} height={45} alt="Logo ValeBytes" />
            </Typography>
            <Divider />
            <nav className="flex justify-center w-full mt-1.5">
                <ul className="flex flex-col gap-10 text-xl">
                    <li><a className="text-secondary cursor-pointer">Demos</a></li>
                    <li><a className="text-secondary cursor-pointer">Pages</a></li>
                    <li><a className="text-secondary cursor-pointer">Support</a></li>
                    <li><a className="text-secondary cursor-pointer">Contact</a></li>
                </ul>
            </nav>
            <StartButton />
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <header className="flex w-full h-[80px] justify-center absolute">
            <div className="flex justify-between items-center w-[80%] text-xl font-medium">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <IoMdMenu />
                </IconButton>
                <div className="flex items-center gap-10">
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: 'block' }}
                    >
                        <Image src="/images/logo-1.png" width={160} height={45} alt="Logo ValeBytes" />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <nav className="flex justify-between w-[333px] mt-1.5">
                            <ul className="flex gap-10">
                                <li><a className="text-secondary cursor-pointer">Demos</a></li>
                                <li><a className="text-secondary cursor-pointer">Pages</a></li>
                                <li><a className="text-secondary cursor-pointer">Support</a></li>
                                <li><a className="text-secondary cursor-pointer">Contact</a></li>
                            </ul>
                        </nav>
                    </Box>
                </div>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <StartButton />
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
