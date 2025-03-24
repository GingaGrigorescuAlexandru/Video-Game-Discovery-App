import { Badge } from '@chakra-ui/react';

interface Props {
    metacritic: number;
    }

const MetacriticScore = ({metacritic}: Props) => {
    const color = metacritic > 75 ? 'green' : metacritic >= 60 ? 'yellow' : 'red';
    return (
        <>
            <Badge fontSize='14px'
                    paddingX={2}
                    borderRadius='4px'
                    colorScheme={color}>{metacritic}</Badge>
        </>
        )
    };

export default MetacriticScore;