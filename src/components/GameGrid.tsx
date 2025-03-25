import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../hooks/useGames';
import { Genre } from '../services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';
import { Text, SimpleGrid } from '@chakra-ui/react';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: ParentPlatform | null;
    }

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data: games, error, loading } = useGames(selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg:3, xl: 5}}
                    spacing={3}
                    padding={10}>
            { loading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>)}
            { games && games.map(game =>
                !selectedGenre || game.genres.some(genre => genre.id === selectedGenre.id) ? (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}>{game.name}</GameCard>
                </GameCardContainer> ) : null
                )}
        </SimpleGrid>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;