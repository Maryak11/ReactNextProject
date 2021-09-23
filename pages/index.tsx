import { useEffect, useState } from 'react'
import { Button, Htag } from '../components'
import { Paragraph } from '../components/Paragraph/Paragraph'
import { Raiting } from '../components/Raiting/Raiting'
import { Tag } from '../components/Tag/Tag'
import { Loyout } from '../loyout/Loyout/Loyout'
import { withLoyout } from '../loyout/Loyout/Loyout'

function Home(): JSX.Element {
  const [raitng, setRaiting] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph>asdasdasd</Paragraph>
      <Paragraph size="small">asdasdasd</Paragraph>
      <Paragraph size="large">asdasdasd</Paragraph>
      <Tag color="green">tag</Tag>
      <Tag color="red" size="large">
        tag
      </Tag>
      <Tag color="ghost">tag</Tag>
      <Tag color="primary">tag</Tag>
      <Tag color="gray" href="google.com">
        tag
      </Tag>
      <Raiting raiting={raitng} setRaiting={setRaiting} />
    </>
  )
}

export default withLoyout(Home)
