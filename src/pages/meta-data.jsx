import { Helmet } from "react-helmet-async";

export function MetaComponent({title,description}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
