'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function MovieCard({movies}) {
    return (
       <Link href={`/movie/${movies.id}`}>
        <div className="cursor-pointer w-40">

            <div className=" bg-gray-200 rounded-lg overflow-hidden">
                <Image></Image>
            </div>

        </div>
       </Link>
    )
};