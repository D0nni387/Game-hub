import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GamesCard } from "./GamesCard";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={10}
          spacing={10}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key="skeleton" />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer>
              <GamesCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      ))}
    </>
  );
};
