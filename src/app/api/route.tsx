export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   headers: {
    //         'Content-Type': 'application/json',
          
    //     // 'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const data = await res.json()

    const data = {
        title: "123"
    }
  
    return Response.json({ data })
  }