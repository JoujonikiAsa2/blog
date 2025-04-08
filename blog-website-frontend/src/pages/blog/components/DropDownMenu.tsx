/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { CiMenuKebab } from 'react-icons/ci'
import { Link } from "react-router-dom"
import { toast } from "sonner"
const DropDownMenu = ({ id }: { id: any }) => {
    const deleteBlog = async (id: string) => {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: 'DELETE',
        })
        if (response.status === 204) {
            toast.success('Blog deleted successfully')
        }
    }
    return (
        <Menu placement="bottom-end">
            <MenuButton>
                <CiMenuKebab />
            </MenuButton>
            <MenuList>
                <MenuItem as={Link} to={`/blog-form/${id}`}>
                <Text >Edit</Text>
                </MenuItem>
                <MenuItem onClick={() => deleteBlog(id)}>
                    <Text>Delete</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default DropDownMenu
