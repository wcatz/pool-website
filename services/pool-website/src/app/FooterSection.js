import schema from "./schema"
import Icon from "./Icon"

export default function FooterSection() {

    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="mt-8 flex justify-center space-x-6">
                    {schema.socials.map(social => {

                        return (
                            <a href={social.url} target="_blank" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{social.name}</span>
                                <Icon type={social.icon} className="w-6 h-6" />
                            </a>
                        )
                    })}
                </div>
                <div className="mt-8 justify-center flex items-center">
                    <img
                        className="h-5 w-auto sm:h-8 rounded-full"
                        src="/logo.png"
                        alt="Cardano Stake Pool Operator"
                    />
                    <div className="ml-2 font-bold text-gray-900 dark:text-gray-300 dark:text-white">
                    Star Forge ⚡ <span className="font-light tracking-wide"></span>
                    
                    </div>
                </div>
            </div>
        </footer>
        

    )
}
