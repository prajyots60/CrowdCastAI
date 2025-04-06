import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const res = await fetch("http://localhost:5000/predict/success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error("Prediction error:", error)
    return NextResponse.json({ error: "Failed to contact backend" }, { status: 500 })
  }
}
