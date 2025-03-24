import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames from '../hooks/useGames';
import { Text, SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
    const { games, error, loading, setGames, setError } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6];


    return (
        <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl: 5}}
                    spacing={10}
                    padding={10}>
            { loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
            { games && games.map(game =>
                <div key={game.id}>
                    <GameCard game={game}>{game.name}</GameCard>
                </div>
                )}
        </SimpleGrid>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;