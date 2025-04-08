/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
    Box,
    Text,
    Input,
    VStack,
    List,
    ListItem,
    HStack
} from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { useController, Control } from 'react-hook-form'

interface FileUploaderProps {
    name: string
    label: string
    control: Control<any>
}

const FileUploader: React.FC<FileUploaderProps> = ({
    name,
    label,
    control,
}) => {
    const {
        field: { onChange, value },
    } = useController({
        name,
        control,
        defaultValue: [],
    })

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: true,
        onDrop: acceptedFiles => {
            onChange(acceptedFiles)
        },
    })

    return (
        <HStack>
            <Box>
                <Text width={191} fontSize={'25px'} fontWeight={'normal'}>
                    {label} :
                </Text>
            </Box>
            <Box
                {...getRootProps()}
                border="1px dashed #7099C8"
                borderColor={'#7099C8'}
                borderRadius="md"
                p={5}
                w='381px'
                h="71px"
                textAlign="center"
                cursor="pointer"
                bg={isDragActive ? 'transparent' : 'transparent'}
                _hover={{ bg: 'transparent', color: 'black' }}
                ml={5}
            >
                <Input
                    {...(getInputProps() as any)}
                    type="file"
                    display="none"
                />
                <VStack spacing={2}>
                    <Text
                        fontSize={'16px'}
                        fontWeight="normal"
                        color={'#A9A9A9'}
                    >
                        {isDragActive
                            ? 'Drop files to upload'
                            : 'Drop files to upload'}
                    </Text>

                    {value?.length > 0 && (
                        <List spacing={1} w="full" textAlign="left" pt={2}>
                            {value.map((file: File, index: number) => (
                                <ListItem key={index}>{file.name}</ListItem>
                            ))}
                        </List>
                    )}
                </VStack>
            </Box>
        </HStack>
    )
}

export default FileUploader
