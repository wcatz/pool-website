import Head from "next/head";
import GalleryPage from "../src/app/GalleryPage";
import schema from "../src/app/schema"

export default function Gallery(props) {
    return (
        <>
            <Head>
                <title>{schema.gallery.title} | {schema.site.title}</title>
                <meta name="description" content={schema.gallery.description} />
            </Head>
            <GalleryPage />
        </>
    );
}