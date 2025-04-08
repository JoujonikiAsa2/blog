import { CustomButton } from '@/components/custom/CustomButton'
import { Flex } from '@chakra-ui/react'

export const BlogFilter = () => {
    return (
        <Flex justify={'space-between'} fontFamily={'Inter'}>
            <Flex gap={2} flex={1}>
                <CustomButton
                    text="Destination"
                    color="#003B95"
                    bgColor="#D2ECF4"
                    width={185}
                    sx={{
                        borderRadius: '8px',
                        border: '1px solid #7099C8',
                        fontSize: '24px',
                        fontWeight: 400,
                    }}
                />
                <CustomButton
                    text="Category"
                    color="#003B95"
                    bgColor="#D2ECF4"
                    width={185}
                    sx={{
                        borderRadius: '8px',
                        border: '1px solid #7099C8',
                        fontSize: '24px',
                        fontWeight: 400,
                    }}
                />
                <CustomButton
                    text="Sub-Category"
                    color="#003B95"
                    bgColor="#D2ECF4"
                    width={185}
                    sx={{
                        borderRadius: '8px',
                        border: '1px solid #7099C8',
                        fontSize: '24px',
                        fontWeight: 400,
                    }}
                />
            </Flex>
            <Flex gap={2}>
                <CustomButton
                    text="Sort by"
                    color="#003B95"
                    bgColor="#D2ECF4"
                    width={185}
                    sx={{
                        borderRadius: '8px',
                        border: '1px solid #7099C8',
                        fontSize: '24px',
                        fontWeight: 400,
                    }}
                />
                <CustomButton
                    text="Reset"
                    color="#003B95"
                    bgColor="#D2ECF4"
                    width={185}
                    sx={{
                        borderRadius: '8px',
                        border: '1px solid #7099C8',
                        fontSize: '24px',
                        fontWeight: 400,
                    }}
                />
            </Flex>
        </Flex>
    )
}
