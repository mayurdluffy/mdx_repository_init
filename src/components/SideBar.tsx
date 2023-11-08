import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { PanelLeft } from "lucide-react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { nanoid } from "nanoid"
import { Itags } from "@/utils/types"
const SheetClose = SheetPrimitive.Close

interface IPropTypes{
    notes_articles_tags: Itags[],
    dsa_articles_tags: Itags[],
}

const SideBar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger><PanelLeft className="m-1 w-[20px]" /></SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>All tags:</SheetTitle>
                        <div>
                            <p>Notes Tags:</p>
                            {
                                // notes_articles_tags.map((currentTag) => (
                                //     <SheetClose>
                                //         <Link key={nanoid()} href={`/notes/${currentTag.tag}`}>
                                //             {currentTag.tag}
                                //         </Link>
                                //     </SheetClose>
                                // ))
                            }
                        </div>
                        <div>
                            <p>DSA Tags:</p>
                            {
                                // dsa_articles_tags.map((currentTag) => (
                                //     <SheetClose>
                                //         <Link key={nanoid()} href={`/dsa/${currentTag.tag}`}>
                                //             {currentTag.tag}
                                //         </Link>
                                //     </SheetClose>
                                // ))
                            }
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}
export default SideBar