import useGenres from '../hooks/useGenres';
import { Heading, Text, VStack } from '@chakra-ui/react';


const FilterSection = () => {
    const { genres, error, loading, setGenres, setError } = useGenres();

    return (
        <>
            <Heading padding={2}>Genres</Heading>
            <VStack align='start' spacing={2} padding={3} >
            { genres && genres.map(genre =>
                <Text>{genre.name}</Text>
                )}
            </VStack>
        </>
        )
    };

export default FilterSection;