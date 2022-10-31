import { Button as NativeBaseButton, IButtonProps, Text } from "native-base"

type Props = IButtonProps & {
    title: string
}
export function Button({ title, ...rest }: Props) {
    return (
        <NativeBaseButton
            {...rest}
            h='16'
            bg={'green.700'}
        >
            <Text color={'white'}>
                {title}
            </Text>
        </NativeBaseButton>
    )
}