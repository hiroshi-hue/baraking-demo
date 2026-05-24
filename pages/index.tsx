import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <Head>
        <title>バラキング</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">バラキング</h1>

        <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
          <h2 className="text-xl font-bold mb-4">地域のお店</h2>
          <p className="text-gray-600">
            原木中山の温暖で親しみやすい雰囲気の中で、地域のお店と人々が交流しましょう。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-baraking-orange">50+</p>
            <p className="text-sm text-gray-600">地元のお店</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-baraking-teal">1,200+</p>
            <p className="text-sm text-gray-600">地域のメンバー</p>
          </div>
        </div>

        <div id="about" className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <h3 className="text-lg font-bold mb-4">バラキングについて</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong className="text-baraking-orange">バラキング</strong>は、市川市内の地域経済を活性化するための
              AI 活用プラットフォームです。
            </p>
            <p>
              原木中山地区のお店やサービスを活用し、地域に根ざした経済循環を創り出します。
              「ICHICO」という地域創生 AI サービスを通じて、
              地域のお店と消費者をつなぎ、持続可能な地域社会の実現を目指しています。
            </p>
          </div>
        </div>

        <div id="community" className="bg-gradient-to-r from-baraking-orange to-orange-500 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">地域のお店に足を運びたいですか？</h3>
          <p className="text-orange-100 mb-4">
            近くの地元のお店を見つけて、応援しませんか？
          </p>
          <div className="flex space-x-3">
            <a href="#explore" className="px-4 py-2 bg-white text-baraking-orange font-bold rounded-full hover:bg-orange-50 transition-colors">
              店舗を探す
            </a>
            <a href="#community" className="px-4 py-2 bg-orange-700 text-white font-bold rounded-full hover:bg-orange-800 transition-colors">
              コミュニティに参加
            </a>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
          <p>© 2026 市川市地域経済活性化プロジェクト「バラキング」</p>
        </footer>
      </main>
    </div>
  )
}
