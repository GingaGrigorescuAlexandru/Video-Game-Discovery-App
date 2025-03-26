import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameGrid from './components/GameGrid';
import { Genre } from './services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';
import { Grid, GridItem, Show, VStack, Box, HStack } from '@chakra-ui/react';

export interface GameQuery {
    genre: Genre | null;
    platform: ParentPlatform | null;
    sortOrder: string | null;
    searchText: string | null;
    }

function App() {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)
  return (
    <>
       <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       }} templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
       }}
       >
        <GridItem area='nav'><Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/></GridItem>
        <Show above="lg">
            <GridItem area='aside' padding={3}><GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                                                          selectedGenre={ gameQuery.genre } /></GridItem>
        </Show>
        <GridItem area='main'>
            <VStack align='start'>
                <Box paddingLeft={5}>
                    <GameHeading gameQuery={ gameQuery }/>
                    <HStack spacing={5}>
                        <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                                          selectedPlatform={ gameQuery.platform } />
                        <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
                                      selectedOrder={ gameQuery.sortOrder }/>
                    </HStack>
                </Box>
                <GameGrid gameQuery={ gameQuery }/>
            </VStack>
        </GridItem>
       </Grid>
    </>
  )
}

export default App
