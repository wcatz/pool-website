import Head from "next/head";
import schema from "../src/app/schema"
import CommunityPage from "../src/app/CommunityPage";

export default function Community(props) {
    return (
        <>
            <Head>
                <title>{schema.community.title} | {schema.site.title}</title>
                <meta name="description" content={schema.community.description} />
            </Head>
            <CommunityPage />
        </>
    );
}
