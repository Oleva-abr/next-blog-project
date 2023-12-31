// import { authConfig } from "@/configs/auth";
// import { getServerSession } from "next-auth/next";

// export default async function Profile() {
//   const session = await getServerSession(authConfig);

//   return (
//     <div>
//       <h1>Profile {session?.user?.name}</h1>
//       {session?.user?.image && <img src={session.user.image} alt="" />}
//     </div>
//   );
// }
"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
}
