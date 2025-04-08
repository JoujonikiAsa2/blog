import { CustomButton } from '@/components/custom/CustomButton'
import { TBlogPost } from '@/types/blog'
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { BookmarkIcon, Eye, HeartIcon } from 'lucide-react'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import DropDownMenu from './DropDownMenu'

const style = {
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: 400,
}

const customButtonStyle = {
    color: 'white',
    bgColor: '#003B95',
    width: 'content-fit',
    height: 6,
    sx: { ...style },
}

const BlogCard = ({ data }: { data: TBlogPost }) => {
    return (
        <Flex
            direction={'column'}
            background={'#FFFFFF'}
            width={416}
            height={510}
            border={'1px solid #A8C8E1'}
            borderRadius={'16px'}
            py={5}
            px={4}
            justify={'space-between'}
            boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.1)'}
        >
            <Flex direction={'column'} gap={2}>
                <Flex justify={'space-between'} align={'center'}>
                    <Text fontSize={20} fontWeight={700}>
                        {data?.blogtitle?.slice(0, 20) + '...'}
                    </Text>
                    <Flex
                        border={'1px solid #7099C8'}
                        borderRadius={'100px'}
                        width={30}
                        height={30}
                        align={'center'}
                        justify={'center'}
                    >
                        <DropDownMenu id={data.id} />
                    </Flex>
                </Flex>
                <HStack>
                    <CustomButton
                        text={data?.category}
                        {...customButtonStyle}
                    />
                    <CustomButton
                        {...customButtonStyle}
                        text={data?.subcategory}
                    />
                </HStack>
                <Text fontSize={16} fontWeight={400}>
                    {data?.summary}{' '}
                </Text>
            </Flex>
            <Box bg={'#C4E0EE'} borderRadius={'16px'}>
                <Text color={'#536471'} py={'21px'} px={'13px'}>
                    <Text as={'p'} fontSize={14}>
                        {data?.maincontent?.slice(0, 200)}...{' '}
                    </Text>
                    <Text
                        as={'span'}
                        color={'#003B95'}
                        textDecoration={'underline'}
                        fontSize={14}
                    >
                        {' '}
                        ReadMore
                    </Text>
                </Text>
            </Box>
            <Flex justifyContent={'space-between'} color={'#536471'}>
                <Flex gap={6}>
                    <Flex gap={2}>
                        <HeartIcon />
                        <Text fontSize={'12px'} fontWeight={500}>
                            300
                        </Text>
                    </Flex>
                    <Flex gap={2}>
                        <Eye />
                        <Text fontSize={'12px'} fontWeight={500}>
                            1.2K
                        </Text>
                    </Flex>
                </Flex>
                <Flex gap={2}>
                    <BookmarkIcon />
                </Flex>
            </Flex>
            <Flex gap={2}>
                {data?.images?.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        width={100}
                        height={100}
                        objectFit={'cover'}
                        borderRadius={'16px'}
                    />
                ))}
            </Flex>
            <Flex justify={'space-between'} align={'center'} gap={2}>
                <Flex gap={2} align={'center'}>
                    <Image
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        width={10}
                        height={10}
                        objectFit={'cover'}
                        borderRadius={'100px'}
                    />
                    <Box fontSize={'12px'} fontWeight={500}>
                        <Text>{data?.authorname}</Text>
                        <Text>
                            Published on:{' '}
                            <Text as={'span'} color={'#003B95'}>
                                {new Date(
                                    data.publicationdate,
                                ).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                })}
                            </Text>
                        </Text>
                    </Box>
                </Flex>
                <Box>
                    <CustomButton
                        text="Follow"
                        {...customButtonStyle}
                        icon={<BiMessageRoundedAdd color="white" size={16} />}
                    ></CustomButton>
                </Box>
            </Flex>
        </Flex>
    )
}
export default BlogCard
