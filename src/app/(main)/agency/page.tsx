import { getAuthUserDetails } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
    const authUser = await currentUser();
    if (!authUser) return redirect('/sign-in');

    const user = await getAuthUserDetails();
    console.log(user)
    return (
        <div>Agency</div>
    )
}

export default Page;