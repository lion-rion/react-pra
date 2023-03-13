import React from 'react'

const HowToUse = () => {
  return (
    <>
      <section class="my-10">
        <div class="py-8 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-slate-50">
          <h2 class="text-2xl font-bold font-weight-bold">使い方</h2> 
          <p>
            ドラッグアンドドロップで命令セットからコマンドを移動し、組み合わせることができます。
          </p>
          <h3 class="text-1xl font-bold font-weight-bold">オプション</h3> 
          <p>
            インデント: 出力ファイルのインデント数を指定できます<br></br>
            出力タイプ: 出力ファイルの形式を指定できます
          </p>
        </div>
      </section>
    </>
  )
}

export default HowToUse
