import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import axios from 'axios'
import { InfoIcon } from '@chakra-ui/icons'
import ModalPostDetail from '../components/ModalPostDetail'
import Pagination from '../components/Pagination'
import FormPostFilter from '../components/FormPostFilter'

const tableHead = ['Id', 'User Id', 'Title', 'Action']

const PostManagement = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState(null)
  const [filter, setFilter] = useState({
    userId: '',
    postTitle: ''
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const fetchPosts = async () => {
      let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}`

      if (filter.userId) url += `&userId=${filter.userId}`
      if (filter.postTitle) url += `&title=${filter.postTitle}`

      const response = await axios.get(url)
      setPosts(response.data)
      setLoading(false)
    }
    fetchPosts()
  }, [page, filter.userId, filter.postTitle])

  const openModalDetail = (post) => {
    setSelectedPost(post)
    onOpen()
  }

  if (loading) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'}>
        <Spinner />
      </Flex>
    )
  }

  return (
    <>
      <FormPostFilter setFilter={setFilter} />
      {!posts.length ? (
        <p>No Data</p>
      ) : (
        <>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  {tableHead.map((head, idx) => (
                    <Th
                      key={head}
                      textAlign={idx === tableHead.length - 1 ? 'center' : ''}
                    >
                      {head}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {posts.map((post) => (
                  <Tr key={post.id}>
                    <Td>{post.id}</Td>
                    <Td>{post.userId}</Td>
                    <Td>{post.title}</Td>
                    <Td textAlign={'center'}>
                      <InfoIcon
                        cursor={'pointer'}
                        onClick={() => openModalDetail(post)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {/* Pagination */}
          <Flex
            className='pagination'
            justifyContent={'center'}
            w={'100%'}
            mt={'40px'}
          >
            <Pagination
              page={page}
              setPage={setPage}
              totalItems={
                filter.userId || filter.postTitle ? posts.length : null
              }
            />
          </Flex>
        </>
      )}

      <ModalPostDetail
        isOpen={isOpen}
        onClose={onClose}
        userId={selectedPost?.userId}
        postTitle={selectedPost?.title}
        postBody={selectedPost?.body}
      />
    </>
  )
}

export default PostManagement
