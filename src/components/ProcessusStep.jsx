export default function ProcessusStep({ num, title, desc }) {
    return (
        <div className="mx-auto flex w-[40%] flex-col gap-3 xs:w-[70%]">
            <div className="bg-paletteColor2 mx-auto flex size-12 items-center justify-center rounded-full text-2xl font-bold">
                {num}
            </div>
            <h3 className="text-paletteColor2">{title}</h3>
            <div
                className="text-smTextDrkColor [&>p]:normal-text [&>p]:mb-3 [&>p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    );
}
