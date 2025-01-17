import { deletSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await deletSession()

    revalidatePath("/","layout")
    revalidatePath("/","page")
    return NextResponse.redirect(new URL("/",req.nextUrl))
}