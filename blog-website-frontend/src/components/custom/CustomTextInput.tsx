/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

type TInputProps = {
    type: string
    name: string
    label?: string
    disabled?: boolean
    inputWidth?: any
    placeholder?: string
    defaultValue?: string
    sx?: any
}

export const CustomTextInput = ({
    type,
    name,
    label,
    inputWidth,
    placeholder,
    sx,
}: TInputProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl mb="4" width={'100%'} display={'flex'}>
                    <FormLabel
                        htmlFor={name}
                        width={191}
                        fontSize={'25px'}
                        fontWeight={'normal'}
                    >
                        {label} :
                    </FormLabel>
                    <Input
                        {...field}
                        bg={'#D9F2F7'}
                        type={type}
                        id={name}
                        placeholder={placeholder}
                        sx={sx}
                        width={inputWidth}
                        px={10}
                        className={`ring-1 ring-[#7099C8] rounded-[4px] focus:ring-0 border-none shadow-none focus:shadow-none focus:outline-none focus:border-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-[#7099C8]`}
                    />
                    {error && (
                        <Text color={'red.500'} fontSize="sm" mt={1}>
                            {error.message}
                        </Text>
                    )}
                </FormControl>
            )}
        />
    )
}
