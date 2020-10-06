import Head from 'next/head'

export type PageInfoProps = {
  title: string
  description: string
  ogImage?: string
}

const PageInfo: React.FC<PageInfoProps> = ({
  title = 'PAYW',
  description = '',
  ogImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="description" name="description" content={description} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      {ogImage && <meta key="og:image" property="og:image" content={ogImage} />}
    </Head>
  )
}

export default PageInfo
