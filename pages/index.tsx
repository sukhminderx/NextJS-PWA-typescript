import Head from 'next/head'


const arr: Array<string> = ['a','b','c'];

const Index = () => (
  <>
    <Head>
      <title>next-pwa </title>
    </Head>
    <h1>Next.js + PWA in TypeScript</h1>
    {arr.map((a: string)=> <span>this is {a}</span>)}
  </>
)

export default Index
