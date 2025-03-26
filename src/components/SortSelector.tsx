import { BsChevronDown } from 'react-icons/bs';
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

interface Props {
    onSelectSort: (sortOption: string) => void;
    selectedSort: string;
    }

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                    <MenuItem >Relevance</MenuItem>
                    <MenuItem >Date added</MenuItem>
                    <MenuItem >Name</MenuItem>
                    <MenuItem >Release date</MenuItem>
                    <MenuItem >Popularity</MenuItem>
                    <MenuItem >Average rating</MenuItem>
            </MenuList>
        </Menu>
        )
    };

export default SortSelector;