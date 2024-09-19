import { Box, HStack, Image, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Show, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import GenreList from './GenreList';  // Assuming GenreList is your sidebar content

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding="12px" display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>

      {/* Search Input for large and small screens */}
      <Box flex="1" textAlign={{ base: "center", lg: "left" }} paddingX={{ base: '0', lg: '20px' }}>
        <SearchInput />
      </Box>

      <HStack spacing={4}>
        {/* Menu Icon for mobile screens */}
        <Show below="lg">
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </Show>

        {/* Color Mode Switch */}
        <ColorModeSwitch />
      </HStack>

      {/* Drawer for the Sidebar on small screens */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {/* Pass onClose to GenreList to close drawer on genre select */}
            <GenreList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
