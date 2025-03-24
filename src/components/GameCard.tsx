import PlatformIcons from './PlatformIcons';
import { Game } from '../services/game-service.ts';
import { Card, CardBody, Image, Heading, Text } from '@chakra-ui/react';

interface Props {
    game: Game;
    }

const GameCard = ({ game }: Props) => {

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIcons platforms={game.parent_platforms}/>
            </CardBody>
        </Card>
        )
    };

export default GameCard;