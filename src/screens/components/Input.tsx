import { Input as NativeBaseInput, IInputProps } from "native-base"
export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bgColor='gray.300'
            fontSize='md'
            h={16}
            mb={4}
            _focus={{
                bg: "gray.200",
                borderWidth: '2',
                borderColor: 'green.500'

            }}
            {...rest}
        >

        </NativeBaseInput>
    )
}