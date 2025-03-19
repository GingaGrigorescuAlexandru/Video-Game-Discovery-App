import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import { Grid, GridItem, Show } from '@chakra-ui/react';




function App() {
  return (
    <>
       <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
       }}>
        <GridItem area='nav'><Navbar /></GridItem>
        <Show above="lg">
            <GridItem area='aside'>Aside</GridItem>
        </Show>
        <GridItem area='main'><GameGrid /></GridItem>
       </Grid>


    </>
  )
}

export default App
