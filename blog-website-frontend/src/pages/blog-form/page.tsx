import { Box, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { BlogFrom } from './components/BlogFrom'

export default function BlogForm() {
    const {  control } = useForm<FormData>();

    const onSubmit = (data: FieldValues) => {
        const fileNames = control._formValues?.file
        data.file = fileNames
        console.log({ data })
    }
    
    return (
        <Box background={'#E0F7FA'} minHeight={'100vh'}>
            <Box maxWidth={'1512px'} mx={'auto'} px={75} pt={57}>
                <Text
                    fontSize={'32px'}
                    fontWeight={'bold'}
                    mb={20}
                    textShadow={'0px 2px 3px #00000040'}
                >
                    Blog Form
                </Text>
                <BlogFrom onSubmit={onSubmit} control={control}/>
            </Box>
        </Box>
    )
}
