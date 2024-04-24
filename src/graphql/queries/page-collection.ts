import { gql } from "@apollo/client";

export const GET_PAGE_COLLECTIONS = () => gql`
query PageCollection($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1 ) {
        items{
            ...on Page{
                title
                sys {
                    id
                }
                pageContent:pageContentCollection {
                    items {
                        sys{
                            id
                        }
                    }
                }
            }
        }
    }
}
`;