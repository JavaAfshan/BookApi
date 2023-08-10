

async function orderApiCall(
    body:any, token:any
  ) {
    console.log(body);
    if (body) {
      const res = await fetch(`https://simple-books-api.glitch.me/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" , Authorization:token},
        body: JSON.stringify(body),
        cache: "no-store",
      });
      if (!res.ok) {
        throw await res.json();
      }
      return await res.json();
    }
  }
  
  export async function POST(request: Request) {
    let body = await request.json();
    const token=request.headers.get("Authorization");
    try {
      let result = await orderApiCall(body,token);
      console.log(body);
      console.log(token);
      console.log("Result", result);
      return new Response(JSON.stringify(result),{
        status:200,
      });
    } catch (error) {
      return new Response(JSON.stringify(error), {
        status: 404,
      });
    }
  }