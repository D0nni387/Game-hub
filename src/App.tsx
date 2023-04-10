import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="blackAlpha.400">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blackAlpha.600">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blackAlpha.100">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
