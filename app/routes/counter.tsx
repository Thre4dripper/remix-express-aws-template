import { json, redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { counter } from '~/utils/counter.server.ts'

export async function loader() {
  return json({ count: await counter.getCount() })
}

export async function action() {
  await counter.increment()
  return redirect('/counter')
}

export default function Counter() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="m-8">
      <Form method="post">
        <button
          className="rounded-md bg-red-500 px-4 py-2 text-white"
          type="submit"
        >
          Count: {data.count}
        </button>
      </Form>
    </div>
  )
}
