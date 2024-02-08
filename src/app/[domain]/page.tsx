import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
    const authUser = await currentUser();
    if (!authUser) return redirect('/sign-in');
    return (
        <div>Domain Page</div>
    )
}
