import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';


const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    const postDetails = (pic) => {

    }

    const submitHandle = () => {

    }

    return (
        <VStack spacing="5px">

            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter your Name' onChange={(e) => { setName(e.target.value) }} />
            </FormControl>

            <FormControl id="emai" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter your Email' onChange={(e) => { setName(e.target.value) }} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input type={show? "text" : "password"} placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>{show? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                    <Input type={show? "text" : "password"} placeholder='Confirm Password' onChange={(e) => { setConfirmpassword(e.target.value) }} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>{show? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic">
                <FormLabel>Upload your picture</FormLabel>
                <Input type="file" p={1.5} accept="image/*" onChange={(e)=>{postDetails(e.target.files[0])}}></Input>
            </FormControl>

            <Button colorScheme='green' width="100%" style={{ marginTop: 15 }} onClick={submitHandle} >Sign up</Button>
        </VStack>
    )
}

export default Signup 