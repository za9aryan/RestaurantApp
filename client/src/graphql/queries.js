import {gql} from '@apollo/client'

export const FETCH_RESTAURANTS = gql`
   
{
    getRestaurants {
  id
  name
  position
  rateSumm
  feedbacks {
      id
      body
  }
  }
}

`