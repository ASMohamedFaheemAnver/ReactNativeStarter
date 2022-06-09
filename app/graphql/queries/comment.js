const GET_ALL_COMMENTS_QUERY = gql`
  query {
    comments {
      data {
        id
      }
    }
  }
`;
