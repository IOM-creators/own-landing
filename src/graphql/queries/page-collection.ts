import { gql } from "@apollo/client";

export const GET_PAGE_COLLECTIONS = () => gql`
query PageCollection($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1 ) {
        items{
            ...on Page{
                title
                pageContent:pageContentCollection {
                    items {
                        ... on Entry {
                            __typename
                            sys {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
}
`;