import useGames from '../hooks/useGames';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
    const { games, error, loading, setGames, setError } = useGames();

    return (
        <>
        <ul>
            { games && games.map(game =>
                <li key={game.id}>{game.name}</li>)}
        </ul>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;