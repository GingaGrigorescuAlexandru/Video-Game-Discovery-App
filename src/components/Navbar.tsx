import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import SearchBar from './SearchBar';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
    return (
        <>
         <HStack padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <SearchBar />
            <ColorModeSwitch />
         </HStack>
        </>
        );
    };

export default Navbar;