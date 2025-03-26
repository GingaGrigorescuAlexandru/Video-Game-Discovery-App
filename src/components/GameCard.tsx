import PlatformIcons from './PlatformIcons';
import MetacriticScore from './MetacriticScore';
import Emoji from './Emoji';
import { Game } from '../services/game-service.ts';
import getCroppedImageUrl from '../services/image-url.ts';
import { Card, CardBody, Image, Heading, Text, HStack } from '@chakra-ui/react';

interface Props {
    game: Game;
    }

const GameCard = ({ game }: Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIcons platforms={game.parent_platforms}/>
                    <MetacriticScore metacritic={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
        )
    };

export default GameCard;