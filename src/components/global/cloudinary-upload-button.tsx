"use client";

import { CldUploadWidget,CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (image: string) => Promise<any>; // Marking onUpload as an async function
};


const UploadProfileImage = ({ onUpload }: Props) => {
  const router = useRouter()
  return (
    <CldUploadWidget
      uploadPreset="fuzzie"
      onSuccess={async (result: CloudinaryUploadWidgetResults) => {
        if (result.event === "success") {
          try {
            //@ts-ignore
            await onUpload(result?.info?.secure_url);
            console.log("Image uploaded and URL saved successfully.");
            router.refresh()
          } catch (error) {
            console.error("Error saving image URL:", error);
          }
        } else {
          console.error("Error in profile image uploading from Cloudinary");
        }
      }}
    >
      {({ open }) => (
        <Button onClick={() => open()}>Upload Profile Picture</Button>
      )}
    </CldUploadWidget>
  );
};

export default UploadProfileImage;
