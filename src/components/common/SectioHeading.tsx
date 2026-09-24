
interface SectioHeadingprops{
    heading: string
}
export default function SectionHeading({heading}: SectioHeadingprops){

    return(
        <div className="mb-4">
            <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
    )
}