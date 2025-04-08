import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import BlogCard from './components/BlogCard'
import { CustomButton } from '@/components/custom/CustomButton'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import BlogSearch from './components/BlogSearch'
import { useEffect, useState } from 'react'
import { TBlogPost } from '@/types/blog'
export default function BlogPage() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [blogs])

    console.log(blogs)
    return (
        <Box background={'#E0F7FA'} fontFamily={'Inter'} minHeight={'100vh'}>
            <Flex
                maxWidth={1512}
                direction={'column'}
                gap={100}
                mx={'auto'}
                px={75}
                pt={57}
            >
                <BlogSearch />
                <Grid
                    width={'100%'}
                    gridTemplateColumns="repeat(3, 1fr)"
                    gap={4}
                    alignItems={'center'}
                    justifyContent={'center'}
                    justifyItems={'center'}
                >
                    {blogs &&
                        blogs?.map((blog: TBlogPost, index) => (
                            <GridItem key={index}>
                                <BlogCard key={index} data={blog} />
                            </GridItem>
                        ))}
                </Grid>
                <Grid
                    width={'100%'}
                    gridTemplateColumns="repeat(3, 1fr)"
                    alignItems={'center'}
                    justifyContent={'center'}
                    justifyItems={'center'}
                    mb={120}
                >
                    <GridItem justifySelf={'start'}>
                        <Link to="/blog-form">
                            <CustomButton
                                text="Post your blog"
                                color="white"
                                bgColor="#003B95"
                                width={213}
                                height={46}
                                sx={{ borderRadius: '8px' }}
                            ></CustomButton>
                        </Link>
                    </GridItem>
                    <GridItem justifySelf={'center'}>
                        <Flex gap={2} align={'center'}>
                            <IoIosArrowBack />
                            {Array(6)
                                .fill(0)
                                .map((_, index) => (
                                    <Box
                                        key={index}
                                        bg={'transparent'}
                                        width={35}
                                        height={35}
                                        border={'1px solid #7099C8'}
                                        sx={{
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            color={'#003B95'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            {index + 1}
                                        </Text>
                                    </Box>
                                ))}
                            <IoIosArrowForward />
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}
