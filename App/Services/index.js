import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clt41w2mw2gab07we6v7qcplf/master";

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList {
      courses(where: { level: `+level+` }) {
        id
        name
        level
        price
        tags
        time
        banner {
          url
        }
        chapters {
          id
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
