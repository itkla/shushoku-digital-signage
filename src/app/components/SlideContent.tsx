'use client';

import React from 'react';
import { SlideTransition } from './SlideTransition';
import { useSlideStore } from '../store/slideStore';
import Image from 'next/image';
import { FaLock, FaFingerprint, FaReact, FaUserTimes, FaUserTie, FaUserSecret, FaUserShield, FaUserCheck } from 'react-icons/fa';
import { SiFastify, SiPostgresql, SiRedis, SiNextdotjs, SiJsonwebtokens  } from 'react-icons/si';
import { TbPassword } from 'react-icons/tb';
import { MdOutlineKey } from 'react-icons/md';

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
            <div className="flex flex-col items-center justify-center text-center p-8 w-full h-full">
                <h1 className="text-6xl font-bold mb-6 font-en">Checkpoint</h1>
                <h2 className="text-4xl mb-8 font-en">モダンな認証SaaS</h2>
            </div>
        );
    }

    // Handle controller-specific content
    if (slideId.startsWith('controller')) {
        const slideNumber = parseInt(slideId.replace('controller', ''));
        switch (slideNumber) {
            case 2:
                return (
                    <div className="flex flex-row items-center justify-center w-[75%] h-full">
                        <div className="relative" style={{ width: '750px', height: '750px' }}>
                            <Image 
                                src="/img/login.png" 
                                alt="Checkpoint Login Interface" 
                                width={750} 
                                height={750} 
                                className="object-contain"
                            />
                        </div>
                        <div className="relative" style={{ width: '750px', height: '750px' }}>
                            <div className=" p-8 h-full flex flex-col">
                                <h3 className="text-4xl font-bold mb-4">Checkpoint vs. 日本の認証システム</h3>
                                <p className="text-lg mb-6 text-gray-600">システムによっては、以下の点をサポートしている場合もあります。</p>
                                <ul className="list-inside space-y-3 text-lg list-none">
                                    <p className="text-lg mb-6 text-gray-600">Checkpointは...</p>
                                    <li><span className="font-bold text-green-600">AES-256</span>暗号化を採用</li>
                                    <li>強力な<span className="font-bold text-green-600">argon2id</span>ハッシュアルゴリズムを使用</li>
                                    <li><span className="font-bold text-green-600">多要素認証(MFA)</span>に完全対応</li>
                                    <li>最新の<span className="font-bold text-green-600">パスワードレス認証</span>をサポート</li>
                                    <li><span className="font-bold text-green-600">保存データの暗号化</span>を標準実装</li>
                                    <li><span className="font-bold text-green-600">シングルサインオン(SSO)</span>に対応</li>
                                    <li><span className="font-bold text-green-600">CSRF/XSS攻撃</span>に対する堅牢な防御機能を搭載</li>
                                    <li>次世代認証技術<span className="font-bold text-green-600">パスキー</span>をサポート</li>
                                </ul>
                                <ul className="list-inside space-y-3 text-lg list-none">
                                    <p className="text-lg mb-6 text-gray-600">日本の認証システムは...</p>
                                    <li>パスワードが<span className="font-bold text-red-600">制限</span>である</li>
                                    <li>MFAは<span className="font-bold text-red-600">SMSを通じて</span>届くことの場合もよくある</li>
                                    <li>パスキーは非常に<span className="font-bold text-red-600">珍しい</span></li>
                                    <li>多くのサイトがSSOをサポートしていない</li>
                                    <li>パスワードは一般的に特殊文字をサポートしておらず、バックエンドが<span className="font-bold text-red-600">SQLインジェクション攻撃</span>から保護されていないことを示している</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                );

            case 3:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
                        <div className="flex items-end justify-center w-full h-full pb-12">
                            <div className="flex space-x-8 items-end">
                                <div className="relative overflow-hidden" style={{ height: '60vh' }}>
                                    <div className="absolute bottom-0 left-0 bg-gray-300 w-64 h-96" style={{ transform: 'translateY(40%)' }}>
                                        {/* Image placeholder - only top 60% visible */}
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                                            Image Placeholder
                                        </div>
                                    </div>
                                </div>
                                <div className="w-64 pb-8">
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-2">Image Caption</h3>
                                        <p className="text-sm">Text content to be displayed next to the image that extends off the bottom of the screen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full p-8 absolute -bottom-40">
                        <img src="/img/dashboard-user.png" alt="dashboard" className="w-[75%] h-auto rounded-2xl shadow-2xl" />
                    </div>
                );

            case 5:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full p-8 absolute -bottom-60">
                        <img src="/img/registration.png" alt="registration flow" className="w-[75%] h-auto rounded-2xl shadow-2xl" />
                    </div>
                );

            case 6:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full p-8 absolute -bottom-40">
                        <img src="/img/sample-data.png" alt="encryption" className="w-[75%] h-auto rounded-2xl shadow-2xl" />
                    </div>
                );

            case 7:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
                        <div className="relative w-full">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-full max-w-2xl" style={{ height: '80vh', transform: 'translateY(-40%) translateX(-50%)' }}>
                                {/* Image placeholder - only bottom half visible */}
                                <div className="w-full h-full flex items-center justify-center text-gray-600">
                                    Image Placeholder
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 8:
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                        <div className="font-sans w-[90%] h-[80%] p-8">
                            <iframe src="https://localhost:3000/register" className="w-full h-full rounded-xl shadow-2xl" />
                        </div>
                    </div>
                );

            case 9: // Supporting content for お礼
                return (
                    <div className="flex flex-col items-center justify-center w-full h-full p-8">
                        <h3 className="text-2xl font-semibold mb-6">連絡先情報</h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">Email:</span>
                                    <span className="font-en">hunternakagawa@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">GitHub:</span>
                                    <span className="font-en">github.com/itkla</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">Portfolio:</span>
                                    <span className="font-en">klae.ooo</span>
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
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    <span className="text-black">簡単、安全、</span>
                                    <span className="text-blue-500">次代</span>
                                    <span className="text-black">。</span>
                                </h1>
                                <p className="text-2xl mb-6">
                                    ウェブサイトに簡単にログインできるようにしましょう。ログインが複雑である理由はないはずだ。Checkpointは、『簡単』『安全』『次代』という3つの主要な理念を基盤として構築されています。私は、現在の日本の認証システムが老朽化していることで、人々の情報が深刻な危険にさらされていると考えています。そのため、Checkpointでは最新の技術を取り入れてセキュリティを強化しつつ、操作がシンプルで使いやすいデザインを重視して開発しました。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case 3:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white overflow-hidden">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    <span className="text-black">実現可能な</span>
                                    <span className="text-green-500">将来像</span>
                                </h1>
                                <p className="text-2xl mb-6">
                                    パスワードは時代遅れになるつつあります。<br />
                                    未来は安全になりそうだって、そして<span className="font-bold">あなた</span><br />
                                    が鍵となります。
                                </p>
                                <p className="text-2xl mb-6">
                                パスキーを通じて、個人を鍵として使うという、これまでには考えられなかったセキュリティのレベルを実現することができます。 iPhoneやMacBookのようなデバイスはFace IDを使用できるようになり、Androidデバイスは指紋を使用できるようになりました。また、パスキーに加え、カメラが設置されている場所であればどこでも利用可能な顔認証機能の導入も予定しています。
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src="/img/passkey.png" alt="Future" className="w-[50%] h-auto absolute -bottom-8 right-1 p-8" />
                </div>
            );

        case 4:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    優雅な管理
                                </h1>
                                <p className="text-2xl mb-6">
                                    管理は簡単であるべきで、それをするのが楽
                                    しみであるべきだ。ダッシュボードを複雑
                                    にしすぎると、トラブルやスピードダウンが
                                    発生する。だから、シンプルでパワフルな
                                    ダッシュボードこそ、仕事を続けるために必
                                    要なものなのだ。
                                </p>
                                <p className="text-2xl mb-6">
                                そのために、ダッシュボードはシンプルに構成されていますが、ユーザーを効果的に管理するのに十分強力です。ダッシュボードからは、UIからバックエンドに至るまで、Checkpointにかかわるあらゆる要素を管理できます。ユーザーの管理はもちろん、必要に応じて外部のデータソースをCheckpointに連携し、追加の情報や関連性を表示することも可能です。
                                </p>
                            </div>
                            {/* <div className="relative" style={{ width: '40vw', height: '60vh' }}>
                                <div className="absolute top-0 left-0 bg-gray-300 w-96 h-96" style={{ transform: 'translateX(-20%)' }}>
                                    Image placeholder - overflowing to the right
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                                        Image Placeholder
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            );

        case 5:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    <span className="text-black">簡単に顧客を</span>
                                    <span className="text-blue-500">集める</span>
                                </h1>
                                <p className="text-2xl mb-6">
                                    顧客に選択肢を提示して、あなたとの取引を
                                    よりスムーズにしましょう。どの情報を共有
                                    するかを顧客自身が納得した上で選べるよう
                                    にすることで、あなたの企業への信頼感が高
                                    まります。
                                    「摩擦を減らす＝顧客が増える＝ビジネスが
                                    拡大する」という流れを意識しましょう。
                                </p>
                                <p className="text-2xl mb-6">
                                    単純なパスワードや長い登録フォームのようなものは、人々があなたに信頼やビジネスを与えることを躊躇させます。可能な限り簡単かつ安全にすることで、顧客に自信を持たせることができる。Checkpointを導入することで、新規顧客のオンボーディングを素早く簡単に行えます。人々は長いフォームや複雑な登録プロセスを嫌うため、必要最小限のステップでシンプルにまとめることが、新たな顧客を獲得するための最適な方法です。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case 6:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    <span className="text-red-500">なぜ</span>
                                    <span className="text-black font-en">Checkpoint</span>
                                    <span className="text-black">？</span>
                                </h1>
                                <p className="text-2xl mb-6">
                                    業界トップクラスの暗号化、破られないハッ
                                    シュアルゴリズム、そして保存データの暗号
                                    化が利用できます。さらに、指紋やFace ID
                                    といった生体認証を活用したパスキーや、
                                    SNSアカウントを連携してワンクリックで登
                                    録できる機能など、最新テクノロジーを顧客
                                    に提供することも可能です。
                                </p>
                                <div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <FaLock size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">AES-256-CBC</h3>
                                                <p className="text-sm">業界標準の強力な暗号化アルゴリズム</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <FaFingerprint size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">Argon2id</h3>
                                                <p className="text-sm">最新のパスワードハッシュ関数</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <SiNextdotjs  size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">Next.js</h3>
                                                <p className="text-sm">高性能なReactフレームワーク</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <SiFastify size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">Fastify</h3>
                                                <p className="text-sm">高速なNode.jsバックエンドフレームワーク</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <SiPostgresql size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">PostgreSQL</h3>
                                                <p className="text-sm">堅牢なリレーショナルデータベース</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <SiRedis size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">Redis</h3>
                                                <p className="text-sm">高速なインメモリデータストア</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <TbPassword size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">SimpleWebAuthn</h3>
                                                <p className="text-sm">WebAuthn/FIDO2認証ライブラリ</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <MdOutlineKey size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">OAuth 2.0</h3>
                                                <p className="text-sm">業界標準の認証プロトコル</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col h-40">
                                            <div className="flex justify-center items-center flex-grow">
                                                <SiJsonwebtokens size={40} />
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-lg font-bold mb-1">JWT</h3>
                                                <p className="text-sm">JSON Web Token</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <p className="text-2xl mb-6">
                                    セキュリティは
                                    Checkpointにお任せください。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case 7:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    <span className="text-green-500">良い</span>
                                    <span className="text-black">コスパ</span>
                                </h1>
                                <p className="text-2xl mb-6">
                                    自社向けのソリューションに投資してセキュ
                                    リティ維持のコストを負担する代わりに、
                                    ユーザー認証と管理に特化したSaaSへアウ
                                    トソースすれば、コストを大幅に抑えること
                                    ができます。
                                    オーバーヘッドを減らしてセキュリティを強
                                    化——これはなかなか魅力的な選択肢ではな
                                    いでしょうか。
                                </p>
                                <p className="text-2xl mb-6">
                                例えば、従業員を自分で雇う代わりに、民間の警備会社にビルの警備を依頼するのと同じりくつです。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case 8:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div className="font-sans w-full">
                        <div className="flex justify-between items-start my-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-xl">
                                <h1 className="text-6xl font-bold mb-8">
                                    開発環境を自由にお試しください
                                </h1>
                                <p className="text-2xl mb-6">
                                    これは開発環境であり、パフォーマンスや利用可能なすべての機能を備えていない可能性があることに留意してください。さらに、新しく作成されたアカウントは管理者アカウントではないため、ダッシュボードにアクセスすることはできません。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 9:
            return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-white p-8">
                    <h2 className="text-5xl font-bold mb-12">ご清聴ありがとうございました</h2>
                    <div className="text-2xl space-y-4">
                        <p>中川 ハンター</p>
                        <p>HAL東京 Web学科</p>
                        <p>2025年3月</p>
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