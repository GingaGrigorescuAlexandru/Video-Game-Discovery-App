import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import GameGrid from './components/GameGrid';
import { Genre } from './services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';
import { Grid, GridItem, Show, VStack } from '@chakra-ui/react';

function App() {
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null);
  const [ selectedPlatform, setSelectedPlatform ] = useState<ParentPlatform | null>(null);

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
        <GridItem area='nav'><Navbar /></GridItem>
        <Show above="lg">
            <GridItem area='aside' padding={3}><GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}
                                                          selectedGenre={ selectedGenre } /></GridItem>
        </Show>
        <GridItem area='main'>
            <VStack align='start'>
                <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
                <GameGrid selectedGenre={ selectedGenre }
                          selectedPlatform={ selectedPlatform }/>
            </VStack>
        </GridItem>
       </Grid>
    </>
  )
}

export default App
