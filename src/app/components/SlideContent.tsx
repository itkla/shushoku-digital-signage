import React from 'react';
import { SlideTransition } from './SlideTransition';
import { useSlideStore } from '../store/slideStore';

interface SlideContentProps {
    slideId: string;
    isPortrait?: boolean;
}

// This component will render different content based on the slide ID
// For now, we'll just use placeholders that can be filled in later
export function SlideContent({ slideId, isPortrait = true }: SlideContentProps) {
    // Get slide content based on the slide ID
    const slideContent = getSlideContent(slideId, isPortrait);

    // Get the transition direction from the store
    const { transitionDirection } = useSlideStore();

    return (
        <SlideTransition slideKey={slideId} direction={transitionDirection}>
            <div className={`w-full h-full flex flex-col items-center justify-center ${isPortrait ? 'portrait:aspect-[9/16]' : ''}`}>
                {slideContent}
            </div>
        </SlideTransition>
    );
}

// Helper function to get slide content based on ID
function getSlideContent(slideId: string, isPortrait: boolean) {
    // Default slide (Title)
    if (slideId === 'default') {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full bg-gray-50">
                <h1 className="text-6xl font-bold mb-6 font-en">Checkpoint</h1>
                <h2 className="text-4xl mb-8 font-en">モダンな認証SaaS</h2>
                {/* <p className="text-2xl">中川 翔太</p> */}
            </div>
        );
    }

    // Handle controller-specific content
    if (slideId.startsWith('controller')) {
        const slideNumber = parseInt(slideId.replace('controller', ''));
        switch (slideNumber) {
            case 2: // Supporting content for スキル
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8">
                        <h3 className="text-2xl font-semibold mb-6">プロジェクト例</h3>
                        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="text-lg font-semibold mb-2">Webアプリケーション</h4>
                                <pre className="bg-gray-800 text-white p-4 rounded text-sm overflow-auto font-en">
                                    {`// React Component Example
const App = () => {
  const [data, setData] = useState([]);
  // ...
}`}
                                </pre>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="text-lg font-semibold mb-2">APIサーバー</h4>
                                <pre className="bg-gray-800 text-white p-4 rounded text-sm overflow-auto font-en">
                                    {`// Express API Example
app.get('/api/data', async (req, res) => {
  const result = await db.query();
  res.json(result);
});`}
                                </pre>
                            </div>
                        </div>
                    </div>
                );

            case 4: // Supporting content for 技術的特徴
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8">
                        <h3 className="text-2xl font-semibold mb-6">アーキテクチャ図</h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                            <div className="space-y-4">
                                <div className="border-2 border-blue-500 p-4 rounded">
                                    <h4 className="text-lg font-semibold text-blue-700">フロントエンド</h4>
                                    <p className="text-sm font-en">Next.js + TypeScript + Tailwind CSS</p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-0.5 h-8 bg-gray-300"></div>
                                </div>
                                <div className="border-2 border-green-500 p-4 rounded">
                                    <h4 className="text-lg font-semibold text-green-700">状態管理</h4>
                                    <p className="text-sm font-en">Zustand + BroadcastChannel API</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 6: // Supporting content for 開発プロセス
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8">
                        <h3 className="text-2xl font-semibold mb-6">開発タイムライン</h3>
                        <div className="space-y-6 w-full max-w-3xl">
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">1月</div>
                                <div>
                                    <h4 className="font-semibold">要件定義</h4>
                                    <p className="text-sm text-gray-600">基本設計と技術選定</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">2月</div>
                                <div>
                                    <h4 className="font-semibold">開発フェーズ</h4>
                                    <p className="text-sm text-gray-600">実装とテスト</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                                <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">3月</div>
                                <div>
                                    <h4 className="font-semibold">完成・発表</h4>
                                    <p className="text-sm text-gray-600">最終調整とプレゼン準備</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 8: // Supporting content for お礼
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8">
                        <h3 className="text-2xl font-semibold mb-6">連絡先情報</h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">Email:</span>
                                    <span className="font-en">contact@example.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">GitHub:</span>
                                    <span className="font-en">github.com/username</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">Portfolio:</span>
                                    <span className="font-en">portfolio.example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full bg-gray-50">
                        <h1 className="text-4xl font-bold mb-4">コンテンツが見つかりません</h1>
                        <p className="text-xl">Controller {slideNumber}</p>
                    </div>
                );
        }
    }

    // Handle display content
    const slideNumber = parseInt(slideId.replace('slide', ''));
    switch (slideNumber) {
        case 1:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8">強固な認証は難しいことではないはずだよ</h2>
                    {/* <div className="space-y-6 text-2xl">
                        <p>名前：中川 翔太</p>
                        <p>年齢：22歳</p>
                        <p>出身：大阪府</p>
                        <p>趣味：プログラミング、ゲーム</p>
                    </div> */}
                </div>
            );

        case 2:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    {/* Checkpoint Website Component */}
                    <div className="font-sans w-full">
                        {/* Section 1: Login */}
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-4xl font-bold mb-8">
                                    <span className="text-black">簡単、安全、</span>
                                    <span className="text-blue-500">次代</span>
                                    <span className="text-black">。</span>
                                </h1>
                                <p className="text-lg mb-6">
                                    ウェブサイトに簡単にログインできるように<br />
                                    しましょう。ログインが複雑である理由は<br />
                                    ないはずだ。Checkpointは、『簡単』『安全』『次代』<br />
                                    という3つの主要な理念を基盤として構築されています。私は、現在の日本の認証システムが老朽化していることで、<br />
                                    人々の情報が深刻な危険にさらされていると考えています。<br/>
                                    そのため、Checkpointでは最新の技術を取り入れて<br/>
                                    セキュリティを強化しつつ、操作がシンプルで使いやすい<br/>
                                    デザインを重視して開発しました。
                                </p>
                            </div>

                            {/* <div className="bg-white shadow-lg rounded-lg p-6 w-80">
                                <h2 className="text-xl font-bold mb-4">ログイン</h2>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600 mb-1">メールアドレス</label>
                                    <input type="email" className="w-full border border-gray-300 rounded p-2" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="block text-sm text-gray-600">パスワード</label>
                                        <a href="#" className="text-sm text-blue-500">パスワード忘れた</a>
                                    </div>
                                    <input type="password" className="w-full border border-gray-300 rounded p-2" />
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded mb-4">ログイン</button>
                                <button className="w-full bg-gray-400 text-white py-2 rounded mb-4">Passkeyでログイン</button>

                                <div className="text-center text-sm text-gray-500 mb-4">
                                    <p>アカウント持ってない？ 今すぐ登録</p>
                                    <p className="my-2">または</p>
                                </div>

                                <div className="flex justify-between">
                                    <button className="flex items-center justify-center border border-gray-300 rounded p-2 w-[48%]">
                                        <span className="mr-2">G</span> Google
                                    </button>
                                    <button className="flex items-center justify-center border border-gray-300 rounded p-2 w-[48%]">
                                        <span className="mr-2">L</span> LINE
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mt-4">
                                    続行すると、利用規約とプライバシーポリシーに同意することとします。
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            );

        case 3:
            return (
                <div className="flex flex-col items-center justify-start w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8">作品概要</h2>
                    <div className="space-y-6 text-xl">
                        <h3 className="text-3xl font-semibold mb-4">デジタルサイネージシステム</h3>
                        <ul className="list-disc list-inside space-y-4">
                            <li>Next.jsを使用した最新のWeb技術</li>
                            <li>リアルタイムの同期機能</li>
                            <li>スムーズなアニメーション</li>
                            <li>レスポンシブデザイン</li>
                        </ul>
                    </div>
                </div>
            );

        case 4:
            return (
                <div className="flex flex-col items-start justify-start w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8 self-center">技術的特徴</h2>
                    <div className="space-y-6 text-xl w-full">
                        <div className="border-b pb-4">
                            <h3 className="text-2xl font-semibold mb-4">フロントエンド</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><span className="font-en">React & Next.js</span></li>
                                <li><span className="font-en">TypeScript</span></li>
                                <li><span className="font-en">Tailwind CSS</span></li>
                            </ul>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-2xl font-semibold mb-4">状態管理 & 同期</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><span className="font-en">Zustand</span></li>
                                <li><span className="font-en">BroadcastChannel API</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );

        case 5:
            return (
                <div className="flex flex-col items-center justify-start w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8">主要機能</h2>
                    <div className="grid grid-cols-1 gap-6 text-xl w-full max-w-3xl">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">コントローラー画面</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>キーボードナビゲーション</li>
                                <li>スライド進行状況の表示</li>
                                <li>プレビュー機能</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">ディスプレイ画面</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>縦型ディスプレイ最適化</li>
                                <li>スムーズな遷移アニメーション</li>
                                <li>高解像度対応</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );

        case 6:
            return (
                <div className="flex flex-col items-center justify-start w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8">開発プロセス</h2>
                    <div className="space-y-8 text-xl w-full max-w-3xl">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-4 rounded-full">1</div>
                            <p>要件定義とデザイン設計</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-4 rounded-full">2</div>
                            <p>フロントエンド開発</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-4 rounded-full">3</div>
                            <p>同期機能の実装</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-4 rounded-full">4</div>
                            <p>テストと最適化</p>
                        </div>
                    </div>
                </div>
            );

        case 7:
            return (
                <div className="flex flex-col items-center justify-start w-full h-full bg-white p-8">
                    <h2 className="text-4xl font-bold mb-8">今後の展望</h2>
                    <div className="space-y-6 text-xl max-w-3xl">
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="text-2xl font-semibold mb-4">機能拡張</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>複数ディスプレイ対応</li>
                                <li>インタラクティブ要素の追加</li>
                                <li>カスタマイズ機能の強化</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">技術的改善</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>パフォーマンス最適化</li>
                                <li>セキュリティ強化</li>
                                <li>APIの拡充</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );

        case 8:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
                    <h2 className="text-5xl font-bold mb-12">ご清聴ありがとうございました</h2>
                    <div className="text-2xl space-y-4">
                        <p>中川 翔太</p>
                        <p>HAL大阪</p>
                        <p>2024年3月</p>
                    </div>
                </div>
            );

        default:
            return (
                <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full bg-gray-50">
                    <h1 className="text-4xl font-bold mb-4">スライドが見つかりません</h1>
                    <p className="text-xl">Slide {slideNumber}</p>
                </div>
            );
    }
} 