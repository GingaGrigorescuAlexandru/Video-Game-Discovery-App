import { ListItem, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {

    return (
        <>
        <ListItem maxH='14px' spacing={2}>
            <HStack width='100%'>
                <Skeleton height='32px' width='18%' borderRadius='8px'/>
                <SkeletonText noOfLines={2} spacing='4px' width='60%' />
            </HStack>
        </ListItem>
        </>
        )
    };

export default GenreListSkeleton;