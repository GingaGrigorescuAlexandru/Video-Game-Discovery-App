import useParentPlatforms from '../hooks/useParentPlatforms';
import { BsChevronDown } from 'react-icons/bs';
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

const PlatformSelector = () => {
    const { data: parentPlatforms, loading, error } = useParentPlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
            <MenuList>
                { parentPlatforms && parentPlatforms.map(platform =>
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
        )
    };

export default PlatformSelector;