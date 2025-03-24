import PlatformIcons from './PlatformIcons';
import MetacriticScore from './MetacriticScore';
import { Game } from '../services/game-service.ts';
import { Card, CardBody, Image, Heading, Text, HStack } from '@chakra-ui/react';

interface Props {
    game: Game;
    }

const GameCard = ({ game }: Props) => {

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIcons platforms={game.parent_platforms}/>
                    <MetacriticScore metacritic={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
        )
    };

export default GameCard;