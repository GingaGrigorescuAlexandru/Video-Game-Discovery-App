import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoSearchOutline } from "react-icons/io5";

interface Props {
    onSearch: (searchText: string) => void;
    }

const SearchBar = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event) => {
                event.preventDefault();
                if (inputRef.current) onSearch(inputRef.current.value);
                }}>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <IoSearchOutline />
                </InputLeftElement>
                <Input placeholder="Search games..."
                       variant='filled'
                       ref={inputRef}
                       borderRadius='20px'/>
            </InputGroup>
        </form>
    );
};

export default SearchBar;