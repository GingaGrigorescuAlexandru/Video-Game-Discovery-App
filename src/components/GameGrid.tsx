import GameCard from './GameCard';
import useGames from '../hooks/useGames';
import { Text, SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
    const { games, error, loading, setGames, setError } = useGames();

    return (
        <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl: 5}}
                    spacing={10}
                    padding={10}>
            { games && games.map(game =>
                <GameCard key={game.id} game={game}>{game.name}</GameCard>)}
        </SimpleGrid>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;