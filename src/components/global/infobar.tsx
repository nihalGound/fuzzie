import { Book, Headphones, Search } from "lucide-react"
import React from 'react'
import { Input } from "../ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { UserButton } from "@clerk/nextjs"

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
        <span className="font-extralight items-center bg-muted px-4 rounded-full flex">
            <Search />
            <Input
                placeholder="Quick Search"
                className="border-none bg-transparent focus-visible:ring-0"
            />
        </span>
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Headphones />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Contact Support</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Book />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Guide</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default InfoBar