import { GetStaticProps } from 'next'
import Link from 'next/link'
import { User } from '../../typings/index'
import { sampleUserData } from '../../../utils/sample-data'
import Layout from '../../components/Layout'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => {
  return (
    <Layout title="Users List">
      <h1>Users List</h1>
      <p>You are currently on: /users</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
