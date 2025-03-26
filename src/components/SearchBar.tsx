import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    return (
        <InputGroup >
            <InputLeftElement pointerEvents="none">
                <IoSearchOutline />
            </InputLeftElement>
            <Input placeholder="Search games..."
                   variant='filled'
                   borderRadius='20px'/>
        </InputGroup>
    );
};

export default SearchBar;