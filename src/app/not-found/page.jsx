export const metadata = {
    title: "Page non trouvée",
    description: "Cette page n'existe pas.",
    robots: "noindex, nofollow",
};

const NotFound = () => {
    return (
        <div className="">
            <p className="text-lg">Oups… Cette page n'existe pas.</p>
        </div>
    );
};

export default NotFound;
