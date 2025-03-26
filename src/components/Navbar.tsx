import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import SearchBar from './SearchBar';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
    onSearch: (searchText: string) => void;
    }

const Navbar = ({ onSearch }: Props) => {
    return (
        <>
         <HStack padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <SearchBar onSearch={onSearch}/>
            <ColorModeSwitch />
         </HStack>
        </>
        );
    };

export default Navbar;