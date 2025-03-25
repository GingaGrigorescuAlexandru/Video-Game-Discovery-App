import GenreListSkeleton from './GenreListSkeleton';
import useGenre from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url.ts';
import { Heading, List, ListItem, HStack, Image, Text } from '@chakra-ui/react';


const GenreList = () => {
    const { data: genres, loading, error } = useGenre();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (error) return null;


    return (
        <>
            <Heading>Genres</Heading>
            <List align='start' spacing={8}>
            { loading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}/> )}
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