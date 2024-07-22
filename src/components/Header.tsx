import { Avatar, Flex, Text } from "@radix-ui/themes";

export const Header = () => {
  return (
    <Flex justify="center" width="100%" py="8">
      <Flex gap="5" align="center">
        <Avatar size="5" fallback="A" src="/yt-playmark-logo.webp" />
        <Text size="9">YT Playmark</Text>
      </Flex>
    </Flex>
  );
};
