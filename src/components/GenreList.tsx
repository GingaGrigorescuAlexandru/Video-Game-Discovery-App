import useGenre from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url.ts';
import { Heading, List, ListItem, HStack, Image, Text } from '@chakra-ui/react';


const GenreList = () => {
    const { data: genres, error, loading, setGenres, setError } = useGenre();

    return (
        <>
            <Heading>Genres</Heading>
            <List align='start' spacing={8}>
            { genres && genres.map(genre =>
                <ListItem key={genre.id} maxH='14px' spacing={2}>
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)}
                                borderRadius='8px'
                                boxSize="32px"/>
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
                )}
            </List>
        </>
        )
    };

export default GenreList;