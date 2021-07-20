import { useState } from "react"
import schema from "./schema"
import Link from "next/link"
import cx from "classnames"
import Icon from "./Icon"

export default function Navigation() {

    const [open, setOpen] = useState(false)

    const handleDelegate = () => {
        var pool_id = 'c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae'
        var blockfrost_project_id = '3Ojodngr06BReeSN9lhsow0hypKf8gu5'
        var link = 'https://armada-alliance.com/delegation-widget?pool_id=' + pool_id + '&blockfrost_project_id=' + blockfrost_project_id
        var width = 600
        var height = Math.min(800, parseInt(window.outerHeight, 10))
        var left = (parseInt(window.outerWidth, 10) / 2) - (width / 2)
        var top = (parseInt(window.outerHeight, 10) - height) / 2
        window.open(link, 'Delegate', 'width=' + width + ',height=' + height + ',toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=' + left + ',top=' + top);
    }

    return (
        <div className="bg-gray-900"
            style={{
                backgroundImage: `url("/star-background.jpg")`
            }}>
            <div className="pt-6 pb-6">
                <nav
                    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <div className="flex items-center justify-between -mt-1">
                                <Link href="/">
                                    <a>
                                        <span className="sr-only">🌟 Star Forge ⚡</span>
                                        <img
                                            className="h-8 w-auto sm:h-14 rounded-full"
                                            src="/otg.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                                <div className="ml-4 text-white text-2xl font-bold leading-none">
                                    Star Forge ⚡{" "}
                                    <span className="font-light ml-0.5 tracking-wide">[OTG]</span>
                                </div>
                            </div>
                            <div className="mr-2 flex items-center md:hidden">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {/* Heroicon name: outline/menu */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden space-x-10 md:flex md:ml-10">
                            {schema.navItems.map(navItem => {

                                console.log(navItem)

                                if (navItem.url === '/delegate') {
                                    return (
                                        <button
                                            type="button"
                                            onClick={handleDelegate}
                                            className="font-medium text-white hover:text-gray-300 flex items-center"
                                        >
                                            <span className={navItem.icon ? "mr-2" : null}>{navItem.name}</span>{navItem.icon ? <Icon type={navItem.icon} /> : null}
                                        </button>
                                    )
                                }

                                return (
                                    <Link href={navItem.url}>
                                        <a
                                            target={navItem.target}
                                            className="font-medium text-white hover:text-gray-300 flex items-center"
                                        >
                                            <span className={navItem.icon ? "mr-2" : null}>{navItem.name}</span>{navItem.icon ? <Icon type={navItem.icon} /> : null}
                                        </a></Link>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                <div className={cx(
                    "absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden",
                    open ? "duration-150 ease-out opacity-100 scale-100 pointer-events-auto" : "duration-100 ease-in opacity-0 scale-95 pointer-events-none"
                )}>
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <Link href="/">
                                    <a
                                    >
                                        <img
                                            className="h-8 w-auto"
                                            src="https://avatars.githubusercontent.com/u/3747031?v=4"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">Close menu</span>
                                    {/* Heroicon name: outline/x */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="ml-auto px-2 pt-2 pb-3 space-y-1">

                            {schema.navItems.map(navItem => {
                                if (navItem.url === '/delegate') {
                                    return (
                                        <button
                                            type="button"
                                            onClick={handleDelegate}
                                            className="font-medium text-white hover:text-gray-300 flex items-center"
                                        >
                                            <span className={navItem.icon ? "mr-2" : null}>{navItem.name}</span>{navItem.icon ? <Icon type={navItem.icon} /> : null}
                                        </button>
                                    )
                                }

                                return (
                                    <Link href={navItem.url}>
                                        <a
                                            target={navItem.target}
                                            className="block px-3 py-2 rounded-md text-base flex items-center font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            <span className={navItem.icon ? "mr-2" : null}>{navItem.name}</span>{navItem.icon ? <Icon type={navItem.icon} /> : null}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}