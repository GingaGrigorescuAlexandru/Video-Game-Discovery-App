import { Platform } from '../services/game-service.ts';
import { FaWindows,
         FaPlaystation,
         FaXbox,
         FaApple,
         FaLinux,
         FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Icon, HStack } from '@chakra-ui/react';

interface Props {
    platform: Platform[];
    }

const PlatformIcons = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
         pc: FaWindows,
         playstation: FaPlaystation,
         xbox: FaXbox,
         nintendo: SiNintendo,
         web: BsGlobe,
         mac: FaApple,
         linux: FaLinux,
         ios: MdPhoneIphone,
         android: FaAndroid
        }
    return (
        <HStack marginY={2}>
            { platforms.map(({platform}) =>
            (<Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />))}
        </HStack>
        );
    };

export default PlatformIcons;