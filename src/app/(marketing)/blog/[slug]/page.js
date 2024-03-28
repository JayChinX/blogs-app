
export async function generateMetadata({ params }) {
    return {
      title: params.slug,
    }
  }

export default function BlogDetail({ params }) {
    return <div>My Post: {params.slug}</div>
  }