import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
      <Switch colorScheme='purple' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  )
}

export default ColorModeSwitch