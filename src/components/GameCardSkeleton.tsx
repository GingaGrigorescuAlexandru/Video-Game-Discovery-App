import { Box, Skeleton,SkeletonText } from '@chakra-ui/react';
import { Card, CardBody, Image, Heading, Text, HStack } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
        )
    };

export default GameCardSkeleton;