import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url.ts';
import { Heading, VStack, HStack, Image, Text } from '@chakra-ui/react';


const FilterSection = () => {
    const { genres, error, loading, setGenres, setError } = useGenres();

    return (
        <>
            <Heading padding={2}>Genres</Heading>
            <VStack align='start' spacing={10} padding={3} >
            { genres && genres.map(genre =>
                <HStack maxH='14px' spacing={2}>
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