import { Box, Button, Heading, Text } from "@chakra-ui/react";
import User from "../models/User";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Home(props: {user: User | null;}) {

  const nav = useNavigate();

  useEffect(() => {
    if (props.user != null) {
      nav('/chats')
    }
  }, [nav, props.user])
  
  return (
    <Box display='flex' flexDir='column' alignItems='center'>
      <Heading textAlign='center' size='3xl'>Welcome to <Heading as='span' size='3xl' color='red.300'>Branch</Heading></Heading>
      <Text fontSize={16} textAlign='center' marginTop={4} color='gray.500' w='50vw'>Get social in the nicest way</Text>
      <Box w='50vw' display='flex' justifyContent='space-around' marginTop={8}>
        <Link to='/register'><Button>Get Started</Button></Link>
        <Link to='/login'><Button bgColor='red.300' color='white' _hover={{bgColor: 'red.400'}}>Login</Button></Link>
      </Box>
    </Box>
  )
}