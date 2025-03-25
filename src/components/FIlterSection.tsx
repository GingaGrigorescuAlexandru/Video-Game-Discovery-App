import useData from '../hooks/useData';
import genreService, { Genre } from '../services/genre-service.ts';
import getCroppedImageUrl from '../services/image-url.ts';
import { Heading, VStack, HStack, Image, Text } from '@chakra-ui/react';


const FilterSection = () => {
    const { data: genres, error, loading, setGenres, setError } = useData<Genre>(genreService);

    return (
        <>
            <Heading padding={2}>Genres</Heading>
            <VStack align='start' spacing={10} padding={3} >
            { genres && genres.map(genre =>
                <HStack key={genre.id} maxH='14px' spacing={2}>
                    <Image src={getCroppedImageUrl(genre.image_background)}
                            borderRadius='10px'
                            boxSize="40px"
                            objectFit="cover"/>
                    <Text>{genre.name}</Text>
                </HStack>
                )}
            </VStack>
        </>
        )
    };

export default FilterSection;