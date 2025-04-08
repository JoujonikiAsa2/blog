/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Select, Text } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { BiSolidDownArrow } from 'react-icons/bi'

type TSelectProps = {
    name: string
    label?: string
    placeholder?: string
    sx?: any
    data: Record<string, any>
    inputWidth?: number
}

export const CustomSelect = ({
    name,
    label,
    placeholder,
    inputWidth,
    data,
}: TSelectProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl mb="4" width={'100%'} display={'flex'}>
                    <FormLabel
                        htmlFor={name}
                        width={inputWidth ?? 191}
                        fontSize={'25px'}
                        fontWeight={'normal'}
                    >
                        {label} :
                    </FormLabel>
                    <Select
                        {...field}
                        icon={<BiSolidDownArrow fill="#AFAFAF" />}
                        placeholder={placeholder}
                        width={'304px'}
                        bg={'#D9F2F7'}
                        className={`ring-1 ring-[#7099C8] bg-[#D9F2F7] rounded-[4px] focus:ring-0 border-none shadow-none focus:shadow-none focus:outline-none focus:border-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-[#7099C8]`}
                    >
                        {data.map((item: any) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                        <option key={1} value={'Apple'}>
                                Apple
                            </option>
                    </Select>
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
