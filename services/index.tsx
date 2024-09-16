import { gql, request } from 'graphql-request'

export const getCarss = async () => {
    const query = gql`
    query CarLists {
        carLists {
        id,
        name,
        price,
        image {
        url,
      fileName
    }
    carAvg,
    carType,
    carBrand
    createdAt,
    updatedAt,
    publishedAt,
  }
}
    `;
    const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm14k6e7j04i107wakvfioqhe/master', query);
    return result
}