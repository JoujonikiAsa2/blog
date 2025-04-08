import { Box, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { BlogFrom } from './components/BlogFrom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API}`
console.log(image_hosting_api)

export default function BlogForm() {
    const [file, setFile] = useState([])
    const { control } = useForm<FormData>()

    console.log(file[0])

    const onSubmit = async (data: FieldValues) => {
        const res = await Promise.all(
            file.map(file => {
                const result = axios
                    .post(
                        image_hosting_api,
                        { image: file },
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        },
                    )
                    .then(res => res.data.data.url)
                return result
            }),
        )
        data.images = res
        const response = await axios.post(
            'http://localhost:3000/api/blogs',
            data,
        )

        if (response.status === 201) {
            toast.success('Blog created successfully')
        }
        console.log(response)
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
                <BlogFrom
                    onSubmit={onSubmit}
                    control={control}
                    setFile={setFile}
                />
            </Box>
        </Box>
    )
}
