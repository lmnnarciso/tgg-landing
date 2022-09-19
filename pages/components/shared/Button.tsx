import { Button, ButtonProps } from '@chakra-ui/react';

export default function TGGButton(props: ButtonProps) {
  return (
    <Button
      display="block"
      color="white"
      bg="linear-gradient(90deg, rgba(253,193,205,1) 0%, rgba(254,161,183,1) 100%)"
      fontSize="1.5rem"
      width="100%"
      borderRadius="full"
      textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
      {...props}
    >
      {props.children}
    </Button>
  );
}
