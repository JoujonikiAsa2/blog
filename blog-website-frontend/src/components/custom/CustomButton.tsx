import { Button } from "@chakra-ui/react"

/* eslint-disable @typescript-eslint/no-explicit-any */
type TButtonProps = {
    type?: any
    text: string
    color: string
    bgColor?: string
    width?: any
    height?: any
    sx?: any
}

export const CustomButton = ({type,text, color, bgColor, width, height, sx}: TButtonProps) => {
    return (
        <Button type={type} bg={bgColor} color={color} width={width} height={height} sx={sx}>
            {text}
        </Button>
    );
};