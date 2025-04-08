/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

type TInputProps = {
    name: string
    label?: string
    disabled?: boolean
    inputWidth?: any
    inputHeight?: any
    placeholder?: string
    defaultValue?: string
    sx?: any
}

export const CustomTextArea = ({ name, label, placeholder,inputWidth, inputHeight, sx }: TInputProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl mb="4" width={'100%'} display={'flex'}>
                    <FormLabel
                        htmlFor={name}
                        width={191}
                        height={inputHeight}
                        fontSize={'25px'}
                        fontWeight={'normal'}
                    >
                        {label} :
                    </FormLabel>
                    <Textarea
                        {...field}
                        
                    bg={'#D9F2F7'}
                        id={name}
                        resize="none"
                        placeholder={placeholder}
                        sx={sx}
                        width={inputWidth}
                        height={inputHeight}
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
