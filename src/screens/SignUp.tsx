import { VStack, Heading, Center } from 'native-base'
import { Input } from './components/Input';
import { Button } from './components/Button';

export function SignUp() {
    return (
        <VStack
            bgColor={'gray.200'}
            flex={'1'}
            px={'10'}
        >
            < Center>
                <Heading my={24} >
                    Crie sua conta
                </Heading>
            </Center>
            <Input placeholder='Nome' />
            <Input placeholder='E-Mail' />
            <Input placeholder='Senha' />
            <Input placeholder='Confirme a senha' />
            <Button title='Inscrever-se' />
        </VStack >
    );
}