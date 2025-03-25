import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useData from '../hooks/useData';
import gameService, { Game } from '../services/game-service.ts';
import { Text, SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
    const { data: games, error, loading, setGames, setError } = useData<Game>(gameService);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl: 5}}
                    spacing={10}
                    padding={10}>
            { loading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)}
            { games && games.map(game =>
                <GameCardContainer key={game.id}>
                    <GameCard game={game}>{game.name}</GameCard>
                </GameCardContainer>
                )}
        </SimpleGrid>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;