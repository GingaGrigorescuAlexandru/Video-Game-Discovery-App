import { Box, Skeleton,SkeletonText } from '@chakra-ui/react';
import { Card, CardBody, Image, Heading, Text, HStack } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card width='300px' borderRadius={10} overflow='hidden'>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
        )
    };

export default GameCardSkeleton;