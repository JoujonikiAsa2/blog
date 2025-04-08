/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel } from '@chakra-ui/react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { Controller } from 'react-hook-form'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CustomDatePicker = ({ label }: any) => {
    console.log(new Date())
    return (
        <Controller
            name="publicationdate"
            render={({ field }) => (
                <FormControl mb="4" width={'100%'} display={'flex'}>
                    <FormLabel
                        htmlFor="publicationdate"
                        width={210}
                        fontSize={'25px'}
                        fontWeight={'normal'}
                    >
                        {label} :
                    </FormLabel>
                    <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date: Date | null) =>
                            date && field.onChange(date)
                        }
                        placeholderText="DD/MM/YYYY"
                        dateFormat={'dd/MM/yyyy'}
                        className={`w-[200px] h-full bg-[#D9F2F7] ring-1 ring-[#7099C8] rounded-[4px] focus:ring-0 border-none shadow-none focus:shadow-none focus:outline-none focus:border-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-[#7099C8] !py-[10px] text-center`}
                    />
                </FormControl>
            )}
        />
    )
}
