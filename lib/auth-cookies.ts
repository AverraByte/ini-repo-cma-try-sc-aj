"use server"

import { cookies } from "next/headers"

export async function setAuthCookie(token: string) {
  cookies().set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    // Expire in 7 days
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function removeAuthCookie() {
  cookies().delete("auth_token")
}

export async function getAuthCookie() {
  return cookies().get("auth_token")?.value
}
