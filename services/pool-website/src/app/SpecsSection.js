import schema from "./schema"
import Icon from "./Icon"
import Image from 'next/image'

function SpecsSection() {

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wider text-primary-700 uppercase">Hardware</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Specifications
      </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Operating from home on energy efficient, bare-metal ARM64 devices.
                    </p>
                </div>
                <div className="mt-10 flex justify-center px-6">
                    <div>
                        {schema.specifications.map(specification => {

                            if (specification.type === "Title") {
                                return (
                                    <div className="font-bold mb-4">
                                        {specification.name}
                                    </div>
                                )
                            }

                            if (specification.type === "Divider") {
                                return (
                                    <div className="my-4 bg-gray-200 h-0.5" />
                                )
                            }

                            return (
                                <div className="flex items-center py-2">
                                    <div className="mr-2">
                                        <Icon type={specification.icon} className="h-6" />
                                    </div>
                                    <div>
                                        {specification.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpecsSection