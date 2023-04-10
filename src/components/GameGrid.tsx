import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GamesCard } from "./GamesCard";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={10}
          spacing={10}
        >
          {games.map((game) => (
            <GamesCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      ))}
    </>
  );
};
