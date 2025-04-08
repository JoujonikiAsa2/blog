import { CustomButton } from '@/components/custom/CustomButton'
import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import { LuSearch } from 'react-icons/lu'
import { BlogFilter } from './BlogFilter'

const BlogSearch = () => {
    return (
        <Flex direction={'column'} gap={4} px={2}>
            <Text fontSize={'34px'} fontWeight={'medium'}>
                Blogs
            </Text>
            <Flex
                width={'100%'}
                gap={4}
                align={'center'}
                justify={'space-between'}
            >
                <InputGroup flex={1}>
                    <InputLeftElement>
                        <Menu size={16} />
                    </InputLeftElement>
                    <Input
                        background={'#D9F2F7'}
                        borderRadius={'100px'}
                        border={'none'}
                        shadow={'lg'}
                        type="search"
                        width={'100%'}
                        paddingRight="40px"
                        placeholder="Search blog by Title/Author's name/Destination/Category"
                    />
                    <InputRightElement>
                        <LuSearch />
                    </InputRightElement>
                </InputGroup>
                <CustomButton
                    text="Search"
                    color="white"
                    bgColor="#003B95"
                    width={185}
                    sx={{
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 400,
                    }}
                />
            </Flex>
            <BlogFilter />
        </Flex>
    )
}

export default BlogSearch
