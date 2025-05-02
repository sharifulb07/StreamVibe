import FAQ from "./Accordion";
import TitleDesc from "./TitleDesc";
import WatchBtn from "./WatchBtn";


export default function FaqSection() {
    return (
        <div className="px-[10%]">
            <div className="flex justify-between gap-5 items-center md:items-end flex-col md:flex-row">
                <TitleDesc desc={"Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."} title={'Frequently Asked Questions'} />
                <WatchBtn title={'Ask a question'} />
            </div>

            <div>
<FAQ />
            </div>
        </div>
    )
}
