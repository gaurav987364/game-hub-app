// import {
//   Box,
//   Button,
//   Heading,
//   HStack,
//   Image,
//   List,
//   ListItem,
//   Spinner
// } from '@chakra-ui/react';
// import useGenres from '../hooks/useGenres';
// import getCroppedImageUrl from '../services/image-url';
// import useGameQueryStore from '../store';

// const GenreList = () => {
//   const { data, isLoading, error } = useGenres();
//   const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
//   const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

//   if (error) return null;

//   if (isLoading) return <Spinner />;

//   return (
//     <>
//       <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
//         Genres
//       </Heading>
//       <List>
//         {data?.results.map((genre) => (
//           <ListItem key={genre.id} paddingY="7px">
//             <HStack  borderBottom={'1px solid gray'} paddingBottom={'3px'}>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 objectFit="cover"
//                 src={getCroppedImageUrl(genre.image_background)}
//               />
//               <Button
//                 whiteSpace="normal"
//                 textAlign="left"
//                 fontWeight={
//                   genre.id === selectedGenreId
//                     ? 'bold'
//                     : 'normal'
//                 }
//                 onClick={() => setSelectedGenreId(genre.id)}
//                 fontSize="md"
//                 variant="link"
//               >
//                 <Box  marginLeft={'6px'} fontWeight={'500'}>
//                 {genre.name}
//                 </Box>
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenreList;

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

interface GenreListProps {
  onClose?: () => void;  // Optional prop to handle closing the sidebar
}

const GenreList = ({ onClose }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenreId(genreId);
    if (onClose) onClose();  // Close the drawer if onClose is provided
  };

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack borderBottom={'1px solid gray'} paddingBottom={'3px'}>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  genre.id === selectedGenreId ? 'bold' : 'normal'
                }
                onClick={() => handleGenreSelect(genre.id)}
                fontSize="md"
                variant="link"
              >
                <Box marginLeft={'6px'} fontWeight={'500'}>
                  {genre.name}
                </Box>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
