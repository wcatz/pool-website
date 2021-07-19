import GalleryHeroSection from "./GalleryHeroSection"
import GallerySection from "./GallerySection"
import Layout from "./Layout"

export default function GalleryPage() {

    return (
        <Layout>
            <GalleryHeroSection />
            <GallerySection />
        </Layout>
    )
}