import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    nintendo: SiNintendo,
  };

  return (
    <HStack margin={0.5}>
      {platforms.map((platform) => (
        <Icon
          as={platformIcons[platform.slug]}
          key={platform.slug}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};
