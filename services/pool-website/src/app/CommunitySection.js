import schema from "./schema"

export default function CommunitySection() {

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-10">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The Armada Alliance</h2>
                        <iframe src="https://armada-alliance.com/stats-widget" width= "100%" height="470" />
                    </div>
                </div>
            </div>
        </div>
    )
}