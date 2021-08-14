import schema from "./schema"

export default function CommunitySection() {

    return (
        
        <div className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-10">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-300">The Armada Alliance</h2>
                        <img className="w-20 h-20 mx-auto" src="/ship-420.png" />
                        <div classname="max-w-7xl mx-auto py-3 px-4 text-center sm:px-6 lg:px-8 lg:py-5" styles="--aspect-ratio: 16/9;">
                            <iframe src="https://armada-alliance.com/" scrolling="no" width="100%" height="1600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}