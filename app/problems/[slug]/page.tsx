"use client"

import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-dropdown";
import { ProblemCard } from "@/components/custom/problem_card";
import { useState } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import * as React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";

export default function Home() {

    const ExcalidrawWrapper = dynamic(
        async () => (await import("@/components/custom/excalidraw")).default,
        {
            ssr: false,
        },
    );

    const [p_id,setID] = useState('');

    useEffect(() => {
        const paths = window
            .location
            .pathname
            .split("/")
            .filter(path => path !== "")[1];

        setID(paths);
        console.log(paths);
    }, []);

    window.onload = function() {
        const paths = window
            .location
            .pathname
            .split("/")
            .filter(path => path !== "")[1];

        setID(paths);
        console.log(paths);


    }

    return (
        <div className="w-screen">
            <ExcalidrawWrapper identifier={p_id}/>
        </div>
    );
}