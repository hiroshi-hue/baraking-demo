import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-baraking-warm to-orange-50">
      <Head>
        <title>バラキング - ICHICO と地域のお店をつなぐプラットフォーム</title>
        <meta name="description" content="市川市地域経済活性化プロジェクト「バラキング」。ICHICO の店主と地域のお店をつなぎ、地域に根ざした経済を創り出します。" />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/assets/lion-icon.png" alt="バラキャラクター" width={40} height={40} className="object-contain rounded-full border-2 border-baraking-orange" style={{ width: 40, height: 40 }} />
              <div>
                <h1 className="text-lg font-bold text-gray-800">バラキング</h1>
                <p className="text-xs text-gray-500">地域経済活性化プロジェクト</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <a href="#explore" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">店舗を探す</a>
              <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">について</a>
              <a href="#community" className="px-4 py-2 bg-baraking-orange text-white text-sm font-medium rounded-full hover:bg-orange-600">ログイン</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6 border border-orange-100">
          <Image src="/assets/lion-icon.png" alt="バラキャラクター" width={80} height={80} className="object-contain rounded-full border-4 border-baraking-warm shadow-lg mb-4" style={{ width: 80, height: 80 }} />
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-baraking-warm rounded-full flex items-center justify-center">
              <span className="text-3xl">🏠</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">地域のお店を愛でよう</h2>
              <p className="text-sm text-gray-500">ICHICO と地元のお店を繋ぎ、地域経済を活性化</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-baraking-orange">50+</p>
              <p className="text-sm text-gray-600">地元のお店</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-baraking-teal">1,200+</p>
              <p className="text-sm text-gray-600">地域のメンバー</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600">原木中山の温暖で親しみやすい雰囲気の中で、</p>
            <p className="text-sm text-gray-600">地域のお店と人々が交流し、コミュニティを育みましょう。</p>
          </div>
        </div>

        {/* Features Section */}
        <div id="explore" className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">特徴</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-orange-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-baraking-warm rounded-xl flex items-center justify-center mb-3">
                <span className="text-2xl">🛍️</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">地域のお店</h4>
              <p className="text-sm text-gray-600">地元のお店を発見し、応援できます。購入することで地域に還元。</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-teal-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-3">
                <span className="text-2xl">🌸</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ICHICO</h4>
              <p className="text-sm text-gray-600">地域創生 AI サービスで、地域経済活性化をサポート。</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-orange-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-baraking-warm rounded-xl flex items-center justify-center mb-3">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">暖かいコミュニティ</h4>
              <p className="text-sm text-gray-600">地域の人々と交流し、温かい関係性を育みましょう。</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-teal-100 hover:shadow-lg transition-all">
              <Image src="/assets/lion-icon.png" alt="バラキャラクター" width={48} height={48} className="object-contain rounded-xl bg-white/50" style={{ width: 48, height: 48 }} />
              <h4 className="font-bold text-gray-800 mb-2">ライオンキャラクター</h4>
              <p className="text-sm text-gray-600">「バラ」の愛称を持つ親しみやすいライオンがご案内します。</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="bg-white rounded-3xl p-6 shadow-lg mb-8 border border-orange-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-baraking-warm rounded-full flex items-center justify-center">
              <span className="text-3xl">🏙️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">バラキングについて</h3>
              <p className="text-sm text-gray-500">市川市地域経済活性化プロジェクト</p>
            </div>
          </div>

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
            <p className="font-medium text-gray-700">
              🦁 バラ（ライオンキャラクター）が、地域の魅力を案内します！
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div id="community" className="bg-gradient-to-r from-baraking-orange to-orange-500 rounded-3xl p-6 text-white shadow-xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">地域のお店に足を運びたいですか？</h3>
              <p className="text-orange-100 mb-4">
                近くの地元のお店を見つけて、応援しませんか？
              </p>
              <div className="flex space-x-3">
                <button className="px-6 py-3 bg-white text-baraking-orange font-bold rounded-full hover:bg-orange-50 transition-colors">
                  店舗を探す
                </button>
                <button className="px-6 py-3 bg-orange-700 text-white font-bold rounded-full hover:bg-orange-800 transition-colors">
                  コミュニティに参加
                </button>
              </div>
            </div>
            <Image src="/assets/lion-icon.png" alt="バラキャラクター" width={96} height={96} className="object-contain rounded-full ml-4" style={{ width: 96, height: 96 }} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
          <p>© 2026 市川市地域経済活性化プロジェクト「バラキング」</p>
          <p className="mt-1">ICHICO と地域のお店をつなぐプラットフォーム</p>
        </footer>
      </main>
    </div>
  )
}

// Loading component using lion brand character
export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-baraking-warm">
      <Image src="/assets/lion-icon.png" alt="バラローディング" width={48} height={48} className="object-contain animate-bounce" />
    </div>
  )
}