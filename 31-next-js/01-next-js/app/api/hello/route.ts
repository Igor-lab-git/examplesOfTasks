import {NextResponse} from "next/server";

export async function GET () {
    return NextResponse.json({message: "JENNA LOVE YOU !!!"})
};

export async function POST (req: Request) {
 const data = await req.json();
 const { name } = data;
 return NextResponse.json({message: `${name} It is My Live`})
}