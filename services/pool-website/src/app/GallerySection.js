
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
export default function GallerySection() {


    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
<div className="bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-10">
        <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 dark:text-white sm:text-4xl">🌟 Star Forge ⚡</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Your mission if you choose to accept it. Be a part of truly decentralizing the Cardano blockchain. Bare metal single pools operators are crucial. My mission was to prove it was possible to run resilient self sufficient pool operations in remote areas.</p>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    </div>
</div>
    )
}


