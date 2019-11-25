import {gql} from 'apollo-boost';

export const GET_ENTRIES_QUERY = gql`
  query GetEntries {
  getEntries(pageSize: 17, after: 0) {
    cursor
    hasMore
    tasks {
      author {
        name
        picture
        title
        score
      }
      date
      popularity
      isTrending
      title
      description
      numComments
      thumbnail
      codeSubmissionTotal
      pledgeTotal
      pledgeGoal
      pledgerCount
      status
    }
  }
}
`;
