import { Frame } from '@okmtyuta/amatelas/server'
import { Markdown } from '.'

import '@okmtyuta/amatelas/style.css'

const mkd = String.raw`

# is何

この記事では、vercelでignore build stepを用いて特定のディレクトリでの作業の時だけビルドされるようにする手順を公開しています。
具体的には、vercel公式の手法だと**直近のコミットとその1つ前のコミットの差分しか見ていない**ため、それらのcommitで作業ディレクトリ外の作業をしてしまうとビルドがcancelされてしまいます。
そこで、コミット単位ではなく*ブランチ単位で差分を見てignore buildさせる*方法を提案します。

`

export const App = () => {
  return (
    <Frame>
      <Markdown>{mkd}</Markdown>
    </Frame>
  )
}
