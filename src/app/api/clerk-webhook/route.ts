import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { id, email_addresses, first_name, image_url } = body?.data
        const email = email_addresses[0]?.email_address

        const user = await db.user.upsert({
            where: {clerkId:id},
            update: {
                email,
                name: first_name,
                profileImage: image_url,
            },
            create: {
                clerkId:id,
                email,
                name: first_name || "",
                profileImage: image_url || "",
            },
        })

        if(user) {
            return new NextResponse("User updated in  database successfully",{
                status: 200,
            })
        }

        return new NextResponse("Error updating user in database",{
            status: 401,
        })
    } catch (error) {
        console.log("Error updating database : ",error)
        return new NextResponse("Error updating user in database",{status: 500}
        )
    }
}