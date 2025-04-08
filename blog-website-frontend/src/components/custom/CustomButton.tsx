import { Box, Button, Flex, Text } from '@chakra-ui/react'

/* eslint-disable @typescript-eslint/no-explicit-any */
type TButtonProps = {
    type?: any
    text: string
    color: string
    bgColor?: string
    width?: any
    height?: any
    sx?: any
    icon?: any
}

export const CustomButton = ({
    type,
    text,
    color,
    bgColor,
    width,
    height,
    sx,
    icon,
}: TButtonProps) => {
    console.log(text)
    return (
        <Button
            type={type}
            bg={bgColor}
            color={color}
            width={width}
            height={height}
            sx={sx}
        >
            <Flex alignItems={'center'} gap={2}>
                <Text>{text}</Text>
                <Box>{icon}</Box>
            </Flex>
        </Button>
    )
}
