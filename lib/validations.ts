"use client"
import { z } from "zod"

export const signinFormSchema = z.object({
    // username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

export const registerFormSchema = z.object({
    username:  z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    confirmPassword: z.string().min(2).max(50),
})