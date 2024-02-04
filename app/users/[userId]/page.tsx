


interface UserIdPageProps {
  params: {
    userId: string;
  }
}

const Page = ({params}: UserIdPageProps) => {
  return (
    <div>{params.userId}</div>
  )
}

export default Page
