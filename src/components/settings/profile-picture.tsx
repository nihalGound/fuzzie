"use client"
import Image from "next/image"
import React from 'react'
import { Button } from "../ui/button"
import { Upload, X } from "lucide-react"
import { useRouter } from "next/navigation"
import UploadProfileImage from "../global/cloudinary-upload-button"

type Props = {
    userImage: string | null
    onDelete?: any
    onUpload: (image: string) => Promise<any>;
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
    const router = useRouter()
    const onRemoveProfieImage = async () => {
        const response = await onDelete()
        if (response) {
            router.refresh()
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white">Profile Picture</p>
            <div className="flex h-[30vh] flex-col items-center justify-center">
                {userImage ? (
                    <>
                        <div className="relative h-full w-2/12">
                            <Image
                                src={userImage!}
                                alt="user_image"
                                fill
                            />
                        </div>
                        <Button
                            onClick={onRemoveProfieImage}
                            className="bg-transparent text-white/70 hover:bg-transparent hover:text-white mt-2"
                        >
                            <X /> Remove Logo
                        </Button>
                    </>
                ) : (
                    <UploadProfileImage onUpload={onUpload} />
                )}
            </div>
        </div>
    )
}

export default ProfilePicture