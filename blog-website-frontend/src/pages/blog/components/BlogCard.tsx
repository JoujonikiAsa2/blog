import { CustomButton } from '@/components/custom/CustomButton'
import { TBlogPost } from '@/types/blog'
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { BookmarkIcon, Eye, HeartIcon } from 'lucide-react'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { CiMenuKebab } from "react-icons/ci";


const BlogCard = ({ data }: { data: TBlogPost }) => {
    return (
        <Flex
            direction={'column'}
            gap={4}
            background={'#FFFFFF'}
            maxWidth={416}
            maxHeight={700}
            border={'1px solid #A8C8E1'}
            borderRadius={'16px'}
            py={5}
            px={4}
        >
            <Flex direction={'column'} gap={2}>
                <Flex justify={'space-between'} align={'center'}>
                    <Text fontSize={20} fontWeight={700}>
                        {data.blogTitle.slice(0, 36)}
                        {data.blogTitle.length > 40 ? '...' : ''}
                    </Text>
                    <CiMenuKebab />
                </Flex>
                <HStack>
                    <CustomButton
                        color="white"
                        bgColor="#003B95"
                        width={'content-fit'}
                        height={6}
                        text={data.category}
                        sx={{
                            borderRadius: '100px',
                            fontSize: '12px',
                            fontWeight: 400,
                        }}
                    />
                    <CustomButton
                        color="white"
                        bgColor="#003B95"
                        width={'content-fit'}
                        height={6}
                        text={data.subCategory}
                        sx={{
                            borderRadius: '100px',
                            fontSize: '12px',
                            fontWeight: 400,
                        }}
                    />
                </HStack>
                <Text fontSize={16} fontWeight={400}>
                    {data.summary}{' '}
                </Text>
            </Flex>
            <Box bg={'#C4E0EE'} borderRadius={'16px'}>
                <Text color={'#536471'} py={'21px'} px={'13px'}>
                    <Text as={'p'} fontSize={14}>
                        {data.mainContent.slice(0, 200)}...{' '}
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
            <Flex justify={'space-between'} gap={2}>
                <Box bgColor={'#C40FF0'} width={177} height={120}></Box>
                <Box bgColor={'#C40FF0'} width={177} height={120}></Box>
                <Box bgColor={'#C40FF0'} width={177} height={120}></Box>
            </Flex>
            <Flex
                justify={'space-between'}
                draggable={true}
                scrollSnapAlign={'start'}
            >
                <Flex gap={2} align={'center'}>
                    <Image
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        width={10}
                        height={10}
                        objectFit={'cover'}
                        borderRadius={'100px'}
                    />
                    <Box fontSize={'12px'} fontWeight={500}>
                        <Text>{data.authorName}</Text>
                        <Text>
                            Published on:{' '}
                            <Text as={'span'} color={'#003B95'}>
                                {new Date(
                                    data.publicationDate,
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
                        color="white"
                        bgColor="#003B95"
                        width={'100px'}
                        height={'30px'}
                        icon={<BiMessageRoundedAdd color="white" size={16} />}
                        sx={{
                            borderRadius: '100px',
                            fontSize: '12px',
                            fontWeight: 400,
                        }}
                    ></CustomButton>
                </Box>
            </Flex>
        </Flex>
    )
}

export default BlogCard
