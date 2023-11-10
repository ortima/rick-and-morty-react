import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
    query Characters($pageNumber: Int!) {
        characters(page: $pageNumber) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                gender
                location {
                    name
                }
                image
            }
        }
    }
`

const useCharacters = (pageNumber) => {
    const { error, data, loading } = useQuery(GET_CHARACTERS, {
        variables: { pageNumber },
    })
    return {
        error,
        data,
        loading,
    }
}

export default useCharacters
