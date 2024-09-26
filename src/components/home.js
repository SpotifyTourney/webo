import {React, useEffect, useCallback} from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
    mutation CreateUser($input: String!) {
        createUser(code: $input)
    }
`
const extractCode = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const newUrl = window.location.origin + window.location.pathname; 
    window.history.replaceState({}, document.title, newUrl);
    return code;
}

function Home() {
    const [user] = useMutation(CREATE_USER);

    const handleCode = useCallback(async (code) => {
        if (code) { 
            const data = await user({ variables: { input: code } });
            console.log(data);
        }
    }, [user])

    useEffect(() => {
        const code = extractCode();
        handleCode(code); 
    }, [handleCode]);
  
    return (
        <p>HOME PAGE</p>
    );
}

export default Home