import {cn} from '@/lib/utils'

interface SectioHeadingprops{
    heading: string;
    clasName?: string;
    h2Style?: string
}
export default function SectionHeading({heading, clasName, h2Style}: SectioHeadingprops){

    return(
        <div className={cn("mb-4", clasName)}>
            <h2 className={cn("text-2xl font-bold", h2Style)}>{heading}</h2>
        </div>
    )
}