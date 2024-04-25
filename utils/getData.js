import {  gql } from '@apollo/client';


const GET_DATA= gql`
{
  countries{
    name
    capital
    native
    continent{name}
    currency
    languages{name}
    phone
  }
}
`

export default GET_DATA;