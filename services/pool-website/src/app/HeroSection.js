import { useEffect, useState } from 'react'
import axios from 'axios'
import numeral from 'numeral'
const toAda = (input) => numeral(input / 1000000).format('0,0.00a').replace('.00', '') + ' ₳';

export default function HeroSection() {

  const [data, setData] = useState(null)

  useEffect(async () => {

    if (data) {
      return
    }

    const { data: { data: _data } } = await axios.get('https://js.adapools.org/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae/summary.json')
    console.log(_data)
    setData(_data)
  })

  const items = [
    { name: "Pool ID", value: data => "c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae" },
    { name: "Ticker", value: data => data.db_ticker },
    { name: "Blocks", value: data => data.blocks_lifetime },
    { name: "Epoch Fee", value: data => toAda(data.tax_fix) },
    { name: "Margin Fee", value: data => `${parseFloat(data.tax_ratio, 10) * 100}%` },
    { name: "Pledge", value: data => toAda(data.pledge) },
    { name: "Live stake", value: data => toAda(data.total_stake) },
    { name: "Return of ADA", value: data => `${data.roa_lifetime}%` },
  ]


  return (
    <div className="relative bg-blue-900 overflow-hidden pt-16 pb-16 sm:pb-24">
      <div
        className="hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="grey" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <a
                href="https://t.me/WCatz"
                target="_blank"
                className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-primary-600 to-primary-700 rounded-full">
                  Have a question?
                    </span>
                <span className="ml-4 text-sm">
                  Ask me on Telegram
                    </span>
                {/* Heroicon name: solid/chevron-right */}
                <svg
                  className="ml-2 w-5 h-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="block">
                  Off The Grid ☀️📡
                </span>
                <span className="text-primary-600">Cardano</span>
                <span className="text-white">{" "}Stake Pool</span>
              </h1>
              <p><span className="font-extrabold text-primary-600">SpaceX Starlink</span>
              <span className="text-white">{" "}connected block producer.</span></p>
              <span className="font-extrabold text-primary-600">Solar powered</span>
              <span className="text-white">{" "}highly efficient aarch64 devops.</span>
              <p><span className="font-extrabold text-primary-600">Opensource</span>
              <span className="text-white">{" "}community member.</span></p>
              <div className="text-white mt-4 text-xs md:text-base">
                {items.map(item => {

                  return (
                    <div className="flex items-center space-x-2 py-1">
                      <div className="font-bold no-wrap flex-shrink-0">
                        {item.name}
                      </div>
                      <div className="opacity-75 overflow-hidden overflow-ellipsis">
                        {data ? item.value(data) : '-'}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <a className="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded" href="https://pool.pm/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae" target="_blank">
                  pool.pm
                </a>
                <a className="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded" href="https://adapools.org/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae" target="_blank">
                  adapools.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
