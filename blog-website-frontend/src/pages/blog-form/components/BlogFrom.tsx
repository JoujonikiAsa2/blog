/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from '@/components/custom/CustomButton'
import { CustomDatePicker } from '@/components/custom/CustomDatePicker'
import { CustomForm } from '@/components/custom/CustomForm'
import { CustomSelect } from '@/components/custom/CustomSelect'
import { CustomTextArea } from '@/components/custom/CustomTextArea'
import { CustomTextInput } from '@/components/custom/CustomTextInput'
import {FileUploader} from '@/components/custom/FileUploader'
import { HStack, VStack } from '@chakra-ui/react'

type TBlogFromProps = {
    onSubmit: any
    control: any
    setFile: any
}

export const BlogFrom = ({ onSubmit, control, setFile }: TBlogFromProps) => {
    return (
        <CustomForm onSubmit={onSubmit}>
            <VStack spacing={2} alignItems={'start'}>
                <CustomTextInput
                    name="authorname"
                    type="text"
                    label="Author Name"
                    inputWidth={'410px'}
                    placeholder="Enter your name"
                />
                <HStack width={'100%'}>
                    <CustomTextInput
                        name="blogtitle"
                        type="text"
                        label="Blog Title"
                        inputWidth={'410px'}
                        placeholder="Enter the title of your blog post"
                    />
                    <CustomDatePicker label="Publication Date" />
                </HStack>
                <HStack width={'100%'}>
                    <CustomSelect
                        name="category"
                        label="Category"
                        placeholder="-Select other options-"
                        data={[]}
                    />
                    <CustomSelect
                        name="subcategory"
                        label="Sub-category"
                        inputWidth={210}
                        placeholder="-Select other options-"
                        data={[]}
                    />
                </HStack>
                <HStack width={'100%'}>
                    <CustomTextArea
                        name="summary"
                        label="Summary"
                        inputWidth={'426px'}
                        inputHeight={'87px'}
                        placeholder="Type here"
                    />
                    <CustomSelect
                        name="traveltags"
                        label="Travel tags:"
                        inputWidth={210}
                        placeholder="-Select other options-"
                        data={[]}
                    />
                </HStack>
                <CustomTextArea
                    name="maincontent"
                    label="Main Content"
                    inputWidth={'786px'}
                    inputHeight={'169px'}
                    placeholder="Write your blog content here"
                />
                <FileUploader
                    name="images"
                    label="Upload Image"
                    control={control}
                    setFile={setFile}
                />
            </VStack>
            <VStack mt={32}>
                <CustomButton
                    text="Preview"
                    color="#000000"
                    bgColor="#C4E0EE"
                    width={'281px'}
                    height={'47px'}
                    sx={{ borderRadius: '100px' }}
                ></CustomButton>
                <CustomButton
                    text="Autosave"
                    color="#000000"
                    bgColor="#C4E0EE"
                    width={'281px'}
                    height={'47px'}
                    sx={{ borderRadius: '100px' }}
                ></CustomButton>
            </VStack>
            <VStack py={10}>
                <CustomButton
                    type="submit"
                    text="Publish"
                    color="#000000"
                    bgColor="transparent"
                    width={'618px'}
                    height={'63px'}
                    sx={{ borderRadius: '100px', border: '1px solid #7099C8' }}
                ></CustomButton>
            </VStack>
        </CustomForm>
    )
}
