import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
    const authUser = await currentUser();
    if (!authUser) return redirect('/sign-in');

    const user = await getAuthUserDetails();
    const agencyId = await verifyAndAcceptInvitation()
    console.log(agencyId)
    return (
        <div>Agency</div>
    )
}

export default Page;