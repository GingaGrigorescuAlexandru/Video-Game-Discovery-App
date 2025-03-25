import useParentPlatforms from '../hooks/useParentPlatforms';
import { ParentPlatform } from '../services/parent-platform-service.ts';
import { BsChevronDown } from 'react-icons/bs';
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

interface Props {
    onSelectPlatform: (platform: parentPlatform) => void;
    }

const PlatformSelector = ({ onSelectPlatform }: Props) => {
    const { data: parentPlatforms, loading, error } = useParentPlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
            <MenuList>
                { parentPlatforms && parentPlatforms.map(platform =>
                    <MenuItem key={platform.id}
                              onClick={() => onSelectPlatform(platform)}
                              >{platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
        )
    };

export default PlatformSelector;