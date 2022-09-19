import { Icon, Select, SelectProps } from '@chakra-ui/react';
import { TbChevronDown } from 'react-icons/tb';

// background: linear-gradient(90deg, rgba(253,193,205,1) 0%, rgba(254,161,183,1) 100%);
export default function TGGSelect({ children, ...props }: SelectProps) {
  return (
    <Select
      color="white"
      iconSize="1.5rem"
      fontSize="1rem"
      borderColor="brand.pink"
      borderRadius="full"
      iconColor="brand.flame"
      fontWeight="extrabold"
      sx={{
        background:
          'linear-gradient(90deg, rgba(253,193,205,1) 0%, rgba(254,161,183,1) 100%)',
      }}
      textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
      icon={
        <Icon
          as={TbChevronDown}
          color="brand.pink"
          mx="3"
          bg="white"
          borderRadius="full"
          sx={{ color: 'pink' }}
        />
      }
      {...props}
    >
      {children}
    </Select>
  );
}
