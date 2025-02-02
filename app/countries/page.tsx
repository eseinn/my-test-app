import { Countries } from "@/components/countries/Countries"
import { Suspense } from "react"

const Page = async () => {

    return <div>
        <div>Countries page</div>
        <Suspense fallback={<div>Loading...</div>}>
            <Countries />
        </Suspense>
    </div>
}
export default Page